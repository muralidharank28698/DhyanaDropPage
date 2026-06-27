// ═══════════════════════════════════════════════════════════════
// DhyanaStays — Brand Constants & Configuration
// ═══════════════════════════════════════════════════════════════

export const BRAND = {
  name: 'Dhyana Stays',
  domain: 'DhyanaStays.com',
  tagline: 'Experience Beyond Stay',
  category: 'AI-Powered Curated Hospitality Ecosystem',
  copyright: `© ${new Date().getFullYear()} DhyanaStays. All Rights Reserved.`,
} as const;

export const NAV_LINKS = [
  { label: 'Explore', href: '/properties' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'AI Planner', href: '/ai-planner' },
  { label: 'Events', href: '/events' },
  { label: 'Invest', href: '/invest' },
  { label: 'Partner', href: '/partner' },
] as const;

export const FOOTER_SECTIONS = [
  {
    title: 'About',
    links: [
      { label: 'Mission', href: '/#mission-vision' },
      { label: 'Vision', href: '/#mission-vision' },
      { label: 'Team', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Invest',
    links: [
      { label: 'Investor Overview', href: '/invest' },
      { label: 'Investment Model', href: '/invest' },
      { label: 'Register Interest', href: '/invest' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  {
    title: 'Partner',
    links: [
      { label: 'Property Owners', href: '/partner' },
      { label: 'Partner With Us', href: '/partner' },
      { label: 'Architecture Services', href: '/architecture' },
      { label: 'Hospitality Management', href: '/hospitality' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Booking', href: '/properties' },
      { label: 'AI Trip Planner', href: '/ai-planner' },
      { label: 'Experiences', href: '/experiences' },
      { label: 'Events', href: '/events' },
      { label: 'Transport', href: '/transport' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Cancellation Policy', href: '/cancellation' },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/dhyanastays', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/dhyanastays', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://youtube.com/@dhyanastays', icon: 'youtube' },
] as const;

export const PROBLEM_STEPS = [
  { app: 'Booking Website', desc: 'Search and reserve accommodation', icon: '🏨' },
  { app: 'Google Maps', desc: 'Navigate to property and explore', icon: '🗺️' },
  { app: 'Instagram / YouTube', desc: 'Discover experiences and food spots', icon: '📱' },
  { app: 'Restaurant Apps', desc: 'Discover, reserve, and pay for meals', icon: '🍽️' },
  { app: 'Transport Apps', desc: 'Book cabs, auto-rickshaws, or bikes', icon: '🚕' },
  { app: 'Event Websites', desc: 'Find and book local events', icon: '🎪' },
  { app: 'Local Guides', desc: 'Hire guides manually', icon: '🧭' },
  { app: 'Emergency Numbers', desc: 'Search for hospitals and police', icon: '🆘' },
  { app: 'Payment Gateways', desc: 'Separate transactions per platform', icon: '💳' },
] as const;

export const SOLUTION_ITEMS = [
  { title: 'Booking', desc: 'Discover, compare, and reserve curated stays directly.', icon: '🏡' },
  { title: 'AI Trip Planner', desc: 'Personalised itineraries based on your preferences.', icon: '🤖' },
  { title: 'Curated Experiences', desc: 'Authentic local experiences curated by community.', icon: '✨' },
  { title: 'Local Food', desc: 'Vetted local restaurants and cloud kitchens.', icon: '🍜' },
  { title: 'Transport', desc: 'Taxis, bikes, and airport transfers in one tap.', icon: '🚗' },
  { title: 'Emergency SOS', desc: 'One-tap access to emergency contacts and support.', icon: '🆘' },
  { title: 'Events', desc: 'Local festivals, workshops, and community events.', icon: '🎭' },
  { title: 'Investor Dashboard', desc: 'Real-time portfolio and revenue analytics.', icon: '📊' },
  { title: 'Hospitality Mgmt', desc: 'Professional operations for partner properties.', icon: '🏢' },
  { title: 'Property Mgmt', desc: 'End-to-end tools for property owners.', icon: '🔑' },
] as const;

export const CORE_VALUES = [
  { title: 'Authenticity', desc: 'Every stay and experience is genuine and true to its local context.', icon: '💎' },
  { title: 'Sustainability', desc: 'Environmental and economic sustainability in every decision.', icon: '🌿' },
  { title: 'Innovation', desc: 'Continuous improvement through AI, technology, and design.', icon: '💡' },
  { title: 'Community', desc: 'Local communities are partners, not bystanders.', icon: '🤝' },
  { title: 'Design Excellence', desc: 'Aesthetic quality is non-negotiable across the platform.', icon: '🎨' },
  { title: 'Guest Happiness', desc: "Guest joy and memory-making are the ultimate measure.", icon: '😊' },
  { title: 'Trust', desc: 'Complete trust with money, properties, and experiences.', icon: '🛡️' },
  { title: 'Transparency', desc: 'Open communication about financials and operations.', icon: '🔍' },
] as const;

export const REVENUE_STREAMS = [
  { name: 'Booking Commission', rate: '8%–15%', desc: 'Commission on every booking', phase: 1 },
  { name: 'Hospitality Mgmt Fee', rate: 'Fixed + Bonus', desc: 'Monthly management fee', phase: 1 },
  { name: 'Property Development', rate: 'Project-based', desc: 'Co-developed properties', phase: 1 },
  { name: 'Architecture Consult', rate: 'Project-based', desc: 'Design services for owners', phase: 1 },
  { name: 'Experience Commission', rate: '10%–20%', desc: 'Tours, workshops, events', phase: 2 },
  { name: 'Event Commission', rate: '10%–15%', desc: 'Event tickets and bookings', phase: 2 },
  { name: 'Food Commission', rate: '12%–18%', desc: 'Restaurant and cloud kitchen orders', phase: 2 },
  { name: 'Transport Commission', rate: '10%–15%', desc: 'Taxi, bike, and transfers', phase: 2 },
  { name: 'SaaS Licensing', rate: 'Subscription', desc: 'Platform tech licensing', phase: 3 },
  { name: 'AI Services', rate: 'API-based', desc: 'AI engine as a service', phase: 3 },
] as const;

export const TRAVELLER_JOURNEY = [
  { stage: 'Search', desc: 'AI-powered search by destination, date, or mood', icon: '🔍' },
  { stage: 'Book', desc: 'Real-time availability and secure payment', icon: '📅' },
  { stage: 'AI Itinerary', desc: 'Personalised day-by-day travel plan', icon: '🤖' },
  { stage: 'Transportation', desc: 'Book cabs, bikes, and airport transfers', icon: '🚗' },
  { stage: 'Check-in', desc: 'Digital QR code or in-person check-in', icon: '✅' },
  { stage: 'Digital Guide', desc: 'In-app property manual and local tips', icon: '📖' },
  { stage: 'Explore', desc: 'Book local experiences and workshops', icon: '🌄' },
  { stage: 'Food', desc: 'Order from curated local restaurants', icon: '🍽️' },
  { stage: 'Events', desc: 'Discover local festivals and events', icon: '🎪' },
  { stage: 'SOS Support', desc: 'One-tap emergency assistance', icon: '🆘' },
  { stage: 'Rewards', desc: 'Earn points on every interaction', icon: '🏆' },
  { stage: 'Share Memories', desc: 'Review and share your journey', icon: '📸' },
] as const;

export const PROPERTY_OWNER_JOURNEY = [
  { stage: 'Own Property', desc: 'Land parcel, existing structure, or property to list' },
  { stage: 'Partner with Dhyana', desc: 'Register as a Property Partner on the platform' },
  { stage: 'Design', desc: 'Architecture team proposes a brand-aligned concept' },
  { stage: 'Construction', desc: 'Build or renovate to DhyanaStays specifications' },
  { stage: 'Listing', desc: 'Photographed, described, priced, and listed' },
  { stage: 'Operations', desc: 'Professional hospitality management takes over' },
  { stage: 'Guest Management', desc: 'Check-in, communication, and housekeeping' },
  { stage: 'Revenue', desc: 'Monthly revenue after commission deduction' },
  { stage: 'Reports', desc: 'Occupancy and revenue reports via Host Dashboard' },
] as const;

export const PLATFORM_STATS = [
  { value: 300, suffix: '+', label: 'Curated Properties', desc: 'Platform-managed and partner properties' },
  { value: 30, suffix: '', label: 'Premium Investor Units', desc: 'Direct partnership properties' },
  { value: 100000, suffix: '+', label: 'Target Users', desc: 'Registered travellers by Phase 3' },
  { value: 50, suffix: '+', label: 'Hospitality Partners', desc: 'Verified management partners' },
  { value: 100, suffix: '+', label: 'Experience Partners', desc: 'Curated experience providers' },
  { value: 100, suffix: '%', label: 'Direct Booking Vision', desc: 'Zero OTA dependency target' },
] as const;

export const ROADMAP_PHASES = [
  {
    phase: 1,
    title: 'Foundation & Launch',
    status: 'active' as const,
    milestones: [
      '20–30 curated properties',
      'Full booking engine with payments',
      'Investor & Host dashboards',
      'Basic AI Trip Planner prototype',
      'Marketing website launch',
      'Mobile App MVP',
    ],
  },
  {
    phase: 2,
    title: 'Ecosystem Expansion',
    status: 'upcoming' as const,
    milestones: [
      '100 properties across 10+ destinations',
      'Full AI Trip Planner',
      'Events, Transport, Food integration',
      'Membership & loyalty programme',
      'Corporate retreats booking',
      'Digital contactless check-in',
    ],
  },
  {
    phase: 3,
    title: 'Scale & Intelligence',
    status: 'future' as const,
    milestones: [
      '300+ platform-managed properties',
      'AI Concierge (24/7)',
      'Smart locks & IoT room controls',
      'Experience & Community Marketplace',
      'SaaS licensing',
      'International expansion',
    ],
  },
] as const;

export const IMPACT_ITEMS = [
  { title: 'Sustainable Tourism', desc: 'Eco-construction, solar power, and waste management standards.', color: 'green' },
  { title: 'Employment Generation', desc: 'Direct jobs for hospitality staff, guides, drivers, and artisans.', color: 'blue' },
  { title: 'Local Business Support', desc: 'Channelling traveller spend into local economies.', color: 'purple' },
  { title: 'Rural Tourism Growth', desc: 'Driving tourism to off-the-beaten-path destinations.', color: 'orange' },
  { title: 'Architecture-Led Hospitality', desc: 'Culturally sensitive, beautiful architecture.', color: 'teal' },
  { title: 'Investor Wealth Creation', desc: '50:50 revenue sharing for passive income.', color: 'gold' },
  { title: 'Community Development', desc: 'Revenue contribution to education and healthcare.', color: 'red' },
] as const;

export const DIFFERENTIATORS = [
  { feature: 'Curation', us: '100% curated, quality-controlled stays', them: 'Open marketplace — quality varies' },
  { feature: 'AI Features', us: 'AI Trip Planner, Smart Itinerary, AI Concierge', them: 'Basic search and filter only' },
  { feature: 'Ecosystem', us: 'Stay + Food + Transport + Events + SOS', them: 'Accommodation only' },
  { feature: 'Architecture', us: 'Design-first properties with aesthetics', them: 'No design standards' },
  { feature: 'Investment', us: '50:50 revenue sharing with transparency', them: 'No investor participation' },
  { feature: 'Community', us: 'Local business integration as partners', them: 'No community engagement' },
  { feature: 'Direct Booking', us: 'Platform-native — no OTA dependency', them: 'OTA-dependent; high commission' },
  { feature: 'Personalisation', us: 'Learns from every interaction', them: 'Generic recommendations' },
] as const;
