// NewPost.js
import React, { useState } from 'react'
import './Post.css'

const NewPost = ({ onAddPost }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!author || !content) return // ne dozvoli prazne unose
    onAddPost(author, content)       // poziv funkcije iz PostList-a
    setAuthor('')                    // resetuj polja
    setContent('')
  }

  return (
    <form className="new-post" onSubmit={handleSubmit}>
      <input
        className="new-post-author"
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        className="new-post-content"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  )
}

export default NewPost
