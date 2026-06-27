export function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-overlay)', backdropFilter: 'blur(4px)' }}>
      <div className="card animate-fade-up" style={{ minWidth: 400, position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, fontSize: '1.2rem', color: 'var(--text-tertiary)' }}>✕</button>
        {children}
      </div>
    </div>
  );
}
