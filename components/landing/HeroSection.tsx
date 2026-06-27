'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Dhyana Stays Premium Resort"
        fill
        priority
        quality={95}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Overlay dots pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.3) 50%, rgba(10,22,40,0.5) 100%)',
        }}
      />

      {/* Main Centered Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 10, padding: '100px 24px 60px', maxWidth: 840, width: '100%' }}>
        
        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="animate-fade-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              color: 'var(--color-gold)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 32,
            }}
          >
            <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>✧</span> India&apos;s First AI Hospitality Platform
          </div>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up delay-2"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: '-0.02em',
            textShadow: '0 10px 40px rgba(0,0,0,0.4)',
          }}
        >
          {BRAND.tagline}
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-up delay-4"
          style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.6,
            maxWidth: 600,
            margin: '0 auto 40px',
            fontWeight: 300,
            letterSpacing: '0.01em',
          }}
        >
          Connecting travellers, investors, property owners, and local communities
          through curated stays and intelligent technology.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-6"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          <Link href="/properties" className="btn btn-primary" style={{ minWidth: 160 }}>
            Explore Stays
          </Link>
          <a href="#investor-opportunity" className="btn" style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white',
            minWidth: 160,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            Become an Investor
          </a>
          
          {/* Subtle text link inline on desktop, wraps naturally */}
          <a href="#join-movement" style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.9rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '12px 16px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            Join Our Mission <span>→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator pinned smoothly at the bottom, respecting flex boundaries */}
      <div
        style={{
          position: 'relative',
          paddingBottom: 40,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
          color: 'rgba(255,255,255,0.7)',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          fontWeight: 400,
          textTransform: 'uppercase',
          animation: 'fadeUp 1.2s ease 1.2s both, float 3s ease-in-out infinite 2s'
        }}
      >
        <span style={{ opacity: 0.6 }}>Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 4v16M6 14l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
