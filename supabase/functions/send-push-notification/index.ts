// @ts-nocheck
/**
 * Supabase Edge Function: send-push-notification
 *
 * Sends Expo push notifications to users.
 * Can be called from:
 *   - Database webhook triggers (on new booking, message, etc.)
 *   - Direct RPC from the app (admin notifications)
 *
 * Required secrets:
 *   SUPABASE_SERVICE_ROLE_KEY - For querying push_tokens table
 */
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const EXPO_PUSH_URL = 'https://exp.host/--/api/v2/push/send';

interface PushPayload {
  user_id?: string;
  user_ids?: string[];
  title: string;
  body: string;
  data?: Record<string, unknown>;
}

/**
 * Send push notifications via Expo's push service
 */
async function sendExpoPush(tokens: string[], title: string, body: string, data?: Record<string, unknown>) {
  const messages = tokens.map((token) => ({
    to: token,
    sound: 'default',
    title,
    body,
    data: data || {},
  }));

  // Expo accepts batches of up to 100
  const chunks: typeof messages[] = [];
  for (let i = 0; i < messages.length; i += 100) {
    chunks.push(messages.slice(i, i + 100));
  }

  const results = [];
  for (const chunk of chunks) {
    const res = await fetch(EXPO_PUSH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(chunk),
    });
    const result = await res.json();
    results.push(result);
  }

  return results;
}

serve(async (req: Request) => {
  try {
    // Allow CORS for webhook triggers
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }

    const payload: PushPayload = await req.json();
    const { title, body, data } = payload;

    if (!title || !body) {
      return new Response(
        JSON.stringify({ error: 'title and body are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Collect target user IDs
    const userIds: string[] = [];
    if (payload.user_id) userIds.push(payload.user_id);
    if (payload.user_ids?.length) userIds.push(...payload.user_ids);

    if (userIds.length === 0) {
      return new Response(
        JSON.stringify({ error: 'user_id or user_ids required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Query push tokens from database
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data: tokenRows } = await supabase
      .from('push_tokens')
      .select('expo_push_token')
      .in('user_id', userIds);

    const tokens = (tokenRows || [])
      .map((r) => r.expo_push_token)
      .filter((t) => t && t.startsWith('ExponentPushToken'));

    if (tokens.length === 0) {
      return new Response(
        JSON.stringify({ success: true, sent: 0, reason: 'no valid tokens' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send via Expo
    const results = await sendExpoPush(tokens, title, body, data);

    // Also store in notifications table
    const notifRows = userIds.map((uid) => ({
      user_id: uid,
      title,
      body,
      data: data || {},
    }));
    await supabase.from('notifications').insert(notifRows);

    return new Response(
      JSON.stringify({ success: true, sent: tokens.length, results }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Push notification error:', error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});
