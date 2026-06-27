// ═══════════════════════════════════════════════════════════════
// DhyanaStays — Mock Data for Development
// ═══════════════════════════════════════════════════════════════

import type { Property, Booking, Review, Experience, Event, InvestorMetrics, RevenueDistribution } from './types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 'prop-1', name: 'Serenity Villa', location: 'Coorg, Karnataka', destination: 'Coorg',
    description: 'A luxurious hilltop villa surrounded by coffee plantations with panoramic valley views.',
    images: ['/images/prop1.jpg'], pricePerNight: 8500, rating: 4.9, reviewCount: 124,
    amenities: ['Wi-Fi', 'Pool', 'Mountain View', 'Fireplace', 'BBQ', 'Parking'],
    maxGuests: 8, bedrooms: 3, bathrooms: 3, type: 'villa', featured: true,
    coordinates: { lat: 12.3375, lng: 75.8069 },
  },
  {
    id: 'prop-2', name: 'Bamboo Treehouse', location: 'Wayanad, Kerala', destination: 'Wayanad',
    description: 'An enchanting treehouse nestled high in the canopy with sunrise views over misty hills.',
    images: ['/images/prop2.jpg'], pricePerNight: 6200, rating: 4.8, reviewCount: 89,
    amenities: ['Wi-Fi', 'Nature Walk', 'Bird Watching', 'Campfire', 'Organic Meals'],
    maxGuests: 4, bedrooms: 1, bathrooms: 1, type: 'treehouse', featured: true,
    coordinates: { lat: 11.6854, lng: 76.132 },
  },
  {
    id: 'prop-3', name: 'Heritage Farmhouse', location: 'Coonoor, Tamil Nadu', destination: 'Coonoor',
    description: 'A restored colonial-era farmhouse amidst rolling tea estates in the Nilgiris.',
    images: ['/images/prop3.jpg'], pricePerNight: 12000, rating: 4.95, reviewCount: 67,
    amenities: ['Wi-Fi', 'Tea Garden', 'Library', 'Chef', 'Yoga Deck', 'Fireplace'],
    maxGuests: 10, bedrooms: 4, bathrooms: 4, type: 'farmhouse', featured: true,
    coordinates: { lat: 11.3530, lng: 76.7959 },
  },
  {
    id: 'prop-4', name: 'Lakeside Cottage', location: 'Munnar, Kerala', destination: 'Munnar',
    description: 'A cozy cottage on the edge of a pristine lake surrounded by lush green tea plantations.',
    images: ['/images/prop4.jpg'], pricePerNight: 5500, rating: 4.7, reviewCount: 156,
    amenities: ['Wi-Fi', 'Lake View', 'Kayaking', 'Bonfire', 'Garden'],
    maxGuests: 6, bedrooms: 2, bathrooms: 2, type: 'cottage', featured: false,
    coordinates: { lat: 10.0889, lng: 77.0595 },
  },
  {
    id: 'prop-5', name: 'Mountain Retreat', location: 'Manali, Himachal Pradesh', destination: 'Manali',
    description: 'A premium alpine chalet with glass walls offering 180° views of snow-capped Himalayan peaks.',
    images: ['/images/prop5.jpg'], pricePerNight: 15000, rating: 4.92, reviewCount: 43,
    amenities: ['Wi-Fi', 'Hot Tub', 'Snow View', 'Fireplace', 'Chef', 'Helipad'],
    maxGuests: 6, bedrooms: 3, bathrooms: 3, type: 'villa', featured: true,
    coordinates: { lat: 32.2396, lng: 77.1887 },
  },
  {
    id: 'prop-6', name: 'Beachfront Cabana', location: 'Gokarna, Karnataka', destination: 'Gokarna',
    description: 'An intimate beachfront cabana steps away from a private stretch of golden sand.',
    images: ['/images/prop6.jpg'], pricePerNight: 7200, rating: 4.6, reviewCount: 98,
    amenities: ['Wi-Fi', 'Beach Access', 'Hammock', 'Sunset Deck', 'Surfboard'],
    maxGuests: 4, bedrooms: 1, bathrooms: 1, type: 'cottage', featured: false,
    coordinates: { lat: 14.5479, lng: 74.3188 },
  },
];

export const MOCK_BOOKINGS: Booking[] = [
  { id: 'bk-1', propertyId: 'prop-1', propertyName: 'Serenity Villa', guestId: 'g-1', guestName: 'Arjun Mehta', checkIn: '2026-07-15', checkOut: '2026-07-18', guests: 4, totalAmount: 25500, status: 'confirmed', createdAt: '2026-06-20' },
  { id: 'bk-2', propertyId: 'prop-3', propertyName: 'Heritage Farmhouse', guestId: 'g-1', guestName: 'Arjun Mehta', checkIn: '2026-08-01', checkOut: '2026-08-05', guests: 6, totalAmount: 48000, status: 'pending', createdAt: '2026-06-25' },
  { id: 'bk-3', propertyId: 'prop-2', propertyName: 'Bamboo Treehouse', guestId: 'g-2', guestName: 'Priya Sharma', checkIn: '2026-06-10', checkOut: '2026-06-12', guests: 2, totalAmount: 12400, status: 'completed', createdAt: '2026-06-01' },
];

