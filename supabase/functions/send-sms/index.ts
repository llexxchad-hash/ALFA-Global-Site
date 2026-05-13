// @ts-nocheck
/**
 * Supabase Edge Function: send-sms
 *
 * This function is called by Supabase Auth as a custom SMS hook.
 * When a user calls signInWithOtp({ phone }), Supabase generates
 * the OTP code and sends it here to deliver via MTN or Orange SMS API.
 *
 * Setup in Supabase Dashboard:
 *   Auth → Hooks → Send SMS → Enable → Point to this function
 *
 * Required secrets (set via `npx supabase secrets set`):
 *   MTN_SMS_API_URL        - MTN SMS API endpoint
 *   MTN_SMS_API_KEY        - MTN SMS subscription key
 *   MTN_SMS_SENDER_ID      - Sender name (e.g. "HandyLink")
 *   ORANGE_SMS_CLIENT_ID   - Orange API client ID
 *   ORANGE_SMS_CLIENT_SECRET - Orange API client secret
 *   ORANGE_SMS_SENDER_ADDRESS - Sender address (tel:+237...)
 *   SMS_HOOK_SECRET        - Shared secret to verify Supabase is the caller
 */
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createHmac } from 'node:crypto';

const MTN_SMS_API_URL = Deno.env.get('MTN_SMS_API_URL') || 'https://api.mtn.com/v3/sms/messages/sms/outbound';
const MTN_SMS_API_KEY = Deno.env.get('MTN_SMS_API_KEY') || '';
const MTN_SMS_SENDER_ID = Deno.env.get('MTN_SMS_SENDER_ID') || 'HandyLink';

const ORANGE_SMS_CLIENT_ID = Deno.env.get('ORANGE_SMS_CLIENT_ID') || '';
const ORANGE_SMS_CLIENT_SECRET = Deno.env.get('ORANGE_SMS_CLIENT_SECRET') || '';
const ORANGE_SMS_SENDER_ADDRESS = Deno.env.get('ORANGE_SMS_SENDER_ADDRESS') || '';

const SMS_HOOK_SECRET = Deno.env.get('SMS_HOOK_SECRET') || '';

/**
 * Detect carrier from Cameroon phone number
 * MTN: 67x, 650-654, 680-681
 * Orange: 69x, 655-659, 682-689
 */
function detectCarrier(phone: string): 'mtn' | 'orange' | 'unknown' {
  // Strip +237 or 237 prefix
  const num = phone.replace(/^\+?237/, '');
  const p2 = num.substring(0, 2);
  const p3 = num.substring(0, 3);

  if (p2 === '67') return 'mtn';
  if (['650', '651', '652', '653', '654', '680', '681'].includes(p3)) return 'mtn';

  if (p2 === '69') return 'orange';
  if (['655', '656', '657', '658', '659', '682', '683', '684', '685', '686', '687', '688', '689'].includes(p3)) return 'orange';

  return 'unknown';
}

/**
 * Send SMS via MTN SMS API
 */
async function sendViaMTN(phone: string, message: string): Promise<void> {
  const res = await fetch(MTN_SMS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': MTN_SMS_API_KEY,
    },
    body: JSON.stringify({
      senderAddress: MTN_SMS_SENDER_ID,
      receiverAddress: [phone.startsWith('+') ? phone : `+${phone}`],
      message: message,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`MTN SMS failed: ${res.status} ${err}`);
  }
}

/**
 * Get Orange OAuth token
 */
async function getOrangeToken(): Promise<string> {
  const res = await fetch('https://api.orange.com/oauth/v3/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${encodeURIComponent(ORANGE_SMS_CLIENT_ID)}&client_secret=${encodeURIComponent(ORANGE_SMS_CLIENT_SECRET)}`,
  });
  if (!res.ok) throw new Error('Orange OAuth failed');
  const data = await res.json();
  return data.access_token;
}

/**
 * Send SMS via Orange SMS API
 */
async function sendViaOrange(phone: string, message: string): Promise<void> {
  const token = await getOrangeToken();
  // Orange expects phone in tel:+237XXXXXXXXX format
  const recipient = phone.startsWith('+') ? `tel:${phone}` : `tel:+${phone}`;
  const senderAddress = ORANGE_SMS_SENDER_ADDRESS || `tel:+237000000000`;

  const res = await fetch(
    `https://api.orange.com/smsmessaging/v1/outbound/${encodeURIComponent(senderAddress)}/requests`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        outboundSMSMessageRequest: {
          address: [recipient],
          senderAddress: senderAddress,
          outboundSMSTextMessage: { message },
        },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Orange SMS failed: ${res.status} ${err}`);
  }
}

serve(async (req: Request) => {
  try {
    // Verify the request comes from Supabase Auth (HMAC signature)
    if (SMS_HOOK_SECRET) {
      const signature = req.headers.get('x-supabase-signature');
      if (signature) {
        const body = await req.clone().text();
        const hmac = createHmac('sha256', SMS_HOOK_SECRET);
        hmac.update(body);
        const expected = hmac.digest('hex');
        if (signature !== expected) {
          return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 401 });
        }
      }
    }

    const payload = await req.json();

    // Supabase Auth hook payload format:
    // { user: { phone: "+237..." }, sms: { otp: "123456" } }
    const phone = payload.user?.phone;
    const otp = payload.sms?.otp;

    if (!phone || !otp) {
      return new Response(
        JSON.stringify({ error: 'Missing phone or otp' }),
        { status: 400 }
      );
    }

    const message = `Your HandyLink verification code is: ${otp}. Do not share this code.`;
    const carrier = detectCarrier(phone);

    console.log(`Sending OTP to ${phone} via ${carrier}`);

    if (carrier === 'mtn' && MTN_SMS_API_KEY) {
      await sendViaMTN(phone, message);
    } else if (carrier === 'orange' && ORANGE_SMS_CLIENT_ID) {
      await sendViaOrange(phone, message);
    } else {
      // Fallback: try MTN first, then Orange
      if (MTN_SMS_API_KEY) {
        await sendViaMTN(phone, message);
      } else if (ORANGE_SMS_CLIENT_ID) {
        await sendViaOrange(phone, message);
      } else {
        throw new Error('No SMS provider configured');
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('SMS send error:', error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});
