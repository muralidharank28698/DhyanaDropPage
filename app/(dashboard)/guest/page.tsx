'use client';

import { MOCK_BOOKINGS } from '@/lib/mock-data';
import Link from 'next/link';

export default function GuestDashboardPage() {
  const activeBookings = MOCK_BOOKINGS.filter(b => b.status === 'confirmed');

  return (
    <div className="animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: 8 }}>Hello, Arjun!</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Welcome to your travel dashboard.</p>
        </div>
        <Link href="/properties" className="btn btn-primary">
          Plan Next Trip
        </Link>
      </header>

      <div className="grid-3" style={{ marginBottom: 32 }}>
        <div className="metric-card">
          <div className="metric-value">3</div>
          <div className="metric-label">Upcoming Trips</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">1,250</div>
          <div className="metric-label">Dhyana Rewards &pts</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">5</div>
          <div className="metric-label">Saved Itineraries</div>
        </div>
      </div>

      <div className="grid-2">
        {/* Next Trip */}
        <div className="card">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>Your Next Trip</h3>
          {activeBookings.length > 0 ? (
            <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <div style={{ height: 160, background: 'url(/images/prop1.jpg) center/cover', backgroundColor: 'var(--bg-tertiary)' }} />
              <div style={{ padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem' }}>{activeBookings[0].propertyName}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Coorg, Karnataka</p>
                  </div>
                  <span className="badge badge-teal">Confirmed</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: '0.85rem', marginBottom: 20 }}>
                  <div>
                    <div style={{ color: 'var(--text-tertiary)' }}>Check-in</div>
                    <div style={{ fontWeight: 600 }}>{activeBookings[0].checkIn} (2 PM)</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-tertiary)' }}>Check-out</div>
                    <div style={{ fontWeight: 600 }}>{activeBookings[0].checkOut} (11 AM)</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button className="btn btn-primary btn-sm" style={{ flex: 1 }}>View Details</button>
                  <button className="btn btn-outline btn-sm" style={{ flex: 1 }}>Get Directions</button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ padding: 40, textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}>🏖️</span>
              <p style={{ color: 'var(--text-secondary)' }}>No upcoming trips planned yet.</p>
            </div>
          )}
        </div>

        {/* Quick Actions / Recommendations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16 }}>AI Trip Planner</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
              Let our AI generate a personalized day-by-day itinerary for your next adventure.
            </p>
            <Link href="/ai-planner" className="btn btn-gold" style={{ width: '100%' }}>
              Create New Itinerary ✨
            </Link>
          </div>

          <div className="card" style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16 }}>Recent Activity</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(42,157,143,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🏨</div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Booked Serenity Villa</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>June 20, 2026</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(212,168,83,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>⭐</div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Reviewed Bamboo Treehouse</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>June 15, 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
