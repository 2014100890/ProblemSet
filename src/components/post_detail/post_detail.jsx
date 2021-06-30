import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function PostDetail({ history, postLoader }) {
  const [post, setPost] = useState([])

  const goHome = () => {
    history.push('/')
  }

  useEffect(() => {
    const postId = document.location.href.split('id=')[1]
    console.log(postId)
    postLoader
      .getDetail(postId) //
      .then(data => setPost(data))
  }, [])

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        <button onClick={goHome}>뒤로가기</button>
      </div>
    </section>
  )
}

export default withRouter(PostDetail)
