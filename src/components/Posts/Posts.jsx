import React, { useEffect, useState } from 'react';
import './styles.css';

import   Post   from "../Post/Post";
import { api } from '../../services/api';



export  function Posts() {
  const [postagem, setPostagem] = useState([]);
  
  useEffect(() => {
    api.get('/postagem').then((response) => {
      console.log(response);
      setPostagem(response.data);
    })
  }, [])
  
  return (
    <ul>
        {
        postagem?.map((post) => {

        
            return (
              <Post  title={post.title} description={post.description} />
            );
         })}

        {/* <Post title={posts.posts[0]?.title} description={posts.posts[0]?.description} />   */}
                   
    </ul>
  )
}

