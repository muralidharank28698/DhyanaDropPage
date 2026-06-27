'use client';

export function PropertySearch() {
  return (
    <div style={{ padding: 16, background: 'var(--bg-card)', borderRadius: 'var(--radius-full)', display: 'flex', gap: 16, border: '1px solid var(--border-color)' }}>
      <input type="text" placeholder="Where to?" style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, padding: 8 }} />
      <button className="btn btn-primary" style={{ borderRadius: 'var(--radius-full)' }}>Search</button>
    </div>
  );
}
