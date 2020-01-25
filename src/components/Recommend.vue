<template>
    <div class="recommend-box">
        <p class="recommend-name">{{ recommend.name }}</p>
        <div>
            <p class="recommend-message-title">おすすめ理由：</p>
            <p class="recommend-message">{{ recommend.message }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name : 'Recommend',
    props : ['recommend']
}
</script>

<style>
.recommend-box{
    border: 2px solid #CAF2FF;
    border-radius: 5px;
    margin: 20px 0;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: #00A3D5 0 0 8px;
    background-color: rgba(202, 242, 255, 0.2);
}
.recommend-name{
    font-size: 18px;
    margin: 10px 0;
    color: #fff;
    padding-bottom: 10px;
    border-bottom: rgba(255, 255, 255, 0.6) 2px solid;
}
.recommend-message-title{
    margin: 0;
    font-size: 16px;
    color: rgba(202, 242, 255, 0.5);
}
.recommend-message{
    margin: 10px 0;
    font-size: 16px;
    color: #FFF;
}
</style>