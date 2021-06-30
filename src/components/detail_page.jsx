import React from 'react'
import { withRouter } from 'react-router-dom'
import Footer from './detail_page/footer/footer'
import PostDetail from './detail_page/post_detail/post_detail'

function DetailPage({ history, postLoader }) {
  return (
    <section
      style={{ width: '1000px' }}
      className="my-20 mx-auto max-w-full p-10"
    >
      <PostDetail postLoader={postLoader} />
      <Footer history={history} />
    </section>
  )
}

export default withRouter(DetailPage)
