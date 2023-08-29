import {
  Viewer,
  SceneMode
} from "cesium";

/**
 * cesium 初始化
 * @param config
 * @param {String} config.elId cesium 渲染容器 id
 * @param {Boolean} config.debugShowFramesPerSecond 几何图形是否以3D模式绘制以节约GPU资源
 * @return {module:cesium.Viewer}
 */
export function init(config = {}) {
  const {
    elId = "cesium-map",
    debugShowFramesPerSecond = false
  } = config;
  elId && (delete config.elId);
  debugShowFramesPerSecond && (delete config.debugShowFramesPerSecond);
  const defaultOptions = {
    timeline: false, // 关闭时间轴
    animation: true, // 关闭右下角仪表盘
    baseLayerPicker: false, // 关闭图层选择器
    fullscreenButton: false, // 关闭全屏按钮
    geocoder: false, // 关闭右上角查询功能
    homeButton: false, // 关闭 home 功能
    infoBox: false, // 关闭信息框
    sceneModePicker: false, // 关闭 2D/3D 选择器
    selectionIndicator: false, // 关闭选取指示器
    scene3DOnly: true, // 所有几何图形以3D模式绘制以节约GPU资源
    sceneMode: SceneMode.SCENE3D // 初始化场景为 3D
  };
  const options = Object.assign({}, defaultOptions, config);
  const viewer = new Viewer(elId, options);

  viewer.scene.debugShowFramesPerSecond = debugShowFramesPerSecond;

  viewer._cesiumWidget._creditContainer.style.display = "none";

  return viewer;
}

export default {
  init
};
