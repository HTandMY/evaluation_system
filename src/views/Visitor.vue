<template>
  <div>
        <div><router-link tag="button" to="/" class="button">BACK</router-link></div>
        <WorksList v-if="$store.state.visitorMessage && $store.state.visitorMessage.occupation == '一般の方' || $store.state.visitorMessage.job"/>
        <div v-else><VisitorSignin/></div>
  </div>
</template>

<script>
import VisitorSignin from '@/components/VisitorSignin.vue'
import WorksList from '@/components/WorksList.vue'
export default {
    name: 'visitor',
    components : {
        VisitorSignin,
        WorksList
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        if(localStorage.visitor){
            this.$store.commit('readVisitorMessage')
        }
    },
}
</script>

<style>

</style>