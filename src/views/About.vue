<template>
  <div class="about">
    <h2>{{ msg }}</h2>
    <div style="margin-top:10px">
      <router-link to="/about/cont2" tag="button" replace>cont2</router-link>
      <router-link to="/about/cont3" tag="button" replace>cont3</router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'about',
  data() {
    return {
      msg: 'about page'
    }
  },
}
</script>
