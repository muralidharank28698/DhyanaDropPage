// ═══════════════════════════════════════════════════════════════
// DhyanaStays — TypeScript Type Definitions
// ═══════════════════════════════════════════════════════════════

export type Theme = 'light' | 'dark';

export type UserRole = 'guest' | 'host' | 'investor' | 'admin' | 'superadmin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  destination: string;
  description: string;
  images: string[];
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  amenities: string[];
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  type: 'villa' | 'cottage' | 'treehouse' | 'farmhouse' | 'apartment';
  featured: boolean;
  coordinates: { lat: number; lng: number };
}

export interface Booking {
  id: string;
  propertyId: string;
  propertyName: string;
  guestId: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalAmount: number;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  createdAt: string;
}

export interface Review {
  id: string;
  propertyId: string;
  guestName: string;
  guestAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Itinerary {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  days: ItineraryDay[];
}

export interface ItineraryDay {
  day: number;
  date: string;
  activities: ItineraryActivity[];
}

export interface ItineraryActivity {
  time: string;
  title: string;
  description: string;
  location: string;
  estimatedCost: number;
  category: 'attraction' | 'food' | 'transport' | 'experience' | 'rest';
  aiReason?: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  category: string;
  location: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  price: number;
  category: string;
}

export interface InvestorMetrics {
  totalRevenue: number;
  occupancyRate: number;
  revPAR: number;
  totalBookings: number;
  activeProperties: number;
  monthlyTrend: { month: string; revenue: number; occupancy: number }[];
}

export interface RevenueDistribution {
  id: string;
  month: string;
  grossRevenue: number;
  platformCommission: number;
  managementFee: number;
  taxDeduction: number;
  netDistribution: number;
  status: 'paid' | 'pending' | 'processing';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: 'traveller' | 'investor' | 'property-owner' | 'other';
  message: string;
}

export interface InvestorEnquiry {
  name: string;
  email: string;
  phone: string;
  investmentBudget: number;
  locationPreference: string;
  message?: string;
}
