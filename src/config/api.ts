export const API_CONFIG = {
  BASE_URL: 'https://www.technovimal.in/apps/fast-english',
  API_KEY: 'd2b078b4-b1e8-4348-87f2-31bf58c8fc5b',
  ASSETS_PATH: '/assets',
} as const;

export const getApiUrl = (endpoint: string) => `${API_CONFIG.BASE_URL}${endpoint}`;
export const getAssetUrl = (path: string) => `${API_CONFIG.BASE_URL}${API_CONFIG.ASSETS_PATH}/${path}`; 