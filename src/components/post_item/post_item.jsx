import React from 'react'

const PostItem = ({ post }) => {
  return (
    <li className="transition-colors p-5">
      <a href={`/a?id=${post.id}`}>
        <h3>
          <span className="text-blue-500 font-medium">{post.id}.</span>
          {post.title}
        </h3>
        <p className="overflow-hidden line-clamp-3">{post.content}</p>
      </a>
    </li>
  )
}

export default PostItem
