'use client';

import { REVENUE_STREAMS } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function BusinessModelSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="business-model" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          Business Model &amp; Revenue
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          A diversified, multi-revenue-stream model creating value for all stakeholders.
        </p>

        {/* Revenue Stream Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
          maxWidth: 1100,
          margin: '0 auto 48px',
        }}>
          {REVENUE_STREAMS.map((stream, i) => (
            <div
              key={stream.name}
              className="card"
              style={{
                position: 'relative',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`,
                overflow: 'hidden',
              }}
            >
              {stream.phase > 1 && (
                <span className={stream.phase === 3 ? 'badge badge-gold' : 'badge badge-teal'}
                  style={{ position: 'absolute', top: 12, right: 12, fontSize: '0.65rem' }}
                >
                  Phase {stream.phase}
                </span>
              )}
              <h4 style={{
                fontSize: '1rem', fontWeight: 700, marginBottom: 8,
                fontFamily: 'var(--font-body)', color: 'var(--text-primary)',
              }}>
                {stream.name}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 12 }}>
                {stream.desc}
              </p>
              <div style={{
                padding: '8px 14px', borderRadius: 'var(--radius-md)',
                background: 'var(--bg-secondary)', display: 'inline-block',
                fontSize: '0.9rem', fontWeight: 700,
                color: 'var(--color-teal)',
              }}>
                {stream.rate}
              </div>
            </div>
          ))}
        </div>

        {/* Transparency badge */}
        <div style={{ textAlign: 'center', opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease 0.8s' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 24px', borderRadius: 'var(--radius-full)',
            background: 'rgba(42,157,143,0.08)', border: '1px solid rgba(42,157,143,0.2)',
            color: 'var(--color-teal)', fontWeight: 600, fontSize: '0.9rem',
          }}>
            🔍 Every transaction is tracked and reported in real-time
          </span>
        </div>
      </div>
    </section>
  );
}
