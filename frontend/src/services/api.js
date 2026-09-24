import axios from 'axios';

let rawUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';
rawUrl = rawUrl.trim().replace(/\/+$/, '');
if (!rawUrl.endsWith('/api')) {
  rawUrl += '/api';
}
const API_BASE_URL = rawUrl;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000,
});

// Automatic retry interceptor for network errors or server cold-start 5xx / timeouts
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    if (!config) return Promise.reject(error);

    config.__retryCount = config.__retryCount || 0;
    const maxRetries = 2;
    const isNetworkOr5xx = !error.response || (error.response.status >= 500 && error.response.status <= 599);

    if (config.__retryCount < maxRetries && isNetworkOr5xx) {
      config.__retryCount += 1;
      const delay = config.__retryCount * 1200;
      await new Promise((resolve) => setTimeout(resolve, delay));
      return apiClient(config);
    }

    return Promise.reject(error);
  }
);

export const getProfile = async () => {
  const response = await apiClient.get('/profile/');
  return response.data;
};

export const getSkills = async () => {
  const response = await apiClient.get('/skills/');
  return response.data;
};

export const getProjects = async () => {
  const response = await apiClient.get('/projects/');
  return response.data;
};

export const getExperience = async () => {
  const response = await apiClient.get('/experience/');
  return response.data;
};

export const getEducation = async () => {
  const response = await apiClient.get('/education/');
  return response.data;
};

export const getCertifications = async () => {
  const response = await apiClient.get('/certifications/');
  return response.data;
};

export const getSocialLinks = async () => {
  const response = await apiClient.get('/social-links/');
  return response.data;
};

export const sendContactMessage = async (messageData) => {
  const response = await apiClient.post('/contact/', messageData);
  return response.data;
};

export const getDownloadResumeUrl = () => {
  return `${API_BASE_URL}/resume/download/`;
};

export default apiClient;
