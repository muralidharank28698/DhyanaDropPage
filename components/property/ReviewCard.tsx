'use client';

export function ReviewCard({ review }: { review?: any }) {
  return (
    <div className="card" style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontWeight: 600 }}>{review?.author || 'Guest Name'}</div>
        <div style={{ color: 'var(--color-gold)' }}>★★★★★</div>
      </div>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        {review?.text || 'This was a wonderful stay, highly recommended!'}
      </p>
    </div>
  );
}
