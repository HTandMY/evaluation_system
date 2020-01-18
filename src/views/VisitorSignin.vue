<template>
    <div class="select-box">
        <transition name="fade_1" mode="out-in">
            <div class="select-item" v-if="$store.state.visitorMessage.occupation == undefined && $store.state.visitorMessage.occupation != '一般の方'" key="occupation">
                <div style="text-align: center;margin-bottom: 20px;"><img src="@/assets/logo.png" alt=""></div>
                <div class="project-title">
                    <div style="text-align: center;color: #CAF2FF;text-shadow: #CAF2FF 0px 0px 2px;font-size: 18px;">日本電子専門学校webデザイン科</div>
                    <h1>卒業・進級制作展</h1>
                    <div style="text-align: center;color: #CAF2FF;text-shadow: #CAF2FF 0px 0px 2px;font-size: 18px;">CONNECT 2019</div>
                </div>
                <div style="text-align: center;color: #CAF2FF;text-shadow: #CAF2FF 0px 0px 2px;font-size: 22px;">来場者登録</div>
                <button class="buttonSize" v-on:click="createMessage('企業の方')">企業の方</button>
                <button class="buttonSize" v-on:click="createMessage('一般の方')">一般の方</button>
            </div>
            <div class="select-item" v-else key="job">
                <h1 class="project-title">職業を選択して<br/>ください</h1>
                <button class="buttonSize" v-on:click="createMessage('企業の方' , 'エンジニア')">エンジニア</button>
                <button class="buttonSize" v-on:click="createMessage('企業の方' , 'デザイナー')">デザイナー</button>
                <button class="buttonSize" v-on:click="createMessage('企業の方' , 'ディレクター')">ディレクター</button>
                <button class="buttonSize" v-on:click="createMessage('企業の方' , '採用担当')">採用担当</button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "visitorSignin",
    data(){
        return {
            
        }
    },
    methods: {
        createMessage(occupation , job){
            if(job){
                let message = {
                    "occupation" : occupation,
                    "job" : job
                }
                localStorage.setItem("visitor" , JSON.stringify(message));
            }else{
                let message = {
                    "occupation" : occupation
                }
                localStorage.setItem("visitor" , JSON.stringify(message));
            }
            this.$store.commit('readVisitorMessage');
            this.readLocalStorage();
        },
        changeURL(){
            this.$router.push({ path: '/visitor' })
        },
        readLocalStorage(){
            if(localStorage.visitor){
                this.$store.commit('readVisitorMessage');
                if(this.$store.state.visitorMessage.occupation == "一般の方" || this.$store.state.visitorMessage.job != undefined){
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
.select-box{
    position: relative;
    height: 100vh;
}
.select-item{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    width: 300px;
}
.project-title{
    color: #CAF2FF;
    text-shadow: #CAF2FF 0px 0px 2px;
    text-align: center;
    margin-bottom: 40px;
}
.buttonSize{
    color: #fff;
    font-family: 'KaisoNext';
    font-size: 22px;
    display: block;
    width: 200px;
    height: 70px;
    margin: 20px auto;
    background-image: url("../assets/button_job_off.png");
    background-size: 100% 100%;
    background-color: transparent;
    border: none;
    outline: none;
}
.buttonSize:active{
    background-image: url("../assets/button_job_on.png");
    background-size: 100% 100%;
}

.fade_1-enter-active, .fade_1-leave-active {
  transition-property: opacity;
  transition-duration: .3s;
}
.fade-enter-active {
  transition-delay: .3s;
}
.fade_1-enter, .fade_1-leave-active {
  opacity: 0
}
</style>