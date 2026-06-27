'use client';

import { MOCK_EVENTS } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

export default function EventsPage() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: 100 }}>
      <div className="container">
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
          <span className="badge badge-gold" style={{ marginBottom: 16 }}>Community & Culture</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            Upcoming Events
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            Immerse yourself in local festivals, workshops, and community gatherings happening around our properties.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900, margin: '0 auto' }}>
          {MOCK_EVENTS.map((event) => {
            const date = new Date(event.date);
            const month = date.toLocaleString('default', { month: 'short' });
            const day = date.getDate();

            return (
              <div key={event.id} className="card event-card-layout">
                {/* Date Block */}
                <div style={{ width: 80, flexShrink: 0, textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', padding: '16px 0', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-teal)', textTransform: 'uppercase' }}>{month}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', lineHeight: 1.1 }}>{day}</div>
                </div>

                {/* Info Block */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: 4 }}>
                        {event.category}
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'var(--font-body)', marginBottom: 8 }}>
                        {event.title}
                      </h3>
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                      {formatCurrency(event.price)}
                    </div>
                  </div>
                  
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                    {event.description}
                  </p>

                  <div style={{ display: 'flex', gap: 16, fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>📍 {event.venue}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>🕒 {event.time}</span>
                  </div>
                </div>

                {/* Action Block */}
                <div className="event-action-block">
                    <button className="btn btn-outline" style={{ whiteSpace: 'nowrap' }}>Get Tickets</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
