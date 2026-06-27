import { fetchApi } from './api';

export const getProperties = async (filters: any) => {
  // return fetchApi('/properties');
  return Promise.resolve([]);
};

export const getPropertyById = async (id: string) => {
  // return fetchApi(`/properties/${id}`);
  return Promise.resolve(null);
};
