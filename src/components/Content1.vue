<template>
  <div class="hello">
    <h1>This is a {{ msg }} page</h1>
    <p>num : {{ $store.state.counter }}</p>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('min')">-</button>
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
