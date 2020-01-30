<template>
    <div key="recommend">
        <div class="recommend-title">
            <img src="@/assets/title_recommend.png" alt="">
        </div>
        <div class="recommend-content">
            <h2 class="recommend-content-title">私を紹介した学生</h2>
            <section>
                <div>
                    <Recommend v-for="item in studentData.students[$store.state.studentData.id]" :key="item.id" :recommend="item"/>
                </div> 
            </section>
        </div>
    </div>
</template>

<script>
import Recommend from '@/components/Recommend.vue'
import studentData from '@/assets/groups_copy.json'
export default {
    name : 'RecommendPage',
    components: {
        Recommend
    },
    data() {
        return {
            studentData : studentData
        }
    },
}
</script>

<style>
.recommend-title{
    height: 55px;
}
.recommend-title img{
    height: 100%;
}
.recommend-content-title{
    text-align: center;
    color: #fff;
}
.recommend-content{
    width: 90%;
    margin: 0 auto;
    max-width: 768px;
    padding-bottom: 60px;
}
</style>