<template>
    <div key="grade-2">
        <h1 class="page-title">卒業制作</h1>
        <div class="grid-container">
            <ul class="project-info-container">
                <li v-for="(item , index) in studentData.groups.grade_2" v-bind:key="index.groupName">
                    <div class="project-info">
                        <div v-on:click="setStudentData(item.members , item.workTitle)">
                            <div>
                                <div class="project-info-div" style="width: 20%; font-size: 18px; margin-bottom: 10px; text-align: center; color: rgb(74, 202, 241);">{{ item.boothNumber }}</div>
                                <div class="project-info-div" style="width: 80%;">{{ item.workTitle }}</div>
                            </div> 
                            <div><img class="worksimg" src="@/assets/worktitle.jpg" alt=""></div>
                            <ul class="student-info-container">
                                <li class="student-info" v-for="item_1 in item.members" v-bind:key="item_1.id">
                                    {{ item_1.name }}
                                </li>
                            </ul>
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
        setStudentData(id , workTitle){
            this.$store.commit('setStudentId' , {student : id , groupName : workTitle});
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
.project-info-div {
    display: inline-block;
    word-break: break-all;
    vertical-align: top;
    max-height: 110px;
    line-height: 1.2rem;
    font-weight: bold;
}
.project-info{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: solid 2px #CAF2FF;
    background-color: #CAF2FF20;
    box-shadow: #00A3D5 0px 0px 8px;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px;
}
.student-info-container{
    padding: 0;
}
.student-info{
    font-size: 14px;
    list-style-type: none;
    font-weight: bold;
    color: rgb(122, 224, 255);
    margin-bottom: 12px;
    padding: 5px;
}
.grid-container{
    margin: 0 auto;
    display:block;
    width: 100%;
    padding-bottom: 30px;
}
.project-info-container {
    padding: 0;
    margin: 0 ;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap ;
    justify-content: flex-start;
}
.project-info-container > li {
    min-width: 140px;
    min-height: 150px;
    color: #fff;
    flex: 1;
    max-width: 50%;
    box-sizing: border-box;
    padding: 5px;
}
.worksimg{
    width: 100%;
    border: solid 2px #CAF2FF;
    background-color: #CAF2FF20;
    box-shadow: #00A3D5 0px 0px 8px;
    border-radius: 5px;
    font-size: 14px;
    margin: 10px auto;
    box-sizing: border-box;
}
/* display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
</style>