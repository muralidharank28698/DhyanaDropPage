export function Spinner() {
  return (
    <div style={{ width: 24, height: 24, borderRadius: '50%', border: '3px solid var(--border-color)', borderTopColor: 'var(--color-teal)', animation: 'spin 1s linear infinite' }}>
      <style jsx>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
