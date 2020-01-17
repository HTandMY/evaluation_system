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

.page-title{
    color: #CAF2FF;
    text-shadow: #00A3D5 0px 0px 8px;
    text-align: center;
}
.project-info-div {
    display: inline-block;
    word-break: break-all;
    vertical-align: top;
    max-height: 110px;
    line-height: 1.2rem;
    font-weight: bold;
}
.project-info{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: solid 2px #CAF2FF;
    background-color: #CAF2FF20;
    box-shadow: #00A3D5 0px 0px 8px;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px;
}
.student-info-container{
    padding: 0;
}
.student-info{
    font-size: 14px;
    list-style-type: none;
    font-weight: bold;
    color: rgb(122, 224, 255);
    margin-bottom: 12px;
    padding: 5px;
}
.grid-container{
    margin: 0 auto;
    display:block;
    width: 100%;
    padding-bottom: 30px;
}
.project-info-container {
    padding: 0;
    margin: 0 ;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap ;
    justify-content: flex-start;
}
.project-info-container > li {
    min-width: 140px;
    min-height: 150px;
    color: #fff;
    flex: 1;
    max-width: 50%;
    box-sizing: border-box;
    padding: 5px;
}
.worksimg{
    width: 100%;
    border: solid 2px #CAF2FF;
    background-color: #CAF2FF20;
    box-shadow: #00A3D5 0px 0px 8px;
    border-radius: 5px;
    font-size: 14px;
    margin: 10px auto;
    box-sizing: border-box;
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