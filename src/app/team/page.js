import AnimateOnScroll from '@/components/AnimateOnScroll';
import TeamGrid from '@/components/TeamGrid';

export const metadata = {
  title: 'Meet the Team | ALFA Global Ltd',
  description: 'Meet the people behind ALFA Global Ltd — a team driven by innovation, impact, and operational excellence.',
};

const teamMembers = [
  {
    name: 'Fatumata B. Conde',
    role: 'Co-Founder & CEO',
    initials: 'FC',
    image: '/images/team/CEO.jpeg',
    bio: 'Fatumata Conde is the Founder and CEO of ALFA GLOBAL, where she is building an innovative platform that connects skilled professionals with the customers who need them most. Beyond her work at ALFA GLOBAL, Fatumata serves as CEO of Aid Our Dreams Organization, leading mentorship initiatives and support programs dedicated to empowering youth and children. Currently pursuing studies in Pre-Medicine, she brings a distinctive combination of analytical thinking and entrepreneurial vision to everything she does — driven by a deep commitment to creating meaningful opportunities and lasting impact within her community.',
    featured: true,
    color: 'gold',
  },
  {
    name: 'Alexander Chad Peda',
    role: 'Co-Founder & COO',
    initials: 'AP',
    image: '/images/team/COO.jpeg',
    imagePosition: 'center 20%',
    bio: 'Alexander Chad Peda is the Co-Founder and Chief Operating Officer of ALFA Global Ltd, overseeing operations, product execution, and strategic development across the company\'s technology initiatives. With a Bachelor of Honors in Software Engineering and hands-on experience building digital platforms and operational systems, he brings a sharp focus on innovation, AI integration, and disciplined execution. Alexander plays a pivotal role in developing the scalable solutions that power ALFA Global\'s mission to advance technology and infrastructure across Africa.',
    featured: false,
    color: 'charcoal',
  },
  {
    name: 'Jamel V. Harrison Jr.',
    role: 'Director of Marketing & Communications',
    initials: 'JH',
    image: '/images/team/DOM.jpeg',
    imagePosition: 'center 15%',
    bio: 'Jamel V. Harrison Jr. serves as the Director of Marketing and Communications at ALFA Global Ltd, bringing a unique blend of scientific thinking and creative strategy to the company\'s brand presence. An aspiring Biomedical Scientist with experience in teaching and a growing expertise in biotechnology and digital solutions, Jamel is passionate about crafting narratives that resonate. He is committed to leveraging creativity, technology, and community insight to amplify ALFA Global\'s mission and connect with audiences across Africa and beyond.',
    featured: false,
    color: 'charcoal',
  },
  {
    name: 'Josephus Bartee',
    role: 'Human Resources Manager',
    initials: 'JB',
    image: '/images/team/HRM.jpeg',
    imagePosition: 'center 25%',
    bio: 'Josephus Bartee serves as the Human Resources Manager at ALFA Global Ltd, where he leads talent acquisition, team development, and organizational culture initiatives. With a keen eye for identifying and nurturing top talent, Josephus ensures that ALFA Global attracts and retains the skilled professionals needed to drive the company\'s mission forward. He is dedicated to building a collaborative, inclusive work environment that empowers every team member to thrive and contribute to ALFA Global\'s impact across Africa.',
    featured: false,
    color: 'charcoal',
  },
  {
    name: 'Emmanuel George',
    role: 'Senior Software Developer',
    initials: 'EG',
    image: '/images/team/SSD.jpeg',
    imagePosition: 'center top',
    bio: 'Emmanuel brings real, hands-on experience building the kind of software that holds up under pressure. At ALFA Global, he leads development across the full stack — working with Flutter, Dart, SQL, and backend systems to build platforms that work well in the real world, not just on paper. He has a sharp eye for untangling complex technical problems and turning them into clean, maintainable solutions. Whether he\'s designing a new system from scratch or improving what\'s already there, his focus is always the same: build software that people actually want to use, and that grows with the business.',
    featured: false,
    color: 'charcoal',
  },
];

export default function TeamPage() {
  return (
    <>
      {/* ══════ PAGE HEADER ══════ */}
      <section className="page-header bg-grid">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(201,162,39,0.03), transparent)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <span className="section-label animate-fade-in">Our People</span>
          <h1 className="section-title animate-fade-in-up">
            Meet the <span className="text-gold-gradient">Team</span>
          </h1>
          <p className="section-text animate-fade-in-up" style={{ maxWidth: 640, margin: '0 auto', animationDelay: '0.15s' }}>
            The people behind ALFA Global — driven by a shared belief that African
            enterprise can compete on the world stage.
          </p>
        </div>
      </section>

      {/* ══════ TEAM GRID ══════ */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <AnimateOnScroll>
            <TeamGrid members={teamMembers} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════ CULTURE SECTION ══════ */}
      <section className="section bg-dots" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container">
          <AnimateOnScroll>
            <div className="vision-content">
              <span className="section-label">How We Work</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
                Built on <span className="text-gold-gradient">Shared Values</span>
              </h2>
              <p className="section-text" style={{ maxWidth: 640, margin: '0 auto 32px' }}>
                At ALFA Global, we believe that great enterprises are built by people who
                share a common commitment to innovation, integrity, and impact. Our team
                is united by the vision of building sustainable ventures that drive real
                economic value across Africa.
              </p>
              <div className="divider-ornament">
                <div className="divider-line-left" />
                <div className="divider-dot" />
                <div className="divider-line-right" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════ JOIN US CTA ══════ */}
      <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <AnimateOnScroll>
            <div className="cta-card">
              <div className="cta-glow" />
              <div className="cta-content">
                <h2>Interested in Joining Us?</h2>
                <p>
                  We&apos;re always looking for talented, driven individuals who share
                  our vision. Reach out to learn about opportunities.
                </p>
                <div className="cta-buttons">
                  <a href="/contact" className="btn-gold">
                    Get in Touch
                    <svg style={{ width: 16, height: 16 }} viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
