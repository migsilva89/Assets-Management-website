import React from 'react'
import Link from 'next/link'

const CardHeader = ({ createdAt, tags, name, description }) => {
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
      </div>
      <div className='group relative l'>
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
