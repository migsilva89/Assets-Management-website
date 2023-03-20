import React from 'react'

const AssetCard = () => {
  return (
    <div>
      <div className='flex'>
        <a href='#' className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src='https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt=''/>
          <div className='flex flex-col justify-between p-4 leading-normal'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology
              acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <button type='button' className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>Purple</button>
            <div>
              <svg xmlns='http://www.w3.org/2000/svg' fill='blue' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'/>
              </svg>
            </div>
          </div>
        </a>
        
        <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex justify-end px-4 pt-4'>
            <button id='dropdownButton' data-dropdown-toggle='dropdown' className='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5' type='button'>
              <span className='sr-only'>Open dropdown</span>
              <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
              </svg>
            </button>
            
            <div id='dropdown' className='z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
              <ul className='py-2' aria-labelledby='dropdownButton'>
                <li>
                  <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Edit</a>
                </li>
                <li>
                  <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Export
                                                                                                                                                                  Data</a>
                </li>
                <li>
                  <a href='#' className='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col items-center pb-10'>
            <img className='w-24 h-24 mb-3 rounded-full shadow-lg' src='https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' alt='Bonnie image'/>
            <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>Bonnie Green</h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>Visual Designer</span>
            <div className='flex mt-4 space-x-3 md:mt-6'>
              <a href='#' className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Add
                                                                                                                                                                                                                                                                                  friend</a>
              <a href='#' className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'>Message</a>
            </div>
          </div>
        </div>
      </div>
      
      
      <form>
        <div className='w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600'>
          <div className='px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800'>
            <label htmlFor='comment' className='sr-only'>Your comment</label>
            <textarea id='comment' rows='4' className='w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400' placeholder='Write a comment...' required></textarea>
          </div>
          <div className='flex items-center justify-between px-3 py-2 border-t dark:border-gray-600'>
            <button type='submit' className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800'>
              Post comment
            </button>
            <div className='flex pl-0 space-x-1 sm:pl-2'>
              <button type='button' className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'>
                <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z' clip-rule='evenodd'></path>
                </svg>
                <span className='sr-only'>Attach file</span>
              </button>
              <button type='button' className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'>
                <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd'></path>
                </svg>
                <span className='sr-only'>Set location</span>
              </button>
              <button type='button' className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'>
                <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z' clip-rule='evenodd'></path>
                </svg>
                <span className='sr-only'>Upload image</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <p className='ml-auto text-xs text-gray-500 dark:text-gray-400'>Remember, contributions to this topic should
                                                                      follow
                                                                      our <a href='#' className='text-blue-600 dark:text-blue-500 hover:underline'>Community
                                                                                                                                                   Guidelines</a>.
      </p>
    
    </div>
  )
}

export default AssetCard
