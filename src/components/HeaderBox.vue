<template>
    <div id="header-box-out">
        <div id="logo-box">
            <img src="@/assets/logo.png" alt="">
            <img src="@/assets/logo_title.png" alt="">
        </div>
        <div class="button-back-box" @click="$router.go(-1)" v-if="buttonBackShow">
            <img src="@/assets/button_back.png" alt="" srcset="">
        </div>
    </div>
</template>

<script>
export default {
    name : 'headerbox',
    props: ['buttonBackShow'],
    data() {
        return {
            
        }
    },
}
</script>

<style>
#header-box-out{
    height: 50px;
    background-color: #F1F1F1EE;
    position: sticky;
    top: 0;
    box-shadow: 0 1px 2px rgba(55,55,55,0.5);
    z-index: 10;
}
.button-back-box{
    position: absolute;
    top: 50%;
    transform: translate(0 , -50%);
    left: 10px;
    width: 40px;
    height: 40px;
}
.button-back-box img {
    width: 100%;
    height: 100%;
}
#logo-box{
    position: relative;
    top: 50%;
    text-align: center;
    transform: translate(0 , -50%);
    height: 35px;
}
#logo-box img{
    height: 100%;
}
</style>