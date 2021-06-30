import React, { useRef } from 'react'
import './search_header.css'
const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef()

  const onChange = () => {
    const value = inputRef.current.value
    onSearch(value)
  }

  const focusInput = () => {
    const searchBox = document.getElementById('search__input')
    searchBox.focus()
  }

  return (
    <article className="w-96 mx-auto ">
      <figure className="p-4 border rounded focus-within:ring-1 focus-within:ring-blue-500 ">
        <i
          className="fas fa-search mr-2 text-gray-400"
          onClick={focusInput}
        ></i>
        <input
          ref={inputRef}
          placeholder="검색어를 입력하세요"
          type="search"
          onChange={onChange}
          id="search__input"
          className="apperance-none flex-auto outline-none "
        ></input>
      </figure>
    </article>
  )
}

export default SearchHeader
