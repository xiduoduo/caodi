/**
 * 注册全局过滤器
 */
import Vue from "vue";
import moment from "@/utils/moment";

function formatDate(time = "") {
  const t = moment(time);
  if (!t.isValid()) {
    return "";
  }
  return t.format("YYYY-MM-DD HH:mm:ss");
}

const filters = {
  formatDate
};

Object.keys(filters).forEach((f) => {
  Vue.filter(f, filters[f]);
});
