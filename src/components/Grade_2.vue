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
/* display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
</style>