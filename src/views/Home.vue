<template>
  <div class="home">
    <div style="text-align: center;margin-bottom: 20px;"><img src="@/assets/logo.png" alt=""></div>
      <div class="project-title">
        <div style="text-align: center;color: #CAF2FF;text-shadow: #CAF2FF 0px 0px 2px;font-size: 18px;">日本電子専門学校webデザイン科</div>
        <h1>卒業・進級制作展</h1>
      <div style="text-align: center;color: #CAF2FF;text-shadow: #CAF2FF 0px 0px 2px;font-size: 18px;">CONNECT 2019</div>
      <div><router-link tag="button" to="/visitorsignin" class="button">来場者入り口</router-link></div>
      <div><router-link tag="button" to="/studentsignin" class="button"><span>ウェブデザイン科</span><br/>学生入口</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
     
  },
  methods: {

  }
}
</script>

<style>
.home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.project-title{
    color: #CAF2FF;
    text-shadow: #CAF2FF 0px 0px 2px;
    text-align: center;
    margin-bottom: 40px;
}
.button{
    color: #fff;
    font-family: 'KaisoNext';
    font-size: 22px;
    display: block;
    width: 280px;
    height: 100px;
    margin: 20px auto;
    background-image: url("../assets/button_job_off.png");
    background-size: 100% 100%;
    background-color: transparent;
    border: none;
    outline: none;
}
.button span{
  font-size: 18px;
}
</style>
