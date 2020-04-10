<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
  import Homepage from "./components/Homepage";
  export default {
  name: 'App',
    components: {Homepage},
  }
</script>