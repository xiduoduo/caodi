<template>
  <div id="openlayers-map" class="openlayers-map"></div>
</template>

<script>
import "ol/ol.css";
import { init } from "./openlayersInit.js";

export default {
  name: "OpenlayersMap",
  data() {
    return {};
  },
  mounted() {
    const map = (window.map) = init();
    this.$emit("ready", map);
  }
};
</script>

<style lang="scss" scoped>
.openlayers-map {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
