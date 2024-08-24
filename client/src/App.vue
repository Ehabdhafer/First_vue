<template>
  <nav-bar />
  <!-- <p class="text-center text-blue-600 font-black text-4xl">how are you</p> -->
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/header.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
