import { useEffect, useState } from 'react'
import PostList from './post_list/post_list'
import SearchHeader from './search_header/search_header'

function Home({ postLoader }) {
  const [posts, setPosts] = useState([])
  const [isFetch, setIsFetch] = useState(false)
  const [requestPageNumber, setRequestPageNumber] = useState(0)

  const onScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    )

    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const clientHeight = document.documentElement.clientHeight

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsFetch(true)
    }
  }

  const search = query => {
    postLoader
      .search(query) //
      .then(data => setPosts(data))
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    postLoader
      .getNewItems(requestPageNumber) //
      .then(data => {
        setPosts(...posts, data)
      })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    setIsFetch(false)
    postLoader.getNewItems(requestPageNumber).then(data => {
      if (data.length === 0) {
        return
      }
      setPosts(posts.concat(data))
      setRequestPageNumber(requestPageNumber + 1)
    })
  }, [isFetch])

  return (
    <>
      <SearchHeader onSearch={search} />
      <PostList posts={posts}></PostList>
    </>
  )
}

export default Home
