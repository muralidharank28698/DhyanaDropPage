import { fetchApi } from './api';

export const login = async (credentials: any) => {
  // return fetchApi('/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
  return Promise.resolve({ token: 'mock-token', user: { role: 'guest' } });
};

export const logout = async () => {
  return Promise.resolve({ success: true });
};
