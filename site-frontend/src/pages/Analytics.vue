<template>
  <div id="analytics-container">

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
          <a href="/Analytics" class="text-gray-600">Analytics</a>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <div class="lg:flex justify-between items-center mb-6">
      <p class="text-2xl font-semibold mb-2 lg:mb-0">Analytics</p>
    </div>

    <!-- Analytics Cards Section -->
    <div class="analytics-cards">
      <div class="card">
        <h2>Total Users</h2>
        <p>{{ totalUsers }}</p>
      </div>
      <div class="card">
        <h2>Active Users</h2>
        <p>{{ activeUsers }}</p>
      </div>
      <div class="card">
        <h2>New Signups</h2>
        <p>{{ newSignups }}</p>
      </div>
    </div>

    <!-- Add a placeholder for a graph -->
    <div class="graph-section">
      <h2>User Growth</h2>
      <div class="graph-placeholder">
        <!-- You can integrate a chart library like Chart.js or ApexCharts here -->
        <p>Graph will go here</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Analytics',
  data() {
    return {
      totalUsers: 5000,     // Example data, you can replace with real values
      activeUsers: 1200,    // Example data
      newSignups: 150,      // Example data
    };
  },
  // Add any necessary component logic here
}
</script>

<style scoped>
.page-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.analytics-cards {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  flex: 1;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 1.5rem;
  color: #555;
}

.graph-section {
  margin-top: 40px;
}

.graph-placeholder {
  width: 100%;
  height: 300px;
  background-color: #eef2f7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.graph-placeholder p {
  color: #777;
}
</style>