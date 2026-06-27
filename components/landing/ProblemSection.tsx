'use client';

import { PROBLEM_STEPS } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problem" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          The Fragmented Travel Reality
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          Travellers today juggle 9+ disconnected apps just to plan and enjoy a single trip.
          There is no single intelligent system that unifies the entire travel experience.
        </p>

        {/* Chaos callout */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 60,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.4s',
          }}
        >
          <span style={{
            display: 'inline-block',
            padding: '12px 32px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.2)',
            color: '#ef4444',
            fontWeight: 700,
            fontSize: '1.1rem',
            fontFamily: 'var(--font-body)',
          }}>
            9 apps. 9 payments. 1 trip. 😤
          </span>
        </div>

        {/* Fragmentation Flow */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
          maxWidth: 960,
          margin: '0 auto',
        }}>
          {PROBLEM_STEPS.map((step, i) => (
            <div
              key={step.app}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '18px 24px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`,
              }}
            >
              <span style={{
                fontSize: '1.5rem',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-secondary)',
                flexShrink: 0,
              }}>
                {step.icon}
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {step.app}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', marginTop: 2 }}>
                  {step.desc}
                </div>
              </div>
              <span style={{
                marginLeft: 'auto',
                fontWeight: 700,
                fontSize: '0.8rem',
                color: 'var(--text-tertiary)',
                background: 'var(--bg-secondary)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                flexShrink: 0,
              }}>
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
