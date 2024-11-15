<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 class="text-2xl font-bold mb-6">Register</h1>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Name</label>
          <input v-model="name" type="text" class="input-field" placeholder="Enter your name" required />
          <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" type="email" class="input-field" placeholder="Enter your email" required />
          <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="password" type="password" class="input-field" placeholder="Enter your password" required />
          <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input v-model="password_confirmation" type="password" class="input-field" placeholder="Confirm your password" required />
          <p v-if="errors.password_confirmation" class="text-red-500 text-sm">{{ errors.password_confirmation }}</p>
        </div>
        <button type="submit" class="primary-button w-full">Register</button>
      </form>

      <p v-if="message" class="mt-4 text-sm text-green-500">{{ message }}</p>
      <p v-if="errorMessage" class="mt-4 text-sm text-red-500">{{ errorMessage }}</p>

      <p class="mt-4 text-sm">
        Already have an account? <router-link to="/login" class="text-blue-500">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
      message: '',
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      // Reset errors and message
      this.errors = {};
      this.message = '';
      this.errorMessage = '';

      // Simple validation
      if (this.password !== this.password_confirmation) {
        this.errors.password_confirmation = 'Passwords do not match';
        return;
      }

      try {
        // Make the registration API request
        const response = await axios.post('http://localhost:8000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        });

        // Handle success
         localStorage.setItem('token', response.data.token);
        this.message = 'User registered successfully!';
        this.$router.push({ name: 'DashboardHome' });
      } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed, please check your credentials.');
      }
    }
  }
};
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
