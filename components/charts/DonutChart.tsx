'use client';

export function DonutChart() {
  return (
    <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'conic-gradient(var(--color-gold) 75%, var(--bg-tertiary) 0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 80, height: 80, background: 'var(--bg-card)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontWeight: 700 }}>75%</span>
      </div>
    </div>
  );
}
