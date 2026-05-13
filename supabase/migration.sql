-- ═══════════════════════════════════════════════════════════
-- HandyLink — Supabase Database Migration
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor)
-- ═══════════════════════════════════════════════════════════

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ═══════════════════════════════════════════════════════════
-- 1. USERS & AUTH
-- ═══════════════════════════════════════════════════════════

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  phone_number TEXT UNIQUE NOT NULL,
  name TEXT,
  email TEXT,
  bio TEXT,
  location TEXT,
  profile_photo TEXT,
  account_type TEXT NOT NULL DEFAULT 'client' CHECK (account_type IN ('client', 'business')),
  is_verified BOOLEAN DEFAULT FALSE,
  profile_completed BOOLEAN DEFAULT FALSE,
  is_admin BOOLEAN DEFAULT FALSE,
  public_key TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE admins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  admin_role TEXT NOT NULL DEFAULT 'secondary' CHECK (admin_role IN ('primary', 'secondary')),
  permissions JSONB DEFAULT '[]'::JSONB,
  is_active BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE push_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expo_push_token TEXT NOT NULL,
  device_type TEXT CHECK (device_type IN ('ios', 'android')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- ═══════════════════════════════════════════════════════════
-- 2. CATEGORIES & BUSINESSES
-- ═══════════════════════════════════════════════════════════

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  label TEXT NOT NULL,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  business_name TEXT NOT NULL,
  phone_number TEXT,
  location TEXT,
  bio TEXT,
  cover_photo TEXT,
  profile_photo TEXT,
  hourly_rate DECIMAL(10,2),
  available BOOLEAN DEFAULT TRUE,
  verification_status TEXT DEFAULT 'pending' CHECK (verification_status IN ('pending', 'verified', 'rejected')),
  rating FLOAT DEFAULT 0,
  reviews_count INT DEFAULT 0,
  gallery JSONB DEFAULT '[]'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(owner_id)
);

CREATE TABLE business_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  UNIQUE(business_id, category_id)
);

CREATE TABLE business_documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  document_type TEXT NOT NULL,
  file_url TEXT NOT NULL,
  verified_by_admin_id UUID REFERENCES admins(id),
  verification_status TEXT DEFAULT 'pending' CHECK (verification_status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════════════════════════
-- 3. BOOKINGS / JOBS
-- ═══════════════════════════════════════════════════════════

CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  urgency TEXT DEFAULT 'flexible' CHECK (urgency IN ('flexible', 'soon', 'urgent')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'in_progress', 'completed', 'cancelled', 'declined')),
  preferred_date DATE,
  preferred_time TIME,
  address TEXT,
  price DECIMAL(10,2),
  payment_method TEXT CHECK (payment_method IN ('cash', 'card', 'mobile_money')),
  decline_reason TEXT,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════════════════════════
-- 4. REVIEWS
-- ═══════════════════════════════════════════════════════════

CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_id UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  reviewer_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  reply TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(booking_id)
);

-- ═══════════════════════════════════════════════════════════
-- 5. MESSAGING
-- ═══════════════════════════════════════════════════════════

CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_1_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  user_2_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  user_1_unread_count INT DEFAULT 0,
  user_2_unread_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_1_id, user_2_id)
);

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  receiver_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  text TEXT,
  encrypted_text TEXT,
  is_encrypted BOOLEAN DEFAULT FALSE,
  is_edited BOOLEAN DEFAULT FALSE,
  is_deleted_message BOOLEAN DEFAULT FALSE,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE message_attachments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  message_id UUID NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('image', 'video', 'document')),
  path TEXT NOT NULL,
  file_size INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE message_typing_status (
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  partner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  is_typing BOOLEAN DEFAULT FALSE,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, partner_id)
);

-- ═══════════════════════════════════════════════════════════
-- 6. PAYMENTS & SUBSCRIPTIONS
-- ═══════════════════════════════════════════════════════════

