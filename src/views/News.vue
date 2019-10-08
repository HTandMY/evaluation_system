<template>
    <div>News Page
        <div>name : {{ $route.query.name }}</div>
        <div>age : {{ $route.query.age }}</div>
    </div>

</template>

<script>
export default {
    name : 'news'
}
</script>

<style lang="css">
    
</style>