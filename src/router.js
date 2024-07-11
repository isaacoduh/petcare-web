import Vue from "vue";
import Router from "vue-router";
import Products from "./components/Products.vue";
import SingleProduct from "./components/SingleProduct.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "products", component: Products },
    { path: "/product/:id", name: "single-product", component: SingleProduct },
  ],
});