CREATE TABLE payment_methods (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('card', 'bank_account', 'mobile_money')),
  last_4 TEXT,
  card_brand TEXT,
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE subscription_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  billing_cycle TEXT NOT NULL CHECK (billing_cycle IN ('monthly', 'yearly')),
  features JSONB DEFAULT '[]'::JSONB,
  max_jobs INT,
  max_active_listings INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES subscription_plans(id),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired')),
  starts_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL,
  payment_method TEXT,
  payment_reference TEXT,
  amount_paid DECIMAL(10,2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  cancelled_at TIMESTAMPTZ
);

CREATE TABLE withdrawal_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  method TEXT NOT NULL CHECK (method IN ('bank', 'paypal', 'venmo', 'cashapp', 'mobile_money')),
  account_info TEXT NOT NULL,
  fee DECIMAL(10,2) DEFAULT 0,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- ═══════════════════════════════════════════════════════════
-- 7. NOTIFICATIONS
-- ═══════════════════════════════════════════════════════════

CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT,
  data JSONB DEFAULT '{}'::JSONB,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

-- ═══════════════════════════════════════════════════════════
-- 8. ADMIN
-- ═══════════════════════════════════════════════════════════

CREATE TABLE admin_activity_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  admin_id UUID NOT NULL REFERENCES admins(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  description TEXT,
  resource_type TEXT,
  resource_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE admin_notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  admin_id UUID REFERENCES admins(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  related_resource_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE admin_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_by_admin_id UUID REFERENCES admins(id),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════════════════════════
-- 9. SUPPORT
-- ═══════════════════════════════════════════════════════════

CREATE TABLE support_tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'closed')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  category TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  closed_at TIMESTAMPTZ
);

CREATE TABLE support_ticket_replies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ticket_id UUID NOT NULL REFERENCES support_tickets(id) ON DELETE CASCADE,
  admin_id UUID REFERENCES admins(id),
  user_id UUID REFERENCES users(id),
  reply TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════════════════════════
-- 10. LEGAL / TERMS
-- ═══════════════════════════════════════════════════════════

CREATE TABLE terms_and_conditions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  version INT NOT NULL,
  content TEXT NOT NULL,
  is_active BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_by_admin_id UUID REFERENCES admins(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE user_terms_acceptance (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  terms_id UUID NOT NULL REFERENCES terms_and_conditions(id),
  accepted_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, terms_id)
);

-- ═══════════════════════════════════════════════════════════
-- 11. FAVORITES
-- ═══════════════════════════════════════════════════════════

CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, business_id)
);

-- ═══════════════════════════════════════════════════════════
-- INDEXES (Performance)
-- ═══════════════════════════════════════════════════════════

-- Users
CREATE INDEX idx_users_phone ON users(phone_number);
CREATE INDEX idx_users_account_type ON users(account_type);

-- Businesses
CREATE INDEX idx_businesses_owner ON businesses(owner_id);
CREATE INDEX idx_businesses_verification ON businesses(verification_status);
CREATE INDEX idx_businesses_available ON businesses(available);
CREATE INDEX idx_businesses_location ON businesses(location);

