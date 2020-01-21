<template>
    <div>
        <h3 class="point-title">
            {{ worktitle[selectNum] }}
        </h3>
        <div class="point-box">
            <div class="point-all-box">
                <p>総合</p>
                <span class="point-all">
                    {{ getAll }}
                </span>
                <span class="point-all-text">
                    ポイント
                </span>
            </div>
            <div class="point-item-box">
                <div class="point-item">
                    <img class="point-item-icon" src="@/assets/icon_plan.png" alt="">
                    <p style="color:#FFF065">企画</p>
                    <p class="point-item-text">{{ plan }}</p>
                </div>
                <div class="point-item">
                    <img class="point-item-icon" src="@/assets/icon_design.png" alt="">
                    <p style="color:#FF98F2">デザイン</p>
                    <p class="point-item-text">{{ design }}</p>
                </div>
                <div class="point-item">
                    <img class="point-item-icon" src="@/assets/icon_coding.png" alt="">
                    <p style="color:#79DEFF">実装</p>
                    <p class="point-item-text">{{ coding }}</p>
                </div>
                <div class="point-item">
                    <img class="point-item-icon" src="@/assets/icon_presentation.png" alt="">
                    <p style="color:#78FF73">プレゼン</p>
                    <p class="point-item-text">{{ presentation }}</p>
                </div>
            </div>
            <div class="point-comments-box">
                <div v-for="(item , index) in selectedWorks" :key="index" class="point-comments-item">
                    <div class="point-comments-item-title">
                        <p class="point-comments-item-job">{{ item.job || item.occupation }}</p>
                        <p class="point-comments-item-time">{{ item.time }}</p>
                    </div>
                    <div class="point-comments-item-box">
                        <div class="comments-item">
                            <img src="@/assets/icon_plan.png" alt="">
                            <p>企画</p>
                            <div class="comments-item-box">
                                <span class="comments-item-point" v-for="i in 5" :key="i" :class="{point : i <= item.plan }"></span>
                                <span class="comments-item-text">{{ item.plan }}</span>
                            </div>
                        </div>
                        <div class="comments-item">
                            <img src="@/assets/icon_design.png" alt="">
                            <p>デザイン</p>
                            <div class="comments-item-box">
                                <span class="comments-item-point" v-for="i in 5" :key="i" :class="{point : i <= item.design }"></span>
                                <span class="comments-item-text">{{ item.design }}</span>
                            </div>
                        </div>
                        <div class="comments-item">
                            <img src="@/assets/icon_coding.png" alt="">
                            <p>実装</p>
                            <div class="comments-item-box">
                                <span class="comments-item-point" v-for="i in 5" :key="i" :class="{point : i <= item.coding }"></span>
                                <span class="comments-item-text">{{ item.coding }}</span>
                            </div>
                        </div>
                        <div class="comments-item">
                            <img src="@/assets/icon_presentation.png" alt="">
                            <p>プレゼン</p>
                            <div class="comments-item-box">
                                <span class="comments-item-point" v-for="i in 5" :key="i" :class="{point : i <= item.presentation }"></span>
                                <span class="comments-item-text">{{ item.presentation }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="item.comment" class="comment-box">
                        <div class="comment-box-title">メッセージ：</div>
                        <div class="comment-box-content" style="white-space: pre-line;">{{ item.comment }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'PointBox',
    props: ["comments" , "worktitle" , "selectNum"],
    data() {
        return {
            coding : 0,
            design : 0,
            plan : 0,
            presentation : 0,
        }
    },
    methods: {
        setPoint(){
            this.coding = 0;
            this.design = 0;
            this.plan = 0;
            this.presentation = 0;
            for(let i in this.comments){
                if(this.comments[i].groupName == this.worktitle[this.selectNum]){
                    this.coding += this.comments[i].coding;
                    this.design += this.comments[i].design;
                    this.plan += this.comments[i].plan;
                    this.presentation += this.comments[i].presentation;
                }
            }
        }
    },
    computed: {
        getAll(){
            return this.coding + this.design + this.plan + this.presentation;
        },
        reverseComments(){
            if(this.comments){
                return this.comments.reverse();
            }
        },
        selectedWorks(){
            let self = this;
            return this.reverseComments.filter(function(item){
                return item.groupName == self.worktitle[self.selectNum]
            });
        }
    },
    watch: {
        comments(){
            this.setPoint();
        },
        selectNum(){
            this.setPoint();
        }
    },
    mounted() {
        this.setPoint();
    },
}
</script>

<style>

.point-title{
    text-align: center;
    color: #fff;
    font-family: 'SmartPhoneUI';
}
.point-box .point-all-box {
    width: 70%;
    margin: 0 auto;
    position: relative;
}
.point-box .point-all-box p {
    position: relative;
    top: 10px;
    font-size: 20px;
    color: #fff;
    margin: 0;
}
.point-box .point-all-text{
    position: absolute;
    bottom: 20px;
    font-size: 20px;
    color: #fff;
}
.point-box .point-all{
    text-align: center;
    color: #fff;
    font-family: 'KaisoNext';
    font-size: 100px;
}
.point-box .point-item-box{
    display: flex;
}
.point-box .point-item{
    flex: 1;
    text-align: center;
}
.point-box .point-item .point-item-icon{
    width: 60px;
}
.point-box .point-item p {
    margin: 5px 0;
    font-size: 16px;
}
.point-box .point-item .point-item-text{
    color: #fff;
    font-family: 'KaisoNext';
    font-size: 24px;
}
.point-comments-item{
    border: 2px solid #CAF2FF;
    padding: 15px;
    border-radius: 5px;
    background-color: rgba(202,242,255,0.2);
    box-shadow: 0 0 8px #00A3D5;
    margin: 20px 0;
}
.point-comments-item-title {
    position: relative;
    border-bottom: 2px #ccc solid;
}
.point-comments-item-title .point-comments-item-job{
    margin: 5px 0;
    color: #fff;
    font-size: 20px;
}
.point-comments-item-title .point-comments-item-time{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;  
    margin: 0;
}
.point-comments-item .point-comments-item-box{
    width: 75%;
    margin-top: 10px;
}
.comments-item{
    position: relative;
}
.comments-item img {
    height: 30px;
}
.comments-item p{
    margin: 0 5px;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
}
.comments-item .comments-item-box{
    position: absolute;
    display: flex;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    align-items: center;
}
.comments-item .comments-item-box .comments-item-point{
    flex: 1;
    width: 15px;
    height: 10px;
    margin: 0 2px;
    background: rgba(255,255,255,0.2);
    transform: skewX(-20deg);
}
.comments-item .comments-item-box .point{
    background: rgba(255,255,255,1);
}
.comments-item .comments-item-box .comments-item-text{
    position: relative;
    margin: 0 4px;
    right: 0;
    color: #fff;
    font-family: 'KaisoNext';
    font-size: 18px;
}
.comment-box .comment-box-title{
    margin-top: 10px;
    color: rgba(202,242,255,0.5);
    font-size: 18px;
}
.comment-box .comment-box-content{
    margin-top: 10px;
    color: #fff;
    font-size: 18px;
    word-break: break-all
}
</style>