import React from 'react'

const PostItem = ({ post }) => {
  return (
    <li>
      <a href={`/a?id=${post.id}`}>
        <h3>
          <span>{post.id}.</span>
          {post.title}
        </h3>
        {post.content}
      </a>
    </li>
  )
}

export default PostItem
