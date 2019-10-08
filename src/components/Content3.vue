<template>
  <div class="content2">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Content3',
    data(){
        return {
            msg : 'this is content3'
        }
    },
    //路由跳转后，组件执行方法
    // beforeRouteEnter(to, from, next){
    //   console.log("loaded content3");
    //   next();
    // }
}
</script>

<style scoped>
</style>