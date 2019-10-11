<template>
  <div id="tab-bar">
    <tabbaritem path="/home" activedColor="rgb(255,150,150)">
        <img slot="item-icon" src="../../assets/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../assets/tabbar/home_1.svg" alt="">
        <div slot="item-text">Home</div>
    </tabbaritem>
    <tabbaritem path="/about" activedColor="rgb(255,150,150)">
        <img slot="item-icon" src="../../assets/tabbar/layers.svg" alt="">
        <img slot="item-icon-active" src="../../assets/tabbar/layers_1.svg" alt="">
        <div slot="item-text">About</div>
    </tabbaritem>
    <tabbaritem path="/news" :query="query" activedColor="rgb(255,150,150)">
        <img slot="item-icon" src="../../assets/tabbar/file.svg" alt="">
        <img slot="item-icon-active" src="../../assets/tabbar/file_1.svg" alt="">
        <div slot="item-text">News</div>
    </tabbaritem>
    <tabbaritem :path="'/user/' + userId" activedColor="rgb(255,150,150)">
        <img slot="item-icon" src="../../assets/tabbar/user.svg" alt="">
        <img slot="item-icon-active" src="../../assets/tabbar/user_1.svg" alt="">
        <div slot="item-text">User</div>
    </tabbaritem>
  </div>
</template>

<script>
import tabbaritem from './tabbaritem.vue'
export default {
    name: 'tabBar',
    components: {
        tabbaritem
    },
    data() {
        return {
        }
    },
    props:['userId' , 'query']
}
</script>

<style>
    #tab-bar {
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 49px;
        box-shadow: 0 0 4px rgba(0,0,0,0.2)
    }
</style>