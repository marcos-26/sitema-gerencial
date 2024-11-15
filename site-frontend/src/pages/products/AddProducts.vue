<template>
  <div id="add-product-container">

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
          <a href="/AddProducts" class="text-gray-600">Add Product</a>
        </li>
      </ol>
    </nav>

    <div class="lg:flex justify-between items-center mb-6">
      <p class="text-2xl font-semibold mb-2 lg:mb-0">Add Product</p>
    </div>

    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="productName">Product Name:</label>
        <input type="text" id="productName" v-model="productName" required />
      </div>
      <div class="form-group">
        <label for="productImage">Product Image URL:</label>
        <input type="url" id="productImage" v-model="productImage" required />
      </div>
      <div class="form-group">
        <img :src="productImage" alt="Product Image" v-if="productImage" class="product-image" />
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
    return {
      productName: '',
      productImage: '',
    };
  },
  methods: {
    addProduct() {
      // Logic to add the product (e.g., API call)
      console.log('Product added:', this.productName, this.productImage);
      // Reset form
      this.productName = '';
      this.productImage = '';
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
input[type="url"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.product-image {
  margin-top: 10px;
  max-width: 100%;
  height: auto;
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
