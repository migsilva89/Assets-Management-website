import React from 'react'

const TagCard = ({ tag, handleTagClick }) => {
  const handleClick = () => {
    handleTagClick(tag)
  }
  
  return (
    <button
      onClick={handleClick}
      className='w-40 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-gray-900 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
      <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
          {tag}
      </span>
    </button>
  )
}

export default TagCard
