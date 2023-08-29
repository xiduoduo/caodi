import axios from "axios";
import { Message } from "element-ui";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // console.log(`接口路径：${config.url}\n发送数据：`, config.data)
    return config;
  },
  (error) => {
    // console.log('request error：' + error)
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  (response) => {
    // console.log(`接口路径：${response.config.url}\n返回数据：`, response.data)
    /**
     * code为非2000时抛错
     */
    const res = response.data;
    // 接口中不含code || status字段时抛错，防止接口错误
    if (!Object.prototype.hasOwnProperty.call(res, "code") || !Object.prototype.hasOwnProperty.call(res, "status")) {
      Message({
        message: "服务异常！",
        type: "error",
        duration: 3 * 1000
      });
      return Promise.reject("操作失败！");
    }
    if (res.code !== 2000 || !res.status) {
      Message({
        message: res.message,
        type: "error",
        duration: 3 * 1000
      });
      return Promise.reject(res.code);
    } else {
      return res.response;
    }
  },
  (error) => {
    // console.error('接口返回数据错误：' + error)
    Message({
      message: error.message,
      type: "error",
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
