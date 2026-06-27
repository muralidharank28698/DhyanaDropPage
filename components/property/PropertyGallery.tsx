'use client';

export function PropertyGallery({ images }: { images: string[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, height: 400 }}>
      <div style={{ background: 'var(--bg-secondary)', gridRow: 'span 2' }}></div>
      <div style={{ background: 'var(--bg-tertiary)' }}></div>
      <div style={{ background: 'var(--bg-tertiary)' }}></div>
    </div>
  );
}
