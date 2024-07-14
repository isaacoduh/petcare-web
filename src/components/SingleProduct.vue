<template>
  <div class="container mx-auto p-4">
    <!-- Back to all products link -->
    <router-link
      to="/"
      class="text-gray-600 hover:text-gray-900 flex items-center mb-4"
    >
      <font-awesome-icon
        :icon="['fas', 'fa-arrow-alt-circle-left']"
        class="mr-1"
      />
      Back to All Products
    </router-link>
    <!-- Product Details -->
    <div class="grid grid-cols-2 gap-8">
      <!-- Large Picture Section -->
      <div class="w-full">
        <img
          :src="product.image"
          alt="Product Image"
          class="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <!-- Details Section -->
      <div class="flex flex-col">
        <h2 class="text-2xl font-semibold mb-4">{{ product.name }}</h2>
        <p class="text-gray-700 mb-2">{{ product.description }}</p>
        <p class="text-gray-700 mb-2">Price: £{{ product.price }}</p>
        <p class="text-gray-700 mb-2">Product Code: {{ product.code }}</p>
        <div class="flex items-center mb-2">
          <div class="mr-4">
            <span class="text-gray-700">Ratings:</span>
            <span class="text-gray-900 font-bold ml-1">{{
              product.ratings
            }}</span>
          </div>
          <div class="mr-4">
            <span class="text-gray-700">Reviews:</span>
            <span class="text-gray-900 font-bold ml-1">{{
              product.reviews
            }}</span>
          </div>
          <div class="mr-4">
            <span class="text-gray-700">Sold:</span>
            <span class="text-gray-900 font-bold ml-1">{{ product.sold }}</span>
          </div>
        </div>
        <div class="flex items-center mb-4">
          <span class="text-gray-700 mr-2">Quantity:</span>
          <button
            @click="decrementQuantity"
            class="bg-gray-300 text-gray-700 px-3 py-1 rounded-md"
          >
            -
          </button>
          <span class="mx-2">{{ quantity }}</span>
          <button
            @click="incrementQuantity"
            class="bg-gray-300 text-gray-700 px-3 py-1 rounded-md"
          >
            +
          </button>
        </div>
        <button
          @click="addToCart"
          class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <!-- Or use a Buy Now button as needed -->
      </div>
    </div>
    <!-- <h1 class="text-2xl font-bold mb-4">Product Details</h1>
    <div v-if="product">
      <p><strong>ID:</strong> {{ product.id }}</p>
      <p><strong>Name:</strong> {{ product.name }}</p>
      <p><strong>Category:</strong> {{ product.category }}</p>
      <p><strong>Description:</strong> {{ product.description }}</p>
    </div>
    <div v-else>
      <p>Product not found!</p>
    </div> -->
  </div>
</template>

<script>
import { getProductById } from "@/data";

export default {
  data() {
    return {
      product: {},
      quantity: 1,
    };
  },
  created() {
    const productId = this.$route.params.id;
    this.product = getProductById(productId);
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      console.log(`Added ${this.quantity} ${this.product.name} (s) to cart`);
    },
  },
};
</script>