export const MOCK_REVIEWS: Review[] = [
  { id: 'r-1', propertyId: 'prop-1', guestName: 'Ananya R.', rating: 5, comment: 'Absolutely magical! The views from the villa were breathtaking. The attention to detail and the warmth of the staff made it unforgettable.', createdAt: '2026-06-15' },
  { id: 'r-2', propertyId: 'prop-1', guestName: 'Vikram S.', rating: 4.5, comment: 'Beautiful property, perfectly maintained. The coffee plantation walk was a highlight. Would definitely recommend for families.', createdAt: '2026-06-10' },
  { id: 'r-3', propertyId: 'prop-2', guestName: 'Meera K.', rating: 5, comment: 'Living in a treehouse was a childhood dream come true. Waking up to birdsong and misty mountains — pure magic.', createdAt: '2026-06-08' },
];

export const MOCK_EXPERIENCES: Experience[] = [
  { id: 'exp-1', title: 'Coffee Plantation Walk', description: 'Guided walk through a working coffee plantation with tasting session.', image: '/images/exp1.jpg', price: 1200, duration: '2 hours', rating: 4.8, category: 'Culture', location: 'Coorg' },
  { id: 'exp-2', title: 'Sunrise Trek', description: 'Early morning trek to a mountain peak for panoramic sunrise views.', image: '/images/exp2.jpg', price: 800, duration: '3 hours', rating: 4.9, category: 'Adventure', location: 'Wayanad' },
  { id: 'exp-3', title: 'Ayurvedic Wellness Session', description: 'Traditional Ayurvedic massage and wellness therapy.', image: '/images/exp3.jpg', price: 2500, duration: '90 minutes', rating: 4.7, category: 'Wellness', location: 'Munnar' },
  { id: 'exp-4', title: 'Local Cooking Class', description: 'Learn to cook authentic regional cuisine with local ingredients.', image: '/images/exp4.jpg', price: 1500, duration: '3 hours', rating: 4.9, category: 'Food', location: 'Coonoor' },
];

export const MOCK_EVENTS: Event[] = [
  { id: 'ev-1', title: 'Monsoon Music Festival', description: 'Live music performances amidst nature.', image: '/images/ev1.jpg', date: '2026-08-15', time: '5:00 PM', venue: 'Coorg Open Air Arena', price: 2000, category: 'Music' },
  { id: 'ev-2', title: 'Pottery Workshop', description: 'Hands-on pottery with local artisans.', image: '/images/ev2.jpg', date: '2026-07-20', time: '10:00 AM', venue: 'Wayanad Art Village', price: 800, category: 'Workshop' },
  { id: 'ev-3', title: 'Full Moon Yoga Retreat', description: 'Overnight yoga and meditation under the stars.', image: '/images/ev3.jpg', date: '2026-07-25', time: '6:00 PM', venue: 'Munnar Hilltop', price: 3500, category: 'Wellness' },
];

export const MOCK_INVESTOR_METRICS: InvestorMetrics = {
  totalRevenue: 2450000,
  occupancyRate: 78.5,
  revPAR: 6800,
  totalBookings: 342,
  activeProperties: 3,
  monthlyTrend: [
    { month: 'Jan', revenue: 180000, occupancy: 65 },
    { month: 'Feb', revenue: 220000, occupancy: 72 },
    { month: 'Mar', revenue: 310000, occupancy: 85 },
    { month: 'Apr', revenue: 280000, occupancy: 78 },
    { month: 'May', revenue: 190000, occupancy: 62 },
    { month: 'Jun', revenue: 270000, occupancy: 74 },
  ],
};

export const MOCK_REVENUE_DISTRIBUTIONS: RevenueDistribution[] = [
  { id: 'rd-1', month: 'June 2026', grossRevenue: 270000, platformCommission: 32400, managementFee: 15000, taxDeduction: 22260, netDistribution: 200340, status: 'paid' },
  { id: 'rd-2', month: 'May 2026', grossRevenue: 190000, platformCommission: 22800, managementFee: 15000, taxDeduction: 15220, netDistribution: 136980, status: 'paid' },
  { id: 'rd-3', month: 'April 2026', grossRevenue: 280000, platformCommission: 33600, managementFee: 15000, taxDeduction: 23140, netDistribution: 208260, status: 'paid' },
];
