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
export default {
  components: { PostsList },
    setup(){
        let posts=ref([]);
        let error=ref("");
        let load=async()=>{
            try{
                    let response=await fetch("http://localhost:3000/posts");
                    if(response.status===404){
                        throw new Error("URl not found");
                    }
                    let datas=await response.json();
                    posts.value=datas;
            }catch(err){
                error.value=err.message();
            }
            
        }
        load();
        return{posts,error}
    }
}
</script>

<style>

</style>