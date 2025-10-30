import './Post.css'

const Post = ({ author, content }) => {

  return (
    <div className="post">
      <h2 className="post-author">{author}</h2>
      <p className="post-content">{content}</p>
    </div>
  )
}

export default Post