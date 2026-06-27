'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function JoinMovementSection() {
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    {
      audience: "I'm a Traveller",
      title: 'Explore Curated Stays',
      desc: 'Discover handpicked properties across India. Let AI plan your perfect journey.',
      cta: 'Explore Stays',
      href: '/properties',
      accent: 'var(--color-teal)',
      emoji: '✈️',
    },
    {
      audience: "I'm an Investor",
      title: 'Earn Passive Income',
      desc: 'Partner with India\'s AI-powered hospitality ecosystem. 50:50 revenue sharing.',
      cta: 'Register Interest',
      href: '#investor-opportunity',
      accent: 'var(--color-gold)',
      emoji: '📈',
    },
    {
      audience: "I'm a Property Owner",
      title: 'Transform Your Property',
      desc: 'Partner with DhyanaStays to turn your property into a premium curated stay.',
      cta: 'Partner With Us',
      href: '#property-owner-journey',
      accent: 'var(--color-navy)',
      emoji: '🏡',
    },
  ];

  return (
    <section id="join-movement" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          Join the Movement
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          Whether you travel, invest, or own property — there&apos;s a place for you in the DhyanaStays ecosystem.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24, maxWidth: 1050, margin: '0 auto',
        }}>
          {cards.map((card, i) => (
            <div key={card.audience} style={{
              background: 'var(--bg-card)', borderRadius: 'var(--radius-xl)',
              padding: '40px 32px', textAlign: 'center',
              border: '1px solid var(--border-color)',
              transition: 'all var(--transition-slow)',
              cursor: 'pointer',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: `${i * 120}ms`,
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: 20 }}>{card.emoji}</span>
              <p style={{
                fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.08em', color: card.accent, marginBottom: 12,
              }}>
                {card.audience}
              </p>
              <h3 style={{
                fontSize: '1.4rem', fontWeight: 700, marginBottom: 12,
                fontFamily: 'var(--font-display)', color: 'var(--text-primary)',
              }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 24 }}>
                {card.desc}
              </p>
              <Link href={card.href} className="btn btn-primary" style={{
                background: card.accent === 'var(--color-gold)'
                  ? 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))'
                  : card.accent === 'var(--color-navy)'
                  ? 'linear-gradient(135deg, var(--color-navy), var(--color-navy-light))'
                  : undefined,
              }}>
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
