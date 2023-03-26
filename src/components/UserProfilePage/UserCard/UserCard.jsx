import React, { useEffect, useState } from 'react'
import { api } from '@/services/api'
import UserAssetsModal from '@/components/Users/UserAssetsModal'

const UserCard = ({ user, register }) => {
  const [assetsByUser, setAssetsByUser] = useState([])
  const [showModal, setShowModal] = useState(false)
  
  useEffect(() => {
    api.get(`/users/${user._id}/assets`).then(function(response){
      setAssetsByUser(response.data)
    }).catch(function(error){
      console.log(error)
    })
  }, [])
  
  if (!user) {
    return ''
  }
  
  const formattedDate = new Date(user.createdAt).toLocaleDateString()
  
  return (
    <div>
      <div className='mt-10'>
        <div className='rounded-lg shadow bg-gray-800 px-5'>
          <div className='flex flex-col items-center py-7'>
            <div>
              <div className='flex justify-center'>
                <img className='w-16 h-16 mb-3 rounded-full shadow-lg' src={user.avatar === 'no-photo.jpg' ? 'https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' : `http://localhost:5000/images/usersAvatar/${user.avatar}`} alt='Bonnie image'/>
              </div>
              {register &&
                <div className='mb-5 w-2/3 mx-auto'>
                  <label className='text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='file_input'>
                    Upload Avatar
                  </label>
                  <input {...register('avatar')} className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' id='file_input' type='file'/>
                </div>
              }
            </div>
            <h5 className='mb-1 text-xl font-medium text-white'>{user.nickName}</h5>
            {register &&
              <div className='flex gap-2 pt-3'>
                <p className='text-sm text-gray-400'>{user.name} - </p>
                <p className='text-sm text-gray-400'>{user.email}</p>
              </div>
            }
            <span className='text-sm text-gray-400'>User since: {formattedDate}</span>
            <div>
              <button
                onClick={((e) => {
                  setShowModal(true)
                })}
                className='w-full hover:bg-gray-300 mt-10 text-gray-300 bg-indigo-800 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium'>
                NumberAssets: {assetsByUser.length}
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal &&
        <UserAssetsModal assets={assetsByUser} user={user} setShowModal={setShowModal}/>
      }
    </div>
  
  )
}

export default UserCard
