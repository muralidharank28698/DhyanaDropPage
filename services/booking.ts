import { fetchApi } from './api';

export const createBooking = async (bookingData: any) => {
  // return fetchApi('/bookings', { method: 'POST', body: JSON.stringify(bookingData) });
  return Promise.resolve({ success: true, bookingId: 'B-12345' });
};

export const getBookings = async (userId: string) => {
  return Promise.resolve([]);
};
