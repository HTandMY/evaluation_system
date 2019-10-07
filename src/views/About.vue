<template>
  <div class="about">
    <div style="margin-top:10px">
      <router-link to="/about/cont2" tag="button" replace>cont2</router-link>
      <router-link to="/about/cont3" tag="button" replace>cont3</router-link>
    </div>
    <div style="margin-top:10px">{{ msg }}</div>
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
