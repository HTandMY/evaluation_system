<template>
    <div>
        <div v-if="comments.length > 0">
            <div v-for="(item , index) in comments" :key="index">
                {{ item.occupation }}
            </div>
        </div>
        <div v-if="tags.length > 0">
            <div v-for="(item , index) in tags" :key="index">
                {{ item }}
            </div>
        </div>

    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/database';

export default {
    name: 'student',
    data() {
        return {
            worktitle : [],
            comments : [],
            tags :[],
        }
    },
    methods: {
        setStudentData(){
            let self = this;
            let ref = firebase.database().ref("students/" + self.$store.state.studentData.id).on("value" , function(data){
                self.worktitle = data.val().worktitle;
                self.reSetStudentData(data.val());
            });
        },
        reSetStudentData(data){
            if(data.comments){
                for(let i in data.comments){
                    this.$set(this.comments, i , data.comments[i]);
                }
            }
            if(data.tags.others){
                for(let i in data.tags.others){
                    this.$set(this.tags, i , data.tags.others[i]);
                }
            }
        },
        readLocalStorage(){
            if(!localStorage.student){
                this.changeURL();
            }else{
                this.$store.commit('readStudentData');
            }
        },
        changeURL(){
            this.$router.push({ path: '/studentsignin' })
        }
    },
    mounted() {
        this.readLocalStorage();
        this.setStudentData();
    },
}
</script>

<style>

</style>