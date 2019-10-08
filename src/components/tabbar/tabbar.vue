<template>
  <div id="tab-bar">
    <tabbaritem>
        <img slot="icon" src="../../assets/tabbar/home.svg" alt="">
        <div slot="text">Home</div>
    </tabbaritem>
    <tabbaritem>
        <img slot="icon" src="../../assets/tabbar/layers.svg" alt="">
        <div slot="text">About</div>
    </tabbaritem>
    <tabbaritem>
        <img slot="icon" src="../../assets/tabbar/file.svg" alt="">
        <div slot="text">News</div>
    </tabbaritem>
    <tabbaritem>
        <img slot="icon" src="../../assets/tabbar/user.svg" alt="">
        <div slot="text">User</div>
    </tabbaritem>
  </div>
</template>

<script>
import tabbaritem from './tabbaritem.vue'
export default {
    name: 'tabBar',
    components: {
        tabbaritem
    }
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
    }
</style>