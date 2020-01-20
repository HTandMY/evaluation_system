<template>
    <div key="comments">
        <div class="comments-title">
            <img src="@/assets/title_comment.png" alt="">
        </div>
        <div class="comments-box">
            <h2 class="name">
                {{ studentData.name }}
            </h2>
            <div v-if="studentData.worktitle">
                <div v-if="studentData.worktitle.length == 1">
                    <PointBox :comments="studentData.comments" :worktitle="studentData.worktitle" :selectNum="selectNum"/>
                </div>
                <div v-else>
                    <div style="text-align: center">
                        <button class="button-worktitle" :class="{ active: selectNum == index }" v-for="(item , index) in studentData.worktitle" :key="index" @click="changeNum(index)">作品{{ index + 1 }}</button>
                    </div>
                    <div>
                        <PointBox :comments="studentData.comments" :worktitle="studentData.worktitle" :selectNum="selectNum"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PointBox from '@/components/PointBox.vue'
export default {
    name : 'CommentsPage',
    props : ['studentData'],
    components : {
        PointBox,
    },
    data() {
        return {
            selectNum : 0
        }
    },
    methods: {
        changeNum(num){
            this.selectNum = num;
        }
    },
}
</script>

<style>
.comments-title{
    height: 55px;
}
.comments-title img {
    height: 100%;
}
.comments-box{
    width: 90%;
    margin: 0 auto;
    padding-bottom: 60px;
}
.comments-box .name {
    text-align: center;
    color: #fff;
    font-family: 'SmartPhoneUI'

}
.comments-box .button-worktitle {
    height: 50px;
    width: 140px;
    margin: 0 10px;
    background-image: url("../assets/button_job_off.png");
    background-size: 100% 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-family: 'SmartPhoneUI';
    font-size: 16px;
    transition: all .3s ease;
}
.comments-box .active {
    background-image: url("../assets/button_job_on.png");
    background-size: 100% 100%;
}
</style>