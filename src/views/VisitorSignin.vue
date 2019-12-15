<template>
    <div>
        <div v-if="$store.state.visitorMessage.occupation == undefined && $store.state.visitorMessage.occupation != '一般の方'">
            <button class="buttonSize" v-on:click="createMessage('企業の方')">企業の方</button>
            <button class="buttonSize" v-on:click="createMessage('一般の方')">一般の方</button>
        </div>
        <div v-else>
            <button class="buttonSize" v-on:click="createMessage('企業の方' , 'エンジニア')">エンジニア</button>
            <button class="buttonSize" v-on:click="createMessage('企業の方' , 'デザイナー')">デザイナー</button>
            <button class="buttonSize" v-on:click="createMessage('企業の方' , 'ディレクター')">ディレクター</button>
            <button class="buttonSize" v-on:click="createMessage('企業の方' , '採用担当')">採用担当</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "visitorSignin",
    data(){
        return {
            
        }
    },
    methods: {
        createMessage(occupation , job){
            if(job){
                let message = {
                    "occupation" : occupation,
                    "job" : job
                }
                localStorage.setItem("visitor" , JSON.stringify(message));
            }else{
                let message = {
                    "occupation" : occupation
                }
                localStorage.setItem("visitor" , JSON.stringify(message));
            }
            this.$store.commit('readVisitorMessage');
            this.readLocalStorage();
        },
        changeURL(){
            this.$router.push({ path: '/visitor' })
        },
        readLocalStorage(){
            if(localStorage.visitor){
                this.$store.commit('readVisitorMessage');
                if(this.$store.state.visitorMessage.occupation == "一般の方" || this.$store.state.visitorMessage.job != undefined){
                    this.changeURL();
                }
            }
        }
    },
    mounted() {
        this.readLocalStorage();
    },
}
</script>

<style>

</style>