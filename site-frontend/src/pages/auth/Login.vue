<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 class="text-2xl font-bold mb-6">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" type="email" class="input-field" placeholder="Enter your email" required />
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="password" type="password" class="input-field" placeholder="Enter your password" required />
        </div>
        <button type="submit" class="primary-button w-full">Login</button>
      </form>
      <p class="mt-4 text-sm">
        Don't have an account? <router-link to="/register" class="text-blue-500">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // Import Axios for making HTTP requests

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8000/api/login', {
          email: this.email,
          password: this.password,
        });
        
        // Assuming you store the token on successful login
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
        this.$router.push({ name: 'DashboardHome' });
      } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed, please check your credentials.');
      }
    },
  },
}
</script>

<style scoped>
.input-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
}

.primary-button {
  background-color: #4299e1;
  color: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  text-align: center;
  cursor: pointer;
}

.primary-button:hover {
  background-color: #2b6cb0;
}
</style>
