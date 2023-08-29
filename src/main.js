import Vue from "vue";
import App from "@/App.vue";

import "@/utils/elementUi";

import "@/libs/flexible/flexible";

import "normalize.css";
import "@/assets/styles/common.scss";

import "@/directive";
import "@/filter";

import router from "@/router";
import store from "@/store";

// import "/mock"; // mock 后端 API

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
