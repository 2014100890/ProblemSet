import React, { useRef } from 'react'

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef()

  const onChange = () => {
    const value = inputRef.current.value
    onSearch(value)
  }

  return (
    <>
      <h1>게시물을 검색해보세요</h1>
      <figure>
        <i className="fas fa-search"></i>
        <input
          ref={inputRef}
          placeholder="검색어를 입력하세요"
          type="search"
          onChange={onChange}
        ></input>
      </figure>
    </>
  )
}

export default SearchHeader
