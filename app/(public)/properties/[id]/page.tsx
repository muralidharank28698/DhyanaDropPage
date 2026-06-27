'use client';

import { useParams } from 'next/navigation';
import { MOCK_PROPERTIES } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = params.id as string;
  const property = MOCK_PROPERTIES.find(p => p.id === propertyId) || MOCK_PROPERTIES[0];

  return (
    <div className="animate-fade-in" style={{ paddingTop: 80, paddingBottom: 80 }}>
      {/* Gallery Header */}
      <div style={{ 
        height: '60vh', minHeight: 400, width: '100%', 
        background: 'linear-gradient(45deg, var(--bg-secondary) 25%, var(--bg-tertiary) 25%, var(--bg-tertiary) 50%, var(--bg-secondary) 50%, var(--bg-secondary) 75%, var(--bg-tertiary) 75%, var(--bg-tertiary) 100%)',
        backgroundSize: '20px 20px',
        position: 'relative'
      }}>
        <div className="container" style={{ position: 'absolute', bottom: 32, left: 0, right: 0 }}>
          <button className="btn btn-outline" style={{ background: 'var(--bg-card)' }}>
            📷 View all 16 photos
          </button>
        </div>
      </div>

      <div className="container" style={{ marginTop: 48 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: 60 }}>
          
          {/* Main Info */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', lineHeight: 1.2 }}>
                {property.name}
              </h1>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost" style={{ fontSize: '1.2rem', padding: 8 }}>♡</button>
                <button className="btn btn-ghost" style={{ fontSize: '1.2rem', padding: 8 }}>↗️</button>
              </div>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ color: 'var(--color-teal)' }}>📍 {property.location}</span>
              <span>•</span>
              <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>★ {property.rating} ({property.reviewCount} reviews)</span>
            </p>

            <div style={{ 
              display: 'flex', gap: 24, padding: '24px 0', 
              borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)',
              marginBottom: 40
            }}>
              <div><span style={{ fontWeight: 600 }}>{property.maxGuests}</span> <span style={{ color: 'var(--text-secondary)' }}>Guests</span></div>
              <div><span style={{ fontWeight: 600 }}>{property.bedrooms}</span> <span style={{ color: 'var(--text-secondary)' }}>Bedrooms</span></div>
              <div><span style={{ fontWeight: 600 }}>{property.bathrooms}</span> <span style={{ color: 'var(--text-secondary)' }}>Bathrooms</span></div>
              <div style={{ textTransform: 'capitalize' }}><span style={{ fontWeight: 600 }}>{property.type}</span></div>
            </div>

            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 16 }}>About the space</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {property.description} {property.description} {property.description}
              </p>
            </section>

            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 24 }}>Amenities</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {property.amenities.map(amenity => (
                  <div key={amenity} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--color-teal)' }}>✓</span> {amenity}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Widget (Sticky sidebar) */}
          <div style={{ position: 'relative' }}>
            <div className="card" style={{ 
              position: 'sticky', top: 100, 
              padding: 32,
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--color-teal)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                  <span style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                    {formatCurrency(property.pricePerNight)}
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}> / night</span>
                </div>
                <div style={{ fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--color-gold)' }}>★</span> {property.rating}
                </div>
              </div>

              <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', marginBottom: 24, overflow: 'hidden' }}>
                <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{ padding: '12px 16px', flex: 1, borderRight: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Check-in</div>
                    <div style={{ fontSize: '0.9rem' }}>Add date</div>
                  </div>
                  <div style={{ padding: '12px 16px', flex: 1 }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Check-out</div>
                    <div style={{ fontSize: '0.9rem' }}>Add date</div>
                  </div>
                </div>
                <div style={{ padding: '12px 16px' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Guests</div>
                  <div style={{ fontSize: '0.9rem' }}>1 guest</div>
                </div>
              </div>

              <Link href="/login" className="btn btn-primary btn-lg" style={{ width: '100%', marginBottom: 16 }}>
                Check Availability
              </Link>
              
              <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                You won&apos;t be charged yet.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 1023px) {
          .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
