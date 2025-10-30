// PostList.js
import React, { useState } from 'react'
import Post from './Post'
import NewPost from './NewPost'
import './PostList.css'

const PostList = () => {
  // Stanje za listu postova - inicijalno sa dva posta
  const [posts, setPosts] = useState([
    ])

  // Funkcija za dodavanje novog posta u listu
  const addNewPost = (author, content) => {
    setPosts(prevPosts => [...prevPosts, { author, content }])
  }

  return (
    <>
      <NewPost onAddPost={addNewPost} />
      <div className="post-list">
        {posts.map((post, index) => (
          <Post key={index} author={post.author} content={post.content} />
        ))}
      </div>
    </>
  )
}

export default PostList
