<template>
    <div key="grade-1">
        <h1 class="page-title">進級制作</h1>
        <div class="grid-container">
            <ul class="project-header-container">
                <li class="project-header" v-for="(item, key) in studentData.groups.grade_1" v-bind:key="key">
                    <div>{{key}}</div>
                    <ul class="project-info-container">
                        <li class="project-info" v-for="item_1 in item" v-bind:key="item_1.id">
                            <div v-on:click="setStudentData(item_1.id , item_1.name , item_1.workTitle)">
                                <span class="project-info-div" style="width: 20%;font-size: 18px; margin-bottom: 10px; text-align: center; color: rgb(255, 204, 35);">{{ item_1.boothNumber }}</span>
                                <span class="project-info-div" style="width: 80%;">{{ item_1.workTitle }}</span>
                                <img class="worksimg" src="@/assets/worktitle.jpg" alt="">
                                <span class="grade-1 student-info" >{{item_1.name}}</span>
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
        setStudentData(id , name , workTitle){
            this.$store.commit('setStudentId' , {student : [{id : id , name : name}] , groupName : workTitle});
            this.$router.push({ path: '/evaluate' });
        }
    },
}
</script>

<style>
.page-title{
    color: #CAF2FF;
    text-shadow: #00A3D5 0px 0px 8px;
    text-align: center;
}
.project-header-container{
    color: #CAF2FF;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
}
.project-header > div {
    padding: 20px 0 10px 40px;
    font-size: 20px;
    font-weight: bold;
}
.project-info{
    border: solid 2px #CAF2FF;
    background-color: #CAF2FF20;
    box-shadow: #00A3D5 0px 0px 8px;
    border-radius: 5px;
    font-size: 14px;
}
.grid-container{
    margin: 0 auto;
    display:block;
    width: 100%;
}
.project-info-container {
    padding: 0;
    margin: 0 ;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap ;
    justify-content: space-evenly;
}
.project-info-container > li {
    min-width: 130px;
    margin: 5px;
    color: #fff;
    padding: 15px;
    flex: 1;
}
.worksimg{
    width: 100%;
}
.grade-1.student-info{
    color: rgb(255, 204, 35);
    font-size: 11px;
    font-weight: bold;
}
</style>