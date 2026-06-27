export default function AboutPage() {
  return (
    <div className="section" style={{ paddingTop: 100, minHeight: '80vh' }}>
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: 24 }}>About DhyanaStays</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 800 }}>
          DhyanaStays is India&apos;s first AI-powered curated hospitality ecosystem.
          Our mission is to bridge the gap between fragmented property inventory and premium traveler experiences while offering a 50:50 transparent revenue sharing model to investors.
        </p>
      </div>
    </div>
  );
}
