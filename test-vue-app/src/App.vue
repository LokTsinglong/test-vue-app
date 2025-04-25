<template>
  <div id="app">
        <router-view></router-view>
  </div>
  <!-- 当访问 /home 时会渲染 Home.vue 组件，访问 /about 时渲染 About.vue -->
  <!-- 实现动态渲染：根据当前 URL 路径动态渲染匹配的路由组件 -->
</template>

<script>
export default {
  name: 'App',

}
// import App from './App.vue'其他组件可以这样子使用
</script>

<style>

</style>
<!-- 单文件组件 -->
<!--整个App.vue 是 Vue 应用的根组件 -->
