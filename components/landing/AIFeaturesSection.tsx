'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AIFeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    { icon: '🤖', title: 'AI Trip Planner', desc: 'Generate personalised day-by-day itineraries based on your interests, budget, and travel dates.' },
    { icon: '🌤️', title: 'Weather-Smart Suggestions', desc: 'AI adjusts recommendations based on real-time and forecasted weather conditions.' },
    { icon: '👥', title: 'Crowd Predictions', desc: 'Avoid crowds with AI-predicted peak and off-peak times for attractions.' },
    { icon: '⏱️', title: 'Route Optimisation', desc: 'Activities sequenced to minimise travel time between locations.' },
    { icon: '💸', title: 'Budget Planning', desc: 'Estimated costs for every activity, meal, and transport segment.' },
    { icon: '🗺️', title: 'Hidden Gems', desc: 'Discover nearby under-visited attractions tailored to your interests.' },
    { icon: '🍜', title: 'Restaurant Picks', desc: 'Curated dining based on cuisine, dietary needs, and proximity.' },
    { icon: '🎉', title: 'Festival Alerts', desc: 'Auto-discover local festivals and events during your travel dates.' },
    { icon: '💬', title: 'Travel Assistant', desc: 'In-app AI chatbot for questions, recommendations, and bookings.' },
  ];

  return (
    <section id="ai-features" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        <span className="badge badge-teal" style={{
          display: 'block', width: 'fit-content', margin: '0 auto 20px',
          opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease',
        }}>
          Powered by AI
        </span>
        <h2 className="section-title" style={isVisible ? { animation: 'fadeUp 0.6s ease both' } : { opacity: 0 }}>
          Intelligence That Travels With You
        </h2>
        <p className="section-subtitle" style={isVisible ? { animation: 'fadeUp 0.6s ease 0.2s both' } : { opacity: 0 }}>
          Our AI engine powers personalised recommendations, smart itineraries, and predictive planning — making every trip uniquely yours.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {features.map((f, i) => (
            <div key={f.title} className="card" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 70}ms`,
            }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}>{f.icon}</span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-body)' }}>
                {f.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
