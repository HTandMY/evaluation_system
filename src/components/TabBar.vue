<template>
    <div class="tab-bar">
        <router-link tag="div" to="comments" replace class="tab-bar-item" active-class="tab-bar-active">
            <div v-if="isActive('comments')">
                <img src="@/assets/tabbar_comment_off.png" alt="">
            </div>
            <div v-else>
                <img src="@/assets/tabbar_comment_on.png" alt="">
            </div>
            <div>
                <div>評価</div>
            </div>
        </router-link>
        <router-link tag="div" to="tags" replace class="tab-bar-item" active-class="tab-bar-active">
            <div v-if="isActive('tags')">
                <img src="@/assets/tabbar_tag_off.png" alt="">
            </div>
            <div v-else>
                <img src="@/assets/tabbar_tag_on.png" alt="">
            </div>
            <div>
                <div>タグ</div>
            </div>
        </router-link>
        <router-link tag="div" to="recommend" replace class="tab-bar-item" active-class="tab-bar-active">
            <div v-if="isActive('recommend')">
                <img src="@/assets/tabbar_recommend_off.png" alt="">
            </div>
            <div v-else>
                <img src="@/assets/tabbar_recommend_on.png" alt="">
            </div>
            <div>
                <div>おすすめ恒星</div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name : 'TabBar',
    methods: {
        isActive(path){
            return this.$route.path.indexOf(path) > 0 ? false : true;
        }
    },
    computed: {

    },
}
</script>

<style>
.tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    box-shadow: 0 0 4px rgba(0,0,0,0.2)
}
.tab-bar-item {
    flex: 1;
    color: #A8A8A8;
    text-align: center;
    font-size: 13px;
}
.tab-bar .tab-bar-active {
    animation: zoom .2s ease;
    color : #007AA0;
    font-family: 'SmartPhoneUI';
}
.tab-bar-item img {
    height: 23px;
    margin-top: 6px;
    /* 去掉图片下的3个像素 */
    vertical-align: middle;
    margin-bottom: 4px;
}
@keyframes zoom {
    0% {
        transform : scale(1)
    }
    50% {
        transform : scale(0.8)
    }
    100% {
        transform : scale(1)
    }
}
</style>