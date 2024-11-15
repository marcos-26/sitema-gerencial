<template>

    <div id="notices-container">
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
          <a href="/Notices" class="text-gray-600">Notices</a>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <div class="lg:flex justify-between items-center mb-6">
      <p class="text-2xl font-semibold mb-2 lg:mb-0">Notices</p>
    </div>

      <form @submit.prevent="addNotice">
        <div class="form-group">
          <label for="noticeTitle">Notice Title:</label>
          <input type="text" id="noticeTitle" v-model="newNotice.title" required />
        </div>
        <div class="form-group">
          <label for="noticeContent">Notice Content:</label>
          <textarea id="noticeContent" v-model="newNotice.content" required></textarea>
        </div>
        <button type="submit">Add Notice</button>
      </form>
      
      <div class="notices-list">
        <div class="notice-item" v-for="(notice, index) in notices" :key="index">
          <h2 class="notice-title">{{ notice.title }}</h2>
          <p class="notice-content">{{ notice.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Notices',
    data() {
      return {
        newNotice: {
          title: '',
          content: '',
        },
        notices: [],
      };
    },
    methods: {
      addNotice() {
        if (this.newNotice.title && this.newNotice.content) {
          this.notices.push({ ...this.newNotice });
          this.newNotice.title = '';
          this.newNotice.content = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  .page-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  input[type="text"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  textarea {
    resize: vertical;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .notices-list {
    margin-top: 20px;
  }
  
  .notice-item {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .notice-title {
    font-size: 1.5rem;
  }
  
  .notice-content {
    margin-top: 5px;
  }
  </style>
  