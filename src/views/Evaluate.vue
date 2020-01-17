<template>
    <div class="content">
        <a @click="$router.go(-1)">back</a>
        <div>
            <h1>{{evaluat.groupName}}</h1>
            <div v-for="item in students" v-bind:key="item.id" class="info-member-name">{{item.name}}</div>
            <div><img id="title_img" src="@/assets/worktitle.jpg" alt=""></div>
        </div>
        <div>
            <h2>作品を評価してください<span class="required">※必須</span></h2>
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
            <textarea id="comment" maxlength="128" v-model="evaluat.comment"></textarea>
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
            <button v-on:click="sendMessage()">送信</button>
        </div>
        <transition name="scale">
            <div class="messageBox" v-if="showMessage">
                <div id="messageBox_1">
                    <p id="message">{{ message }}</p>
                    <button v-on:click="closeMessageBox()">閉じる</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/database';
import TagBox from "@/components/TagBox.vue"
export default {
    name : 'evaluate',
    components: {
        TagBox,
    },
    data() {
        return {
            evaluat : {},
            students : [],
            selectedStudent : {},
            message : "",
            showMessage : false,
            success : false
        }
    },
    methods: {
        readVisitorData(){
            this.data = this.$store.state.visitorMessage;
            this.students = this.$store.state.visitorMessage.students;
            this.evaluat = Object.assign({}, this.evaluat, {
                groupName: this.$store.state.visitorMessage.groupName,
                occupation: this.$store.state.visitorMessage.occupation
            });
            if(this.data.job){
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
                    self.showMessage = true;
                    self.success = true;
                    //評価成功した表示されるメッセージ
                    self.message = "評価しました"
                });
            }else{
                this.showMessage = true;
                //ポイントしない表示されるメッセージ
                this.message = "作品を評価してください"
            }
        },
        closeMessageBox(){
            if(this.success){
                this.$router.push({ path: '/visitor' });
            }else{
                this.showMessage = false
            }
        }
    },
    mounted() {
        this.readVisitorData();
    }
}
</script>

<style>
    .content{
        width: 90%;
        margin: 0 auto;
    }
    .content h1 {
        margin: 0;
        padding: 20px;
        color: #ffffff;
        text-align: center;
    }
    h2 {
        color: #ffffff;
        position: relative;
    }
    #title_img {
        width: 100%;
    }
    .info-member-name {
        color: #ffffff;
        text-align: center;
        margin-bottom: 5px;
        font-weight: bold;
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
        background-color: rgba(159 , 223, 243, 0.7)
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
        font-size: 16px;
        padding: 5px;
        box-sizing: border-box;
        box-shadow: #00000075 0px 1px 1px inset;
    }
    .button-box{
        padding: 20px 0;
        text-align: center;
    }
    .messageBox{
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        text-align: center;
        
    }
    #message {
        color: #ffffff;
    }
    #messageBox_1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
    }
    #messageBox_1 button {
        margin: 20px 0;
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