export const metadata = {
  title: 'Data Safety Policy | HandyLink',
  description: 'Data Safety Policy for the HandyLink mobile application — what data we collect, how it is used, and how it is protected.',
};

export default function HandyLinkDataSafetyPage() {
  return (
    <>
      {/* ══════ PAGE HEADER ══════ */}
      <section className="page-header bg-grid">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(201,168,76,0.03), transparent)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label animate-fade-in">HandyLink</span>
          <h1 className="section-title animate-fade-in-up">
            Data <span className="text-gold-gradient">Safety</span>
          </h1>
          <p className="section-text animate-fade-in-up" style={{ maxWidth: 640, margin: '0 auto', animationDelay: '0.15s' }}>
            A transparent overview of the data HandyLink collects, how it is used, and how it is kept safe.
          </p>
        </div>
      </section>

      {/* ══════ DATA SAFETY POLICY ══════ */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <div className="legal-card">
            <div className="legal-header">
              <div className="legal-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2>Data Safety Policy</h2>
                <p className="legal-date">Last updated: May 2026</p>
              </div>
            </div>

            {/* Attribution banner */}
            <div className="legal-section">
              <div className="legal-attribution-banner">
                <span className="legal-banner-icon">🔗</span>
                <span>
                  <strong>HandyLink</strong> is a mobile application owned and operated by{' '}
                  <a href="/">ALFA Global Ltd</a>.
                  This data safety policy applies to the HandyLink app (Android &amp; iOS) and is published on the official ALFA Global Ltd company website.
                </span>
              </div>
            </div>

            <div className="legal-section">
              <h3>1. Overview</h3>
              <p>
                HandyLink (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operated by ALFA Global Ltd, is committed to
                being transparent about how user data is collected and used. This Data Safety Policy
                provides a summary of our data practices as required by the Google Play Store and
                Apple App Store. For full details, please also read our{' '}
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </div>

            {/* ── Section 2: Data Collected ── */}
            <div className="legal-section">
              <h3>2. Data Collected</h3>
              <p>The following table summarises the categories of data HandyLink collects:</p>

              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16, fontSize: '0.93rem' }}>
                <thead>
                  <tr style={{ background: 'var(--navy-faint, rgba(26,54,104,0.06))' }}>
                    <th style={{ textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--navy-faint-border, rgba(26,54,104,0.12))' }}>Data Type</th>
                    <th style={{ textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--navy-faint-border, rgba(26,54,104,0.12))' }}>Examples</th>
                    <th style={{ textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--navy-faint-border, rgba(26,54,104,0.12))' }}>Required?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Personal Info', 'Phone number, full name', 'Required'],
                    ['Account Info', 'Profile photo, account type (client / provider)', 'Required'],
                    ['Business Info (providers)', 'Business name, description, service category, hourly rate, availability', 'Required for providers'],
                    ['Location', 'Approximate city or region (entered manually or via GPS when requested)', 'Required'],
                    ['Photos & Media', 'Profile photo, cover photo, gallery images, chat attachments', 'Optional'],
                    ['Verification Documents', 'Government-issued ID, business registration documents (providers only)', 'Required for providers'],
                    ['Messages', 'In-app chat messages between clients and service providers', 'Required'],
                    ['Booking Data', 'Job title, description, preferred date/time, address', 'Required'],
                    ['Device Identifiers', 'Push notification token, device type, OS version', 'Required'],
                    ['Usage Data', 'Screens viewed, features used (for app improvement)', 'Required'],
                  ].map(([type, examples, required]) => (
                    <tr key={type} style={{ borderBottom: '1px solid var(--navy-faint-border, rgba(26,54,104,0.12))' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600 }}>{type}</td>
                      <td style={{ padding: '10px 14px' }}>{examples}</td>
                      <td style={{ padding: '10px 14px' }}>{required}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Section 3: Purpose ── */}
            <div className="legal-section">
              <h3>3. Purpose of Data Collection</h3>
              <p>Data collected by HandyLink is used solely for the following purposes:</p>
              <ul>
                <li><strong>App Functionality:</strong> Account creation, authentication (OTP), booking management, and in-app messaging</li>
                <li><strong>Service Discovery:</strong> Matching clients with nearby service providers based on location and category</li>
                <li><strong>Verification:</strong> Confirming the identity and credentials of service providers</li>
                <li><strong>Communications:</strong> Sending push notifications for bookings, messages, and status updates</li>
                <li><strong>Analytics &amp; Improvement:</strong> Understanding how users interact with the app to improve features</li>
                <li><strong>Legal Compliance:</strong> Retaining records as required by applicable laws</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                We do <strong>not</strong> use your data for targeted advertising, and we do <strong>not</strong> sell
                your personal data to third parties.
              </p>
            </div>

            {/* ── Section 4: Data Sharing ── */}
            <div className="legal-section">
              <h3>4. Data Sharing</h3>
              <p>HandyLink shares data only in the following limited circumstances:</p>
              <ul>
                <li>
                  <strong>Between Users:</strong> Your public profile (name, photo, rating, city, service category)
                  is visible to other HandyLink users to enable service discovery and bookings.
                </li>
                <li>
                  <strong>Supabase (Infrastructure Provider):</strong> Our database, file storage, and authentication
                  are powered by Supabase. Data is processed solely to operate the app and is not used by Supabase
                  for any other purpose.
                </li>
                <li>
                  <strong>Expo / EAS (Push Notifications):</strong> Your device push token is shared with Expo&apos;s
                  push notification service to deliver in-app alerts.
                </li>
                <li>
                  <strong>Legal Obligations:</strong> We may disclose data if required by law, court order, or to
                  protect the safety of our users or the public.
                </li>
              </ul>
              <p style={{ marginTop: 12 }}>No data is shared with advertisers, data brokers, or marketing platforms.</p>
            </div>

            {/* ── Section 5: Security ── */}
            <div className="legal-section">
              <h3>5. Data Security</h3>
              <ul>
                <li><strong>Encryption in Transit:</strong> All data transmitted between the app and our servers is encrypted using TLS (HTTPS).</li>
                <li><strong>Encryption at Rest:</strong> Data stored in our Supabase cloud database is encrypted at rest.</li>
                <li><strong>Access Controls:</strong> Row-level security (RLS) policies ensure each user can only access their own data. Verification documents are stored in private, access-controlled storage buckets.</li>
                <li><strong>Authentication:</strong> Users are authenticated via one-time password (OTP) sent to their registered phone number. No passwords are stored in plain text.</li>
                <li><strong>Admin Access:</strong> Administrative operations (e.g., approving providers) require separate admin credentials and are protected by server-side authorization functions.</li>
              </ul>
            </div>

            {/* ── Section 6: Data Retention & Deletion ── */}
            <div className="legal-section">
              <h3>6. Data Retention &amp; Deletion</h3>
              <p>
                We retain your personal data for as long as your account is active or as needed to provide
                services to you. You may request complete deletion of your account and all associated data
                at any time using the <strong>Settings &gt; Data Management</strong> screen within the app,
                or by emailing us at{' '}
                <a href="mailto:alfagloballtd4@gmail.com">alfagloballtd4@gmail.com</a>.
              </p>
              <p style={{ marginTop: 12 }}>
                Upon deletion: your profile, messages, bookings, photos, and verification documents are
                permanently removed from our systems. Some anonymised or aggregated records may be retained
                for legal compliance purposes.
              </p>
            </div>

            {/* ── Section 7: Permissions ── */}
            <div className="legal-section">
              <h3>7. App Permissions</h3>
              <p>HandyLink requests the following device permissions. All permissions are used solely for the stated purpose:</p>
              <ul>
                <li><strong>Camera &amp; Photo Library:</strong> To upload profile photos, cover images, gallery photos, and chat attachments</li>
                <li><strong>Files / Document Access:</strong> To attach and send documents through in-app chat</li>
                <li><strong>Location (when-in-use):</strong> To detect your city for nearby service provider search — only when you actively use the location feature</li>
                <li><strong>Push Notifications:</strong> To notify you of new booking requests, messages, and status updates</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                All permissions can be granted or revoked at any time through your device&apos;s system settings.
                Revoking a permission will disable the related feature but will not affect your account.
              </p>
            </div>

            {/* ── Section 8: Children ── */}
            <div className="legal-section">
              <h3>8. Children&apos;s Privacy</h3>
              <p>
                HandyLink is not intended for use by individuals under the age of 18. We do not knowingly
                collect personal information from anyone under 18. If we become aware that a user under 18
                has created an account, we will immediately terminate the account and delete all associated data.
              </p>
            </div>

            {/* ── Section 9: User Rights ── */}
            <div className="legal-section">
              <h3>9. Your Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information via the app&apos;s profile settings</li>
                <li><strong>Deletion:</strong> Request full deletion of your account and data (via Settings &gt; Data Management or by email)</li>
                <li><strong>Export:</strong> Download a copy of your data from Settings &gt; Data Management within the app</li>
                <li><strong>Withdraw Consent:</strong> Revoke optional permissions (e.g., location, notifications) at any time through device settings</li>
              </ul>
            </div>

            {/* ── Section 10: Contact ── */}
            <div className="legal-section">
              <h3>10. Contact Us</h3>
              <p>
                If you have questions, concerns, or requests regarding your data, please contact us at:
              </p>
              <p>
                <strong>ALFA Global Ltd — HandyLink</strong><br />
                Email: <a href="mailto:alfagloballtd4@gmail.com">alfagloballtd4@gmail.com</a>
              </p>
              <p style={{ marginTop: 12 }}>
                For the full Privacy Policy, visit{' '}
                <a href="/privacy-policy">alfagloballtd.com/privacy-policy</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
