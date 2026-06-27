'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState('guest');
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock registration and redirect
    setTimeout(() => {
      router.push(`/${role}`);
    }, 1500);
  };

  return (
    <div className="card animate-fade-up" style={{ width: '100%', maxWidth: 480, padding: '40px 32px' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: 8 }}>Join DhyanaStays</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Create an account to explore, invest, or host.</p>
      </div>

      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Role Selection Tabs */}
        <div style={{ display: 'flex', background: 'var(--bg-secondary)', padding: 4, borderRadius: 'var(--radius-md)' }}>
          {['guest', 'host', 'investor'].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              style={{
                flex: 1, padding: '8px 12px', fontSize: '0.85rem', fontWeight: 600,
                borderRadius: 'var(--radius-sm)', textTransform: 'capitalize',
                background: role === r ? 'var(--bg-card)' : 'transparent',
                color: role === r ? 'var(--text-primary)' : 'var(--text-secondary)',
                boxShadow: role === r ? 'var(--shadow-sm)' : 'none',
                transition: 'all var(--transition-fast)',
              }}
            >
              {r}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label className="label">First Name</label>
            <input type="text" className="input" placeholder="John" required />
          </div>
          <div>
            <label className="label">Last Name</label>
            <input type="text" className="input" placeholder="Doe" required />
          </div>
        </div>

        <div>
          <label className="label">Email Address</label>
          <input type="email" className="input" placeholder="you@email.com" required />
        </div>

        <div>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Min. 8 characters" required minLength={8} />
        </div>

        <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: 8 }} disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>
          By creating an account, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>

      <div style={{ textAlign: 'center', marginTop: 24, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        Already have an account?{' '}
        <Link href="/login" style={{ color: 'var(--color-teal)', fontWeight: 600 }}>Sign in</Link>
      </div>
    </div>
  );
}