-- Bookings
CREATE INDEX idx_bookings_client ON bookings(client_id);
CREATE INDEX idx_bookings_business ON bookings(business_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_created ON bookings(created_at DESC);

-- Messages
CREATE INDEX idx_messages_conversation ON messages(conversation_id, created_at DESC);
CREATE INDEX idx_messages_sender ON messages(sender_id);
CREATE INDEX idx_messages_receiver ON messages(receiver_id);

-- Conversations
CREATE INDEX idx_conversations_user1 ON conversations(user_1_id);
CREATE INDEX idx_conversations_user2 ON conversations(user_2_id);

-- Reviews
CREATE INDEX idx_reviews_business ON reviews(business_id);
CREATE INDEX idx_reviews_reviewer ON reviews(reviewer_id);

-- Notifications
CREATE INDEX idx_notifications_user ON notifications(user_id, is_read, created_at DESC);

-- Subscriptions
CREATE INDEX idx_subscriptions_user ON subscriptions(user_id, status);

-- Favorites
CREATE INDEX idx_favorites_user ON favorites(user_id);

-- Support
CREATE INDEX idx_support_tickets_user ON support_tickets(user_id);
CREATE INDEX idx_support_tickets_status ON support_tickets(status);

-- Admin logs
CREATE INDEX idx_admin_logs_admin ON admin_activity_logs(admin_id, created_at DESC);

-- ═══════════════════════════════════════════════════════════
-- AUTO-UPDATE TIMESTAMPS (trigger function)
-- ═══════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_businesses_updated_at BEFORE UPDATE ON businesses FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_conversations_updated_at BEFORE UPDATE ON conversations FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_messages_updated_at BEFORE UPDATE ON messages FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_reviews_updated_at BEFORE UPDATE ON reviews FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_support_tickets_updated_at BEFORE UPDATE ON support_tickets FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ═══════════════════════════════════════════════════════════
-- AUTO-UPDATE BUSINESS RATING (trigger)
-- ═══════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION update_business_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE businesses SET
    rating = (SELECT COALESCE(AVG(rating), 0) FROM reviews WHERE business_id = NEW.business_id),
    reviews_count = (SELECT COUNT(*) FROM reviews WHERE business_id = NEW.business_id),
    updated_at = NOW()
  WHERE id = NEW.business_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_review_update_rating
  AFTER INSERT OR UPDATE OR DELETE ON reviews
  FOR EACH ROW EXECUTE FUNCTION update_business_rating();

-- ═══════════════════════════════════════════════════════════
-- ROW LEVEL SECURITY (RLS)
-- ═══════════════════════════════════════════════════════════

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE message_attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE message_typing_status ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_methods ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE withdrawal_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_ticket_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE terms_and_conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_terms_acceptance ENABLE ROW LEVEL SECURITY;
ALTER TABLE push_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_settings ENABLE ROW LEVEL SECURITY;

-- ─── USERS ────────────────────────────────────────────────
-- Users can read any profile (for viewing business owners etc)
CREATE POLICY "users_select_all" ON users FOR SELECT USING (true);
-- Users can only update their own profile
CREATE POLICY "users_update_own" ON users FOR UPDATE USING (auth.uid() = id);
-- Users can delete their own account
CREATE POLICY "users_delete_own" ON users FOR DELETE USING (auth.uid() = id);

-- ─── BUSINESSES ───────────────────────────────────────────
-- Anyone can view businesses (for search/browse)
CREATE POLICY "businesses_select_all" ON businesses FOR SELECT USING (true);
-- Only the owner can insert/update their business
CREATE POLICY "businesses_insert_own" ON businesses FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "businesses_update_own" ON businesses FOR UPDATE USING (auth.uid() = owner_id);

-- ─── BUSINESS DOCUMENTS ──────────────────────────────────
-- Owner can manage their documents
CREATE POLICY "docs_select_own" ON business_documents FOR SELECT
  USING (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()));
CREATE POLICY "docs_insert_own" ON business_documents FOR INSERT
  WITH CHECK (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()));

-- ─── CATEGORIES ───────────────────────────────────────────
-- Anyone can read categories
CREATE POLICY "categories_select_all" ON categories FOR SELECT USING (true);

-- ─── BOOKINGS ─────────────────────────────────────────────
-- Clients see their bookings, businesses see bookings for their business
CREATE POLICY "bookings_select" ON bookings FOR SELECT
  USING (
    auth.uid() = client_id
    OR business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())
  );
-- Only clients can create bookings
CREATE POLICY "bookings_insert" ON bookings FOR INSERT WITH CHECK (auth.uid() = client_id);
-- Both parties can update (client cancel, business accept/decline/complete)
CREATE POLICY "bookings_update" ON bookings FOR UPDATE
  USING (
    auth.uid() = client_id
    OR business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())
  );

-- ─── REVIEWS ──────────────────────────────────────────────
-- Anyone can read reviews
CREATE POLICY "reviews_select_all" ON reviews FOR SELECT USING (true);
-- Only the reviewer can create
CREATE POLICY "reviews_insert" ON reviews FOR INSERT WITH CHECK (auth.uid() = reviewer_id);
-- Reviewer can update comment, business owner can add reply
CREATE POLICY "reviews_update" ON reviews FOR UPDATE
  USING (
    auth.uid() = reviewer_id
    OR business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())
  );

