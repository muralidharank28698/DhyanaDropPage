'use client';

export function BarChart() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', height: 100, gap: 8, borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ width: 24, height: '40%', background: 'var(--color-teal)' }} />
      <div style={{ width: 24, height: '70%', background: 'var(--color-teal)' }} />
      <div style={{ width: 24, height: '100%', background: 'var(--color-teal)' }} />
    </div>
  );
}
