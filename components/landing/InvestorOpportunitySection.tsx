'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function InvestorOpportunitySection() {
  const { ref, isVisible } = useScrollAnimation();
  const [showForm, setShowForm] = useState(false);

  const benefits = [
    { icon: '💰', title: '50:50 Revenue Share', desc: 'Equal partnership in property earnings' },
    { icon: '📊', title: 'Real-time Dashboard', desc: 'Full transparency on performance' },
    { icon: '🏠', title: 'Property Appreciation', desc: 'Long-term capital growth on assets' },
    { icon: '🔄', title: 'Defined Exit Strategy', desc: 'Resale, buyback, or partner transfer' },
    { icon: '🛎️', title: 'Professional Mgmt', desc: 'DhyanaStays handles operations' },
    { icon: '📈', title: 'Scalable Investment', desc: 'Invest across multiple properties' },
  ];

  return (
    <section id="investor-opportunity" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container" ref={ref}>
        {/* Hero callout */}
        <div style={{
          background: 'linear-gradient(135deg, var(--color-navy), var(--color-navy-light))',
          borderRadius: 'var(--radius-xl)', padding: 'clamp(40px, 8vw, 80px)',
          textAlign: 'center', marginBottom: 60,
          opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: 'white', marginBottom: 16, fontWeight: 700,
          }}>
            Become Part of India&apos;s Next-Generation Hospitality Ecosystem
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 32px' }}>
            Earn passive income through curated, design-led properties managed by DhyanaStays.
          </p>

          {/* 50/50 split visual */}
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4,
            marginBottom: 32,
          }}>
            <div style={{
              padding: '20px 32px', borderRadius: 'var(--radius-lg) 4px 4px var(--radius-lg)',
              background: 'rgba(42,157,143,0.2)', border: '1px solid rgba(42,157,143,0.4)',
            }}>
              <div style={{ color: 'var(--color-teal)', fontWeight: 800, fontSize: '1.8rem' }}>50%</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Investor</div>
            </div>
            <div style={{
              padding: '20px 32px', borderRadius: '4px var(--radius-lg) var(--radius-lg) 4px',
              background: 'rgba(212,168,83,0.2)', border: '1px solid rgba(212,168,83,0.4)',
            }}>
              <div style={{ color: 'var(--color-gold)', fontWeight: 800, fontSize: '1.8rem' }}>50%</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>DhyanaStays</div>
            </div>
          </div>

          <button onClick={() => setShowForm(true)} className="btn btn-gold btn-lg">
            Register Your Interest
          </button>
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
          maxWidth: 1000,
          margin: '0 auto',
        }}>
          {benefits.map((b, i) => (
            <div key={b.title} className="card" style={{
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s ease ${200 + i * 80}ms`,
            }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}>{b.icon}</span>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 6, fontFamily: 'var(--font-body)' }}>{b.title}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Enquiry Modal */}
        {showForm && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
          }}
            onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
          >
            <div className="glass-card" style={{
              maxWidth: 480, width: '90%', background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem' }}>Investor Enquiry</h3>
                <button onClick={() => setShowForm(false)} style={{ fontSize: '1.5rem', color: 'var(--text-tertiary)' }}>×</button>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); setShowForm(false); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div><label className="label">Full Name</label><input className="input" placeholder="Your name" required /></div>
                <div><label className="label">Email</label><input className="input" type="email" placeholder="you@email.com" required /></div>
                <div><label className="label">Phone</label><input className="input" type="tel" placeholder="+91..." required /></div>
                <div><label className="label">Investment Budget (INR)</label><input className="input" type="number" placeholder="Minimum ₹10,00,000" required /></div>
                <div><label className="label">Location Preference</label><input className="input" placeholder="e.g., Coorg, Goa, Manali" required /></div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
