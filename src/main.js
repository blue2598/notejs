/*
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-10-15 13:35:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-14 09:45:32
 * @FilePath: \notejs\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'


import './assets/normal.css'
import './assets/common.css'

import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

import Prism from 'prismjs';
Vue.use(Prism)
Vue.config.productionTip = false


// // 全局使用mixin
// import {mixin} from "./mixin";
// Vue.use(mixin);


// 这里安装了vuex和use了,new Vue的时候就可以传入一个配置项，store,否则将不会有这一项配置
// 把这里都放入store文件中
// import Vuex from 'vuex';
// Vue.use(Vuex)

import store from './store/index'

// 插件使用
import plugins from "./plugins";
Vue.use(plugins, 1, 2, 3);

const vm = new Vue({
  router,
  render: h => h(App),

  // 安装全局事件总线
  // 使用的组件，在组件销毁的时候最好销毁监听
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  store,
}).$mount('#app');

console.dir(vm);//vm上有传入的$store