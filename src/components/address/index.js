import bxAddress from "./index.vue";

// 为组件提供 install 安装方法，供按需引入
bxAddress.install = function(Vue) {
  Vue.component(bxAddress.name, bxAddress);
};

// 默认导出组件
export default bxAddress;
