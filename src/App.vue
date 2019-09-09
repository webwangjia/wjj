<template>
  <div id="app">
    <!-- <div class="header">
      adsads
    </div> -->
    <div class="content">
       <router-view/>
    </div>
  </div>
</template>

<style lang="less">
@import "./theme/base.less" ;

html,body{
  width:100%;
  height:100%;
}

#app {
  width:100%;
  height:100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content{
  width:100%;
  height:100%;
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
</style>
