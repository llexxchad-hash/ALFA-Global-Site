export const metadata = {
  title: 'Privacy Policy | HandyLink',
  description: 'Privacy Policy for the HandyLink mobile application.',
};

export default function HandyLinkPrivacyPolicyPage() {
  return (
    <>
      {/* ══════ PAGE HEADER ══════ */}
      <section className="page-header bg-grid">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(201,168,76,0.03), transparent)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label animate-fade-in">HandyLink</span>
          <h1 className="section-title animate-fade-in-up">
            Privacy <span className="text-gold-gradient">Policy</span>
          </h1>
          <p className="section-text animate-fade-in-up" style={{ maxWidth: 640, margin: '0 auto', animationDelay: '0.15s' }}>
            How HandyLink collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* ══════ PRIVACY POLICY ══════ */}
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
                <h2>Privacy Policy</h2>
                <p className="legal-date">Last updated: May 2026</p>
              </div>
            </div>

            {/* Attribution banner — first section */}
            <div className="legal-section">
              <div className="legal-attribution-banner">
                <span className="legal-banner-icon">🔗</span>
                <span>
                  <strong>HandyLink</strong> is a mobile application owned and operated by{' '}
                  <a href="/">ALFA Global Ltd</a>.
                  This privacy policy applies to the HandyLink app and is published on the official ALFA Global Ltd company website.
                </span>
              </div>
            </div>

            <div className="legal-section">
              <h3>1. Introduction</h3>
              <p>
                HandyLink (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operated by ALFA Global Ltd, is
                committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use the HandyLink mobile
                application (&quot;App&quot;). Please read this policy carefully. If you disagree with
                its terms, please discontinue use of the App.
              </p>
            </div>

            <div className="legal-section">
              <h3>2. Information We Collect</h3>
              <p>We collect the following types of information when you use HandyLink:</p>
              <ul>
                <li>
                  <strong>Account Information:</strong> Phone number (used for authentication via OTP),
                  full name, profile photo, and account type (client or service provider).
                </li>
                <li>
                  <strong>Business Information (service providers only):</strong> Business name,
                  business description, service categories, hourly rate, availability schedule,
                  and identity/business verification documents.
                </li>
                <li>
                  <strong>Location Data:</strong> Your approximate city or region (entered manually
                  or detected via GPS with your permission) to show you nearby services.
                  We do not continuously track your location in the background.
                </li>
                <li>
                  <strong>Messages:</strong> Chat messages between clients and service providers.
                  Messages may be end-to-end encrypted. Attachments (photos and documents) shared
                  in chat are stored securely.
                </li>
                <li>
                  <strong>Booking Data:</strong> Details of service requests including job title,
                  description, preferred date/time, and address.
                </li>
                <li>
                  <strong>Photos &amp; Media:</strong> Profile photos, cover photos, gallery images,
                  and chat attachments you choose to upload, with your permission.
                </li>
                <li>
                  <strong>Device Information:</strong> Push notification token (to send you
                  booking and message alerts), device type, and operating system.
                </li>
                <li>
                  <strong>Usage Data:</strong> App activity such as screens viewed and features used,
                  collected to improve the App experience.
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h3>3. How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Create and manage your account and authenticate your identity via OTP</li>
                <li>Connect clients with service providers based on location and category</li>
                <li>Process and manage booking requests between clients and businesses</li>
                <li>Enable in-app messaging between clients and service providers</li>
                <li>Send push notifications for new bookings, messages, and status updates</li>
                <li>Verify service provider identities and business credentials</li>
                <li>Display ratings and reviews to help clients make informed decisions</li>
                <li>Improve and personalize the App experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="legal-section">
              <h3>4. How We Share Your Information</h3>
              <p>We do not sell your personal data. We may share your information in the following ways:</p>
              <ul>
                <li>
                  <strong>Between Users:</strong> Your profile information (name, photo, rating,
                  location, service category) is visible to other HandyLink users to facilitate
                  service discovery and bookings.
                </li>
                <li>
                  <strong>Service Providers (Third Parties):</strong> We use Supabase for secure
                  cloud database and file storage, and Expo for push notification delivery.
                  These providers process data only as necessary to provide their services.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required
                  by law or to protect the rights, property, or safety of HandyLink, our users,
                  or the public.
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h3>5. Data Storage and Security</h3>
              <p>
                Your data is stored securely using Supabase, which is hosted on cloud infrastructure
                with industry-standard encryption at rest and in transit (TLS). Verification
                documents are stored in access-controlled private storage buckets. We implement
                appropriate technical and organizational measures to protect your information
                against unauthorized access, alteration, or destruction. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="legal-section">
              <h3>6. Permissions We Request</h3>
              <p>HandyLink requests the following device permissions:</p>
              <ul>
                <li><strong>Camera &amp; Photo Library:</strong> To take and upload profile photos and chat images</li>
                <li><strong>Document Access:</strong> To attach and send documents in chat</li>
                <li><strong>Location:</strong> To detect your city for nearby service search (only when you use the feature)</li>
                <li><strong>Push Notifications:</strong> To alert you about bookings, messages, and updates</li>
              </ul>
              <p>You can manage these permissions at any time in your device settings.</p>
            </div>

            <div className="legal-section">
              <h3>7. Data Retention</h3>
              <p>
                We retain your personal data for as long as your account is active or as needed
                to provide services. You may request deletion of your account and associated data
                at any time through the App&#39;s Settings &gt; Data Management screen, or by
                contacting us directly. Some data may be retained for legal compliance purposes
                after account deletion.
              </p>
            </div>

            <div className="legal-section">
              <h3>8. Children&#39;s Privacy</h3>
              <p>
                HandyLink is not intended for use by individuals under the age of 18. We do not
                knowingly collect personal information from anyone under 18. If we become aware
                that a user is under 18, we will terminate their account and delete their data.
              </p>
            </div>

            <div className="legal-section">
              <h3>9. Your Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and personal data</li>
                <li>Withdraw consent for optional data processing at any time</li>
                <li>Export a copy of your data (available in the App under Settings &gt; Data Management)</li>
              </ul>
              <p>To exercise any of these rights, contact us at the email below or use the in-app tools.</p>
            </div>

            <div className="legal-section">
              <h3>10. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes through the App or by updating the date at the top of this
                page. Continued use of the App after changes constitutes acceptance of the
                updated policy.
              </p>
            </div>

            <div className="legal-section">
              <h3>11. Contact Us</h3>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong>ALFA Global Ltd — HandyLink</strong><br />
                Email: <a href="mailto:alfagloballtd4@gmail.com">alfagloballtd4@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
