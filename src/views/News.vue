<template>
    <div>
        <h2>News Page</h2>
        <p>name : {{ $route.query.name }}</p>
        <p>age : {{ $route.query.age }}</p>
        <p>num : {{ $store.state.counter }}</p>
        <p>age >= 18 : {{ $store.getters.getAge }}</p>
        <p>length : {{ $store.getters.getAgeLength }}</p>
        <p>———— modules内容使用 ————</p>
        <p>moduleA : {{ $store.state.a.name }}</p>
        <p>moduleB : {{ $store.state.b.name }}</p>
    </div>

</template>

<script>
export default {
    name : 'news'
}
</script>

<style lang="css">
    
</style>