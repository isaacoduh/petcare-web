<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    <div v-for="category in categories" :key="category" class="mb-6">
      <h2 class="text-xl font-semibold mb-2">{{ category }}</h2>
      <ul class="list-disc list-inside">
        <li
          v-for="product in getProductsByCategory(category)"
          :key="product.id"
          class="mb-2"
        >
          <router-link
            :to="{ name: 'single-product', params: { id: product.id } }"
            class="text-blue-500 hover:underline"
            >{{ product.name }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { products } from "@/data";
export default {
  data() {
    return {
      products: [],
      categories: [],
    };
  },
  created() {
    this.products = products;
    this.categories = [...new Set(products.map((product) => product.category))];
  },
  methods: {
    getProductsByCategory(category) {
      return this.products.filter((product) => product.category === category);
    },
  },
};
</script>
