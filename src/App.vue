<template>
  <div id="app">
    <div id="app_content">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  components:{
    
  },
  data() {
    return {
     
    }
  },
  methods : {

  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* #nav button {
  width: 100px;
  height: 30px;
  margin: 0 5px;
}
#nav .active {
  color : red;
  font-weight: bold;
} */
</style>
