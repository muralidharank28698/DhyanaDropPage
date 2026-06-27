'use client';

import { MOCK_EXPERIENCES } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

export default function ExperiencesPage() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: 100 }}>
      <div className="container">
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
          <span className="badge badge-teal" style={{ marginBottom: 16 }}>Curated by Locals</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            Authentic Experiences
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            Discover the soul of the destination through unique activities guided by passionate locals and experts.
          </p>
        </div>

        <div className="grid-3">
          {MOCK_EXPERIENCES.map((exp) => (
            <div key={exp.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: 220, background: 'var(--bg-secondary)' }}>
                 {/* Image Placeholder */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', opacity: 0.2 }}>
                  {exp.category === 'Culture' ? '🏺' : exp.category === 'Adventure' ? '🧗' : exp.category === 'Wellness' ? '🧘' : '🍲'}
                </div>
                <div style={{ position: 'absolute', top: 16, right: 16, background: 'var(--bg-card)', padding: '4px 10px', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--color-gold)' }}>★</span> {exp.rating}
                </div>
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: '0.05em' }}>
                  {exp.category} • {exp.location}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-body)', marginBottom: 12 }}>
                  {exp.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 20, flex: 1, lineHeight: 1.6 }}>
                  {exp.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: 16 }}>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{formatCurrency(exp.price)}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>per person • {exp.duration}</div>
                  </div>
                  <button className="btn btn-outline btn-sm">Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
