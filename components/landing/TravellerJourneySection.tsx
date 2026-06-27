'use client';

import { TRAVELLER_JOURNEY } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TravellerJourneySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="traveller-journey" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          Your Journey with DhyanaStays
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          From discovery to memory — 12 seamless stages, all within one platform.
        </p>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 24, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(to bottom, var(--color-teal), var(--color-gold))',
            borderRadius: 2,
          }} />

          {TRAVELLER_JOURNEY.map((stage, i) => (
            <div
              key={stage.stage}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 24,
                paddingLeft: 56, paddingBottom: 32, position: 'relative',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
              }}
            >
              {/* Node dot */}
              <div style={{
                position: 'absolute', left: 15, top: 4,
                width: 20, height: 20, borderRadius: '50%',
                background: `linear-gradient(135deg, var(--color-teal), var(--color-gold))`,
                border: '3px solid var(--bg-secondary)',
                zIndex: 2, flexShrink: 0,
              }} />

              <div className="card" style={{
                flex: 1, padding: '20px 24px',
                display: 'flex', alignItems: 'center', gap: 16,
              }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{stage.icon}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-teal)',
                      background: 'rgba(42,157,143,0.1)', padding: '2px 8px', borderRadius: 'var(--radius-full)',
                    }}>
                      Stage {i + 1}
                    </span>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, fontFamily: 'var(--font-body)' }}>
                      {stage.stage}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{stage.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
