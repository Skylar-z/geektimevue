<template>
  <div id="app">
    <div id="nav">
      <router-link to="/event">事件</router-link> |
      <router-link to="/slot">插槽</router-link> | 
       <router-link to="/bindData">数据绑定</router-link> |
       <router-link to="/toindex">index</router-link> |
       <router-link to="/toupdate">更新数据</router-link> |
       <router-link to="/compute">防抖</router-link> |
<router-link to="/funccomp"> 函数式组件</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
small{
  color: grey;
}
</style>
