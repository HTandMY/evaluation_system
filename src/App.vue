<template>
  <div id="app">
    <div id="nav">
      <!-- tag：想要渲染成的标签 replace：左上返回禁止 active-class:点击后的class -->
      <!-- <router-link to="/home" tag="button" replace>Home</router-link>
      <router-link to="/about" tag="button" replace>About</router-link>
      <router-link v-bind:to="'/user/' + userId" tag="button" replace>User</router-link>
      <router-link v-bind:to="{path: '/news' , query:{name: 'aaa', age:123}}" tag="button" replace>News</router-link>
      <br/> -->
      <!-- <button @click="clicked('home')">Home</button> -->
      <!-- <button @click="clicked('about')">About</button> -->
    </div>
    <router-view/>
    <tabBar :userId="userId" :query="query"></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/tabbar/tabbar.vue'
export default {
  components:{
    tabBar
  },
  data() {
    return {
      userId : "123456",
      query : {name: 'aaa', age: '123'}
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
