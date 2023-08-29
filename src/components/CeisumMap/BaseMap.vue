<template>
  <div id="cesium-map" class="cesium-map"></div>
</template>

<script>
import "cesium/Source/Widgets/widgets.css";
import { Color, Viewer, UrlTemplateImageryProvider } from "cesium";

export default {
  name: "CesiumMap",
  data() {
    return {};
  },
  mounted() {
    const viewer = new Viewer("cesium-map", {
      imageryProvider: false, // 必须为false
      baseLayerPicker: false, // 必须为false
      animation: false, // 是否创建动画小器件，左下角仪表
      timeline: false, // 是否显示时间轴
      geocoder: false, // 是否显示geocoder小器件，右上角查询按钮
      homeButton: false,
      infoBox: false, // 是否显示信息框
      sceneModePicker: false, // 是否显示3D/2D选择器
      selectionIndicator: false // 是否显示选取指示器组件
    });
    window.viewer = viewer;

    viewer.imageryLayers.addImageryProvider(
      new UrlTemplateImageryProvider({
        url: "/tianDiTu/img/{z}/{x}/{y}.png"
      })
    );
    viewer.scene.globe.baseColor = Color.GREEN;
  }
};
</script>

<style lang="scss" scoped>
.cesium-map {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
