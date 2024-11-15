<template>
    <div id="Inventory">
      <!-- breadcrumb -->
      <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center text-blue-500">
            <a href="#" class="text-gray-700">Home</a>
            <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </li>
          <li class="flex items-center">
            <a href="#" class="text-gray-600">Inventory</a>
          </li>
        </ol>
      </nav>
      <!-- breadcrumb end -->
  
      <div class="lg:flex justify-between items-center mb-6">
        <p class="text-2xl font-semibold mb-2 lg:mb-0">Inventory Management</p>
        <button class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">Add New Item</button>
      </div>
  
      <div class="flex flex-wrap -mx-3 mb-20">
        <!-- Inventory stats cards -->
        <div class="w-1/2 xl:w-1/4 px-3">
          <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
            <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
              <path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
            </svg>
            <div class="text-gray-700">
              <p class="font-semibold text-3xl">1,254</p>
              <p>Total Items</p>
            </div>
          </div>
        </div>
        <!-- Add more stat cards here -->
      </div>
  
      <div class="flex flex-wrap -mx-3">
        <div class="w-full xl:w-2/3 px-3">
          <p class="text-xl font-semibold mb-4">Inventory List</p>
          <div class="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0">
            <!-- Add a table or list component for inventory items -->
            <table class="w-full">
              <thead>
                <tr>
                  <th class="text-left p-2">Item Name</th>
                  <th class="text-left p-2">SKU</th>
                  <th class="text-left p-2">Quantity</th>
                  <th class="text-left p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in inventoryItems" :key="item.id">
                  <td class="p-2">{{ item.name }}</td>
                  <td class="p-2">{{ item.sku }}</td>
                  <td class="p-2">{{ item.quantity }}</td>
                  <td class="p-2">${{ item.price.toFixed(2) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <div class="w-full xl:w-1/3 px-3">
          <p class="text-xl font-semibold mb-4">Low Stock Alert</p>
          <div class="w-full bg-white border rounded-lg p-4">
            <!-- Add a list of low stock items -->
            <div v-for="item in lowStockItems" :key="item.id" class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4">
              <div>
                <p class="font-semibold text-xl">{{ item.name }}</p>
                <p>SKU: {{ item.sku }}</p>
              </div>
              <span class="text-red-500 font-semibold text-lg">{{ item.quantity }} left</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InventoryPage',
    data() {
      return {
        inventoryItems: [
          { id: 1, name: 'Product A', sku: 'SKU001', quantity: 50, price: 29.99 },
          { id: 2, name: 'Product B', sku: 'SKU002', quantity: 30, price: 39.99 },
          { id: 3, name: 'Product C', sku: 'SKU003', quantity: 20, price: 49.99 },
          // Add more inventory items as needed
        ],
        lowStockItems: [
          { id: 2, name: 'Product B', sku: 'SKU002', quantity: 5 },
          { id: 3, name: 'Product C', sku: 'SKU003', quantity: 3 },
          // Add more low stock items as needed
        ]
      }
    }
  }
  </script>