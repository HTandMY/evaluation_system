<template>
    <vue-tags-input
        style="min-width:100%"
        v-model="tag"
        :tags="tags"
        :add-on-key="[13,32]"
        :separators="[ ';' , ',' , '、' ]"
        :maxlength='20'
        placeholder="例：素直、いつも笑顔"
        @tags-changed="newTags => tags = newTags"
    />
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';
export default {
    components: {
        VueTagsInput,
    },
    data() {
        return {
            tag: '',
            tags: [],
        };
    }
}
</script>

<style>
.vue-tags-input{
    border-radius: 5px;
    overflow: hidden;
    max-width: 100%;
}
.vue-tags-input .ti-tag{
    background-color: rgb(85, 140, 160);
    font-size: 1rem;
}
.ti-new-tag-input-wrapper input {
    font-size: 1rem;
}
</style>