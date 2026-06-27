export default function HostCalendar() {
  return (
    <div className="animate-fade-in">
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: 24 }}>Bookings Calendar</h1>
      <div className="card" style={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Interactive calendar view loads here.</p>
      </div>
    </div>
  );
}
