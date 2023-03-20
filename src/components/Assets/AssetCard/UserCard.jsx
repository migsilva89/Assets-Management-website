import React from 'react'

const UserCard = ({ name }) => {
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-tr-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex justify-end px-4 pt-4 mt-5'>
        <div id='dropdown' className='z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
          <ul className='py-2' aria-labelledby='dropdownButton'>
            <li>
              <a href='src/components/Assets#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Edit</a>
            </li>
            <li>
              <a href='src/components/Assets#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Export
                                                                                                                                                                                   Data</a>
            </li>
            <li>
              <a href='src/components/Assets#' className='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Delete</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-center pb-10'>
        <img className='w-24 h-24 mb-3 rounded-full shadow-lg' src='https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' alt='Bonnie image'/>
        <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>{name}</h5>
        <span className='text-sm text-gray-500 dark:text-gray-400'>Visual Designer</span>
        <div className='flex mt-4 space-x-3 md:mt-6'>
          <a href='src/components/Assets#' className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Add friend
          </a>
          <a href='src/components/Assets#' className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'>Message</a>
        </div>
      </div>
    </div>
  )
}

export default UserCard
