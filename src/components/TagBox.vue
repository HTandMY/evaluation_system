<template>
    <vue-tags-input
        style="min-width:100%"
        v-model="tag"
        :tags="tags"
        :add-on-key="[13,32]"
        :separators="[';', ',','　',' ']"
        :maxlength='20'
        placeholder="aaaa"
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

</style>