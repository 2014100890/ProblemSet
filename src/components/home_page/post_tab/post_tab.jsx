import React from 'react'

const PostTab = () => {
  return (
    <section>
      <header className="mb-2 border-b">
        <button className="rounded p-3 font-medium hover:text-blue-300 hover:bg-gray-100 focus:outline-none">
          A Posts
        </button>
        <button className="rounded p-3 font-medium hover:text-blue-300 hover:bg-gray-100">
          B Posts
        </button>
      </header>
    </section>
  )
}

export default PostTab
