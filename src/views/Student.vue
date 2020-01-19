<template>
    <div>
        <div>
            <transition name="fade">
                <router-view
                    :studentData="studentData"
                />
            </transition>
        </div>
        <TabBar/>
    </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'
import * as firebase from 'firebase/app';
import 'firebase/database';

export default {
    name: 'student',
    components: {
        TabBar
    },
    data() {
        return {
            studentData : {
                comments : [],
                tags : {
                    others : []
                },
                // worktitle : []
            }
        }
    },
    methods: {
        setStudentData(){
            let self = this;
            let ref = firebase.database().ref("students/" + self.$store.state.studentData.id).on("value" , function(data){
                self.reSetStudentData(data.val());
            });
        },
        reSetStudentData(data){
            this.studentData = Object.assign({} , data);
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