'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { BRAND } from '@/lib/constants';

type SidebarLink = {
  label: string;
  href: string;
  icon: string;
};

const GUEST_LINKS: SidebarLink[] = [
  { label: 'Overview', href: '/guest', icon: '🏠' },
  { label: 'My Bookings', href: '/guest/bookings', icon: '📅' },
  { label: 'AI Itineraries', href: '/guest/itineraries', icon: '🤖' },
  { label: 'Rewards', href: '/guest/rewards', icon: '🏆' },
  { label: 'Profile Settings', href: '/guest/profile', icon: '👤' },
];

const HOST_LINKS: SidebarLink[] = [
  { label: 'Dashboard', href: '/host', icon: '📊' },
  { label: 'Bookings Calendar', href: '/host/calendar', icon: '📅' },
  { label: 'Revenue & Reports', href: '/host/revenue', icon: '💰' },
  { label: 'Guest Messages', href: '/host/guests', icon: '💬' },
  { label: 'My Properties', href: '/host/listings', icon: '🏢' },
  { label: 'Maintenance', href: '/host/maintenance', icon: '🔧' },
];

const INVESTOR_LINKS: SidebarLink[] = [
  { label: 'Portfolio Overview', href: '/investor', icon: '📈' },
  { label: 'Revenue Analytics', href: '/investor/revenue', icon: '💹' },
  { label: 'Property Performance', href: '/investor/portfolio', icon: '🏢' },
  { label: 'Monthly Reports', href: '/investor/reports', icon: '📄' },
  { label: 'Exit Simulator', href: '/investor/exit-simulator', icon: '🚪' },
];

const ADMIN_LINKS: SidebarLink[] = [
  { label: 'Platform Overview', href: '/admin', icon: '🌐' },
  { label: 'User Management', href: '/admin/users', icon: '👥' },
  { label: 'All Bookings', href: '/admin/bookings', icon: '📅' },
  { label: 'Property Approval', href: '/admin/properties', icon: '✅' },
  { label: 'System Analytics', href: '/admin/analytics', icon: '📊' },
  { label: 'Content Management', href: '/admin/content', icon: '📝' },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  
  // Determine role based on routing
  const role = pathname.startsWith('/admin') ? 'admin' :
               pathname.startsWith('/investor') ? 'investor' :
               pathname.startsWith('/host') ? 'host' : 'guest';

  const links = role === 'admin' ? ADMIN_LINKS :
                role === 'investor' ? INVESTOR_LINKS :
                role === 'host' ? HOST_LINKS : GUEST_LINKS;

  const roleLabels = {
    guest: 'Traveller Dashboard',
    host: 'Host Dashboard',
    investor: 'Investor Portal',
    admin: 'Platform Admin',
  };

  return (
    <aside className="dashboard-sidebar" style={{
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ padding: '0 24px', marginBottom: 32 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, var(--color-teal), var(--color-gold))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 800, fontSize: '1rem', fontFamily: 'var(--font-display)',
          }}>
            D
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
            {BRAND.name}
          </span>
        </Link>
        <div style={{ marginTop: 12, fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {roleLabels[role]}
        </div>
      </div>

      <nav style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 16px', borderRadius: 'var(--radius-md)',
                color: active ? 'var(--color-teal)' : 'var(--text-secondary)',
                background: active ? 'rgba(42,157,143,0.1)' : 'transparent',
                fontWeight: active ? 600 : 500,
                fontSize: '0.9rem',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.background = 'var(--bg-tertiary)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: '24px', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>
              JD
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>John Doe</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'capitalize' }}>{role} Account</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <ThemeToggle />
          <Link href="/login" style={{ fontSize: '0.85rem', color: '#ef4444', fontWeight: 500 }}>
            Sign Out
          </Link>
        </div>
      </div>
    </aside>
  );
}
