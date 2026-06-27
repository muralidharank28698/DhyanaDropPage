'use client';

import { ROADMAP_PHASES } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function RoadmapSection() {
  const { ref, isVisible } = useScrollAnimation();

  const phaseColors = { active: 'var(--color-teal)', upcoming: 'var(--color-gold)', future: 'var(--text-tertiary)' };

  return (
    <section id="roadmap" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          Product Roadmap
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          A phased approach to building India&apos;s most intelligent hospitality ecosystem.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24, maxWidth: 1100, margin: '0 auto',
        }}>
          {ROADMAP_PHASES.map((phase, i) => {
            const color = phaseColors[phase.status];
            return (
              <div key={phase.phase} style={{
                background: 'var(--bg-card)', border: `2px solid ${phase.status === 'active' ? color : 'var(--border-color)'}`,
                borderRadius: 'var(--radius-xl)', padding: '32px', position: 'relative',
                opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${i * 120}ms`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <span style={{
                    width: 44, height: 44, borderRadius: 'var(--radius-full)',
                    background: `${color}20`, color: color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: '1rem', border: `2px solid ${color}`,
                  }}>
                    {phase.phase}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
                      {phase.title}
                    </h3>
                    {phase.status !== 'active' && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>Coming Soon</span>
                    )}
                    {phase.status === 'active' && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-teal)', fontWeight: 700 }}>● Current Phase</span>
                    )}
                  </div>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {phase.milestones.map((m) => (
                    <li key={m} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: color, fontSize: '0.7rem' }}>
                        {phase.status === 'active' ? '✓' : '○'}
                      </span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
