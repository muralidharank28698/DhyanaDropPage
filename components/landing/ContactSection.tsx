'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          Get in Touch
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          Have a question or want to partner with us? We&apos;d love to hear from you.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 48, maxWidth: 1000, margin: '0 auto',
        }}>
          {/* Contact Form */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.3s',
          }}>
            {submitted ? (
              <div className="glass-card" style={{ textAlign: 'center', padding: 48 }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: 16 }}>✉️</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div><label className="label">Name</label><input className="input" placeholder="Your full name" required /></div>
                <div><label className="label">Email</label><input className="input" type="email" placeholder="you@email.com" required /></div>
                <div><label className="label">Phone</label><input className="input" type="tel" placeholder="+91..." required /></div>
                <div>
                  <label className="label">Subject</label>
                  <select className="input" required defaultValue="">
                    <option value="" disabled>Select a subject</option>
                    <option value="traveller">Traveller Enquiry</option>
                    <option value="investor">Investor Enquiry</option>
                    <option value="property-owner">Property Owner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div><label className="label">Message</label><textarea className="input textarea" placeholder="Your message (min. 20 characters)" minLength={20} required /></div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info + Newsletter */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.5s',
          }}>
            {/* Contact Info */}
            <div className="card" style={{ marginBottom: 24 }}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 700, marginBottom: 16 }}>
                Contact Information
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14  }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>📧</span> hello@dhyanastays.com
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>📞</span> +91 98765 43210
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>📍</span> Bangalore, India
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="card">
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>
                Stay Updated
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                Subscribe to our newsletter for curated travel inspiration and platform updates.
              </p>
              {subscribed ? (
                <p style={{ color: 'var(--color-teal)', fontWeight: 600, fontSize: '0.9rem' }}>
                  ✓ You&apos;re subscribed! Welcome to the DhyanaStays community.
                </p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
                  style={{ display: 'flex', gap: 8 }}
                >
                  <input className="input" type="email" placeholder="Your email" required style={{ flex: 1 }} />
                  <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
