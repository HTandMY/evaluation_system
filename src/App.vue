<template>
  <div id="app">
    <div id="nav">
      <!-- tag：想要渲染成的标签 replace：左上返回禁止 active-class:点击后的class -->
      <router-link to="/home" tag="button" replace>Home</router-link>
      <router-link to="/about" tag="button" replace>About</router-link>
      <router-link v-bind:to="'/User/' + userId" tag="button" replace>User</router-link>
      <br/>
      <!-- <button @click="clicked('home')">Home</button> -->
      <!-- <button @click="clicked('about')">About</button> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId : "123456"
    }
  },
  methods : {
    //第二个点击路由跳转
    clicked(name){
      this.$router.replace("/" + name)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav button {
  width: 100px;
  height: 30px;
  margin: 0 5px;
}
#nav .active {
  color : red;
  font-weight: bold;
}
</style>
