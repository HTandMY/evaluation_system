<template>
  <div class="hello">
    <h1>This is a {{ msg }} page</h1>
    <h1>This is a {{ msg }} page</h1>
    <h1>This is a {{ msg }} page</h1>
    <p>num : {{ $store.state.counter }}</p>
    <button @click="$store.commit('add')">+1</button>
    <button @click="$store.commit('min')">-1</button>
    <button @click="saveData()">SAVE</button>
    <button @click="delData()">DEL</button>
    <br/>
    <input type="number" v-model="number" id="numInput"><br/>
    <button @click="$store.commit('add_num' , number)">+{{ number }}</button>
    <button @click="$store.commit('min_num' , number)">-{{ number }}</button>
    <button @click="add_1s">1s after +1</button>
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
    },
    mounted() {
      if(localStorage.test){
        this.$store.commit('readLocal')
      }
    },
    methods: {
      add_1s(){
        //then为store中Promise中resolve的回调
        this.$store.dispatch('upDataNum' , '1s after number +1').then((res) => {console.log(res)})
      },
      delData(){
        localStorage.removeItem('test');
      },
      saveData(){
        localStorage.setItem("test", this.$store.state.counter);
      },
    },
}
</script>

<style scoped>
#numInput{
  width: 30px
}
</style>
