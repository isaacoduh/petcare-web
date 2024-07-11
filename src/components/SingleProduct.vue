<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Product Details</h1>
    <div v-if="product">
      <p><strong>ID:</strong> {{ product.id }}</p>
      <p><strong>Name:</strong> {{ product.name }}</p>
      <p><strong>Category:</strong> {{ product.category }}</p>
      <p><strong>Description:</strong> {{ product.description }}</p>
    </div>
    <div v-else>
      <p>Product not found!</p>
    </div>
  </div>
</template>

<script>
import { getProductById } from "@/data";

export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    const productId = this.$route.params.id;
    this.product = getProductById(productId);
  },
};
</script>
