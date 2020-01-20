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
@font-face {
    font-family: "KaisoNext";
    src:url('fonts/Kaiso-Next-B.otf');
}

@font-face {
    font-family: "SmartPhoneUI";
    src:url('fonts/Smart-Phone-UI.otf');
}
body{
  margin: 0;
  padding: 0;
  
}
#app {
  background: url('assets/bg1000×1000.png') 50% 50%;
  height: 100%;
  background-attachment: fixed;
  background-size: cover;
}

#app {
  font-family: 'SmartPhoneUI', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
