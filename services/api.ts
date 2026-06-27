export const fetchApi = async (endpoint: string, options?: RequestInit) => {
  // Base configuration for API requests
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  };
  
  // return fetch(`/api${endpoint}`, config).then(res => res.json());
  return Promise.resolve({ data: 'mock response' });
};
