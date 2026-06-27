'use client';

import { SOLUTION_ITEMS } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="solution" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          One Ecosystem. One Platform.
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          Everything inside Dhyana Stays — from booking to memories, powered by AI.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
          maxWidth: 1100,
          margin: '0 auto 48px',
        }}>
          {SOLUTION_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="card"
              style={{
                textAlign: 'center',
                padding: '28px 20px',
                cursor: 'pointer',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
              }}
            >
              <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: 14 }}>
                {item.icon}
              </span>
              <h3 style={{
                fontSize: '1.05rem', fontWeight: 700, marginBottom: 8,
                fontFamily: 'var(--font-body)', color: 'var(--text-primary)',
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p style={{
          textAlign: 'center',
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          color: 'var(--color-teal)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s ease 1s',
        }}>
          One App. Zero Friction. Infinite Experiences.
        </p>
      </div>
    </section>
  );
}
