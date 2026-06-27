export function Toast({ message, type = 'info' }: { message: string, type?: 'success' | 'error' | 'info' }) {
  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, padding: '16px 24px', background: 'var(--bg-card)', borderLeft: '4px solid', borderColor: type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : 'var(--color-teal)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}>
      {message}
    </div>
  );
}
