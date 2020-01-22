<template>
    <div class="tags-others-tags-box">
        <div v-for="item in tags_Others" :key="item.tag" class="tags-others">{{ item.num > 1 ? item.tag + " (" + item.num + ")" : item.tag}}</div>
    </div>
</template>

<script>
export default {
    name: 'TagOthers',
    props : ['tagsData'],
    data() {
        return {
            tags_Others : []
        }
    },
    methods: {
        setTagsOthers(){
            this.tags_Others = [];
            let tags = this.tagsData.slice().reverse();
            let self = this;
            loop: 
            for(let i in tags){
                for(let j in this.tags_Others){
                    if(this.tagsData[i] == this.tags_Others[j].tag){
                        let number = this.tags_Others[j].num + 1;
                        this.tags_Others.splice(j , 1);
                        this.tags_Others.unshift({tag : this.tagsData[i] , num : number})
                        continue loop;
                    }
                }
                this.tags_Others.unshift({tag : this.tagsData[i] , num : 1}); 
            }
        }
    },
    computed: {
        tagNum(tag){
            if(tag.num > 1){
                return tag.tag + "(" + tag.num + ")"
            }else{
                return tag.tag
            }
        }
    },
    watch: {
        tagsData(){
            this.setTagsOthers();
        }
    },
    mounted() {
        this.setTagsOthers();
    },
}
</script>

<style>
.tags-others{
    display: inline-block;
    position: relative;
    padding: 10px 5px;
    background-image: url("../assets/tag_others_02.png");
    margin: 8px 25px;
    font-size: 15px;
    font-family: 'SmartPhoneUI';
    color: #fff;
}
.tags-others::before{
    content: "";
    position: absolute;
    height: 100%;
    width: 20px;
    top: 0;
    left: -19px;
    background-image: url("../assets/tag_others_01.png");
    background-size: 100% 100%;
}
.tags-others::after{
    content: "";
    position: absolute;
    height: 100%;
    width: 15px;
    top: 0;
    right: -14px;
    background-image: url("../assets/tag_others_03.png");
    background-size: 100% 100%;
}
</style>