import React from 'react'
import Link from 'next/link'

const CardHeader = ({ user, owner, createdAt, tags, name, description }) => {
  return (
    <>
      <div className='flex items-center gap-x-4 text-xs'>
        <time dateTime={createdAt} className='text-gray-500'>
          {createdAt}
        </time>
        {tags.map((tag, index) => (
          <Link
            key={index}
            href={tag}
            className='relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium hover:text-white text-gray-600 hover:bg-gray-600'
          >
            {tag}
          </Link>
        ))}
        {owner === user._id &&
          <div className='text-end w-full p-2'>
            <button
              onClick={(() => {
                alert('delete')
              })}
              className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-800 to-gray-900 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Delete
            </span>
            </button>
          </div>
        }
      </div>
      <div className='group relative w-fit'>
        <h3 className='mt-3 text-lg font-semibold leading-6 text-white'>
          <a href='src/components/FeedPage/Assets#'>
            <span className='absolute inset-0'/>
            {name}
          </a>
        </h3>
        <p className='mt-5 text-sm leading-6 text-white'>{description}</p>
      </div>
    </>
  )
}

export default CardHeader
