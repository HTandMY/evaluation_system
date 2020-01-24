<template>
    <div>
        <HeaderBox :buttonBackShow="true"/>
        <div class="content">
            <div class="grade-box">
                <p class="grade-item" id="grade-1" v-if="grade == 1">1年 進級制作</p>
                <p class="grade-item" id="grade-2" v-else>2年 卒業制作</p>
            </div>
            <div>
                <div class="info-member-box">
                    <span v-for="item in students" v-bind:key="item.id" class="info-member-name">{{item.name}}</span>
                </div>
                <h1>{{workTitle}}</h1>
            </div>
            <div>
                <h2>作品を評価してください<span class="required">※必須</span></h2>
                <transition name="slide-fade" mode="out-in">
                    <div class="error-box" v-if="showError">
                        タップして評価してください！
                    </div>
                </transition>
                <div>
                    <div class="project-box">
                        <div class="project">企画力</div>
                        <div class="project-item-box">
                            <div class="project-item" v-for="index of 5" v-bind:key="index" ref="plan" v-on:click="setPoint('plan' , index)"></div>
                        </div>
                    </div>
                    <div class="project-box">
                        <div class="project">デザイン</div>
                        <div class="project-item-box">
                            <div class="project-item" v-for="index of 5" v-bind:key="index" ref="design" v-on:click="setPoint('design' , index)"></div>
                        </div>
                    </div>
                    <div class="project-box">
                        <div class="project">実装</div>
                        <div class="project-item-box">
                            <div class="project-item" v-for="index of 5" v-bind:key="index" ref="coding" v-on:click="setPoint('coding' , index)"></div>
                        </div>
                    </div>
                    <div class="project-box">
                        <div class="project">プレゼン力</div>
                        <div class="project-item-box">
                            <div class="project-item" v-for="index of 5" v-bind:key="index" ref="presentation" v-on:click="setPoint('presentation' , index)"></div>
                        </div>
                    </div>
                </div>
                <h2>作品についてコメントがありましたら</h2>
                <textarea id="comment" maxlength="128" placeholder="テキストが入ります。来場者からのご意見・ご感想が入ります。" v-model="evaluat.comment"></textarea>
            </div>
            <div>
                <h2>プレゼンされた学生：</h2>
                <div class="members">
                    <div class="members-member" v-for="item in students" v-bind:key="item.id" >
                        <div class="member-box" v-on:click="selectStudent(item.id)">
                            <div class="check-box" :class="{checked : selectedStudent[item.id]}" ref="name"></div><p class="member-name">{{item.name}}</p>
                        </div>
                        <transition name="slide-fade" mode="out-in">
                            <div v-if="selectedStudent[item.id]" class="tag-box">
                                <p>この学生について、どんな印象を持ちましたか？</p>
                                <TagBox :ref="'tag_' + item.id"/>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="button-box">
                <button v-on:click="sendMessage()">送信<img src="@/assets/button_send_icon.png" alt=""></button>
            </div>
            <transition name="scale">
                <div class="messageBox" v-if="showMessage">
                    <div id="messageBox_1">
                        <p id="message">{{ message }}</p>
                        <button v-if="showSuccess" v-on:click="$router.push({ path: '/visitor' })">作品一覧へ</button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/database';
import TagBox from "@/components/TagBox.vue"
import HeaderBox from "@/components/HeaderBox.vue"

