const { ref } = require("@vue/reactivity");

let getPosts=()=>{
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
            error.value=err.message;
        }
        
    }
    load();
    return {posts,error,load}
}
export default getPosts;