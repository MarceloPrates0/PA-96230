import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3000', // Replace with your API base URL
});

export default api;