import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Meet the Team' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'HandyLink Privacy Policy' },
  { href: '/terms-and-conditions', label: 'HandyLink Terms & Conditions' },
  { href: '/legal', label: 'Corporate Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo-pill">
              <Image
                src="/images/logo/Untitled_design__2_-removebg-preview.png"
                alt="ALFA Global"
                width={48}
                height={48}
                className="logo-img"
                loading="lazy"
              />
              <span className="logo-text">ALFA GLOBAL</span>
            </Link>
            <p>
              A diversified holding and investment company building sustainable
              enterprises across technology, real estate, infrastructure, and
              strategic commercial ventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:alfagloballtd4@gmail.com">alfagloballtd4@gmail.com</a>
              </li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: 14 }}>Republic of Liberia</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} ALFA Global Ltd. All rights reserved.
          </p>
          <p className="footer-tagline">
            Driving innovation, infrastructure growth, and long-term economic value.
          </p>
        </div>
      </div>
    </footer>
  );
}
