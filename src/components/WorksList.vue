<template>
    <div>
        <router-link tag="button" :to="{path : '/visitor/grade2'}">2年生</router-link>
        <router-link tag="button" :to="{path : '/visitor/grade1'}">1年生</router-link>
        
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'worksList',
    data() {
        return{
            
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
}
</script>

<style>

</style>