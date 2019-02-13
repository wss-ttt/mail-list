<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	margin: 0px;
	padding: 0px;
  box-sizing: border-box;   /*保持盒子大小不变*/
}
ul,li{
	list-style-type: none;
}
a{
  text-decoration: none;
}
button,input[type=button],input[type=submit],input[type=reset]{
  outline: none;
}
html,body{
  height: 100%;
}
#app {
  font-family: 微软雅黑;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
