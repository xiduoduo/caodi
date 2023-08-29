<template>
  <div id="app">
    <HeaderNav />
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav/index.vue";
export default {
  name: "App",
  components: { HeaderNav }
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
