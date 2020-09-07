import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";

// import wlAddress from "wl-address";
import "@/assets/address.css"
// Vue.use(wlAddress);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
