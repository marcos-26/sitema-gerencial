<template>
  <div id="controls-container">

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
          <a href="/Controls" class="text-gray-600">Controls</a>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <div class="lg:flex justify-between items-center mb-6">
      <p class="text-2xl font-semibold mb-2 lg:mb-0">Controls</p>
    </div>

    <div class="controls-list">
      <div class="control-item" v-for="control in controls" :key="control.id">
        <h2 class="control-name">{{ control.name }}</h2>
        <button @click="executeControl(control.id)">Execute</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  data() {
    return {
      controls: [
        { id: 1, name: 'Control 1' },
        { id: 2, name: 'Control 2' },
        { id: 3, name: 'Control 3' },
        // Add more controls as needed
      ],
    };
  },
  methods: {
    executeControl(controlId) {
      // Logic to execute the control (e.g., API call)
      console.log('Executing control:', controlId);
      // Provide feedback or update state as needed
    },
  },
};
</script>

<style scoped>

.page-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.controls-list {
  display: flex;
  flex-direction: column;
}

.control-item {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.control-name {
  font-size: 1.5rem;
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
</style>
