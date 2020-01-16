<template>
  <div>
        <div><router-link tag="button" to="/" class="button">BACK</router-link></div>
        <div>
            <div class="select_grade">
                <router-link class="button grade2" tag="button" :to="{path : '/visitor/grade2'}"></router-link>
                <router-link class="button grade1" tag="button" :to="{path : '/visitor/grade1'}"></router-link>
            </div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
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
    width: 150px;
    height: 60px;
}
.select_grade{
    display: flex;
    padding: 0;
    justify-content: space-evenly;
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
    background-size:105% 105%;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .3s;
}
.fade-enter-active {
  transition-delay: .3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>