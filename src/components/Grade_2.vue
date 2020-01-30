<template>
    <div key="grade-2">
        <h1 class="page-title">卒業制作</h1>
        <div class="grid-container">
            <ul class="project-info-container grade-2">
                <li v-for="(item , index) in studentData.groups.grade_2" v-bind:key="index.groupName">
                    <div class="project-info">
                        <div v-on:click="setStudentData(item.members , item.boothNumber , 2 , item.workTitle)">
                            <div class="project-info-box">
                                <div class="project-info-num">{{ item.boothNumber }}</div>
                                <div class="project-info-div">{{ item.workTitle }}</div>
                            </div> 
                            <div><img class="worksimg" :src="require('@/assets/worktitle_' + item.id + '.jpg')" alt=""></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import studentData from '@/assets/groups_copy.json'
export default {
    name : 'grade_2',
    data() {
        return {
            studentData: studentData
        }
    },
    methods: {
        setStudentData(id , boothNumber , gradeNum , workTitle){
            this.$store.commit('setStudentId' , {student : id , boothNumber : boothNumber , grade : gradeNum , workTitle : workTitle});
            this.$router.push({ path: '/evaluate' });
        }
    },
}
</script>

<style>
.project-info-container.grade-2 {
    padding: 0 8px;
    padding: 16px 8px 0;
}
.project-info-box{
    position: relative;
}
.project-info-num {
    position: relative;
    top: -2px;
    font-family: 'KaisoNext';
    display: inline-block;
    width: 20%;
    font-size: 28px;
    text-align: center;
    color: rgb(74, 202, 241);

}
</style>