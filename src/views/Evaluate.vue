<template>
    <div class="content">
        <div>
            <h1>{{data.groupName}}</h1>
            <div><img id="title_img" src="@/assets/worktitle.jpg" alt=""></div>
        </div>
        <div>
            <h2>プレゼンされた学生：</h2>
            <div class="members">
                <div class="members-member" v-for="(item , index) in data.students" v-bind:key="item.id" >
                    <div class="member-box" v-on:click="selectStudent(index)">
                        <div class="chick-box" ref="name"></div><p class="member-name">{{item.name}}</p>
                    </div>
                </div>
            </div>
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
            <textarea id="comment"></textarea>
        </div>
        <div>
            <h2>この学生に当てはまる言葉を選んでください</h2>
            <div>
                <div class="tag" ref="tag1" v-on:click="addTags('tag1')">笑顔</div>
                <div class="tag" ref="tag2" v-on:click="addTags('tag2')">向上心</div>
                <div class="tag" ref="tag3" v-on:click="addTags('tag3')">熱意</div>
                <div class="tag" ref="tag4" v-on:click="addTags('tag4')">チャレンジ精神</div>
                <div class="tag" ref="tag5" v-on:click="addTags('tag5')">好奇心旺盛</div>
                <div><input class="tagInput" type="text" name="" id="" ref="text"></div>
            </div>
        </div>
        <div><button v-on:click="sendMessage()">送信</button></div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/database';
export default {
    name : 'evaluate',
    data() {
        return {
            data : {}
        }
    },
    methods: {
        readVisitorData(){
            this.data = this.$store.state.visitorMessage;
            this.data.evaluat = {
               groupName : this.data.groupName,
               occupation : this.data.occupation
            }
            if(this.data.job){
                this.data.evaluat.job = this.data.job;
            }
        },
        autoSelectStudent(){
            this.$refs.name[0].style.border = "10px solid orange";
            this.data.student = this.data.students[0].id;
        },
        selectStudent(index){          
            for(let i = 0 ; i < this.$refs.name.length ; i++){
                this.$refs.name[i].style.border = "none";
            }
            this.$refs.name[index].style.border = "10px solid orange";
            this.data.student = this.data.students[index].id;
        },
        setPoint(projectName , num){
            for(let i = 0 ; i < 5 ; i++){
                this.$refs[projectName][i].style.background = "transparent";
            }
            for(let i = 0 ; i < num ; i++){
                this.$refs[projectName][i].style.background = "aqua";
            }
            this.data.evaluat[projectName] = num;
        },
        addTags(tag){
            let n = this.$refs.text.value.search(this.$refs[tag].innerText);
            if(n == -1){
                this.$refs.text.value += this.$refs[tag].innerText + ",";
            }
        },
        sendMessage(){
            let self = this;
            let studentsLength = this.data.students.length;
            let num = [];
            let updates = {};
            let ref = firebase.database().ref("students").once("value").then(function(data){
                    for(let i = 0 ; i < studentsLength ; i++){
                        num[i] = data.child(self.data.students[i].id + "/comments").numChildren();
                    }
            }).then(function(){
                for(let i in self.data.students){
                    updates['/students/' + self.data.students[i].id + '/comments/' + num[i]] = self.data.evaluat;
                }
                firebase.database().ref().update(updates);
            });
        }
    },
    mounted() {
        this.readVisitorData();
    },
    updated() {
        this.autoSelectStudent();
    },
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
    }
</style>