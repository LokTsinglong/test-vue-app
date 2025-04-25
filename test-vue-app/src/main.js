// 模块引入
import Vue from 'vue' 
// 核心库
import App from './App.vue'
// 根组件引入 App.vue
import axios from 'axios'
// 挂载http客户端，也就是前后端交互
import router from './router'
// 路由配置
import store from './store'
// Vuex状态管理
import ElementPlus from 'element-plus'; // 2.1引入结构 UI组件库
import 'element-plus/dist/index.css'; // 2.2引入样式

// 全局配置
Vue.config.productionTip = false
// 关闭生产提示
Vue.prototype.$axios = axios;
// 挂载axios到Vue原型上
// 这样在组件中就可以通过 this.$axios 来访问 axios 实例
Vue.use(ElementPlus)
// 注册ElementUI

// // Vue实例初始化
new Vue({
    router, 
    // 注入路由
    // 通过 router 选项将路由实例传入 Vue 实例
    // 这样 Vue 实例就可以访问路由对象
    store,
    // 注入状态管理
    // 通过 store 选项将 Vuex 实例传入 Vue 实例
    // 这样 Vue 实例就可以访问 Vuex 对象
    render: h => h(App),// 渲染函数
    // 通过 render 函数渲染根组件
    // render: function (createElement) {
    //     return createElement(App)
    // }
    
}).$mount('#app')
// 挂载到id为app的DOM元素上
// 这样 Vue 实例就会被挂载到这个 DOM 元素上
// 也就是在这个 DOM 元素上渲染 Vue 实例