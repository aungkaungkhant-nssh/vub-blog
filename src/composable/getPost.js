import { ref } from "@vue/reactivity";

let getPost=()=>{
    let post=ref(null);
    let error=ref("");
    let load=async()=>{
        try{
            let response=await fetch("http://localhost:3000/posts");
            if(response.status===404){
                throw new Error("URL not found")
            }
            let data=await response.json();
            post.value=data
        }catch(err){
            error.value=err.message;
        }
       
    }
    load();
    return{post,error,load}
}
export default getPost;