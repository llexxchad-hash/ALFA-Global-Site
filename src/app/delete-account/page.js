export const metadata = {
  title: 'Delete Account | HandyLink',
  description: 'How to request deletion of your HandyLink account and associated data.',
};

export default function HandyLinkDeleteAccountPage() {
  return (
    <>
      {/* ══════ PAGE HEADER ══════ */}
      <section className="page-header bg-grid">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(201,168,76,0.03), transparent)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label animate-fade-in">HandyLink</span>
          <h1 className="section-title animate-fade-in-up">
            Delete <span className="text-gold-gradient">Account</span>
          </h1>
          <p className="section-text animate-fade-in-up" style={{ maxWidth: 640, margin: '0 auto', animationDelay: '0.15s' }}>
            How to request deletion of your HandyLink account and all associated data.
          </p>
        </div>
      </section>

      {/* ══════ DELETE ACCOUNT CONTENT ══════ */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <div className="legal-card">
            <div className="legal-header">
              <div className="legal-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 6H5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6L18.1245 19.1329C18.0544 20.1661 17.1946 21 16.1594 21H7.84062C6.80542 21 5.94558 20.1661 5.87554 19.1329L5 6H19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2>Delete Your HandyLink Account</h2>
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
                  This page describes how users of the HandyLink app can request deletion of their account and personal data.
                </span>
              </div>
            </div>

            {/* ── How to Delete (in-app) ── */}
            <div className="legal-section">
              <h3>Option 1 — Delete Directly in the App (Recommended)</h3>
              <p>You can delete your account at any time from within the HandyLink app:</p>
              <ol style={{ paddingLeft: 20, marginTop: 12, lineHeight: 1.9 }}>
                <li>Open the <strong>HandyLink</strong> app and log in to your account.</li>
                <li>Tap the <strong>Profile</strong> tab at the bottom of the screen.</li>
                <li>Tap <strong>Settings</strong> (gear icon in the top-right corner).</li>
                <li>Scroll down and tap <strong>Data Management</strong>.</li>
                <li>Tap <strong>Delete Account</strong>.</li>
                <li>Confirm the deletion when prompted.</li>
              </ol>
              <p style={{ marginTop: 12 }}>
                Your account and all associated data will be permanently deleted immediately upon confirmation.
              </p>
            </div>

            {/* ── How to Delete (by email) ── */}
            <div className="legal-section">
              <h3>Option 2 — Request Deletion by Email</h3>
              <p>
                If you are unable to access the app, you can request account deletion by emailing us directly:
              </p>
              <div style={{
                margin: '16px 0',
                padding: '20px 24px',
                background: 'var(--navy-faint, rgba(26,54,104,0.06))',
                borderLeft: '3px solid var(--gold, #9A7815)',
                borderRadius: 6,
              }}>
                <p style={{ marginBottom: 8 }}><strong>Email:</strong>{' '}
                  <a href="mailto:alfagloballtd4@gmail.com?subject=HandyLink%20Account%20Deletion%20Request">
                    alfagloballtd4@gmail.com
                  </a>
                </p>
                <p style={{ marginBottom: 8 }}><strong>Subject:</strong> HandyLink Account Deletion Request</p>
                <p><strong>Include in your message:</strong> The phone number registered to your HandyLink account.</p>
              </div>
              <p>
                We will process your request and confirm deletion within <strong>7 business days</strong>.
              </p>
            </div>

            {/* ── What gets deleted ── */}
            <div className="legal-section">
              <h3>What Data Is Deleted</h3>
              <p>When your account is deleted, the following data is <strong>permanently removed</strong>:</p>
              <ul>
                <li>Your profile (name, phone number, profile photo, cover photo)</li>
                <li>Your business profile (if you are a service provider), including description, gallery, availability, and hourly rate</li>
                <li>All verification documents submitted (government ID, business registration)</li>
                <li>All booking requests you created or received</li>
                <li>All in-app chat messages and attachments</li>
                <li>Your ratings and reviews given or received</li>
                <li>Your push notification token and device information</li>
              </ul>
            </div>

            {/* ── What is retained ── */}
            <div className="legal-section">
              <h3>What Data May Be Retained</h3>
              <p>
                A small amount of data may be retained after account deletion for the following limited purposes:
              </p>
              <ul>
                <li>
                  <strong>Legal compliance:</strong> Anonymised or aggregated transaction records may be
                  retained for up to <strong>7 years</strong> where required by applicable financial or
                  tax regulations. This data cannot be linked back to you.
                </li>
                <li>
                  <strong>Fraud prevention:</strong> If your account was involved in a reported dispute
                  or fraudulent activity, relevant records may be retained for up to <strong>2 years</strong>{' '}
                  to support any ongoing investigation or legal proceedings.
                </li>
              </ul>
              <p style={{ marginTop: 12 }}>
                No retained data is used for marketing, shared with third parties, or made accessible
                to other users after your account is deleted.
              </p>
            </div>

            {/* ── Contact ── */}
            <div className="legal-section">
              <h3>Questions?</h3>
              <p>
                If you have questions about the deletion process or your data, contact us at:
              </p>
              <p>
                <strong>ALFA Global Ltd — HandyLink</strong><br />
                Email: <a href="mailto:alfagloballtd4@gmail.com">alfagloballtd4@gmail.com</a>
              </p>
              <p style={{ marginTop: 12 }}>
                For more information on how we handle your data, see our{' '}
                <a href="/privacy-policy">Privacy Policy</a> and{' '}
                <a href="/data-safety">Data Safety Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
