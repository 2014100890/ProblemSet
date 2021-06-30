import React, { useState, useEffect } from 'react'

function PostDetail({ postLoader }) {
  const [post, setPost] = useState([])

  useEffect(() => {
    const postId = document.location.href.split('id=')[1]
    console.log(postId)
    postLoader
      .getDetail(postId) //
      .then(data => setPost(data))
  }, [])

  return (
    <article className="border mb-4 p-10">
      <header>
        <h2 className="text-center mb-10 text-4xl font-medium">{post.title}</h2>
      </header>
      <p>{post.content}</p>
    </article>
  )
}

export default PostDetail
