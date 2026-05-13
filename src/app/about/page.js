import AnimateOnScroll from '@/components/AnimateOnScroll';
import Image from 'next/image';

export const metadata = {
  title: 'About | ALFA Global Ltd',
  description: 'Learn about ALFA Global Ltd — a diversified holding and investment company registered in the Republic of Liberia.',
};

export default function AboutPage() {
  return (
    <>
      {/* ══════ PAGE HEADER ══════ */}
      <section className="page-header bg-grid">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(201,168,76,0.03), transparent)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label animate-fade-in">About Us</span>
          <h1 className="section-title animate-fade-in-up">
            The Company Behind{' '}
            <span className="text-gold-gradient">the Vision</span>
          </h1>
          <p className="section-text" style={{ maxWidth: 640, margin: '0 auto', animationDelay: '0.15s' }}>
            ALFA Global Ltd is a diversified holding and investment company driven
            by the belief that African enterprise can compete on the world stage.
          </p>
        </div>
      </section>

      {/* ══════ COMPANY OVERVIEW ══════ */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <div className="about-grid">
            <AnimateOnScroll>
              <div className="about-text">
                <span className="section-label">Company Overview</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>Who We Are</h2>
                <p>
                  ALFA Global Ltd is a diversified holding and investment company
                  registered as a Private Limited Liability Company in the Republic
                  of Liberia. We specialize in building, acquiring, and managing
                  sustainable enterprises across technology, real estate,
                  infrastructure, and strategic commercial ventures.
                </p>
                <p>
                  Our approach combines strategic thinking, operational expertise, and
                  a deep understanding of African markets to create ventures that are
                  not only innovative but also practical and sustainable, generating
                  long-term economic value.
                </p>
                <p>
                  We believe in creating enterprises that solve real problems — starting
                  with HandyLink, our first platform, which transforms how people
                  find and connect with service professionals in their communities.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="info-card">
                <div className="info-card-glow" />
                {[
                  { label: 'Founded', value: '2026' },
                  { label: 'Registration', value: 'Republic of Liberia' },
                  { label: 'Entity Type', value: 'Private Limited Liability' },
                  { label: 'Industry', value: 'Diversified Holdings' },
                  { label: 'Focus Market', value: 'Africa' },
                ].map((item) => (
                  <div key={item.label} className="info-row">
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ══════ MISSION & VISION ══════ */}
      <section className="section bg-dots" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <div className="mv-grid">
            <AnimateOnScroll>
              <div className="mv-card">
                <div className="mv-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M12 12L20 7.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 12V21" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 12L4 7.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To build, acquire, and manage sustainable enterprises that drive
                  innovation, infrastructure growth, and long-term economic value.
                  We are committed to creating ventures across technology, real estate,
                  infrastructure, and strategic commercial sectors that empower
                  communities and industries.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="mv-card highlight">
                <div className="mv-icon strong">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M19 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4.93 4.93L7.05 7.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M16.95 16.95L19.07 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4.93 19.07L7.05 16.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M16.95 7.05L19.07 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become a leading diversified enterprise in Africa, recognized for
                  operational excellence, strategic growth, and sustainable impact.
                  We envision a continent where homegrown enterprises drive economic
                  growth, create jobs, and improve quality of life for millions.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ══════ FOUNDERS ══════ */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <AnimateOnScroll>
            <div className="section-center">
              <span className="section-label">Leadership</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
                Meet Our <span className="text-gold-gradient">Founders</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="founders-grid">
            <AnimateOnScroll delay={150}>
              <div className="founder-card">
                <Image
                  src="/images/team/CEO.jpeg"
                  alt="Fatumata B. Conde"
                  width={120}
                  height={120}
                  className="founder-avatar-img"
                />
                <h3 className="founder-name">Fatumata B. Conde</h3>
                <p className="founder-title">Co-Founder &amp; CEO</p>
                <p className="founder-bio">
                  Fatumata is the Co-Founder and CEO of ALFA GLOBAL, where she is
                  building an innovative platform that connects skilled professionals
                  with the customers who need them most. Beyond her work at ALFA GLOBAL,
                  she serves as CEO of Aid Our Dreams Organization, leading mentorship
                  initiatives and support programs dedicated to empowering youth and
                  children. Currently pursuing studies in Pre-Medicine, Fatumata brings
                  a distinctive combination of analytical thinking and entrepreneurial
                  vision to everything she does — driven by a deep commitment to creating
                  meaningful opportunities and lasting impact within her community.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250}>
              <div className="founder-card">
                <Image
                  src="/images/team/COO.jpeg"
                  alt="Alexander Chad Peda"
                  width={120}
                  height={120}
                  className="founder-avatar-img"
                  style={{ objectPosition: 'center 20%' }}
                />
                <h3 className="founder-name">Alexander Chad Peda</h3>
                <p className="founder-title">Co-Founder &amp; COO</p>
                <p className="founder-bio">
                  Alexander is the Co-Founder and Chief Operating Officer of ALFA Global Ltd,
                  overseeing operations, product execution, and strategic development across
                  the company&apos;s technology initiatives. With a Bachelor of Honors in
                  Software Engineering and hands-on experience building digital platforms
                  and operational systems, he brings a sharp focus on innovation, AI
                  integration, and disciplined execution — playing a pivotal role in
                  developing the scalable solutions that power ALFA Global&apos;s mission.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ══════ VALUES ══════ */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <AnimateOnScroll>
            <div className="section-center">
              <span className="section-label">What Drives Us</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
                Our Core Values
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="values-grid">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push boundaries, seeking new and better ways to solve problems through technology and strategic enterprise.',
              },
              {
                title: 'Impact',
                description: 'Every venture we build is designed to create measurable, positive change in communities and industries.',
              },
              {
                title: 'Integrity',
                description: 'We operate with transparency, honesty, and accountability in everything we do.',
              },
              {
                title: 'Operational Excellence',
                description: 'We hold ourselves to the highest standards of quality in management, engineering, and execution.',
              },
              {
                title: 'Sustainability',
                description: 'We build for long-term value, ensuring our ventures create lasting economic benefit for the communities we serve.',
              },
              {
                title: 'Resilience',
                description: 'We embrace challenges as opportunities and persist in our mission to drive African economic progress.',
              },
            ].map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 80}>
                <div className="value-card">
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
