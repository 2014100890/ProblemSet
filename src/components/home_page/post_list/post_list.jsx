import React from 'react'
import PostItem from '../post_item/post_item'

function PostList({ posts, activeTab }) {
  return (
    <ul className="p-5 border rounded-md shadow-inner ">
      {posts &&
        posts.map(post => {
          return (
            <PostItem
              post={post}
              key={post.id}
              activeTab={activeTab}
            ></PostItem>
          )
        })}
    </ul>
  )
}

export default PostList
