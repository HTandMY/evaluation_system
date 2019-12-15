<template>
  <div>
        <div><router-link tag="button" to="/" class="button">BACK</router-link></div>
        <div>
            <router-link tag="button" :to="{path : '/visitor/grade2'}">2年生</router-link>
            <router-link tag="button" :to="{path : '/visitor/grade1'}">1年生</router-link>
            <router-view></router-view>
        </div>
  </div>
</template>

<script>

export default {
    name: 'visitor',
    components : {
        
    },
    data() {
        return {
            
        }
    },
    methods: {
        changeURL(){
             this.$router.push({ path: '/visitorsignin' })
        },
        readLocalStorage(){
            if(localStorage.visitor == undefined){
                this.changeURL();
            }else{
                this.$store.commit('readVisitorMessage');
                if(this.$store.state.visitorMessage.occupation == "企業の方" && this.$store.state.visitorMessage.job == undefined){
                    this.changeURL();
                }
            }
        }
    },
    mounted() {
        this.readLocalStorage();
    },
}
</script>

<style>

</style>