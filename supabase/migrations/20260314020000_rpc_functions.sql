-- ===== RPC FUNCTIONS FOR HANDYLINK APP =====

-- 1. Verify admin password (bcrypt compare)
CREATE OR REPLACE FUNCTION verify_admin_password(admin_username text, input_password text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  stored_hash text;
BEGIN
  SELECT password_hash INTO stored_hash
  FROM admins
  WHERE username = admin_username AND is_active = true;

  IF stored_hash IS NULL THEN
    RETURN false;
  END IF;

  RETURN stored_hash = extensions.crypt(input_password, stored_hash);
END;
$$;

-- 2. Increment unread count on conversations (avoids race conditions)
CREATE OR REPLACE FUNCTION increment_unread(conv_id uuid, field text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF field = 'user_1_unread_count' THEN
    UPDATE conversations SET user_1_unread_count = user_1_unread_count + 1 WHERE id = conv_id;
  ELSIF field = 'user_2_unread_count' THEN
    UPDATE conversations SET user_2_unread_count = user_2_unread_count + 1 WHERE id = conv_id;
  END IF;
END;
$$;

-- 3. Create admin with hashed password
CREATE OR REPLACE FUNCTION create_admin(
  p_username text,
  p_password text,
  p_role text DEFAULT 'secondary',
  p_permissions jsonb DEFAULT '[]'::jsonb
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_id uuid;
BEGIN
  INSERT INTO admins (username, password_hash, admin_role, permissions, is_active)
  VALUES (
    p_username,
    extensions.crypt(p_password, extensions.gen_salt('bf')),
    p_role,
    p_permissions,
    true
  )
  RETURNING id INTO new_id;

  RETURN jsonb_build_object('id', new_id, 'username', p_username, 'admin_role', p_role);
END;
$$;
