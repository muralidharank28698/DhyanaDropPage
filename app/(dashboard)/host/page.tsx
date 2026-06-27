'use client';

import { MOCK_BOOKINGS } from '@/lib/mock-data';
import Link from 'next/link';

export default function HostDashboardPage() {
  const recentBookings = MOCK_BOOKINGS.slice(0, 3);
  
  return (
    <div className="animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: 8 }}>Host Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage your properties, guests, and revenue.</p>
        </div>
        <Link href="/host/calendar" className="btn btn-primary">
          View Calendar
        </Link>
      </header>

      <div className="grid-4" style={{ marginBottom: 32 }}>
        <div className="metric-card">
          <div className="metric-value">₹1.4L</div>
          <div className="metric-label">Revenue (This Month)</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">78%</div>
          <div className="metric-label">Occupancy Rate</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">4.9</div>
          <div className="metric-label">Average Rating</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">12</div>
          <div className="metric-label">Upcoming Check-ins</div>
        </div>
      </div>

      <div className="grid-2">
        {/* Recent Bookings */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Recent Bookings</h3>
            <Link href="/host/bookings" style={{ fontSize: '0.85rem', color: 'var(--color-teal)', fontWeight: 600 }}>View All</Link>
          </div>
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Guest</th>
                  <th>Property</th>
                  <th>Dates</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((b) => (
                  <tr key={b.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{b.guestName}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{b.guests} guests</div>
                    </td>
                    <td>{b.propertyName}</td>
                    <td style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                      {new Date(b.checkIn).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} - {new Date(b.checkOut).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </td>
                    <td>
                      <span className={`badge badge-${b.status === 'confirmed' ? 'teal' : b.status === 'pending' ? 'gold' : 'green'}`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Todo / Alerts */}
        <div className="card">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>Tasks & Alerts</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 16, background: 'rgba(212,168,83,0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(212,168,83,0.3)' }}>
              <span style={{ fontSize: '1.2rem', marginTop: 2 }}>🔔</span>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-gold-dark)' }}>Pending Approval</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>You have 1 booking request for Serenity Villa requiring approval.</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 16, background: 'rgba(239,68,68,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(239,68,68,0.2)' }}>
              <span style={{ fontSize: '1.2rem', marginTop: 2 }}>🔧</span>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#dc2626' }}>Maintenance Alert</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>AC servicing scheduled for Bamboo Treehouse tomorrow at 10 AM.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 16, background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '1.2rem', marginTop: 2 }}>💬</span>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Unread Message</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Arjun Mehta asked about early check-in for next week.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
