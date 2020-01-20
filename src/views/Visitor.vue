<template>
    <div>
        <HeaderBox :buttonBackShow="false"/>
        <div>
            <div class="select_grade">
                <router-link class="button grade2" active-class="grade2-active" tag="button" :to="{path : '/visitor/grade2'}">2年生</router-link>
                <router-link class="button grade1" active-class="grade1-active" tag="button" :to="{path : '/visitor/grade1'}">1年生</router-link>
            </div>
            <div class="student-list-box">
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBox from "@/components/HeaderBox.vue"

export default {
    name: 'visitor',
    components : {
        HeaderBox
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
            if(!localStorage.visitor){
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
.select_grade{
    display: flex;
    padding: 0;
    justify-content: space-evenly;
    margin: 20px auto;
    max-width: 768px;
}
.button {
    width: 150px;
    height: 60px;
    background-size: 100% 100%;
    border: none;
    outline: none;
    color: #fff;
    font-family: 'KaisoNext';
    font-size: 18px;
    transition: all 0.3s ease;
}
.button.grade2 {
    background: url("../assets/button_grade2_off.png");
    background-size: 100% 100%;
}
.button.grade1 {
    background: url("../assets/button_grade1_off.png"); 
    background-size: 100% 100%;   
}
.button.grade2-active {
    background: url("../assets/button_grade2_on.png");
    background-size: 100% 100%;
}
.button.grade1-active {
    background: url("../assets/button_grade1_on.png");
    background-size: 100% 100%;
}
.student-list-box{
    width: 90%;
    margin: 0 auto;
    max-width: 768px;
}
.page-title{
    color: #CAF2FF;
    text-shadow: #CAF2FF 0px 0px 2px;
    position: relative;
    padding-left: 20px;
}
.page-title::before{
    content: "";
    position: absolute;
    width: 10px;
    height: 100%;
    background-color: #CAF2FF;
    left: 5px;
}
.project-info-div {
    width: 80%;
    word-break: break-all;
    vertical-align: top;
    max-height: 110px;
    line-height: 1.1rem;
    font-weight: bold;
    height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-inline-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.project-info{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 14px;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    /* display: flex;
    flex-wrap: wrap ;
    justify-content: flex-start; */
}
.project-info-container > li {
    color: #fff;
    box-sizing: border-box;
    padding: 8px;
    /* padding: 10px 5px 15px 5px;
    min-width: 140px;
    min-height: 150px;
    max-width: 50%;
    flex: 1; */
}
.worksimg{
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
    margin: 5px auto;
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