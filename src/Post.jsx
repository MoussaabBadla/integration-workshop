 function Post (post) {
  return (
        <div  className="post">
        <h2 className="post-title">{post.post.title}</h2>
        <p className="post-body">{post.post.body}</p>
      </div>
    )  
}

export default Post