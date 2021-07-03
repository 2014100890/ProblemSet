import React, { useEffect, useState } from 'react'
import Header from './home_page/header/header'
import PostList from './home_page/post_list/post_list'
import PostTab from './home_page/post_tab/post_tab'
import SearchHeader from './home_page/search_header/search_header'

function HomePage({ postLoader }) {
  const [requestPageNumber, setRequestPageNumber] = useState(0)
  const [isFetch, setIsFetch] = useState(false)
  const [isShowAll, setIsShowAll] = useState(true)
  const [posts, setPosts] = useState([])
  const [activeTab, setActiveTab] = useState(postLoader.activeTab)
  const [query, setQuery] = useState('')

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
    if (query === '') {
      setPosts([])
      setIsShowAll(true)
      setRequestPageNumber(0)
      setIsFetch(true)
    } else {
      postLoader.search(query).then(data => setPosts(data))
      setIsShowAll(false)
      setQuery(query)
    }
  }

  const changeTab = index => {
    setPosts([])
    setActiveTab(index)
    postLoader.changeTab(index)
    setRequestPageNumber(0)

    if (isShowAll === false) {
      postLoader.search(query).then(data => setPosts(data))
    } else {
      if (isFetch === false) {
        setIsFetch(true)
      } else {
        setIsFetch(false)
        setIsFetch(true)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    setActiveTab(postLoader.activeTab)
    postLoader.getNewItems(requestPageNumber).then(data => {
      setPosts(...posts, data)
    })
    setRequestPageNumber(requestPageNumber + 1)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (isFetch === true && isShowAll === true) {
      postLoader.getNewItems(requestPageNumber).then(data => {
        if (data.length === 0) {
          return
        }
        setPosts(posts.concat(data))
        setRequestPageNumber(requestPageNumber + 1)
      })
    }
    setIsFetch(false)
  }, [isFetch])

  return (
    <div>
      <Header />
      <main>
        <SearchHeader onSearch={search} />
        <article className="my-10">
          <PostTab onChangeTab={changeTab} activeTab={activeTab} />
          <PostList posts={posts} activeTab={activeTab} />
        </article>
      </main>
    </div>
  )
}

export default HomePage
