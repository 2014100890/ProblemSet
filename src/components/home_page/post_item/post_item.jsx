import React from 'react'

const PostItem = ({ post, activeTab }) => {
  return (
    <li className="transition-colors p-5 hover:bg-gray-100">
      <a href={`/${activeTab}?id=${post.id}`}>
        <h3 className="font-medium text-lg">
          <span className="text-blue-500 ">{post.id}. </span>
          {post.title}
        </h3>
        <p className="overflow-hidden line-clamp-3">{post.content}</p>
      </a>
    </li>
  )
}

export default PostItem
