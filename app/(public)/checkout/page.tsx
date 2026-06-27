'use client';

import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';
import { useState } from 'react';

export default function CheckoutPage() {
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2500);
  };

  if (success) {
    return (
      <div className="section animate-fade-in" style={{ paddingTop: 120, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--color-teal)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 24px' }}>
            ✓
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: 16 }}>
            Booking Confirmed!
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: 32 }}>
            Your stay at <strong>Serenity Villa</strong> has been successfully booked. A confirmation has been sent to your email.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <Link href="/guest/bookings" className="btn btn-primary">View My Bookings</Link>
            <Link href="/" className="btn btn-outline">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section animate-fade-in" style={{ paddingTop: 100 }}>
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: 32 }}>Secure Checkout</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: 40 }}>
          {/* Payment Form */}
          <div>
            <div className="card" style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 20 }}>Guest Details</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div><label className="label">First Name</label><input type="text" className="input" defaultValue="Arjun" /></div>
                <div><label className="label">Last Name</label><input type="text" className="input" defaultValue="Mehta" /></div>
                <div style={{ gridColumn: '1 / -1' }}><label className="label">Email</label><input type="email" className="input" defaultValue="arjun.m@example.com" /></div>
                <div style={{ gridColumn: '1 / -1' }}><label className="label">Phone</label><input type="tel" className="input" defaultValue="+91 98765 43210" /></div>
              </div>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 20 }}>Payment Method</h3>
              <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Mock Payment Options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, border: '2px solid var(--color-teal)', borderRadius: 'var(--radius-md)', background: 'rgba(42,157,143,0.05)', cursor: 'pointer' }}>
                    <input type="radio" name="payment" defaultChecked />
                    <span style={{ fontWeight: 600 }}>Credit / Debit Card</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                    <input type="radio" name="payment" />
                    <span style={{ fontWeight: 600 }}>UPI (GPay, PhonePe)</span>
                  </label>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div><label className="label">Card Number</label><input type="text" className="input" placeholder="0000 0000 0000 0000" required /></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div><label className="label">Expiry (MM/YY)</label><input type="text" className="input" placeholder="MM/YY" required /></div>
                    <div><label className="label">CVV</label><input type="password" className="input" placeholder="•••" required /></div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" disabled={processing} style={{ marginTop: 16 }}>
                  {processing ? 'Processing Payment...' : `Pay ${formatCurrency(24400)} & Confirm`}
                </button>
                <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <span>🔒</span> Guaranteed secure checkout powered by Razorpay
                </div>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div>
            <div className="card" style={{ position: 'sticky', top: 100 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 20 }}>Booking Summary</h3>
              
              <div style={{ display: 'flex', gap: 16, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ width: 80, height: 80, borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)' }} />
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 4 }}>Serenity Villa</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Coorg, Karnataka</p>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-gold)', marginTop: 4 }}>★ 4.9 (124 reviews)</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Dates</span>
                  <span style={{ fontWeight: 600 }}>Oct 15 - Oct 17</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Guests</span>
                  <span style={{ fontWeight: 600 }}>2 Guests</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{formatCurrency(11500)} x 2 nights</span>
                  <span>{formatCurrency(23000)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Platform Fee</span>
                  <span>{formatCurrency(1400)}</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Total (INR)</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-teal)' }}>{formatCurrency(24400)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 1023px) {
          .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
