import React from 'react'
import  Post   from "./Post"
import  postagem from '../postagem.json';



export default function Posts() {
  
  return (
    <ul>
        {
        postagem.postagem.map((post) => {

        
            return (
              <Post key={postagem.id} title={post.title} description={post.description} />
            );
         })}

        {/* <Post title={posts.posts[0]?.title} description={posts.posts[0]?.description} />   */}
                   
    </ul>
  )
}

