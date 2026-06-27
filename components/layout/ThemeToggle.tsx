'use client';

import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return <div style={{ width: 40, height: 40 }} />;

  return (
    <button
      onClick={toggleTheme}
      className="btn-ghost"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-full)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        transition: 'all var(--transition-base)',
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
