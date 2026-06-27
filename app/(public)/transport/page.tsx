'use client';

export default function TransportPage() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: 100, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
        <span style={{ fontSize: '4rem', display: 'block', marginBottom: 24 }}>🚕</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: 16 }}>
          Platform Transport
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: 32 }}>
          Book local cabs, airport transfers, and rental bikes directly through the DhyanaStays platform.
        </p>

        <div className="card" style={{ padding: 32, background: 'var(--bg-secondary)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16 }}>Coming in Phase 2</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            We are currently partnering with verified local operators and EV fleets to provide safe, reliable transport for our guests.
          </p>
          <div style={{ marginTop: 24, height: 4, background: 'var(--border-color)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, var(--color-teal), var(--color-gold))' }} />
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: 8, fontWeight: 600, textTransform: 'uppercase' }}>
            60% Complete
          </div>
        </div>
      </div>
    </div>
  );
}
