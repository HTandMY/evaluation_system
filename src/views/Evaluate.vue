<template>
    <div class="content">
        <div>
            <h1>{{evaluat.groupName}}</h1>
            <div><img id="title_img" src="@/assets/worktitle.jpg" alt=""></div>
        </div>
        <div>
            <h2>作品を評価してください</h2>
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
                <div class="members-member" v-for="(item , index) in students" v-bind:key="item.id" >
                    <div class="member-box" v-on:click="selectStudent(index)">
                        <div class="chick-box" ref="name"></div><p class="member-name">{{item.name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <transition name="slide-fade">
            <div  v-if="selectedStudent != ''">
                <h2>この学生に当てはまる言葉を選んでください</h2>
                <div>
                    <div class="tag" ref="tag1" v-on:click="addTags('tag1')">笑顔</div>
                    <div class="tag" ref="tag2" v-on:click="addTags('tag2')">向上心</div>
                    <div class="tag" ref="tag3" v-on:click="addTags('tag3')">熱意</div>
                    <div class="tag" ref="tag4" v-on:click="addTags('tag4')">チャレンジ精神</div>
                    <div class="tag" ref="tag5" v-on:click="addTags('tag5')">好奇心旺盛</div>
                    <div><input class="tagInput" type="text" name="" id="" ref="text" v-model="tags"></div>
                </div>
            </div>
        </transition>
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
export default {
    name : 'evaluate',
    data() {
        return {
            evaluat : {},
            students : [],
            selectedStudent : "",
            tags : "",
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
        selectStudent(index){          
            for(let i = 0 ; i < this.$refs.name.length ; i++){
                this.$refs.name[i].style.border = "none";
            }
            this.$refs.name[index].style.border = "10px solid aqua";
            this.selectedStudent = this.students[index].id;
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
        addTags(tag){
            let n = this.$refs.text.value.search(this.$refs[tag].innerText);
            if(n == -1){
                this.tags += this.$refs[tag].innerText + ",";
            }
        },
        sendMessage(){
            if(this.evaluat.coding && this.evaluat.design && this.evaluat.plan && this.evaluat.presentation){
                let self = this;
                let studentsLength = this.students.length;
                let num = [];
                let tagNum = 0;
                let newtags = {};
                let updates = {};
                
                let tags = this.tags.split(/\s+|,+|、+|，+/);
                tags = tags.filter(function(tag){
                    return tag != ""
                });
                
                if(this.selectedStudent && tags == ""){
                    this.showMessage = true;
                    //タグ入力しない表示されるメッセージ
                    this.message = "タグを入力してください";
                    return
                }
                let ref = firebase.database().ref("students").once("value").then(function(data){
                        for(let i = 0 ; i < studentsLength ; i++){
                            num[i] = data.child(self.students[i].id + "/comments").numChildren();
                        }
                        tagNum = data.child(self.selectedStudent + "/tags/others").numChildren();
                }).then(function(){
                    for(let i in self.students){
                        updates[self.students[i].id + "/comments/" + num[i]] = self.evaluat;
                    }
                    if(tags){
                        for(let i in tags){
                            updates[self.selectedStudent + "/tags/others/" + (tagNum + Number(i))] = tags[i]
                        }
                    }
                    firebase.database().ref("students").update(updates);
                }).then(function(){
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
    }
    #title_img {
        width: 100%;
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
        border: 1px solid #ffffff;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.2)
    }
    .chick-box{
        position: relative;
        display: inline-block;
        margin-left: 10px; 
        top: 5px;
        width: 20px;
        height: 20px;
        background: rgb(255, 255, 255);
        border-radius: 50%;
        box-sizing: border-box;
        transition: all 0.3s;
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
        height: 100px
    }
    .button-box{
        padding: 20px 0;
        text-align: center;
    }
    .tag{
        display: inline-block;
        padding: 10px 15px;
        margin: 5px;
        color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 30px;
        box-sizing: border-box;
    }
    .tagInput{
        width: 100%;
        margin: 20px 0;
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
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to{
        transform: translateY(10px);
        opacity: 0;
    }
</style>