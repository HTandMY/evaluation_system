<template>
  <div>
        <div><router-link tag="button" to="/" class="button">BACK</router-link></div>
        <div>
            <router-link class="button grade2" tag="button" :to="{path : '/visitor/grade2'}">2年生</router-link>
            <router-link class="button grade1" tag="button" :to="{path : '/visitor/grade1'}">1年生</router-link>
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
.button {
    width: 250px;
    height: 100px;
}
.button.grade2 {
    background: url("./../assets/2ndyearstudents@2x.png") 50% 50%;
    background-size: 100% 100%;
}
.button.grade1 {
    background: url("./../assets/1styearstudents@2x.png") 50% 50%;   
    background-size: 100% 100%;  
}
.button.actived {
    background-size:150% 150%;
}
</style>