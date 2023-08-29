<template>
  <BaseMap @ready="ready" />
</template>

<script>
import BaseMap from "@/components/OpenlayersMap/BaseMap.vue";
import {
  TileWMS,
  Vector
} from "ol/source";
import {
  Tile as TileLayer,
  Vector as VectorLayer
} from "ol/layer";
import { GeoJSON } from "ol/format";

export default {
  name: "OpenlayersBasic",
  components: { BaseMap },
  mounted() {
  },
  methods: {
    ready() {
      this.addBaseLayer();
      // this.addLayer();
      this.addMarkLayer();
    },
    addBaseLayer() {
      const vectorLayers = new TileWMS({
        url: "http://10.1.100.70:90/geoserver/wms",
        params: {
          LAYERS: "JiaHeDC:ly_qxj_region_simple_v2",
          TILED: true,
          FORMAT: "image/png",
          CRS: "EPSG:4326"
        },
        projection: "EPSG:4326",
        serverType: "geoserver", // 图层类型
        hidpi: false,
        transition: 0,
        crossOrigin: "Anonymous"
      });

      const vectorMark = new TileLayer({
        source: vectorLayers,
        zIndex: 14, // 图层层级
        crossOrigin: "Anonymous" // 图层是否允许跨域
      });
      window.map.addLayer(vectorMark);
    },
    addLayer() {
      const url = "http://10.1.100.70:90/layer/ows?service=WFS&request=GetFeature&typeName=JiaHeDC%3Aly_qxj_region_simple_v2&outputFormat=application%2Fjson&CQL_FILTER=%20REGION_ID%3D3102000001";
      const vector = new Vector({
        format: new GeoJSON(),
        url() {
          return url;
        }
      });

      const vectorMark = new VectorLayer({
        source: vector,
        zIndex: 15 // 图层层级
      });
      window.map.addLayer(vectorMark);
    },
    addMarkLayer() {
      const vectorLayers = new TileWMS({
        url: "http://10.1.100.70:90/geoserver/JiaHeDC/wms",
        params: {
          LAYERS: "JiaHeDC:FY3_ACI_2021_5000M",
          TILED: true,
          FORMAT: "image/png",
          CRS: "EPSG:4326"
        },
        projection: "EPSG:4326",
        serverType: "geoserver", // 图层类型
        hidpi: false,
        transition: 0,
        crossOrigin: "Anonymous"
      });

      const vectorMark = new TileLayer({
        source: vectorLayers,
        zIndex: 16, // 图层层级
        crossOrigin: "Anonymous" // 图层是否允许跨域
      });
      window.map.addLayer(vectorMark);
    }
  }
};
</script>

<style scoped>

</style>
