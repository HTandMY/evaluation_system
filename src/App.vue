<template>
  <div id="app">
    <button v-on:click="fullscreen">fullscreen</button>


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
    fullscreen() {
      document.body.requestFullscreen();
    }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  
}
#app {
  background-image: url('assets/bg_UI@2x.png') ;
  background-position: 50% 50%;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
}
#app:fullscreen {
  background-image: url('assets/bg_UI@2x.png') ;
  background-position: 50% 50%;
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
