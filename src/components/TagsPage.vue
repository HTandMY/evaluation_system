<template>
    <div key="tags">
        <div class="tags-title">
            <img src="@/assets/title_tag.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name : 'TagsPage',
    props : ['studentData'],
    methods: {
        
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
</style>