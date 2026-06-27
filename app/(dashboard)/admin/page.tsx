'use client';

import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: 8 }}>Platform Admin</h1>
          <p style={{ color: 'var(--text-secondary)' }}>System overview and high-level platform controls.</p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-outline">Generate Reports</button>
          <button className="btn btn-primary">System Settings</button>
        </div>
      </header>

      <div className="grid-4" style={{ marginBottom: 32 }}>
        <div className="metric-card">
          <div className="metric-value">4.2K</div>
          <div className="metric-label">Total Users</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">124</div>
          <div className="metric-label">Active Properties</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">842</div>
          <div className="metric-label">Monthly Bookings</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">₹8.4M</div>
          <div className="metric-label">Platform GMV (MTD)</div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>Quick Actions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Link href="/admin/properties" style={{ padding: 20, background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'block' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>✅</div>
              <div style={{ fontWeight: 600 }}>Approve Properties</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: 4 }}>3 pending review</div>
            </Link>
            <Link href="/admin/users" style={{ padding: 20, background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'block' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>👥</div>
              <div style={{ fontWeight: 600 }}>Manage Users</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: 4 }}>12 blocked requests</div>
            </Link>
            <Link href="/admin/content" style={{ padding: 20, background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'block' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>📝</div>
              <div style={{ fontWeight: 600 }}>Content Approvals</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: 4 }}>15 new reviews</div>
            </Link>
            <Link href="/admin/analytics" style={{ padding: 20, background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'block' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>🤖</div>
              <div style={{ fontWeight: 600 }}>AI Engine Stats</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: 4 }}>System healthy</div>
            </Link>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>System Health & Logs</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { time: '10:42 AM', type: 'info', text: 'Database backup completed successfully.' },
              { time: '09:15 AM', type: 'error', text: 'Payment gateway timeout for 2 transactions.' },
              { time: '08:00 AM', type: 'success', text: 'Daily revenue distribution chron job finished.' },
              { time: 'Yesterday', type: 'info', text: 'New architecture model added to AI Planner.' },
              { time: 'Yesterday', type: 'warning', text: 'High CPU usage detected on API nodes.' },
            ].map((log, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: '0.85rem' }}>
                <div style={{ 
                  width: 8, height: 8, borderRadius: '50%', marginTop: 6, flexShrink: 0,
                  background: log.type === 'error' ? '#ef4444' : log.type === 'warning' ? 'var(--color-gold)' : log.type === 'success' ? '#22c55e' : 'var(--color-teal)'
                }} />
                <div>
                  <div style={{ color: 'var(--text-primary)' }}>{log.text}</div>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem', marginTop: 2 }}>{log.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
