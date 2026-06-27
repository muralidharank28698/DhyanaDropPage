'use client';

import { MOCK_INVESTOR_METRICS, MOCK_REVENUE_DISTRIBUTIONS } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

export default function InvestorDashboardPage() {
  const metrics = MOCK_INVESTOR_METRICS;
  const recentDistributions = MOCK_REVENUE_DISTRIBUTIONS;

  return (
    <div className="animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: 8 }}>Portfolio Overview</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Your real-time investment performance dashboard.</p>
        </div>
        <Link href="/investor/reports" className="btn btn-outline">
          Download Tax Report
        </Link>
      </header>

      <div className="grid-4" style={{ marginBottom: 32 }}>
        <div className="metric-card" style={{ background: 'linear-gradient(135deg, rgba(42,157,143,0.1), rgba(10,22,40,0))' }}>
          <div className="metric-value" style={{ fontSize: '1.8rem' }}>{formatCurrency(metrics.totalRevenue)}</div>
          <div className="metric-label">Total Net Revenue (YTD)</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">{metrics.occupancyRate}%</div>
          <div className="metric-label">Avg. Occupancy</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">{formatCurrency(metrics.revPAR)}</div>
          <div className="metric-label">RevPAR</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">{metrics.activeProperties}</div>
          <div className="metric-label">Active Properties</div>
        </div>
      </div>

      <div className="grid-2">
        {/* Revenue Chart Visualizer (CSS driven) */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>6-Month Revenue Trend</h3>
            <select className="input" style={{ width: 'auto', padding: '6px 12px', fontSize: '0.8rem' }}>
              <option>All Properties</option>
              <option>Heritage Farmhouse</option>
              <option>Mountain Retreat</option>
            </select>
          </div>
          
          <div style={{ height: 240, display: 'flex', alignItems: 'flex-end', gap: '4%', paddingBottom: 30, borderBottom: '1px solid var(--border-color)', position: 'relative' }}>
            {metrics.monthlyTrend.map((m) => {
              const maxRev = Math.max(...metrics.monthlyTrend.map(d => d.revenue));
              const heightStr = `${(m.revenue / maxRev) * 100}%`;
              return (
                <div key={m.month} className="group" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: '100%', height: heightStr, background: 'var(--color-teal)', 
                    borderRadius: '4px 4px 0 0', position: 'relative', transition: 'height 1s ease',
                    opacity: 0.8
                  }}>
                     {/* Tooltip hint */}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', position: 'absolute', bottom: 5 }}>{m.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Distributions Table */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Recent Distributions</h3>
            <Link href="/investor/revenue" style={{ fontSize: '0.85rem', color: 'var(--color-teal)', fontWeight: 600 }}>All History</Link>
          </div>
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Gross Revenue</th>
                  <th>Net Paid</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentDistributions.map((d) => (
                  <tr key={d.id}>
                    <td style={{ fontWeight: 600 }}>{d.month}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{formatCurrency(d.grossRevenue)}</td>
                    <td style={{ fontWeight: 700, color: 'var(--color-teal)' }}>{formatCurrency(d.netDistribution)}</td>
                    <td>
                      <span className="badge badge-teal">{d.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 16, fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            * Platform commission (12%), Management fees, and TDS deducted before payout based on the 50:50 sharing model.
          </div>
        </div>
      </div>
    </div>
  );
}
