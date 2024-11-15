import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:8000/api';  // Use env variable for API URL

export default {
  async login(email, password) {
    try {
      const response = await axios.post(`${apiUrl}/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      // Check if error.response exists to avoid possible errors without response
      throw error.response ? error.response.data : { message: 'Network error or API unreachable' };
    }
  },
  
  async register(name, email, password) {
    try {
      const response = await axios.post(`${apiUrl}/register`, { name, email, password });
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      // Check if error.response exists
      throw error.response ? error.response.data : { message: 'Network error or API unreachable' };
    }
  },
  
  logout() {
    localStorage.removeItem('token');
  },
  
  async getUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      throw { message: 'No token found, please login.' };
    }

    try {
      const response = await axios.get(`${apiUrl}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error or API unreachable' };
    }
  },
};
