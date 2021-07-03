import React from 'react'

const PostTab = ({ onChangeTab, activeTab }) => {
  const toggleTab = index => {
    onChangeTab(index)
  }

  return (
    <section>
      <header className="mb-2 border-b">
        <button
          className={
            activeTab === 'a-posts'
              ? 'rounded p-3 font-medium text-blue-500 hover:text-blue-300 hover:bg-gray-100 focus:outline-none'
              : 'rounded p-3 font-medium hover:text-blue-300 hover:bg-gray-100 focus:outline-none'
          }
          onClick={() => toggleTab('a-posts')}
        >
          A Posts
        </button>
        <button
          className={
            activeTab === 'b-posts'
              ? 'rounded p-3 font-medium text-blue-500 hover:text-blue-300 hover:bg-gray-100 focus:outline-none'
              : 'rounded p-3 font-medium hover:text-blue-300 hover:bg-gray-100 focus:outline-none'
          }
          onClick={() => toggleTab('b-posts')}
        >
          B Posts
        </button>
      </header>
    </section>
  )
}

export default PostTab
