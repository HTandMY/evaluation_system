<template>
    <div>
        <div>{{ data }}</div>
    </div>
</template>

<script>
export default {
    name : 'evaluate',
    data() {
        return {
            data : {}
        }
    },
    methods: {
        readVisitorData(){
           this.data = this.$store.state.visitorMessage; 
        }
    },
    mounted() {
        this.readVisitorData();
    },
}
</script>

<style>

</style>