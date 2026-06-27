export default function GuestBookings() {
  return (
    <div className="animate-fade-in">
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: 24 }}>My Bookings</h1>
      <div className="card">
        <p style={{ color: 'var(--text-secondary)' }}>You have 1 upcoming booking and 2 past bookings.</p>
      </div>
    </div>
  );
}
