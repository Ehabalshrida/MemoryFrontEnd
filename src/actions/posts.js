import * as api from '../api/index.js';


export const  getPosts = () => async (ehab) => {
    try {
      const  {data}  = await api.fetchPosts();
      console.log({data} )
      ehab({type: "FETCH_ALL", payload: data });
    } catch (error) {
      console.log(error.message);
    } 
  };

  
  export const  creatPost = (post) => async (ehab) => {
    try {
      const  {data}  = await api.createPost(post);
      console.log("from action",{data} )
      ehab({type: "CREATE", payload: data });
    } catch (error) {
      console.log(error.message);
    }}