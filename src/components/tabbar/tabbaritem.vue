<template>
    <router-link tag="div" :to="{path: path , query: queryName}" replace class="tab-bar-item">
        <div v-if="isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activedStyle"><slot name="item-text"></slot></div>
    </router-link>
</template>

<script>
export default {
    name: 'tabbaritem',
    props:['path' , 'query' , 'activedColor'],
    data() {
        return {
            queryName: this.query
        }
    },
    methods: {
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path)
        },
        activedStyle(){
            return !this.isActive ? {color : this.activedColor} : {}
        }
    },
}
</script>

<style>
    .tab-bar-item {
        flex: 1;
        color: #2c3e50;
        text-align: center;
        font-size: 12px;
    }
    .tab-bar-item img {
        height: 23px;
        margin-top: 6px;
        /* 去掉图片下的3个像素 */
        vertical-align: middle;
        margin-bottom: 2px;
    }
    #tab-bar .actived {
        animation: zoom .2s
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