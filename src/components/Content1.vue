<template>
  <div class="hello">
    <h1>This is a {{ msg }} page</h1>
  </div>
</template>

<script>
export default {
    name: 'Content1',
    data(){
        return {
            msg : 'helloworld'
        }
    }
}
</script>

<style scoped>
</style>
