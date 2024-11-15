<template>
  <div id="view-products-container">

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
          <a href="/Enquiries" class="text-gray-600">View Products</a>
        </li>
      </ol>
    </nav>

    <div class="lg:flex justify-between items-center mb-6">
      <p class="text-2xl font-semibold mb-2 lg:mb-0">View Products</p>
    </div>

    <div class="products-list">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <h2 class="product-name">{{ product.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewProducts',
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150' },
        // Add more products as needed
      ],
    };
  },
};
</script>

<style scoped>

.page-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.products-list {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  width: 150px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.product-name {
  margin-top: 10px;
  font-size: 1.2rem;
}
</style>
