<template>
    <div class="profile-container">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-10">
        <h1 class="text-2xl font-bold mb-6">Profile</h1>
        <div class="profile-details">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <p>{{ name }}</p>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <p>{{ email }}</p>
          </div>
        </div>
        <button @click="editProfile" class="primary-button w-full mt-4">Edit Profile</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Profile',
    data() {
      return {
        name: 'John Doe',  // Example data, replace with actual user data
        email: 'johndoe@example.com',
      };
    },
    methods: {
      editProfile() {
        // Implement the edit profile logic here
        alert('Edit profile clicked');
      }
    }
  }
  </script>
  
  <style scoped>
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
  
  .profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }
  
  .profile-details p {
    font-size: 1.1rem;
    color: #555;
  }
  </style>
  