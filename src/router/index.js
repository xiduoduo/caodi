import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "App",
    redirect: "/cesium-basic",
    meta: { title: "首页" }
  },
  {
    path: "/cesium-basic",
    name: "CesiumBasic",
    component: () => import("@/views/cesium-basic.vue"),
    meta: { title: "CesiumBasic" }
  },
  {
    path: "/openlayers-basic",
    name: "OpenlayrsBasic",
    component: () => import("@/views/openlayers-basic.vue"),
    meta: { title: "OpenlayersBasic" }
  },
  {
    path: "/base-feature",
    name: "BaseFeature",
    component: () => import("@/views/baseFeature.vue"),
    meta: { title: "BaseFeature" }
  }
];

const pathPrefix = process.env.VUE_APP_PATH_PREFIX;
export default new Router({
  mode: "history",
  base: `${pathPrefix}/`,
  scrollBehavior: () => ({ y: 0 }),
  routes
});
