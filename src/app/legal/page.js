import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata = {
  title: 'Legal | ALFA Global Ltd',
  description: 'Privacy Policy and Terms of Service for ALFA Global Ltd.',
};

export default function LegalPage() {
  return (
    <>
      {/* ══════ PAGE HEADER ══════ */}
      <section className="page-header bg-grid">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(201,168,76,0.03), transparent)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label animate-fade-in">Legal</span>
          <h1 className="section-title animate-fade-in-up">
            Legal <span className="text-gold-gradient">Information</span>
          </h1>
          <p className="section-text animate-fade-in-up" style={{ maxWidth: 640, margin: '0 auto', animationDelay: '0.15s' }}>
            Our commitment to transparency, privacy, and fair terms.
          </p>
        </div>
      </section>

      {/* ══════ PRIVACY POLICY ══════ */}
      <section id="privacy" className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <AnimateOnScroll>
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
                  <p className="legal-date">Last updated: March 2026</p>
                </div>
              </div>

              <div className="legal-section">
                <h3>1. Introduction</h3>
                <p>
                  ALFA Global Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting
                  your privacy. This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div className="legal-section">
                <h3>2. Information We Collect</h3>
                <p>We may collect information that you provide directly to us, including:</p>
                <ul>
                  <li>Personal identification information (name, email address)</li>
                  <li>Communications you send to us through our contact form</li>
                  <li>Usage data and analytics information</li>
                  <li>Device and browser information</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>3. How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Respond to your inquiries and communications</li>
                  <li>Improve our website and services</li>
                  <li>Send you updates about our products and services (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>4. Data Protection</h3>
                <p>
                  We implement appropriate technical and organizational security measures
                  to protect your personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission over the
                  Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="legal-section">
                <h3>5. Third-Party Services</h3>
                <p>
                  Our website may contain links to third-party websites or services that are
                  not operated by us. We have no control over and assume no responsibility for
                  the content, privacy policies, or practices of any third-party services.
                </p>
              </div>

              <div className="legal-section">
                <h3>6. Your Rights</h3>
                <p>
                  You have the right to access, correct, or delete your personal information.
                  You may also have the right to restrict or object to certain processing of
                  your data. To exercise these rights, please contact us using the information
                  provided below.
                </p>
              </div>

              <div className="legal-section">
                <h3>7. Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:alfagloballtd4@gmail.com">alfagloballtd4@gmail.com</a>.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════ TERMS OF SERVICE ══════ */}
      <section id="terms" className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <AnimateOnScroll>
            <div className="legal-card">
              <div className="legal-header">
                <div className="legal-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M8 13H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 17H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 9H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h2>Terms of Service</h2>
                  <p className="legal-date">Last updated: March 2026</p>
                </div>
              </div>

              <div className="legal-section">
                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing and using the ALFA Global Ltd website, you accept and agree to be
                  bound by the terms and provisions of this agreement. If you do not agree to
                  these terms, please do not use our website.
                </p>
              </div>

              <div className="legal-section">
                <h3>2. Use of Website</h3>
                <p>
                  This website is provided for informational purposes only. You agree to use the
                  website only for lawful purposes and in a way that does not infringe the rights
                  of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website.
                </p>
              </div>

              <div className="legal-section">
                <h3>3. Intellectual Property</h3>
                <p>
                  All content on this website, including but not limited to text, graphics, logos,
                  images, and software, is the property of ALFA Global Ltd or its content suppliers
                  and is protected by international copyright and intellectual property laws.
                </p>
              </div>

              <div className="legal-section">
                <h3>4. Disclaimer</h3>
                <p>
                  The information on this website is provided on an &quot;as is&quot; basis. ALFA Global Ltd
                  makes no warranties, expressed or implied, and hereby disclaims and negates all
                  other warranties including, without limitation, implied warranties or conditions
                  of merchantability, fitness for a particular purpose, or non-infringement of
                  intellectual property or other violation of rights.
                </p>
              </div>

              <div className="legal-section">
                <h3>5. Limitation of Liability</h3>
                <p>
                  In no event shall ALFA Global Ltd or its suppliers be liable for any damages
                  (including, without limitation, damages for loss of data or profit, or due to
                  business interruption) arising out of the use or inability to use the materials
                  on this website.
                </p>
              </div>

              <div className="legal-section">
                <h3>6. Governing Law</h3>
                <p>
                  These terms and conditions are governed by and construed in accordance with the
                  laws of the Republic of Liberia, and you irrevocably submit to the exclusive
                  jurisdiction of the courts in that location.
                </p>
              </div>

              <div className="legal-section">
                <h3>7. Changes to Terms</h3>
                <p>
                  ALFA Global Ltd reserves the right to revise these terms at any time. By using
                  this website, you are expected to review these terms regularly to ensure you
                  understand all terms and conditions governing use of this website.
                </p>
              </div>

              <div className="legal-section">
                <h3>8. Contact</h3>
                <p>
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:alfagloballtd4@gmail.com">alfagloballtd4@gmail.com</a>.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