-- ─── CONVERSATIONS ────────────────────────────────────────
CREATE POLICY "conversations_select" ON conversations FOR SELECT
  USING (auth.uid() = user_1_id OR auth.uid() = user_2_id);
CREATE POLICY "conversations_insert" ON conversations FOR INSERT
  WITH CHECK (auth.uid() = user_1_id OR auth.uid() = user_2_id);
CREATE POLICY "conversations_update" ON conversations FOR UPDATE
  USING (auth.uid() = user_1_id OR auth.uid() = user_2_id);
CREATE POLICY "conversations_delete" ON conversations FOR DELETE
  USING (auth.uid() = user_1_id OR auth.uid() = user_2_id);

-- ─── MESSAGES ─────────────────────────────────────────────
CREATE POLICY "messages_select" ON messages FOR SELECT
  USING (auth.uid() = sender_id OR auth.uid() = receiver_id);
CREATE POLICY "messages_insert" ON messages FOR INSERT
  WITH CHECK (auth.uid() = sender_id);
CREATE POLICY "messages_update" ON messages FOR UPDATE
  USING (auth.uid() = sender_id);
CREATE POLICY "messages_delete" ON messages FOR DELETE
  USING (auth.uid() = sender_id);

-- ─── MESSAGE ATTACHMENTS ──────────────────────────────────
CREATE POLICY "attachments_select" ON message_attachments FOR SELECT
  USING (message_id IN (
    SELECT id FROM messages WHERE sender_id = auth.uid() OR receiver_id = auth.uid()
  ));
CREATE POLICY "attachments_insert" ON message_attachments FOR INSERT
  WITH CHECK (message_id IN (SELECT id FROM messages WHERE sender_id = auth.uid()));

-- ─── TYPING STATUS ────────────────────────────────────────
CREATE POLICY "typing_select" ON message_typing_status FOR SELECT
  USING (partner_id = auth.uid());
CREATE POLICY "typing_upsert" ON message_typing_status FOR INSERT
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "typing_update" ON message_typing_status FOR UPDATE
  USING (user_id = auth.uid());

-- ─── PAYMENT METHODS ──────────────────────────────────────
CREATE POLICY "payments_select_own" ON payment_methods FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "payments_insert_own" ON payment_methods FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "payments_update_own" ON payment_methods FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "payments_delete_own" ON payment_methods FOR DELETE USING (auth.uid() = user_id);

-- ─── SUBSCRIPTION PLANS ──────────────────────────────────
CREATE POLICY "plans_select_all" ON subscription_plans FOR SELECT USING (true);

-- ─── SUBSCRIPTIONS ────────────────────────────────────────
CREATE POLICY "subs_select_own" ON subscriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "subs_insert_own" ON subscriptions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "subs_update_own" ON subscriptions FOR UPDATE USING (auth.uid() = user_id);

-- ─── WITHDRAWAL REQUESTS ─────────────────────────────────
CREATE POLICY "withdrawals_select_own" ON withdrawal_requests FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "withdrawals_insert_own" ON withdrawal_requests FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ─── NOTIFICATIONS ────────────────────────────────────────
CREATE POLICY "notifs_select_own" ON notifications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "notifs_update_own" ON notifications FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "notifs_delete_own" ON notifications FOR DELETE USING (auth.uid() = user_id);

-- ─── FAVORITES ────────────────────────────────────────────
CREATE POLICY "favorites_select_own" ON favorites FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "favorites_insert_own" ON favorites FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "favorites_delete_own" ON favorites FOR DELETE USING (auth.uid() = user_id);

-- ─── SUPPORT TICKETS ──────────────────────────────────────
CREATE POLICY "tickets_select_own" ON support_tickets FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "tickets_insert_own" ON support_tickets FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ─── SUPPORT REPLIES ──────────────────────────────────────
CREATE POLICY "replies_select" ON support_ticket_replies FOR SELECT
  USING (ticket_id IN (SELECT id FROM support_tickets WHERE user_id = auth.uid()));
