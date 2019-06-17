<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>
import loginView from "./views/loginView"
export default {
  name: 'App',
  components: {loginView},
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  height: 100%;
  width: 100%;
}







</style>
