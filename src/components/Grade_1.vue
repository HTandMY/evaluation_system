<template>
    <div key="grade-1">
        <h1 class="page-title" id="page-title-1">進級制作</h1>
        <div class="grid-container">
            <ul class="project-header-container">
                <li class="project-header" v-for="(item, key) in studentData.groups.grade_1" v-bind:key="key">
                    <div class="project-title-box">
                        <div class="title-small">{{item.title_small}}</div>
                        <div class="title-big">{{item.title_big}}</div>
                    </div>
                    <ul class="project-info-container">
                        <li v-for="item_1 in item.student_list" v-bind:key="item_1.id">
                            <div class="project-info">
                                <div v-on:click="setStudentData(item_1.id , item_1.name , item_1.boothNumber , 1 , item_1.workTitle)">
                                    <div class="project-info-num" id="project-info-num-1">{{ item_1.boothNumber }}</div>
                                    <div class="project-info-div">{{ item_1.workTitle }}</div>
                                    <img class="worksimg" :src="require('@/assets/worktitle_' + '19aw0115' + '.jpg')" alt="">
                                    <div class="grade-1 student-info" >{{item_1.name}}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import studentData from '@/assets/groups_copy.json'
export default {
    name : 'grade_1',
    data() {
        return {
            studentData: studentData
        }
    },
    methods: {
        setStudentData(id , name , boothNumber , gradeNum , workTitle){
            this.$store.commit('setStudentId' , {student : [{id : id , name : name}] , boothNumber : boothNumber , grade : gradeNum , workTitle : workTitle});
            this.$router.push({ path: '/evaluate' });
        }
    },
}
</script>

<style>
#page-title-1{
    color: rgb(232, 170, 52);
    text-shadow: rgb(232, 170, 52) 0px 0px 2px;
}
#page-title-1::before{
    content: "";
    position: absolute;
    width: 10px;
    height: 100%;
    background-color: rgb(232, 170, 52);
    left: 5px;
}
.project-info-num{
    position: relative;
    top: -2px;
    font-family: 'KaisoNext';
    display: inline-block;
    width: 20%;
    font-size: 28px;
    text-align: center;
}
#project-info-num-1{
    color: rgb(232, 170, 52);
}
.project-header-container{
    color: #CAF2FF;
    list-style-type: none;
    margin: 0 auto;
    padding: 0 8px;
}
.project-header > div {
    padding: 0 8px;
    font-size: 25px;
    font-weight: bold;
}
.project-title-box {
    border-left: solid 8px #CAF2FF80 ;
    box-sizing: border-box;
    margin-left: 8px;
    margin: 36px 0 16px 8px;
}
.title-small {
    font-size: 15px;
    padding-bottom: 10px;
}
.title-big {
    font-size: 25px;
    line-height: 2rem;
}
.grade-1 .student-info{
    color: rgb(255, 204, 35);
    font-size: 11px;
    font-weight: bold;
}
.student-info-container{
    padding: 0;
}
.student-info{
    font-size: 14px;
    list-style-type: none;
    font-weight: bold;
    color: rgb(122, 224, 255);
    padding: 0 5px;
}
</style>