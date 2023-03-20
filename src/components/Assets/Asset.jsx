import React from 'react'

const Asset = ({ asset }) => {
  const { name, description, image, owner, tags, likes, isPublic, comments, createdAt, slug } = asset
  return (
    <div className='flex flex-col items-center bg-white rounded-tl-lg shadow md:flex-row w-full dark:border-gray-700 dark:bg-gray-800'>
      <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src='https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt=''/>
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {name}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <button type='button' className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>Purple</button>
        <div>
          <svg xmlns='http://www.w3.org/2000/svg' fill='blue' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'/>
          </svg>
          <p className='text-white'>
            {likes.length}
          </p>
          <div className='text-white'>
            <h1>Comments:</h1>
            <div>{comments.map((comment, index) => (
              <p key={index}>{comment.text}</p>
            ))}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Asset
