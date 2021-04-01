<template>
    <div v-if="error">
        {{error}}
    </div>
    <div v-if="posts.length>0">
        <PostsList :posts="posts"></PostsList>
    </div> 
    <div v-else>
        loading...
    </div>
</template>

<script>
import PostsList from '../components/PostsList'
import { ref } from '@vue/reactivity'
import getPosts from '../composable/getPosts'
export default {
  components: { PostsList },
    setup(){
       let {posts,error,load}=getPosts();
       load();
        return{posts,error}
    }
}
</script>

<style>

</style>