<template>
    <div key="tags">
        <div class="tags-title">
            <img src="@/assets/title_tag.png" alt="">
        </div>
        <div class="tags-content">
            <div class="tags-own-box">
                <h2 class="tags-own-title">私の特徴</h2>
                <div>
                    <TagOwn :tagsData="studentData.tags.own"/>
                </div>
            </div>
            <div class="tags-others-box">
                <h2 class="tags-others-title">みんなからみた私の特徴</h2>
                <div>
                    <TagOthers :tagsData="studentData.tags.others"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TagOwn from "@/components/TagOwn.vue"
import TagOthers from "@/components/TagOthers.vue"
export default {
    name : 'TagsPage',
    components : {
        TagOwn,
        TagOthers
    },
    props : ['studentData'],
    data() {
        return {

        }
    },
    methods: {
        
    },
    computed: {


    },
}
</script>

<style>
.tags-title{
    height: 55px;
}
.tags-title img {
    height: 100%;
}
.tags-content{
    width: 90%;
    margin: 0 auto;
    max-width: 768px;
    padding-bottom: 60px;
}
.tags-own-title , .tags-others-title {
    color: #fff;
    text-align: center;
}
</style>