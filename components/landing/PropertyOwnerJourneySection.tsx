'use client';

import { PROPERTY_OWNER_JOURNEY } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PropertyOwnerJourneySection() {
  const { ref, isVisible } = useScrollAnimation();

  const icons = ['🏡', '🤝', '🎨', '🏗️', '📸', '⚙️', '🛎️', '💰', '📊'];

  return (
    <section id="property-owner-journey" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          Partner With DhyanaStays
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          Transform your property into a premium curated stay. Here&apos;s your journey from ownership to revenue.
        </p>

        {/* Zigzag timeline */}
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {PROPERTY_OWNER_JOURNEY.map((stage, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={stage.stage} style={{
                display: 'flex',
                flexDirection: isLeft ? 'row' : 'row-reverse',
                alignItems: 'center',
                gap: 24,
                marginBottom: 20,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : `translateX(${isLeft ? -30 : 30}px)`,
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`,
              }}>
                <div style={{
                  flex: 1,
                  textAlign: isLeft ? 'right' : 'left',
                }}>
                  <div className="card" style={{ padding: '20px 24px', display: 'inline-block', textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                      <span style={{ fontSize: '1.5rem' }}>{icons[i]}</span>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-body)' }}>
                        {stage.stage}
                      </h4>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{stage.desc}</p>
                  </div>
                </div>

                {/* Center node */}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--color-teal), var(--color-gold))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 800, fontSize: '0.85rem',
                  boxShadow: 'var(--shadow-glow-teal)',
                }}>
                  {i + 1}
                </div>

                <div style={{ flex: 1 }} />
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48, opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease 1s' }}>
          <a href="#join-movement" className="btn btn-primary btn-lg">Partner With Us</a>
        </div>
      </div>
    </section>
  );
}
