<template>
  <div id="enquiries-page">

       <!-- breadcrumb -->
       <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500">
          <a href="/" class="text-gray-700">Home</a>
          <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </li>
        <li class="flex items-center">
          <a href="/Enquiries" class="text-gray-600">Enquiries</a>
        </li>
      </ol>
    </nav>

    <div class="lg:flex justify-between items-center mb-6">
      <p class="text-2xl font-semibold mb-2 lg:mb-0">Enquiries</p>
    </div>

    <div class="content-container">
      <p class="intro-text">
        Have a question or want to get in touch? Fill out the form below, and we'll get back to you as soon as possible.
      </p>
      <form @submit.prevent="submitEnquiry" class="enquiry-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit" class="submit-button">Send Enquiry</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnquiriesPage',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    submitEnquiry() {
      // TODO: Implement the logic to submit the enquiry
      console.log('Enquiry submitted:', { name: this.name, email: this.email, message: this.message })
      // Reset form fields after submission
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.content-container {
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.intro-text {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
  text-align: center;
}

.enquiry-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
