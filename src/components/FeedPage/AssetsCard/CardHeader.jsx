import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { api } from '@/services/api'
import ModalAddAsset from '@/components/ModalAddAsset/ModalAddAsset'

const CardHeader = ({ updateData, setUpdateData, user, owner, createdAt, tags, name, description, assetId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleDeleteAsset = () => {
    api.delete(`/assets/${assetId}`).then(data => {
      setUpdateData(!updateData)
    }).catch(error => {
      console.log(error)
    })
  }
  
  
  const formattedDate = new Date(createdAt).toLocaleString()
  
  return (
    <>
      <div className='flex gap-x-4 text-xs'>
        <div className='w-1/2 flex gap-4 items-center'>
          <time dateTime={createdAt} className='text-gray-500'>
            {formattedDate}
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
        {owner === user._id &&
          <div className='text-end w-full p-2'>
            <button
              onClick={() => {
                setIsModalOpen(true)
              }}
              className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-800 to-gray-900 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Edit
            </span>
            </button>
            <button
              onClick={handleDeleteAsset}
              className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-800 to-gray-900 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Delete
            </span>
            </button>
          </div>
        }
        {isModalOpen && (
          <>
            <div onClick={((event) => {
              setIsModalOpen(false)
            })} className='fixed z-20 top-0 left-0 w-full h-screen bg-black opacity-50'></div>
            <div className='fixed z-30 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-full'>
              <ModalAddAsset assetId={assetId} handleUpdate={true} updateData={updateData} setUpdateData={setUpdateData} user={user} setIsModalOpen={setIsModalOpen} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            </div>
          </>
        )}
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
