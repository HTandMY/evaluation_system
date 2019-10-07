<template>
    <div>
        <h2>User Page</h2>
        <p>User Page Content</p>
        <p>User id : {{ $route.params.userid }}</p>
    </div>
</template>

<script>
import Content1 from '@/components/Content1.vue'

export default {
    name: 'User',
    computed: {
        // userId (){
        //     return this.$route.params.userid
        // }
    },
    components: {
        Content1
    }
}
</script>