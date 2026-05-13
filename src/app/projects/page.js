import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata = {
  title: 'Projects | ALFA Global Ltd',
  description: 'Explore the digital products and ventures built by ALFA Global Ltd, starting with HandyLink.',
};

export default function ProjectsPage() {
  return (
    <>
      {/* ══════ PAGE HEADER ══════ */}
      <section className="page-header bg-grid">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(201,168,76,0.03), transparent)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label animate-fade-in">Our Work</span>
          <h1 className="section-title animate-fade-in-up">
            Projects &amp; <span className="text-gold-gradient">Ventures</span>
          </h1>
          <p className="section-text animate-fade-in-up" style={{ maxWidth: 640, margin: '0 auto', animationDelay: '0.15s' }}>
            Discover the platforms and solutions we&apos;re building to transform
            industries and empower communities across Africa.
          </p>
        </div>
      </section>

      {/* ══════ FEATURED PROJECT: HANDYLINK ══════ */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ marginBottom: 48 }}>
              <span className="section-label">Featured Project</span>
              <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.3px' }}>Our Flagship Product</h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="project-featured">
              <div className="project-glow1" />
              <div className="project-glow2" />

              <div className="project-inner">
                <div className="project-layout">
                  {/* Project Info */}
                  <div>
                    <div className="project-header">
                      <div className="project-logo">
                        <img
                          src="/images/logo/product%20logo.png"
                          alt="HandyLink"
                          className="project-logo-img"
                        />
                      </div>
                      <div>
                        <h3 className="project-name">HandyLink</h3>
                        <p className="project-type">Service Marketplace Platform</p>
                      </div>
                    </div>

                    <p className="project-desc">
                      HandyLink is a digital service marketplace that connects people with trusted
                      local professionals for services such as electrical work, plumbing, cleaning,
                      repairs, and more. The platform is designed to make it simple for customers to
                      find, book, and pay for professional services — while giving service providers
                      the tools they need to grow their businesses.
                    </p>

                    <div className="project-features">
                      {[
                        { title: 'For Customers', items: ['Search and discover services', 'View provider profiles and reviews', 'Book appointments instantly', 'Secure in-app payments'] },
                        { title: 'For Professionals', items: ['Create a business profile', 'Manage bookings and schedule', 'Receive secure payments', 'Build reputation with reviews'] },
                      ].map((column) => (
                        <div key={column.title}>
                          <h4>{column.title}</h4>
                          <ul>
                            {column.items.map((item) => (
                              <li key={item}>
                                <svg viewBox="0 0 16 16" fill="none" style={{ width: 16, height: 16, color: 'var(--gold)', marginTop: 2, flexShrink: 0 }}>
                                  <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="tech-tags">
                      {['React Native', 'Expo', 'Laravel', 'Mobile App', 'Marketplace'].map((tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* App Preview */}
                  <div className="project-preview">
                    <img
                      src="/images/handylink-preview.gif"
                      alt="HandyLink App Preview"
                      className="project-preview-gif"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════ UPCOMING SECTION ══════ */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <AnimateOnScroll>
            <div className="section-center">
              <span className="section-label">What&apos;s Next</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', marginBottom: 16 }}>
                More to Come
              </h2>
              <p className="section-text" style={{ maxWidth: 520, margin: '0 auto' }}>
                HandyLink is just the beginning. We have ambitious plans to build and acquire
                more innovative ventures across multiple sectors.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="upcoming-grid">
              {[
                {
                  title: 'Real Estate',
                  description: 'Strategic property acquisition and development across key African markets.',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 21V11L12 6L19 11V21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M9 21V16H15V21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  title: 'Infrastructure',
                  description: 'Building digital and physical infrastructure for growing economies.',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="8" width="8" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="13" y="3" width="8" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M6 16H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M16 7H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M16 11H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  title: 'Strategic Ventures',
                  description: 'Supporting high-impact commercial ventures that drive sustainable growth.',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 20L9 13L14 16L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 4H20V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="upcoming-card">
                  <div className="upcoming-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="coming-soon">Coming Soon</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
