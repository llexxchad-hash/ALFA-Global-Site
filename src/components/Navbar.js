'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Meet the Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <Image
            src="/images/logo/Untitled_design__2_-removebg-preview.png"
            alt="ALFA Global"
            width={140}
            height={48}
            className="logo-img"
            priority
          />
          <span className="logo-text">ALFA GLOBAL</span>
        </Link>

        <div className="nav-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <Link href="/projects" className="nav-btn-outline">HandyLink</Link>
          <Link href="/projects#product" className="nav-btn-gold">Our Products</Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <div className={`hamburger${isOpen ? ' open' : ''}`}>
              <span /><span /><span />
            </div>
          </button>
        </div>
      </div>

      <div className={`mobile-nav${isOpen ? ' open' : ''}`}>
        <div className="mobile-nav-inner">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link${pathname === link.href ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mobile-nav-buttons">
            <Link href="/projects" className="nav-btn-outline">HandyLink</Link>
            <Link href="/projects#product" className="nav-btn-gold">Our Products</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
