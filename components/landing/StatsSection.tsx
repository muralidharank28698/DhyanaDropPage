'use client';

import { PLATFORM_STATS } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

function StatCard({ stat, isVisible }: { stat: typeof PLATFORM_STATS[number]; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible);
  const display = stat.value >= 1000
    ? `${(count / 1000).toFixed(count >= stat.value ? 0 : 0)}${count >= 1000 ? 'K' : ''}`
    : count.toString();

  // Simple display based on value
  const formatted = stat.value >= 100000
    ? `${Math.floor(count / 1000)}K`
    : count.toLocaleString('en-IN');

  return (
    <div style={{
      textAlign: 'center',
      padding: '32px 16px',
    }}>
      <div style={{
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 800,
        fontFamily: 'var(--font-body)',
        background: 'linear-gradient(135deg, var(--color-teal), var(--color-gold))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
        marginBottom: 8,
      }}>
        {formatted}{stat.suffix}
      </div>
      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: 4 }}>
        {stat.label}
      </div>
      <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
        {stat.desc}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="stats" className="section" style={{
      background: 'linear-gradient(135deg, var(--color-navy-dark), var(--color-navy))',
    }}>
      <div className="container" ref={ref}>
        <h2 className="section-title" style={{
          color: 'white',
          ...(isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }),
        }}>
          Platform Ambition in Numbers
        </h2>
        <p className="section-subtitle" style={{
          color: 'rgba(255,255,255,0.6)',
          ...(isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }),
        }}>
          Our targets for creating India&apos;s largest curated hospitality ecosystem.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 8,
          maxWidth: 1100,
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.4s',
        }}>
          {PLATFORM_STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        <p style={{
          textAlign: 'center', marginTop: 40,
          fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)',
          fontStyle: 'italic',
        }}>
          * Numbers represent projected targets. Actual metrics will be updated as the platform scales.
        </p>
      </div>
    </section>
  );
}
