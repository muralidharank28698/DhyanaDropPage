'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ECOSYSTEM_NODES = [
  { label: 'Travellers', category: 'demand', angle: 0 },
  { label: 'Corporate Clients', category: 'demand', angle: 30 },
  { label: 'Event Attendees', category: 'demand', angle: 60 },
  { label: 'Property Owners', category: 'supply', angle: 90 },
  { label: 'Architects', category: 'supply', angle: 120 },
  { label: 'Hospitality Partners', category: 'supply', angle: 150 },
  { label: 'Restaurants', category: 'experience', angle: 180 },
  { label: 'Tour Guides', category: 'experience', angle: 210 },
  { label: 'Taxi Operators', category: 'mobility', angle: 240 },
  { label: 'Investors', category: 'investment', angle: 270 },
  { label: 'Local Businesses', category: 'community', angle: 300 },
  { label: 'Artisans', category: 'community', angle: 330 },
];

const CATEGORY_COLORS: Record<string, string> = {
  demand: '#2A9D8F',
  supply: '#D4A853',
  experience: '#E76F51',
  mobility: '#6C63FF',
  investment: '#22C55E',
  community: '#EC4899',
};

export default function EcosystemSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="ecosystem" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          The DhyanaStays Universe
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          An interconnected ecosystem of travellers, investors, property owners,
          experience providers, and local communities — all orbiting around one intelligent platform.
        </p>

        {/* Circular Ecosystem Diagram */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: 600,
          margin: '0 auto',
          aspectRatio: '1',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.3s',
        }}>
          {/* Center Hub */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 120, height: 120,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-navy), var(--color-navy-light))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            boxShadow: '0 0 40px rgba(42,157,143,0.3)',
            zIndex: 10,
            border: '3px solid var(--color-teal)',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
              color: 'white', textAlign: 'center', lineHeight: 1.2,
            }}>
              Dhyana<br />Stays
            </span>
          </div>

          {/* Orbit ring */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%', height: '80%',
            borderRadius: '50%',
            border: '1px dashed var(--border-color)',
          }} />

          {/* Nodes */}
          {ECOSYSTEM_NODES.map((node, i) => {
            const radius = 42; // percentage
            const rad = (node.angle * Math.PI) / 180;
            const x = (50 + radius * Math.cos(rad)).toFixed(2);
            const y = (50 + radius * Math.sin(rad)).toFixed(2);
            const color = CATEGORY_COLORS[node.category];

            return (
              <div
                key={node.label}
                title={node.label}
                style={{
                  position: 'absolute',
                  left: `${x}%`, top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.5s ease ${400 + i * 80}ms`,
                  cursor: 'pointer',
                  zIndex: 5,
                }}
              >
                <div style={{
                  width: 44, height: 44,
                  borderRadius: '50%',
                  background: `${color}20`,
                  border: `2px solid ${color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: color,
                  transition: 'all var(--transition-base)',
                }}>
                  {node.label.slice(0, 2).toUpperCase()}
                </div>
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  textAlign: 'center',
                  maxWidth: 80,
                  lineHeight: 1.2,
                }}>
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Category Legend */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16,
          marginTop: 40,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s ease 1s',
        }}>
          {Object.entries(CATEGORY_COLORS).map(([key, color]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
              <span style={{ color: 'var(--text-secondary)', textTransform: 'capitalize' }}>{key}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
