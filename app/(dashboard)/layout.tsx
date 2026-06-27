'use client';

import DashboardSidebar from '@/components/layout/DashboardSidebar';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      <main className="dashboard-content" style={{ background: 'var(--bg-secondary)', minHeight: '100vh' }}>
        {/* Mobile Header (visible only on small screens) */}
        <header style={{ 
          display: 'none', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '16px 24px',
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-color)',
          marginBottom: 24,
          borderRadius: 'var(--radius-lg)'
        }} className="mobile-header">
          <div style={{ fontWeight: 700, fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>
            DhyanaStays
          </div>
          <button style={{ padding: '8px 12px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
            ≡ Menu
          </button>
        </header>

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {children}
        </div>
      </main>
      
      <style jsx>{`
        @media (max-width: 1023px) {
          .mobile-header { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
