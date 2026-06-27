'use client';

import Link from 'next/link';
import { MOCK_PROPERTIES } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';
import { useState } from 'react';

export default function PropertiesPage() {
  const [destination, setDestination] = useState('All');
  
  const filteredProperties = destination === 'All' 
    ? MOCK_PROPERTIES 
    : MOCK_PROPERTIES.filter(p => p.destination === destination);

  const destinations = ['All', ...Array.from(new Set(MOCK_PROPERTIES.map(p => p.destination)))];

  return (
    <div className="section animate-fade-in" style={{ paddingTop: 100 }}>
      <div className="container">
        
        {/* Header & Filter */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            Curated Stays
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 600, marginBottom: 32 }}>
            Discover our handpicked portfolio of premium properties, thoroughly vetted for design, service, and authenticity.
          </p>

          <div style={{ 
            display: 'flex', gap: 8, padding: '12px 16px', 
            background: 'var(--bg-secondary)', borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-color)',
            alignItems: 'center', flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', flex: 1 }}>
              {destinations.map((dest, index) => (
                <div key={dest} style={{ display: 'flex', alignItems: 'center', marginBottom: 4, marginTop: 4 }}>
                  <button 
                    onClick={() => setDestination(dest)}
                    style={{
                      padding: '6px 16px', borderRadius: 'var(--radius-full)',
                      background: destination === dest ? 'var(--color-navy)' : 'transparent',
                      color: destination === dest ? 'white' : 'var(--text-primary)',
                      fontWeight: destination === dest ? 600 : 500,
                      whiteSpace: 'nowrap', transition: 'all var(--transition-fast)'
                    }}
                  >
                    {dest}
                  </button>
                  {index < destinations.length - 1 && (
                    <div style={{ width: 1, height: 20, background: 'var(--border-color)', margin: '0 4px' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid-3">
          {filteredProperties.map((property) => (
            <Link href={`/properties/${property.id}`} key={property.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: 280 }}>
                {/* Fallback pattern for images */}
                <div style={{ 
                  position: 'absolute', inset: 0, 
                  background: 'linear-gradient(45deg, var(--bg-secondary) 25%, var(--bg-tertiary) 25%, var(--bg-tertiary) 50%, var(--bg-secondary) 50%, var(--bg-secondary) 75%, var(--bg-tertiary) 75%, var(--bg-tertiary) 100%)',
                  backgroundSize: '20px 20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '3rem', opacity: 0.2 }}>{property.type === 'treehouse' ? '🌳' : property.type === 'villa' ? '🏡' : '🏕️'}</span>
                </div>
                
                {property.featured && (
                  <div style={{ 
                    position: 'absolute', top: 16, left: 16, 
                    background: 'var(--color-gold)', color: 'white', 
                    padding: '4px 12px', borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em'
                  }}>
                    FEATURED
                  </div>
                )}
                <div style={{ 
                  position: 'absolute', top: 16, right: 16, 
                  background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
                  color: 'white', width: 36, height: 36, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  ♡
                </div>
              </div>
              
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, fontFamily: 'var(--font-body)', lineHeight: 1.3 }}>
                    {property.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600, fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--color-gold)' }}>★</span> {property.rating}
                  </div>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 16 }}>
                  {property.location}
                </p>
                
                <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                  {property.amenities.slice(0, 3).map(amenity => (
                    <span key={amenity} style={{ 
                      fontSize: '0.75rem', padding: '4px 10px', 
                      background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-secondary)'
                    }}>
                      {amenity}
                    </span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span style={{ 
                      fontSize: '0.75rem', padding: '4px 10px', 
                      background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-secondary)'
                    }}>
                      +{property.amenities.length - 3}
                    </span>
                  )}
                </div>
                
                <div style={{ 
                  paddingTop: 16, borderTop: '1px solid var(--border-color)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>{formatCurrency(property.pricePerNight)}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}> / night</span>
                  </div>
                  <span style={{ color: 'var(--color-teal)', fontWeight: 600, fontSize: '0.9rem' }}>
                    View details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
