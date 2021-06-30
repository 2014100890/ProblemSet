import React from 'react'
import PostItem from '../post_item/post_item'

function PostList({ posts }) {
  return (
    <ul className="p-5 border rounded-md p-5 shadow-inner">
      {posts &&
        posts.map(post => {
          return <PostItem post={post} key={post.id}></PostItem>
        })}
    </ul>
  )
}

export default PostList
