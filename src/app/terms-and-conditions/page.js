export const metadata = {
  title: 'Terms & Conditions | HandyLink',
  description: 'Terms and Conditions governing use of the HandyLink mobile application.',
};

export default function HandyLinkTermsPage() {
  return (
    <>
      {/* ══════ PAGE HEADER ══════ */}
      <section className="page-header bg-grid">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(201,168,76,0.03), transparent)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label animate-fade-in">HandyLink</span>
          <h1 className="section-title animate-fade-in-up">
            Terms &amp; <span className="text-gold-gradient">Conditions</span>
          </h1>
          <p className="section-text animate-fade-in-up" style={{ maxWidth: 640, margin: '0 auto', animationDelay: '0.15s' }}>
            Please read these terms carefully before using HandyLink.
          </p>
        </div>
      </section>

      {/* ══════ TERMS CONTENT ══════ */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
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
                <h2>Terms &amp; Conditions</h2>
                <p className="legal-date">Effective Date: May 1, 2026 &nbsp;|&nbsp; Version 1.0</p>
              </div>
            </div>

            {/* Product Attribution Banner */}
            <div className="legal-section">
              <div className="legal-attribution-banner">
                <span className="legal-banner-icon">🔗</span>
                <span>
                  <strong>HandyLink</strong> is a mobile application owned and operated by{' '}
                  <a href="/">ALFA Global Ltd</a>.
                  These Terms &amp; Conditions apply to the HandyLink app and are published on the official ALFA Global Ltd company website.
                </span>
              </div>
              <div className="legal-copyright-banner">
                <strong>© 2024–2026 ALFA Global Ltd. All rights reserved.</strong>
                {' '}HandyLink™ is a trademark of ALFA Global Ltd. The HandyLink platform, including its name,
                design, source code, features, and business model, is protected by copyright, trademark, and trade
                secret laws. Unauthorized reproduction or imitation is strictly prohibited and will be prosecuted
                to the fullest extent of the law.
              </div>
            </div>

            {/* 1 */}
            <div className="legal-section">
              <h3>1. Introduction and Acceptance</h3>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you
                (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and ALFA Global Ltd (&quot;Company&quot;,
                &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), the owner and operator of the HandyLink
                mobile application and related services (&quot;Platform&quot;).
              </p>
              <p>
                By downloading, installing, registering for, or using HandyLink, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and our{' '}
                <a href="/privacy-policy">Privacy Policy</a>. If you do not agree to these Terms, you must
                immediately discontinue use of the Platform.
              </p>
            </div>

            {/* 2 */}
            <div className="legal-section">
              <h3>2. Eligibility</h3>
              <p>You must meet all of the following requirements to use HandyLink:</p>
              <ul>
                <li>You are at least 18 years of age</li>
                <li>You have the legal capacity to enter into a binding contract in your jurisdiction</li>
                <li>You are not prohibited from using the Platform under any applicable law</li>
                <li>You have not previously been suspended or permanently banned from HandyLink</li>
              </ul>
              <p>
                By creating an account, you represent and warrant that all of the above conditions are met.
                We reserve the right to terminate accounts that are found to be in violation of eligibility
                requirements.
              </p>
            </div>

            {/* 3 */}
            <div className="legal-section">
              <h3>3. Description of Service</h3>
              <p>
                HandyLink is a digital marketplace that connects individuals (&quot;Clients&quot;) seeking
                household and professional services with independent service providers
                (&quot;Professionals&quot;). The Company acts solely as an intermediary and does not itself
                provide any services listed on the Platform.
              </p>
              <p>
                HandyLink provides tools for service discovery, booking management, real-time messaging,
                professional verification, ratings and reviews, and (when available) subscription management.
                Certain features, including subscription-based benefits, are currently in development and will
                be made available in future versions of the Platform.
              </p>
              <p>
                The Company does not guarantee the quality, safety, legality, or completion of any service
                listed on the Platform. All agreements for services are made directly between Clients and
                Professionals.
              </p>
            </div>

            {/* 4 */}
            <div className="legal-section">
              <h3>4. User Accounts and Security</h3>
              <p>
                To access most features of HandyLink, you must register an account using your phone number.
                You agree to:
              </p>
              <ul>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the accuracy of your profile information at all times</li>
                <li>Keep your account credentials secure and not share access with third parties</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Accept responsibility for all activity that occurs under your account</li>
              </ul>
              <p>
                The Company reserves the right to suspend or terminate any account that contains false
                information, violates these Terms, or is used in a manner that harms other users or the
                Platform.
              </p>
            </div>

            {/* 5 */}
            <div className="legal-section">
              <h3>5. Client Terms of Use</h3>
              <p>As a Client using HandyLink, you agree to:</p>
              <ul>
                <li>Use the Platform only to seek legitimate services for lawful purposes</li>
                <li>Communicate respectfully and professionally with Professionals</li>
                <li>Honor confirmed bookings and provide reasonable notice for cancellations</li>
                <li>Provide accurate information when submitting booking requests, including address, description, and preferred timing</li>
                <li>Pay for agreed services as per any terms negotiated with the Professional</li>
                <li>Submit honest and accurate ratings and reviews based on your genuine experience</li>
                <li>Not use the Platform to solicit services outside the Platform to avoid fees</li>
              </ul>
            </div>

            {/* 6 */}
            <div className="legal-section">
              <h3>6. Professional (Service Provider) Terms of Use</h3>
              <p>As a Professional using HandyLink, you agree to:</p>
              <ul>
                <li>Provide accurate information about your services, qualifications, experience, and availability</li>
                <li>Submit valid and genuine identity and business documents for verification</li>
                <li>Respond to booking requests in a timely and professional manner</li>
                <li>Fulfill all confirmed bookings with the quality and scope agreed upon with the Client</li>
                <li>Comply with all applicable local laws, licensing requirements, and professional standards governing your services</li>
                <li>Not misrepresent your qualifications, certifications, or capabilities</li>
                <li>Maintain professional conduct in all communications and interactions with Clients</li>
                <li>Not solicit Clients to complete transactions outside of the Platform</li>
              </ul>
              <p>
                Professionals are independent contractors, not employees, agents, or partners of ALFA Global Ltd.
                The Company is not responsible for the actions, omissions, or work quality of any Professional.
              </p>
            </div>

            {/* 7 */}
            <div className="legal-section">
              <h3>7. Booking Process and Service Agreements</h3>
              <p>
                When a Client submits a booking request and a Professional accepts it, a direct service
                agreement is formed between those two parties. HandyLink facilitates this connection but
                is not a party to the agreement.
              </p>
              <p>
                Booking terms, including price, scope, and timing, are agreed upon directly between Client
                and Professional. The Company is not liable for any disputes, non-performance, or damages
                arising from any service agreement formed through the Platform.
              </p>
              <p>
                Either party may cancel a booking prior to service commencement. Repeated cancellations
                without cause may result in account suspension or termination.
              </p>
            </div>

            {/* 8 */}
            <div className="legal-section">
              <h3>8. Payments, Fees, and Subscriptions</h3>
              <p>
                HandyLink may charge Professionals subscription fees to access premium features, including
                priority listing, advanced analytics, and enhanced profile visibility. Subscription plans
                and pricing will be published within the Platform upon availability.
              </p>
              <p>
                All fees are displayed in the Platform at the time of purchase. By initiating a payment,
                you authorize the Company to charge the applicable fee. Fees are non-refundable except
                where explicitly stated or required by applicable law.
              </p>
              <p>
                The Company currently uses manual payment verification for subscriptions. Automated payment
                integration is in development. The Company reserves the right to modify fees with reasonable
                notice to users.
              </p>
              <p>
                The Company does not currently process payments between Clients and Professionals. All
                service payments are made directly between parties at their own discretion.
              </p>
            </div>

            {/* 9 */}
            <div className="legal-section">
              <h3>9. Ratings, Reviews, and Feedback</h3>
              <p>
                HandyLink allows Clients to submit ratings and reviews of Professionals after service
                completion. By submitting a review, you agree that:
              </p>
              <ul>
                <li>Your review is honest, accurate, and based on your genuine personal experience</li>
                <li>You will not submit false, defamatory, or malicious reviews</li>
                <li>You will not offer compensation of any kind in exchange for positive reviews</li>
                <li>The Company may remove reviews that violate these Terms or our community guidelines</li>
              </ul>
              <p>
                Professionals may not manipulate their ratings by creating fake accounts, purchasing reviews,
                or coercing Clients. Violation of this section may result in permanent account termination.
              </p>
            </div>

            {/* 10 */}
            <div className="legal-section">
              <h3>10. Prohibited Conduct</h3>
              <p>You agree not to engage in any of the following:</p>
              <ul>
                <li>Using the Platform for any unlawful, fraudulent, or harmful purpose</li>
                <li>Impersonating any person or entity, or misrepresenting your affiliation with any person or entity</li>
                <li>Harassing, threatening, or intimidating other users</li>
                <li>Posting or transmitting obscene, offensive, or inappropriate content</li>
                <li>Attempting to gain unauthorized access to any part of the Platform or its systems</li>
                <li>Scraping, crawling, or otherwise extracting data from the Platform without written permission</li>
                <li>Interfering with the proper functioning of the Platform or its infrastructure</li>
                <li>Circumventing any security measures or access controls implemented by the Company</li>
                <li>Using automated tools, bots, or scripts to interact with the Platform</li>
                <li>Uploading or transmitting malware, viruses, or any malicious code</li>
                <li>Engaging in any activity that could damage, overload, or impair the Platform&apos;s servers or networks</li>
                <li>Using the Platform to collect personal information about other users without their consent</li>
              </ul>
              <p>
                Violation of this section may result in immediate account suspension or termination, and
                may be reported to relevant law enforcement authorities.
              </p>
            </div>

            {/* 11 — INTELLECTUAL PROPERTY */}
            <div className="legal-section">
              <h3>11. Intellectual Property and Copyright</h3>
              <p>
                HandyLink — including but not limited to its name, logo, trade dress, mobile application,
                website, source code, user interface design, user experience flows, screen layouts, color
                schemes, typography, iconography, feature set, service discovery and matching algorithms,
                booking management system, real-time encrypted messaging architecture, push notification
                delivery system, professional verification framework, business profile architecture,
                subscription and commission model, ratings and review engine, and all associated creative,
                technical, and business elements (collectively, &quot;HandyLink IP&quot;) — is the sole and
                exclusive intellectual property of ALFA Global Ltd, registered in the Republic of Liberia.
              </p>
              <p>
                All HandyLink IP is protected under applicable national and international laws, including
                but not limited to copyright law, trademark law, trade secret protections, patent law,
                and unfair competition statutes.
              </p>
              <p><strong>Copyright Notice: © 2024–2026 ALFA Global Ltd. All rights reserved.</strong></p>
              <p><strong>HandyLink™ is a trademark of ALFA Global Ltd.</strong></p>
              <p>You are granted a limited, non-exclusive, non-transferable, revocable license to use the
                HandyLink application solely for its intended purpose as a marketplace user. This license
                does not include any right to:</p>
              <ul>
                <li>Copy, reproduce, modify, or create derivative works of any HandyLink IP</li>
                <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Platform</li>
                <li>Sublicense, sell, rent, lease, or otherwise transfer any rights in HandyLink IP to any third party</li>
                <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices</li>
                <li>Use HandyLink&apos;s name, logo, or branding in any manner without prior written consent</li>
              </ul>
              <p>
                Any use of HandyLink IP beyond this limited license is strictly prohibited and constitutes
                infringement of the Company&apos;s intellectual property rights.
              </p>
            </div>

            {/* 12 — COPYRIGHT ENFORCEMENT */}
            <div className="legal-section">
              <h3>12. Copyright Infringement — Notice and Enforcement</h3>
              <p>
                The Company takes the protection of its intellectual property extremely seriously and
                actively monitors for infringement. Any individual, company, or entity that:
              </p>
              <ul>
                <li>Copies, reproduces, or distributes any part of HandyLink&apos;s source code, interface design, or proprietary features</li>
                <li>Creates a competing platform, application, or service that substantially imitates HandyLink&apos;s functionality, user interface, user experience flows, or overall business model</li>
                <li>Reverse engineers, decompiles, or disassembles any portion of the HandyLink application</li>
                <li>Uses HandyLink&apos;s name, logo, branding, or trade dress without explicit written authorization</li>
                <li>Misappropriates any trade secrets belonging to ALFA Global Ltd</li>
                <li>Encourages, assists, or enables any third party to commit any of the acts described above</li>
              </ul>
              <p>
                …commits actionable copyright infringement, trademark infringement, and/or trade secret
                misappropriation under applicable law.
              </p>
              <p>
                Upon discovery of any such infringement, the Company will, without further notice, seek
                all available remedies including but not limited to:
              </p>
              <ul>
                <li><strong>Immediate injunctive relief</strong> to stop the infringing activity</li>
                <li><strong>Actual damages</strong> for all losses suffered as a result of the infringement</li>
                <li><strong>Statutory damages</strong> up to the maximum amount permitted by applicable law</li>
                <li><strong>Disgorgement of all profits</strong> derived by the infringing party from their unlawful use of HandyLink IP</li>
                <li><strong>Recovery of all legal fees and costs</strong> incurred in pursuing the infringement claim</li>
                <li><strong>Criminal referral</strong> where applicable law provides for criminal penalties</li>
              </ul>
              <p>
                The Company further reserves the right to pursue international enforcement through applicable
                treaties and foreign courts where infringement occurs outside the Republic of Liberia.
              </p>
              <p>
                To report suspected infringement of HandyLink intellectual property, contact:{' '}
                <a href="mailto:legal@alfagloballtd.com">legal@alfagloballtd.com</a>
              </p>
            </div>

            {/* 13 */}
            <div className="legal-section">
              <h3>13. Privacy</h3>
              <p>
                Your use of HandyLink is also governed by our{' '}
                <a href="/privacy-policy">Privacy Policy</a>, which is incorporated into these Terms by
                reference. By using the Platform, you consent to the collection and use of your information
                as described in the Privacy Policy.
              </p>
            </div>

            {/* 14 */}
            <div className="legal-section">
              <h3>14. Disclaimers and Limitation of Liability</h3>
              <p>
                THE PLATFORM IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p>
                THE COMPANY DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, SECURE,
                OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THE COMPANY DOES NOT WARRANT THE ACCURACY,
                RELIABILITY, OR COMPLETENESS OF ANY CONTENT ON THE PLATFORM.
              </p>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY SHALL NOT BE LIABLE FOR
                ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
                LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT
                OF OR RELATED TO YOUR USE OF THE PLATFORM.
              </p>
              <p>
                THE COMPANY&apos;S TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF OR
                RELATED TO THESE TERMS OR YOUR USE OF THE PLATFORM SHALL NOT EXCEED THE GREATER OF (A)
                THE AMOUNT YOU PAID TO THE COMPANY IN THE TWELVE MONTHS PRIOR TO THE CLAIM, OR (B)
                FIFTY US DOLLARS (USD $50).
              </p>
            </div>

            {/* 15 */}
            <div className="legal-section">
              <h3>15. Indemnification</h3>
              <p>
                You agree to indemnify, defend, and hold harmless ALFA Global Ltd, its directors, officers,
                employees, agents, affiliates, licensors, and service providers from and against any claims,
                liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including
                reasonable legal fees) arising out of or relating to:
              </p>
              <ul>
                <li>Your violation of these Terms</li>
                <li>Your use or misuse of the Platform</li>
                <li>Your violation of any rights of another user or third party</li>
                <li>Any service agreement or transaction between you and another user</li>
                <li>Any content you submit, post, or transmit through the Platform</li>
              </ul>
            </div>

            {/* 16 */}
            <div className="legal-section">
              <h3>16. Termination</h3>
              <p>
                The Company may, at its sole discretion, suspend or permanently terminate your access to
                the Platform at any time, with or without notice, for any reason, including but not limited
                to violation of these Terms. You may terminate your account at any time through Settings
                &gt; Data Management &gt; Delete Account within the App.
              </p>
              <p>
                Upon termination, your license to use the Platform immediately ceases. Sections 11, 12,
                14, 15, and 17 of these Terms shall survive any termination.
              </p>
            </div>

            {/* 17 */}
            <div className="legal-section">
              <h3>17. Governing Law and Dispute Resolution</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Republic
                of Liberia, without regard to its conflict of law provisions.
              </p>
              <p>
                Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach,
                termination, or invalidity thereof, shall first be attempted to be resolved through good-faith
                negotiation between the parties. If negotiation fails, disputes shall be submitted to the
                competent courts of the Republic of Liberia.
              </p>
              <p>
                For users located outside Liberia, the Company also reserves the right to seek enforcement
                in the user&apos;s local jurisdiction where permitted by applicable law.
              </p>
            </div>

            {/* 18 */}
            <div className="legal-section">
              <h3>18. Changes to These Terms</h3>
              <p>
                The Company reserves the right to modify these Terms at any time. When material changes are
                made, we will notify you through the App (in-app notification or required re-acceptance
                prompt) and update the Effective Date at the top of this document.
              </p>
              <p>
                Your continued use of the Platform after updated Terms are posted constitutes your acceptance
                of those changes. If you do not agree to the updated Terms, you must discontinue use of the
                Platform and delete your account.
              </p>
            </div>

            {/* 19 */}
            <div className="legal-section">
              <h3>19. Contact Information</h3>
              <p>For questions, concerns, or legal notices regarding these Terms, please contact:</p>
              <p>
                <strong>ALFA Global Ltd — HandyLink Legal</strong><br />
                Email: <a href="mailto:alfagloballtd4@gmail.com">alfagloballtd4@gmail.com</a><br />
                Legal inquiries: <a href="mailto:alfagloballtd4@gmail.com">alfagloballtd4@gmail.com</a><br />
                Website: <a href="https://alfaglobal.com">www.alfaglobal.com</a>
              </p>
            </div>

            {/* Footer note */}
            <div style={{
              marginTop: 32,
              paddingTop: 24,
              borderTop: '1px solid rgba(0,0,0,0.08)',
              fontSize: 12,
              color: '#888',
              lineHeight: 1.7,
            }}>
              By using HandyLink, you acknowledge that you have read these Terms in full, understand them,
              and agree to be legally bound by them. &nbsp;|&nbsp; © 2024–2026 ALFA Global Ltd. All rights reserved.
              HandyLink™ is a trademark of ALFA Global Ltd.
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
