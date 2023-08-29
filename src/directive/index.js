/**
 * 注册全局指令
 */
import Vue from "vue";

// import Ellipsis from 'vue-directive-ellipsis';
// import 'vue-directive-ellipsis/dist/ellipsis.umd.css';

// 注册第三方指令
// Vue.directive('ellipsis', Ellipsis);

const bindClass = {
  _name: "bindClass",
  bind: function(el) {
    el.classList.add("ht-input");
  },
  inserted: function() {},
  update: function() {},
  componentUpdated: function() {},
  unbind: function() {}
};

const diretives = {
  bindClass
};

// 注册自己实现的指令
Object.keys(diretives).forEach((d) => {
  const dOpt = diretives[d];
  if (Object.prototype.toString.call(dOpt) === "[object Function]") {
    Vue.directive(dOpt.name, dOpt);
  }
  if (Object.prototype.toString.call(diretives[d]) === "[object Object]") {
    Vue.directive(dOpt._name, dOpt);
  }
});