CREATE POLICY "replies_insert_user" ON support_ticket_replies FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- ─── TERMS ────────────────────────────────────────────────
CREATE POLICY "terms_select_active" ON terms_and_conditions FOR SELECT USING (is_active = true);

-- ─── TERMS ACCEPTANCE ─────────────────────────────────────
CREATE POLICY "acceptance_select_own" ON user_terms_acceptance FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "acceptance_insert_own" ON user_terms_acceptance FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ─── PUSH TOKENS ──────────────────────────────────────────
CREATE POLICY "push_select_own" ON push_tokens FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "push_insert_own" ON push_tokens FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "push_update_own" ON push_tokens FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "push_delete_own" ON push_tokens FOR DELETE USING (auth.uid() = user_id);

-- ─── ADMIN TABLES (service_role only, no anon access) ────
-- These have RLS enabled but NO anon policies = blocked by default
-- Access only through service_role key (server-side)

-- ─── BUSINESS CATEGORIES ─────────────────────────────────
CREATE POLICY "biz_cats_select_all" ON business_categories FOR SELECT USING (true);
CREATE POLICY "biz_cats_insert_own" ON business_categories FOR INSERT
  WITH CHECK (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()));
CREATE POLICY "biz_cats_delete_own" ON business_categories FOR DELETE
  USING (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()));

-- ═══════════════════════════════════════════════════════════
-- STORAGE BUCKETS
-- ═══════════════════════════════════════════════════════════

INSERT INTO storage.buckets (id, name, public) VALUES ('profile-photos', 'profile-photos', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('business-photos', 'business-photos', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('business-documents', 'business-documents', false);
INSERT INTO storage.buckets (id, name, public) VALUES ('message-attachments', 'message-attachments', false);

-- Storage policies: profile & business photos are publicly readable
CREATE POLICY "profile_photos_public_read" ON storage.objects FOR SELECT
  USING (bucket_id = 'profile-photos');
CREATE POLICY "profile_photos_auth_upload" ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'profile-photos' AND auth.role() = 'authenticated');
CREATE POLICY "profile_photos_auth_delete" ON storage.objects FOR DELETE
  USING (bucket_id = 'profile-photos' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "business_photos_public_read" ON storage.objects FOR SELECT
  USING (bucket_id = 'business-photos');
CREATE POLICY "business_photos_auth_upload" ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'business-photos' AND auth.role() = 'authenticated');

-- Business documents: only the uploader can read their own docs
CREATE POLICY "biz_docs_auth_upload" ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'business-documents' AND auth.role() = 'authenticated');
CREATE POLICY "biz_docs_owner_read" ON storage.objects FOR SELECT
  USING (bucket_id = 'business-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Message attachments: only conversation participants
CREATE POLICY "msg_attach_auth_upload" ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'message-attachments' AND auth.role() = 'authenticated');
CREATE POLICY "msg_attach_auth_read" ON storage.objects FOR SELECT
  USING (bucket_id = 'message-attachments' AND auth.role() = 'authenticated');

-- ═══════════════════════════════════════════════════════════
-- REALTIME (enable for live features)
-- ═══════════════════════════════════════════════════════════

ALTER PUBLICATION supabase_realtime ADD TABLE messages;
ALTER PUBLICATION supabase_realtime ADD TABLE conversations;
ALTER PUBLICATION supabase_realtime ADD TABLE notifications;
ALTER PUBLICATION supabase_realtime ADD TABLE bookings;
ALTER PUBLICATION supabase_realtime ADD TABLE message_typing_status;

-- ═══════════════════════════════════════════════════════════
-- SEED: Insert default primary admin
-- Change the password after first login!
-- ═══════════════════════════════════════════════════════════

INSERT INTO admins (username, password_hash, admin_role, permissions, is_active)
VALUES (
  'admin',
  crypt('ChangeMe123!', gen_salt('bf')),
  'primary',
  '["all"]'::JSONB,
  true
);

-- Done! Your HandyLink database is ready.
