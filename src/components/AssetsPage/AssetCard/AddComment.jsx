import React, { useState } from 'react'
import { api } from '@/services/api'

const AddComment = ({ id }) => {
  const [comment, setComment] = useState('')
  const handleSubmit = () => {
    console.log(id)
    api.post(`/assets/${id}/comments`, {
      text: comment
    }).then(function(response){
      console.log(response)
    })
  }
  
  return (
    <form>
      <div className='w-full mb-4 border border-gray-200 rounded-b-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600'>
        <div className='px-4 py-2 bg-white dark:bg-gray-800'>
          <label htmlFor='comment' className='sr-only'>Your comment</label>
          <textarea onChange={(e) => {
            setComment(e.target.value)
          }} id='comment' rows='4' className='w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400' placeholder='Write a comment...' required></textarea>
        </div>
        <div className='flex items-center justify-between px-3 py-2 border-t dark:border-gray-600'>
          <button onClick={handleSubmit} className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800'>
            Post comment
          </button>
          <p className='ml-auto text-xs text-gray-500 dark:text-gray-400'>
            Remember, contributions to this topic should follow our
            <a href='src/components/Assets#' className='text-blue-600 dark:text-blue-500 hover:underline'>
              Community Guidelines
            </a>.
          </p>
        </div>
      </div>
    </form>
  )
}

export default AddComment
