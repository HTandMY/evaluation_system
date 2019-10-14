<template>
    <div>
        <h2>News Page</h2>
        <p>name : {{ $route.query.name }}</p>
        <p>age : {{ $route.query.age }}</p>
        <p>num : {{ $store.state.counter }}</p>
        <p>age >= 18 : {{ $store.getters.getAge }}</p>
        <p>length : {{ $store.getters.getAgeLength }}</p>
    </div>

</template>

<script>
export default {
    name : 'news'
}
</script>

<style lang="css">
    
</style>