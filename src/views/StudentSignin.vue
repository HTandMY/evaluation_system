<template>
    <div>
        <div class="select-box">
            <div class="select-item">
                <div style="text-align: center;margin-bottom: 20px;"><img src="@/assets/logo.png" alt=""></div>
                <div class="project-title">
                    <div style="text-align: center;color: #CAF2FF;text-shadow: #CAF2FF 0px 0px 2px;font-size: 18px;">日本電子専門学校webデザイン科</div>
                    <h1>卒業・進級制作展</h1>
                    <div style="text-align: center;color: #CAF2FF;text-shadow: #CAF2FF 0px 0px 2px;font-size: 18px;">CONNECT 2019</div>
                </div>
                <div style="text-align: center;color: #CAF2FF;text-shadow: #CAF2FF 0px 0px 2px;font-size: 22px;">学籍番号</div>
                <div class="input-box">
                    <p v-if="signinError" style="text-align: center;color: rgb(232, 170, 52);font-size: 16px;">学籍番号が見つかりません</p>
                    <input @click="resetError()" placeholder="18／19aw〇〇〇〇" type="text" name="" id="" v-model="studentId">
                </div>
                <button class="buttonSize" v-on:click="signIn()">ログイン</button>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/database';

export default {
    name: "studentSignin",
    data() {
        return {
            studentId : '',
            signinError : false
        }
    },
    methods: {
        signIn(){
            let self = this;
            let ref = firebase.database().ref("students/" + this.studentId).once("value").then(function(data){
                if(data.child("name").exists()){
                    let message = {
                       id : self.studentId
                    }
                    localStorage.setItem("student" , JSON.stringify(message));
                    self.$store.commit('readStudentData');
                    self.changeURL();
                }else{
                    self.signinError = true;
                }
            })
        },
        readLocalStorage(){
            if(localStorage.student){
                this.$store.commit('readStudentData');
                this.changeURL();
            }
        },
        changeURL(){
            this.$router.push({ path: '/student' })
        },
        resetError(){
            this.signinError = false;
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
.input-box{
    text-align: center;
    margin: 20px 0;
}
.input-box input{
    width: 200px;
    height: 40px;
    border: 2px solid #CAF2FF;
    border-radius: 5px;
    background-color: #206074;
    color: #fff;
    box-shadow: #00A3D5 0 0 4px;
    outline: none;
    text-align: center;
    font-size: 16px;
}
</style>