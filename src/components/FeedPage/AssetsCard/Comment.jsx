import React, { useEffect, useState } from 'react'
import { api } from '@/services/api'

const Comment = ({ comment, setUpdateData, updateData, id, user }) => {
  const [userOwner, setUserOwner] = useState()
  useEffect(() => {
    api.get(`/users/${comment.author}`).then(data => {
      setUserOwner(data.data)
      setUpdateData(!updateData)
    }).catch(error => {
      alert('NO DATA')
    })
  }, [comment.author, setUpdateData, updateData])

  const handleDeleteComment = (commentId, event) => {
    // console.log(commentId)
    api.delete(`/assets/${id}/comments/${commentId}`).then(function(response){
      // console.log(response)
      setUpdateData(!updateData)
    })
  }

  if (!userOwner) {
    return ''
  }
  console.log(user._id === comment.author)


  return (
    <div className='max-w-2xl lg:max-w-7xl mx-auto flex items-center justify-between gap-10 text-sm font-thin text-white mt-7 '>
      <div className='flex items-center gap-5 my-5'>
        {/*<img className='w-7 rounded-full' src='https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' alt=''/>*/}
        <img className='w-7 rounded-full' src={userOwner.avatar === 'no-photo.jpg' ? 'https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' : `http://localhost:5000/images/usersAvatar/${userOwner.avatar}`} alt={`${userOwner.nickName}'s avatar`}/>
        <p>
          {comment.text}
        </p>
      </div>
      {user._id === comment.author ?
        <button onClick={((e) => {
          handleDeleteComment(comment._id)
        })}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='hover:scale-150 w-5 h-5 hover:fill-red-600'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'/>
          </svg>
        </button> : ''
      }
    </div>
  )
}

// border-0 border-b border-t border-transparent border-white
export default Comment
