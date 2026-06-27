'use client';

import Link from 'next/link';

export function PropertyCard({ property }: { property: any }) {
  return (
    <Link href={`/properties/${property?.id || 1}`} className="card">
      <div style={{ height: 200, background: 'var(--bg-secondary)', marginBottom: 16 }}></div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{property?.name || 'Property Name'}</h3>
      <p style={{ color: 'var(--text-secondary)' }}>{property?.location || 'Location'}</p>
    </Link>
  );
}
