import Link from 'next/link';
import dynamic from 'next/dynamic';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import AnimatedCounter from '@/components/AnimatedCounter';

const Globe = dynamic(() => import('@/components/Globe'), { ssr: false });
const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false });
const HeroHeading = dynamic(() => import('@/components/HeroHeading'), {
  ssr: false,
  loading: () => (
    <h1 className="animate-fade-in-up">
      Building Digital{' '}
      <span className="text-gold-gradient">Innovation</span>
      {' '}Across Africa
    </h1>
  ),
});

/* ─── Icon Components ──────────────────────────────────── */

function TechnologyIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8C6 6.89543 6.89543 6 8 6H24C25.1046 6 26 6.89543 26 8V20C26 21.1046 25.1046 22 24 22H8C6.89543 22 6 21.1046 6 20V8Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 26H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 22V26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 13H15L13 17H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfrastructureIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 26H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 26V14L16 8L24 14V26" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 26V20H19V26" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 16H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 16H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function RealEstateIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="10" width="10" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="6" width="10" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 18H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 10H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 14H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 18H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function InvestmentsIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 24L12 16L18 20L26 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 8H26V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 28H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 6V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg style={{ width: 16, height: 16 }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Focus Area Data ──────────────────────────────────── */

const focusAreas = [
  {
    icon: TechnologyIcon,
    title: 'Technology Platforms',
    description: 'Building digital platforms that solve real-world problems across Africa with scalable, innovative technology solutions.',
  },
  {
    icon: RealEstateIcon,
    title: 'Real Estate',
    description: 'Strategic acquisition and development of real estate assets that generate long-term value and support community growth.',
  },
  {
    icon: InfrastructureIcon,
    title: 'Infrastructure Development',
    description: 'Investing in the physical and digital infrastructure needed to power the next generation of African economies.',
  },
  {
    icon: InvestmentsIcon,
    title: 'Strategic Investments',
    description: 'Identifying and supporting high-impact ventures that align with our mission to build, acquire, and manage sustainable enterprises.',
  },
];

/* ─── Page Component ───────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ══════ HERO SECTION ══════ */}
      <section className="hero bg-grid">
        <HeroCanvas />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-orb hero-orb-4" />
        <div className="hero-glow" />
        <div className="hero-glow-secondary" />
        <div className="hero-fade-bottom" />

        <div className="hero-split container">
          {/* Left: Text */}
          <div className="hero-text">
            <div className="hero-badge animate-fade-in">
              <div className="hero-badge-dot" />
              <span>Diversified Enterprise</span>
            </div>

            <HeroHeading />

            <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              ALFA Global Ltd is a technology and innovation company building digital
              platforms, infrastructure solutions, and next-generation services across
              emerging markets.
            </p>

            <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/projects" className="btn-gold">
                Explore Our Work
                <ArrowIcon />
              </Link>
              <Link href="#product" className="btn-outline">
                Our First Product
                <svg style={{ width: 16, height: 16 }} viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Globe */}
          <div className="hero-globe animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Globe />
          </div>
        </div>
      </section>

      {/* ══════ ABOUT SECTION ══════ */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 768, margin: '0 auto', textAlign: 'center' }}>
            <AnimateOnScroll>
              <span className="section-label">Who We Are</span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h2 className="section-title">
                About <span className="text-gold-gradient">ALFA Global</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="section-text">
                ALFA Global Ltd is a diversified holding and investment company
                registered in the Republic of Liberia. We build, acquire, and manage
                sustainable enterprises that drive innovation, infrastructure growth,
                and long-term economic value across technology, real estate,
                infrastructure, and strategic commercial ventures.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Stats */}
          <AnimateOnScroll delay={300} animation="zoom">
            <div className="stats-grid">
              {[
                { value: '2026', label: 'Founded' },
                { value: '1', label: 'Active Product' },
                { value: 'Africa', label: 'Market Focus' },
                { value: '∞', label: 'Ambition' },
              ].map((stat) => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-value text-gold-gradient"><AnimatedCounter value={stat.value} /></div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════ FOCUS AREAS SECTION ══════ */}
      <section className="section bg-dots">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-center">
              <span className="section-label">What We Do</span>
              <h2 className="section-title">Our Focus Areas</h2>
            </div>
          </AnimateOnScroll>

          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <AnimateOnScroll key={area.title} delay={index * 80} animation={index % 2 === 0 ? 'right' : 'left'}>
                <div className="focus-card">
                  <div className="focus-card-icon">
                    <area.icon />
                  </div>
                  <h3 className="focus-card-title">{area.title}</h3>
                  <p className="focus-card-desc">{area.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PRODUCT SECTION ══════ */}
      <section id="product" className="section">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-center" style={{ marginBottom: 16 }}>
              <span className="section-label">Our First Product</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100} animation="zoom">
            <div className="product-card">
              <div className="product-card-glow" />
              <div className="product-card-inner">
                <div className="product-layout">
                  {/* Content */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <div className="product-logo-wrap">
                        <img
                          src="/images/logo/product%20logo.png"
                          alt="HandyLink"
                          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                        />
                      </div>
                      <div className="product-badge">
                        <span>Live Product</span>
                      </div>
                    </div>
                    <h2 className="product-title">
                      Handy<span className="text-gold-gradient">Link</span>
                    </h2>
                    <p className="product-desc">
                      HandyLink is a digital service marketplace that connects people with
                      trusted local professionals for services such as electrical work, plumbing,
                      cleaning, repairs, and more. Built to empower service providers and deliver
                      convenience to customers across communities.
                    </p>
                    <ul className="feature-list">
                      {[
                        'Connect with verified professionals',
                        'Book services instantly',
                        'Secure payment processing',
                        'Rating and review system',
                      ].map((feature) => (
                        <li key={feature}>
                          <div className="feature-check">
                            <svg viewBox="0 0 12 12" fill="none">
                              <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/projects" className="btn-gold">
                      Learn More
                      <ArrowIcon />
                    </Link>
                  </div>

                  {/* Phone Visual */}
                  <div className="phone-mockup">
                    <img
                      src="/images/handylink-preview.gif"
                      alt="HandyLink App Preview"
                      className="phone-mockup-gif"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════ VISION SECTION ══════ */}
      <section className="section" style={{ overflow: 'hidden' }}>
        <div className="vision-bg" />
        <div className="vision-content container">
          <AnimateOnScroll animation="down">
            <span className="section-label">Our Vision</span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100} animation="right">
            <h2 className="section-title" style={{ lineHeight: 1.15 }}>
              Becoming a Leading{' '}
              <span className="text-gold-gradient">Diversified Enterprise</span>
              {' '}in Africa
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200} animation="left">
            <p className="section-text" style={{ maxWidth: 640, margin: '0 auto 48px' }}>
              We envision becoming a leading diversified enterprise in Africa,
              recognized for operational excellence, strategic growth, and
              sustainable impact. ALFA Global is committed to building, acquiring,
              and managing enterprises that drive lasting value — one transformative
              venture at a time.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="divider-ornament">
              <div className="divider-line-left" />
              <div className="divider-dot" />
              <div className="divider-line-right" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════ CONTACT CTA SECTION ══════ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 960 }}>
          <AnimateOnScroll animation="zoom">
            <div className="cta-card">
              <div className="cta-glow" />
              <div className="cta-content">
                <h2>Ready to Connect?</h2>
                <p>
                  Whether you have questions, partnership ideas, or just want to learn
                  more about what we&apos;re building — we&apos;d love to hear from you.
                </p>
                <div className="cta-buttons">
                  <Link href="/contact" className="btn-gold">
                    Get in Touch
                    <ArrowIcon />
                  </Link>
                  <Link href="/about" className="btn-outline">
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