export default {
    name : 'evaluate',
    components: {
        TagBox,
        HeaderBox
    },
    data() {
        return {
            grade : 1,
            evaluat : {},
            students : [],
            workTitle : "",
            selectedStudent : {},
            message : "",
            showError : false,
            showMessage : false,
            showSuccess : false
        }
    },
    methods: {
        readVisitorData(){
            this.grade = this.$store.state.visitorMessage.grade;
            this.students = this.$store.state.visitorMessage.students;
            this.workTitle = this.$store.state.visitorMessage.workTitle;
            this.evaluat = Object.assign({}, this.evaluat, {
                boothNumber: this.$store.state.visitorMessage.boothNumber,
                occupation: this.$store.state.visitorMessage.occupation
            });
            if(this.$store.state.visitorMessage.job){
                this.evaluat = Object.assign({}, this.evaluat, {
                    job: this.$store.state.visitorMessage.job
                });
            }
        },
        selectStudent(name){       
            if(!this.selectedStudent[name]){
                this.selectedStudent = Object.assign({}, this.selectedStudent, {
                    [name] : {
                        select : true,
                        tags : []
                    }
                });
            }else{
                this.$delete(this.selectedStudent , name);
            }
        },
        setPoint(projectName , num){
            this.showError = false;
            for(let i = 0 ; i < 5 ; i++){
                this.$refs[projectName][i].style.background = "transparent";
            }
            for(let i = 0 ; i < num ; i++){
                this.$refs[projectName][i].style.background = "aqua";
            }
            this.evaluat = Object.assign({}, this.evaluat, {
                [projectName] : num
            });
        },
        addTags(){
            for(let key in this.selectedStudent){
                for(let i in this.$refs["tag_" + key][0].tags){
                    this.selectedStudent[key].tags.push(this.$refs["tag_" + key][0].tags[i].text)
                }
                console.log(this.selectedStudent[key].tags);
            }
        },
        sendMessage(){
            if(this.evaluat.coding && this.evaluat.design && this.evaluat.plan && this.evaluat.presentation){
                this.addTags();
                let self = this;
                let studentsLength = this.students.length;
                let commentsNum = [];
                let updates = {};


                self.showMessage = true;
                self.message = "送信中。。。"

                let ref = firebase.database().ref("students").once("value").then(function(data){
                    for(let i in self.students){
                        commentsNum[i] = data.child(self.students[i].id + "/comments").numChildren();
                    }
                    for(let key in self.selectedStudent){
                        self.selectedStudent[key] = Object.assign({}, self.selectedStudent[key] ,{
                            num : data.child(key + "/tags/others").numChildren()
                        });
                    }
                    console.log(self.selectedStudent)
                }).then(function(){
                    self.$set(self.evaluat , "time" , self.getTime());
                    for(let i in self.students){
                        updates[self.students[i].id + "/comments/" + commentsNum[i]] = self.evaluat;
                    }
                    for(let key in self.selectedStudent){
                        for(let i in self.selectedStudent[key].tags){
                            updates[key + "/tags/others/" + (self.selectedStudent[key].num + Number(i))] = self.selectedStudent[key].tags[i]
                        }
                    }
                    firebase.database().ref("students").update(updates);
                })
                .then(function(){
                    self.showSuccess = true;
                    //評価成功した表示されるメッセージ
                    self.message = "評価しました！"
                });
            }else{
                this.showError = true;
            }
        },
        getTime(){
            let time = new Date();
            let y = time.getFullYear();
            let m = time.getMonth() + 1;
            let d = time.getDate();
            let h = time.getHours();
            let mm = time.getMinutes();
            if(h < 10){
                h = "0" + h;
            }
            if(mm < 10){
                mm = "0" + mm;
            }

            time = y + "/" + m  + "/" + d + " " + h + "：" + mm;
            return time;
        }
    },
    mounted(){
        this.readVisitorData();
    }
}
</script>

