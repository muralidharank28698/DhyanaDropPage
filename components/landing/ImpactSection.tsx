'use client';

import { IMPACT_ITEMS, DIFFERENTIATORS } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ImpactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="impact" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          Impact &amp; Differentiators
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          Creating positive change in every community we touch while staying ahead of the competition.
        </p>

        {/* Impact Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16, maxWidth: 1100, margin: '0 auto 80px',
        }}>
          {IMPACT_ITEMS.map((item, i) => (
            <div key={item.title} className="card" style={{
              borderLeft: `4px solid var(--color-${item.color === 'gold' ? 'gold' : item.color === 'teal' ? 'teal' : 'teal'})`,
              opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: `all 0.5s ease ${i * 70}ms`,
            }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-body)' }}>{item.title}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h3 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, marginBottom: 32, fontFamily: 'var(--font-display)' }}>
          Why DhyanaStays?
        </h3>
        <div className="table-wrapper" style={{ maxWidth: 900, margin: '0 auto', opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}>
          <table className="table">
            <thead>
              <tr>
                <th>Feature</th>
                <th style={{ color: 'var(--color-teal)' }}>DhyanaStays ✓</th>
                <th>Traditional Platforms</th>
              </tr>
            </thead>
            <tbody>
              {DIFFERENTIATORS.map((d) => (
                <tr key={d.feature}>
                  <td style={{ fontWeight: 600 }}>{d.feature}</td>
                  <td style={{ color: 'var(--color-teal)' }}>{d.us}</td>
                  <td style={{ color: 'var(--text-tertiary)' }}>{d.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
