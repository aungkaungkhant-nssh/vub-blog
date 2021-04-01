<template>
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
    <div v-for="tag in post.tags" :key="tag">
        {{tag}}
    </div>
</template>

<script>
export default {
    props:["post"]
}
</script>

<style>

</style>