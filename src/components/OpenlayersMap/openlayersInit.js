import {
  Map,
  View
} from "ol";
import { Projection } from "ol/proj";
import { Zoom } from "ol/control";

/**
 * cesium 初始化
 * @param config
 * @param {String} config.elId cesium 渲染容器 id
 * @param {Boolean} config.debugShowFramesPerSecond 几何图形是否以3D模式绘制以节约GPU资源
 * @return {module:cesium.Viewer}
 */
export function init(config = {}) {
  const {
    elId = "openlayers-map"
  } = config;
  elId && (delete config.elId);
  const map = new Map({
    target: elId,
    layers: [],
    view: new View({
      center: [115.92, 37.57],
      projection: new Projection({ units: "degrees", axisOrientation: "neu" }),
      minZoom: 0,
      maxZoom: 10,
      zoom: 4
    }),
    controls: [new Zoom({
      "zoomOutTipLabel": "缩小",
      "zoomInTipLabel": "放大"
    })]
  });

  return map;
}

export default {
  init
};
