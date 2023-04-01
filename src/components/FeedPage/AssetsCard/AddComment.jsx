import { useState } from 'react'
import { api } from '@/services/api'

const AddComment = ({ setUpdateData, updateData, id }) => {
  const [comment, setComment] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(id)
    api.post(`/assets/${id}/comments`, {
      text: comment
    }).then(function(response){
      console.log(response)
      setUpdateData(!updateData)
      setComment('')
    })
  }
  
  return (
    <div className='flex items-start space-x-4 mt-10 max-w-2xl lg:max-w-7xl mx-auto'>
      <div className='min-w-0 flex-1'>
        <form onSubmit={handleSubmit}>
          <div className='border-b border-gray-200 focus-within:border-indigo-600'>
            <label htmlFor='comment' className='sr-only'>
              Add your comment
            </label>
            <textarea
              onChange={(e) => {
                setComment(e.target.value)
              }}
              rows={2}
              name='comment'
              id='comment'
              className='block text-white w-full bg-gray-900 resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder='Add your comment...'
              value={comment}
            />
          </div>
          <div className='flex pt-2'>
            <div className='flex-shrink-0 mt-4'>
              <button
                type='submit'
                className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddComment