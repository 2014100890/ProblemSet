import React from 'react'

const Footer = ({ history }) => {
  const goHome = () => {
    history.push('/')
  }

  return (
    <footer>
      <button
        className={
          'bg-blue-500 rounded-md py-3 px-8 text-white font-medium transition-all hover:bg-blue-400 '
        }
        onClick={goHome}
      >
        뒤로가기
      </button>
    </footer>
  )
}

export default Footer
