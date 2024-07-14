<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    <div class="flex">
      <!-- Filter Section -->
      <div class="w-1/4 pr-4">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Category</label
          >
          <select
            v-model="selectedCategory"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          >
            <option value="">All</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Animal Type</label
          >
          <select
            v-model="selectedAnimalType"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          >
            <option value="">All</option>
            <option v-for="type in animalTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >In Stock</label
          >
          <select
            v-model="selectedStockStatus"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          >
            <option value="">All</option>
            <option value="inStock">In Stock</option>
            <option value="outOfStock">Out of Stock</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Color</label>
          <select v-model="selectedColor">
            <option value="">All</option>
            <option v-for="color in colors" :key="color" :value="color">
              {{ color }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Search By Name</label
          >
          <input
            v-model="searchTerm"
            type="text"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
            placeholder="Search..."
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Sort By</label>
          <select
            v-model="sortKey"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          >
            <option value="name">Name</option>
            <option value="id">ID</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Filter By Price Range</label
          >
          <select
            v-model="selectedPriceRange"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          >
            <option value="">All</option>
            <option v-for="range in priceRanges" :key="range" :value="range">
              {{ range }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Items Per Page</label
          >
          <select
            v-model="itemsPerPage"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          >
            <option
              v-for="option in itemsPerPageOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>

      <!-- Main Products Section -->
      <div class="w-3/4">
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            class="border rounded-md"
          >
            <!-- Product Image -->
            <router-link
              :to="{ name: 'single-product', params: { id: product.id } }"
            >
              <img
                :src="product.image"
                alt="Product Image"
                class="w-full h-32 object-cover rounded-t-md mb-2"
              />
            </router-link>

            <!-- Product Information -->
            <div class="p-4">
              <router-link
                :to="{ name: 'single-product', params: { id: product.id } }"
              >
                <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
                <p class="text-gray-700 mb-2">Price: £{{ product.price }}</p>
                <p class="text-sm text-gray-600 mb-4">
                  {{ product.description }}
                </p>
              </router-link>
              <div class="flex items-center">
                <button class="text-gray-600 hover:text-gray-900 mr-2">
                  <i class="fas fa-heart"></i>
                  <font-awesome-icon :icon="['fas', 'fa-heart']" />
                  <!-- Font Awesome heart icon -->
                </button>
                <button class="text-gray-600 hover:text-gray-900">
                  <i class="fas fa-shopping-cart"></i>
                  <font-awesome-icon :icon="['fas', 'fa-shopping-cart']" />
                  <!-- Font Awesome shopping cart icon -->
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center mt-4">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
          >
            Previous
          </button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
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
      animalTypes: [],
      colors: [],
      selectedCategory: "",
      selectedAnimalType: "",
      selectedStockStatus: "",
      selectedColor: "",
      searchTerm: "",
      sortKey: "name",
      selectedPriceRange: "",
      itemsPerPage: 10,
      currentPage: 1,
      itemsPerPageOptions: [10, 20, 30],
      priceRanges: [
        "0-5",
        "6-10",
        "11-15",
        "16-20",
        "21-25",
        "26-30",
        "31-35",
        "36-40",
        "41-45",
      ],
    };
  },
  created() {
    this.products = products;
    this.categories = [...new Set(products.map((product) => product.category))];
    this.animalTypes = [
      ...new Set(products.map((product) => product.animalType)),
    ];
    this.colors = [...new Set(products.map((product) => product.color))];
  },
  computed: {
    filteredCategories() {
      return this.selectedCategory ? [this.selectedCategory] : this.categories;
    },
    filteredProducts() {
      return this.products.filter((product) => {
        const matchesCategory = this.selectedCategory
          ? product.category === this.selectedCategory
          : true;
        const matchesAnimalType = this.selectedAnimalType
          ? product.animalType === this.selectedAnimalType
          : true;
        const matchesStockStatus =
          this.selectedStockStatus === "inStock"
            ? product.inStock
            : this.selectedStockStatus === "outOfStock"
            ? !product.inStock
            : true;
        const matchesColor = this.selectedColor
          ? product.color === this.selectedColor
          : true;
        const matchesSearchTerm = product.name
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
        const matchesPriceRange = this.selectedPriceRange
          ? this.isProductInPriceRange(product)
          : true;
        return (
          matchesCategory &&
          matchesAnimalType &&
          matchesStockStatus &&
          matchesColor &&
          matchesSearchTerm &&
          matchesPriceRange
        );
      });
    },
    sortedFilteredProducts() {
      return this.filteredProducts.sort((a, b) => {
        if (this.sortKey === "name") {
          return a.name.localeCompare(b.name);
        } else if (this.sortKey === "id") {
          return a.id - b.id;
        } else if (this.sortKey === "priceAsc") {
          return a.price - b.price;
        } else if (this.sortKey === "priceDesc") {
          return b.price - a.price;
        }
      });
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sortedFilteredProducts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
  },
  methods: {
    getProductsByCategory(category) {
      return this.products.filter((product) => product.category === category);
    },
    isProductInPriceRange(product) {
      if (!this.selectedPriceRange) return true;
      const [min, max] = this.selectedPriceRange.split("-").map(Number);
      return product.price >= min && product.price <= max;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
  watch: {
    itemsPerPage() {
      this.currentPage = 1;
    },
  },
};
</script>
