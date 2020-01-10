<template>
  <div>
      <div>
            <h1 class="page-title">進級制作</h1>
            <div class="grid-container">
            
                <ul class="project-header-container">
                <li class="project-header" v-for="(item, index) in studentData.groups.grade_1" v-bind:key="item[index]">
                    <div>{{ item[index] }}</div>
                    <ul class="project-info-container">
                        <li class="project-info" v-for="(item_1, index_1) in item[index]" v-bind:key="index_1.id" >
                            <div>作品名</div>
                            
                            <div>学生名前</div>
                            <div>{{ item[index].name }}</div>
                        </li>
                        
                        <!-- <li class="project-info" v-for="(item_1 , index_1) in item.members" v-bind:key="index_1.id ">
                            {{ studentData.students[item_1.id].boothNumber }}
                            {{studentData.students[item_1.id].workTitle}}
                            <ul class="student-info-container">
                                <div class="student-info">
                                    <div><img class="worksimg" src="@/assets/1styearstudents@2x.png" alt=""></div>
                                    {{ studentData.students[item_1.id].name }} 
                                </div>
                            </ul>
                        </li> -->
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
    name : 'grade_1',
    data() {
        return {
            studentData: studentData
        }
    }
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
    padding: 0 0 0 40px;
}
.project-info{
    border: solid 2px #CAF2FF;
    background-color: #CAF2FF20;
    box-shadow: #00A3D5 0px 0px 8px;
    border-radius: 5px;
    font-size: 14px;
}
/* .student-info-container{
    padding: 0;
} */
/* .student-info{
    list-style-type: none;
} */
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
</style>