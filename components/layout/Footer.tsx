'use client';

import Link from 'next/link';import { FOOTER_SECTIONS, SOCIAL_LINKS, BRAND } from '@/lib/constants';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-navy)', color: 'rgba(255,255,255,0.8)',
      paddingTop: 80, paddingBottom: 40,
    }}>
      <div className="container">
        {/* Top Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 40,
          marginBottom: 60,
        }}>
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, var(--color-teal), var(--color-gold))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c-1.5 3-4 4.5-6 5 0 5 2.5 9 6 13 3.5-4 6-8 6-13-2-.5-4.5-2-6-5Z"></path>
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'white' }}>
                {BRAND.name}
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>
              {BRAND.tagline}. India&apos;s first AI-powered curated hospitality ecosystem.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: 40, height: 40, borderRadius: 'var(--radius-full)',
                    background: 'rgba(255,255,255,0.08)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)',
                    transition: 'all var(--transition-base)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {social.icon === 'instagram' && '📷'}
                  {social.icon === 'linkedin' && '💼'}
                  {social.icon === 'youtube' && '▶️'}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 style={{
                fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.08em', color: 'var(--color-gold)', marginBottom: 20,
                fontFamily: 'var(--font-body)',
              }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)',
                        transition: 'color var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-teal)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 30,
        }} />

        {/* Bottom */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          alignItems: 'center', gap: 16,
        }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            {BRAND.copyright}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            Made with ❤️ for India&apos;s future of travel
          </p>
        </div>
      </div>
    </footer>
  );
}
