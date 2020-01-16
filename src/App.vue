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
  background-image: url('assets/bg_UI@2x.png') ;
  background-repeat: repeat;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
