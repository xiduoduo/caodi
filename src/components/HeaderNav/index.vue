<template>
  <el-menu class="header-nav" :default-active="activeIndex" mode="horizontal">
    <el-menu-item v-for="navItem in menus" :key="navItem.name" :index="navItem.path">
      <router-link :to="navItem.path">{{ navItem.meta.title }}</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { routes } from "@/router/index";
export default {
  name: "HeaderNav",
  data() {
    return {
      menus: routes
    };
  },
  computed: {
    activeIndex() {
      const {
        $route: {
          path
        }
      } = this;
      return path;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-nav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>
