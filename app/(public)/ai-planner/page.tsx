'use client';

import { useState } from 'react';

export default function AITripPlannerPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 2500);
  };

  return (
    <div className="section animate-fade-in" style={{ paddingTop: 100, minHeight: '100vh', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {!result ? (
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span style={{ fontSize: '4rem', display: 'block', marginBottom: 16 }}>🤖</span>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: 12 }}>
                AI Trip Planner
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                Tell our AI what you want, and it will generate a minute-by-minute itinerary optimized for weather, crowds, and budget.
              </p>
            </div>

            <div className="glass-card">
              <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                
                {step === 1 && (
                  <div className="animate-fade-in">
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 20 }}>Where and when?</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div>
                        <label className="label">Destination</label>
                        <input className="input" placeholder="e.g., Coorg, Kerala, Goa" required autoFocus />
                      </div>
                      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 140px' }}>
                          <label className="label">Start Date</label>
                          <input type="date" className="input" required />
                        </div>
                        <div style={{ flex: '1 1 140px' }}>
                          <label className="label">End Date</label>
                          <input type="date" className="input" required />
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 16 }}>
                        <div style={{ flex: 1 }}>
                          <label className="label">Number of Guests</label>
                          <input type="number" min="1" className="input" defaultValue="2" required />
                        </div>
                      </div>
                      <button type="button" onClick={() => setStep(2)} className="btn btn-primary btn-lg" style={{ marginTop: 16 }}>
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-fade-in">
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 20 }}>What&apos;s your vibe?</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div>
                        <label className="label">Travel Style (Select multiple)</label>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
                          {['Relaxation', 'Adventure', 'Culture & History', 'Food & Dining', 'Nature', 'Nightlife', 'Luxury'].map(style => (
                            <label key={style} style={{ 
                              padding: '8px 16px', background: 'var(--bg-secondary)', 
                              border: '1px solid var(--border-color)', borderRadius: 'var(--radius-full)',
                              fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8
                            }}>
                              <input type="checkbox" /> {style}
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div style={{ marginTop: 8 }}>
                        <label className="label">Pace of trip</label>
                        <select className="input">
                          <option>Relaxed (1-2 activities per day)</option>
                          <option>Balanced (3-4 activities per day)</option>
                          <option>Fast-paced (See as much as possible)</option>
                        </select>
                      </div>

                      <div style={{ marginTop: 8 }}>
                        <label className="label">Extra Details for the AI</label>
                        <textarea className="input textarea" placeholder="E.g., I'm allergic to seafood, prefer walking over taxis, love specialty coffee..." />
                      </div>

                      <div style={{ display: 'flex', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
                        <button type="button" onClick={() => setStep(1)} className="btn btn-outline btn-lg" style={{ flex: '1 1 120px' }}>
                          ← Back
                        </button>
                        <button type="submit" className="btn btn-gold btn-lg" style={{ flex: '2 1 200px' }} disabled={loading}>
                          {loading ? 'AI is Generating...' : 'Generate Itinerary ✨'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
            
            {loading && (
              <div style={{ 
                position: 'fixed', inset: 0, zIndex: 1000, 
                background: 'rgba(10,22,40,0.8)', backdropFilter: 'blur(8px)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
              }}>
                <div style={{ width: 60, height: 60, border: '4px solid rgba(255,255,255,0.2)', borderTopColor: 'var(--color-teal)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                <h2 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginTop: 24, marginBottom: 8 }}>
                  Designing your perfect trip...
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Analyzing weather, checking availability, optimizing routes.</p>
                <style jsx>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </div>
            )}
          </div>
        ) : (
          /* Result View */
          <div className="animate-fade-in" style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, marginBottom: 32 }}>
              <div style={{ flex: '1 1 250px' }}>
                <span className="badge badge-gold" style={{ marginBottom: 12 }}>Generated by Dhyana AI</span>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 8vw, 2.5rem)', marginBottom: 8, wordBreak: 'break-word' }}>
                  Your Coorg Escape
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                  A balanced 3-day itinerary focusing on nature, relaxation, and local food.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="btn btn-outline" onClick={() => setResult(false)}>Start Over</button>
                <button className="btn btn-primary">Save to Profile</button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Day 1 */}
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--color-teal)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700 }}>
                    1
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Arrival & Serenity</h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Friday, 15 Oct</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingLeft: 24, borderLeft: '2px dashed var(--border-color)', marginLeft: 24 }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: -31, top: 4, width: 14, height: 14, borderRadius: '50%', background: 'var(--color-teal)' }} />
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-teal)', marginBottom: 4 }}>1:00 PM</div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>Check-in at Serenity Villa</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Settle into your premium hilltop villa. The AI has notified the host of your arrival time.</p>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: -31, top: 4, width: 14, height: 14, borderRadius: '50%', background: 'var(--color-gold)' }} />
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-gold)', marginBottom: 4 }}>4:00 PM</div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>Coffee Plantation Walk</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A guided walk through the surrounding estate. Estimated cost: ₹1,200.</p>
                    <button className="btn btn-outline btn-sm" style={{ marginTop: 12 }}>Book this experience</button>
                  </div>
                  
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: -31, top: 4, width: 14, height: 14, borderRadius: '50%', background: '#E76F51' }} />
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#E76F51', marginBottom: 4 }}>7:30 PM</div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>Dinner at The Coorg Kitchen</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Authentic Kodava cuisine. AI recommendation: Try the Pandi Curry (based on your preference for local spicy food).</p>
                    <button className="btn btn-outline btn-sm" style={{ marginTop: 12 }}>Reserve Table</button>
                  </div>
                </div>
              </div>

              {/* Day 2 Stub */}
              <div className="card" style={{ opacity: 0.7, padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 700 }}>2</div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Nature & Wellness</h3>
                  </div>
                  <button className="btn btn-ghost">Expand ↓</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