<style>
    .content{
        width: 90%;
        margin: 0 auto;
        max-width: 768px;
    }
    .content h1 {
        margin: 0;
        padding: 20px;
        color: #ffffff;
        text-align: center;
    }
    .grade-box{
        margin: 20px 0;
    }
    .grade-item{
        width: 120px;
        height: 30px;
        text-align: center;
        margin: 0 auto;
        color: #fff;
        border-radius: 5px;
        line-height: 30px;
    }
    #grade-1{
        background-color: #FF9E1E
    }
    #grade-2{
        background-color: #54B5D4
    }
    h2 {
        color: #ffffff;
        position: relative;
    }
    #title_img {
        width: 100%;
    }
    .info-member-box{
        color: #ffffff;
    }
    .info-member-name {
        text-align: center;
        padding: 0 7px 0 5px;
        font-weight: bold;
        font-size: 15px;
        border-right: 2px solid #fff; 
    }
    .info-member-name:last-child{
        border-right:none;
    }
    .members{
        transition: all 0.3s;
    }
    .members-member{
        margin: 10px 0;
    }
    .member-name{
        display: inline-block;
        margin-left: 5px;
        color: #ffffff;
    }
    .member-box {
        border: 2px solid #CAF2FF;
        border-radius: 5px;
        background-color: rgba(159 , 223, 243, 0.5)
    }
    .tag-box{
        width: 100%;
        padding: 15px;
        position: relative;
        top: -4px;
        box-sizing: border-box;
        background-color: rgba(202, 242, 255 , 0.2);
        border: #CAF2FF dashed 2px;
        border-top: none;
        transform-origin: top;
        border-radius: 0 0 5px 5px;
    }
    .tag-box > p {
        color: #fff;
        font-size: 18px
    }
    .check-box{
        position: relative;
        display: inline-block;
        margin-left: 10px; 
        top: 5px;
        width: 20px;
        height: 20px;
        background: rgb(255, 255, 255);
        border-radius: 5px;
        box-sizing: border-box;
        transition: all 0.3s;
    }
    .checked {
        background: rgb(100, 100, 100);
        border: #fff 4px solid;
    }
    .project-box{
        height: 30px;
        display: flex;
        margin: 20px 0;
    }
    .project{
        width: 30%;
        color: #ffffff;
    }
    .project-item-box {
        display: flex;
        justify-content: space-between;
        width: 70%;
    }
    .project-item{
        flex: 1;
        position: relative;
        margin: 0 2px;
        height: 30px;
        width: auto;
        box-sizing: border-box;
        border: 1px solid #ffffff;
        border-radius: 5px;
        transform: skewX(-20deg);
        transition: all 0.3s;
    }
    #comment{
        width: 100%;
        height: 100px;
        resize: none;
        border-radius: 5px;
        background-color: #fff;
        border: 1px solid #ccc;
        font-family: 'SmartPhoneUI';
        font-size: 16px;
        padding: 5px;
        box-sizing: border-box;
        box-shadow: #00000075 0px 1px 1px inset;
    }
    .button-box{
        padding: 20px 0;
        text-align: center;
    }
    .button-box button {
        position: relative;
        margin: 20px 0;
        width: 215px;
        height: 70px;
        background-image: url("../assets/button_send_off.png");
        background-size: 100% 100%;
        background-color: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-family: 'KaisoNext';
        font-size: 22px;
    }
    .button-box button:active{
        background-image: url("../assets/button_send_on.png");
        background-size: 100% 100%;
    }
    .button-box img {
        width: 16px;
        position: relative;
        margin-left: 5px;
    }
    .messageBox{
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: url('../assets/bg1000×1000.png') 50% 50%;
        background-repeat: repeat-y;
        background-size: cover;
        text-align: center;
        z-index: 20;
    }
    #message {
        color: #ffffff;
        margin: 50px;
        font-size: 22px;
    }
    #messageBox_1 {
        position: absolute;
        width: 90%;
        max-width: 768px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50% , -50%);
        transform: translate(-50% , -50%);
        border: 2px solid #CAF2FF;
        border-radius: 5px;
        background-color: rgba(202,242,255,0.2);
        box-shadow: #00A3D5 0 0 4px;
    }
    #messageBox_1 button{
        margin: 20px 0 40px 0;
        width: 215px;
        height: 70px;
        background-image: url("../assets/button_job_off.png");
        background-size: 100% 100%;
        background-color: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-family: 'KaisoNext';
        font-size: 22px;

    }
    .error-box{
        color:#fff;
        font-size:18px;
        background-color: rgb(255, 136, 0);
        padding: 4px;
        border-radius: 4px;
        display: inline-block;
    }

    .scale-enter-active {
        transition: all .3s ease;
    }
    .scale-leave-active {
        transition: all .3s ease;
    }
    .scale-enter, .scale-leave-to{
        transform: scale(0.7 , 0.7);
        opacity: 0;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to{
        transform: scaleY(0);
        opacity: 0;
    }
    .required {
        position: absolute;
        font-size: 14px;
        background-color: #ff8800;
        padding: 5px;
        margin-left: 5px;
        top: 50%;
        transform: translateY(-50%);
    }
</style>