import React, { useEffect, useState } from 'react'
import { api } from '@/services/api'
import Loading from '@/components/Layout/Loading'

const Comment = ({ comment }) => {
  const [userOwner, setUserOwner] = useState()
  useEffect(() => {
    
    api.get(`/users/${comment.author}`).then(data => {
      setUserOwner(data.data)
      
    }).catch(error => {
      alert('NO DATA')
    })
  }, [comment.author])
  
  if (!userOwner) {
    return ''
  }
  
  return (
    <div className='max-w-2xl lg:max-w-7xl mx-auto flex items-center justify-between gap-10 text-sm font-thin text-white mt-7 '>
      <div className='flex items-center gap-5 my-5'>
        {/*<img className='w-7 rounded-full' src='https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' alt=''/>*/}
        <img className='w-7 rounded-full' src={userOwner.avatar === 'no-photo.jpg' ? 'https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' : `http://localhost:5000/images/usersAvatar/${userOwner.avatar}`} alt={`${userOwner.nickName}'s avatar`}/>
        <p>
          {comment.text}
        </p>
      </div>
      <div>Delete</div>
    </div>
  )
}

// border-0 border-b border-t border-transparent border-white
export default Comment
