'use client';

import { CORE_VALUES } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MissionVisionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="mission-vision" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        {/* Mission */}
        <div style={{
          maxWidth: 800, margin: '0 auto 80px', textAlign: 'center',
          opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
        }}>
          <span className="badge badge-teal" style={{ marginBottom: 20, display: 'inline-block' }}>Our Mission</span>
          <blockquote style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            fontWeight: 600, lineHeight: 1.5, color: 'var(--text-primary)',
            borderLeft: '4px solid var(--color-teal)', paddingLeft: 24, textAlign: 'left',
          }}>
            &ldquo;To redefine hospitality through meaningful architecture, intelligent technology,
            and curated experiences while creating sustainable income opportunities for investors
            and local communities.&rdquo;
          </blockquote>
        </div>

        {/* Vision */}
        <div style={{
          maxWidth: 800, margin: '0 auto 40px', textAlign: 'center',
          opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease 0.2s',
        }}>
          <span className="badge badge-gold" style={{ marginBottom: 20, display: 'inline-block' }}>Our Vision</span>
          <blockquote style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            fontWeight: 600, lineHeight: 1.5, color: 'var(--text-primary)',
            borderLeft: '4px solid var(--color-gold)', paddingLeft: 24, textAlign: 'left',
          }}>
            &ldquo;To become India&apos;s most trusted curated hospitality ecosystem and connect
            thousands of unique stays through one intelligent platform.&rdquo;
          </blockquote>
        </div>

        {/* Core Values */}
        <h3 style={{
          textAlign: 'center', fontSize: '1.5rem', fontWeight: 700,
          marginBottom: 40, fontFamily: 'var(--font-display)', color: 'var(--text-primary)',
        }}>
          Our Core Values
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {CORE_VALUES.map((value, i) => (
            <div
              key={value.title}
              className="card"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${300 + i * 80}ms`,
              }}
            >
              <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: 12 }}>{value.icon}</span>
              <h4 style={{
                fontSize: '1.05rem', fontWeight: 700, marginBottom: 8,
                fontFamily: 'var(--font-body)', color: 'var(--text-primary)',
              }}>
                {value.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
