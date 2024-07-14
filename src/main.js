import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faShoppingCart,
  faHeart,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faShoppingCart, faHeart, faArrowAltCircleLeft);
/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
