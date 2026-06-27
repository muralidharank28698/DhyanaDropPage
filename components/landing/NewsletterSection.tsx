export default function NewsletterSection() {
  return (
    <section className="section" style={{ background: 'var(--color-navy)', color: 'white', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: 16 }}>Stay Updated</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>Subscribe for curated travel inspiration.</p>
        <div style={{ display: 'flex', gap: 12, maxWidth: 400, margin: '0 auto' }}>
          <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '12px 16px', borderRadius: 'var(--radius-md)', border: 'none' }} />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
