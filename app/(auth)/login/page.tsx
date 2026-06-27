'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('guest');
  const [loading, setLoading] = useState(false);

  // Force scroll to top to prevent Next.js smooth scroll retention bugs
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock authentication and role-based redirect
    setTimeout(() => {
      if (role === 'guest') router.push('/guest');
      else if (role === 'host') router.push('/host');
      else if (role === 'investor') router.push('/investor');
      else if (role === 'admin') router.push('/admin');
    }, 1000);
  };

  return (
    <div className="card animate-fade-up" style={{ width: '100%', maxWidth: 440, padding: '40px 32px' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: 8 }}>Welcome Back</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Sign in to your DhyanaStays account.</p>
      </div>

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <label className="label">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="you@email.com"
            required
          />
        </div>
        <div>
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Demo Role Selector */}
        <div>
          <label className="label">Login As (Demo)</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="input" style={{ cursor: 'pointer' }}>
            <option value="guest">Traveller / Guest</option>
            <option value="host">Property Host</option>
            <option value="investor">Investor</option>
            <option value="admin">Platform Admin</option>
          </select>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: 'var(--text-secondary)' }}>
            <input type="checkbox" /> Remember me
          </label>
          <Link href="#" style={{ color: 'var(--color-teal)', fontWeight: 600 }}>Forgot password?</Link>
        </div>

        <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: 8 }} disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: 24, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        Don&apos;t have an account?{' '}
        <Link href="/register" style={{ color: 'var(--color-teal)', fontWeight: 600 }}>Create one</Link>
      </div>
    </div>
  );
}
