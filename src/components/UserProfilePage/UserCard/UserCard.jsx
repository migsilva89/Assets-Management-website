import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const UserCard = ({ user, register }) => {
  const formattedDate = new Date(user.createdAt).toLocaleDateString()
  console.log(user)
  return (
    <div>
      <div className='mt-10'>
        <div className='rounded-lg shadow bg-gray-800'>
          <div className='flex flex-col items-center py-7'>
            <div>
              <div className='flex justify-center'>
                <img className='w-16 h-16 mb-3 rounded-full shadow-lg' src={user.avatar === 'no-photo.jpg' ? 'https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' : `http://localhost:5000/images/usersAvatar/${user.avatar}`} alt='Bonnie image'/>
              </div>
              <div className='mb-5 w-2/3 mx-auto'>
                <label className='text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='file_input'>
                  Upload Avatar
                </label>
                <input {...register('avatar')} className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' id='file_input' type='file'/>
              </div>
            </div>
            <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>{user.nickName}</h5>
            <div className='flex gap-2 pt-3'>
              <p className='text-sm text-gray-500 dark:text-gray-400'>{user.name} - </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>{user.email}</p>
            </div>
            <span className='text-sm text-gray-500 dark:text-gray-400'>User since: {formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default UserCard
