import React, { useRef } from 'react'

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef()

  const onChange = () => {
    const value = inputRef.current.value
    onSearch(value)
  }

  return (
    <article className="w-96 mx-auto ring-0">
      <figure className="group transition duration-150 p-4 flex border rounded transition ease-out">
        <i className="fas fa-search mr-2 text-gray-400"></i>
        <input
          ref={inputRef}
          placeholder="검색어를 입력하세요"
          type="search"
          onChange={onChange}
          className="apperance-none flex-auto outline-none"
        ></input>
      </figure>
    </article>
  )
}

export default SearchHeader
