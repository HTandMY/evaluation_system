<template>
    <div>
        <div>
            <h1 class="page-title">卒業制作</h1>
            <div class="grid-container">
            <ul class="project-info-container">
                <li class="project-info" v-for="(item , index) in studentData.groups.grade_2" v-bind:key="index.groupName">
                  <div> <span class="project-info-div" style="width: 20%;">{{ item.boothNumber }}</span> <span class="project-info-div" style="width: 80%;">{{ item.workTitle }}</span> </div> 
                    <div><img class="worksimg" src="@/assets/1styearstudents@2x.png" alt=""></div>
                    <ul class="student-info-container">
                        <li class="student-info" v-for="item_1 in item.members" v-bind:key="item_1.id">
                            {{ item_1.name }}
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
.project-info-div {
    display: inline-block;
    word-break: break-all;
    vertical-align: top;
    max-height: 110px;
}
.project-info{
    border: solid 2px #CAF2FF;
    background-color: #CAF2FF20;
    box-shadow: #00A3D5 0px 0px 8px;
    border-radius: 5px;
    font-size: 14px;
    /* text-align: center; */
}
.student-info-container{
    padding: 0;
}
.student-info{
    font-size: 12px;
    /* text-align: center; */
    list-style-type: none;
}
.grid-container{
    margin: 0 auto;
    display:block;
    width: 100%;
}
.project-info-container {
    padding: 0;
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

    /* 20% 透明度　 */
</style>