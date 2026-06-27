'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CurrentFeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    { icon: '🔍', title: 'Booking Engine', desc: 'Search, compare, and book curated stays with real-time availability.' },
    { icon: '🔗', title: 'Direct Booking', desc: 'Commission-free direct booking channel for returning guests.' },
    { icon: '🏠', title: 'Property Pages', desc: 'Full-detail listings with galleries, amenities, and reviews.' },
    { icon: '👤', title: 'Guest Dashboard', desc: 'Manage bookings, itineraries, rewards, and preferences.' },
    { icon: '🏢', title: 'Host Dashboard', desc: 'Booking calendar, revenue tracking, and guest management.' },
    { icon: '📊', title: 'Investor Dashboard', desc: 'Real-time occupancy, revenue, and performance metrics.' },
    { icon: '🔐', title: 'Secure Payments', desc: 'UPI, cards, net banking, and wallets via Razorpay.' },
    { icon: '📅', title: 'Booking Calendar', desc: 'Colour-coded availability with pricing rules.' },
    { icon: '⭐', title: 'Reviews System', desc: 'Two-way reviews between guests and hosts.' },
    { icon: '🚲', title: 'Bike Rental', desc: 'In-platform bike rental at select properties.' },
    { icon: '🏆', title: 'Membership & Rewards', desc: 'Loyalty programme with tiered rewards.' },
    { icon: '🛡️', title: 'Admin Dashboard', desc: 'Full platform management and analytics.' },
  ];

  return (
    <section id="current-features" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container" ref={ref}>
        <span className="badge badge-green" style={{
          display: 'block', width: 'fit-content', margin: '0 auto 20px',
          opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease',
        }}>
          Live Now
        </span>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          Platform Features
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          Everything you need for a seamless travel and hospitality experience, already built.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16, maxWidth: 1100, margin: '0 auto',
        }}>
          {features.map((f, i) => (
            <div key={f.title} className="card" style={{
              padding: '22px', display: 'flex', gap: 14, alignItems: 'flex-start',
              opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: `all 0.4s ease ${i * 50}ms`,
            }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{f.icon}</span>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 4, fontFamily: 'var(--font-body)' }}>{f.title}</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
