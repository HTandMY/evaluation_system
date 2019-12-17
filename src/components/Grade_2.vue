<template>
    <div>
        <div>
            <h1 class="page-title">卒業制作</h1>
            <div class="grid-container">
            <ul class="project-info-container">
                <li class="project-info" v-for="(item , index) in studentData.groups.grade_2" v-bind:key="index.groupName">
                    {{ item.groupName }}
                    <ul class="student-info-container">
                        <div><img class="worksimg" src="@/assets/1styearstudents@2x.png" alt=""></div>
                        <li class="student-info" v-for="(item_1 , index_1) in item.members" v-bind:key="index_1.id">
                            {{ studentData.students[item_1.id].name }}
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
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
}
</script>

<style>
.page-title{
    color: #CAF2FF;
    text-shadow: #00A3D5 0px 0px 8px;
    text-align: center;
}
.project-info{
    border: solid 2px #CAF2FF;
    background-color: #CAF2FF20;
    box-shadow: #00A3D5 0px 0px 8px;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
}
.student-info-container{
    padding: 0;
}
.student-info{
    font-size: 16px;
    text-align: center;
    list-style-type: none;
}
.grid-container{
    margin: 0 auto;
    display:block;
    width: 100%;
}
.project-info-container {
    padding: 10px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap ;
    justify-content: space-evenly;
}
.project-info-container > li {
    width: 30vw;
    margin: 10px;
    color: #fff;
    padding: 15px;
}
.worksimg{
    width: 100%;
}

    /* 20% 透明度　 */
</style>