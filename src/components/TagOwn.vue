<template>
    <div class="tags-own-tags-box">
        <div v-for="item in tagsData" :key="item" class="tags-own">{{ item }}</div>
    </div>
</template>

<script>
export default {
    name: 'TagOwn',
    props : ['tagsData']
}
</script>

<style>
.tags-own{
    display: inline-block;
    position: relative;
    padding: 10px 5px;
    background-image: url("../assets/tag_own_02.png");
    margin: 8px 25px;
    font-size: 15px;
    font-family: 'SmartPhoneUI';
    color: #206074;
}
.tags-own::before{
    content: "";
    position: absolute;
    height: 100%;
    width: 20px;
    top: 0;
    left: -19px;
    background-image: url("../assets/tag_own_01.png");
    background-size: 100% 100%;
}
.tags-own::after{
    content: "";
    position: absolute;
    height: 100%;
    width: 15px;
    top: 0;
    right: -14px;
    background-image: url("../assets/tag_own_03.png");
    background-size: 100% 100%;
}
</style>