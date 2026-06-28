'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkTop = pathname === '/' && !scrolled;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'all var(--transition-base)',
        background: scrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--bg-glass-border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 'var(--radius-md)',
            background: 'var(--color-navy)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#navGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#2A9D8F', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#D4A853', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M12 3c-1.5 3-4 4.5-6 5 0 5 2.5 9 6 13 3.5-4 6-8 6-13-2-.5-4.5-2-6-5Z"></path>
            </svg>
          </div>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem',
            color: isDarkTop ? 'white' : 'var(--text-primary)',
            transition: 'color var(--transition-base)',
          }}>
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 32,
        }}
          className="nav-links-desktop"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--color-teal)' : (isDarkTop ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)'),
                  transition: 'color var(--transition-fast)',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-teal)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? 'var(--color-teal)' : (isDarkTop ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)'))}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
          <Link href="/login" className="btn btn-primary btn-sm">
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="nav-mobile-controls">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              width: 40, height: 40, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 5,
              background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
            }}
          >
            <span style={{
              width: 18, height: 2, borderRadius: 2,
              background: 'var(--text-primary)',
              transition: 'all var(--transition-fast)',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              width: 18, height: 2, borderRadius: 2,
              background: 'var(--text-primary)',
              opacity: menuOpen ? 0 : 1,
              transition: 'all var(--transition-fast)',
            }} />
            <span style={{
              width: 18, height: 2, borderRadius: 2,
              background: 'var(--text-primary)',
              transition: 'all var(--transition-fast)',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute', top: 'var(--nav-height)', left: 0, right: 0,
            background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)',
            padding: '24px', display: 'flex', flexDirection: 'column', gap: 16,
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ 
                  fontSize: '1rem', 
                  fontWeight: isActive ? 700 : 500, 
                  color: isActive ? 'var(--color-teal)' : 'var(--text-primary)', 
                  padding: '8px 0' 
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/login" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Sign In
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1023px) {
          .nav-links-desktop { display: none !important; }
        }
        @media (min-width: 1024px) {
          .nav-mobile-controls { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
