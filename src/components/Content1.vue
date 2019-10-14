<template>
  <div class="hello">
    <h1>This is a {{ msg }} page</h1>
    <p>num : {{ $store.state.counter }}</p>
    <button @click="$store.commit('add')">+1</button>
    <button @click="$store.commit('min')">-1</button>
    <br/>
    <input type="number" v-model="number" id="numInput"><br/>
    <button @click="$store.commit('add_num' , number)">+{{ number }}</button>
    <button @click="$store.commit('min_num' , number)">-{{ number }}</button>
  </div>
</template>

<script>
export default {
    name: 'Content1',
    data(){
        return {
            msg: 'helloworld',
            number: 5
        }
    }
}
</script>

<style scoped>
#numInput{
  width: 30px
}
</style>
