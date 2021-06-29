import React, { useRef } from 'react'

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef()

  const onChange = () => {
    const value = inputRef.current.value
    onSearch(value)
  }

  return (
    <article>
      <figure>
        <i className="fas fa-search"></i>
        <input
          ref={inputRef}
          placeholder="검색어를 입력하세요"
          type="search"
          onChange={onChange}
        ></input>
      </figure>
    </article>
  )
}

export default SearchHeader
