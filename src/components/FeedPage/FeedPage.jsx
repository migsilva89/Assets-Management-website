import React, { useContext, useState } from 'react'
import AssetsList from '@/components/FeedPage/AssetsList'
import ModalAddAsset from '@/components/ModalAddAsset/ModalAddAsset'
import { AuthContext } from '@/contexts/AuthContext'


const FeedPage = () => {
  const [updateData, setUpdateData] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user } = useContext(AuthContext)
  
  return (
    <main className='max-w-7xl mx-auto'>
      <div className='flex justify-center'>
        <button onClick={() => {
          setIsModalOpen(true)
        }} className='w-full mx-7 hover:bg-gray-300 mt-10 text-gray-300 bg-gray-700 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium'>
          + Add Asset
        </button>
      </div>
      {isModalOpen && (
        <>
          <div onClick={((event) => {
            setIsModalOpen(false)
          })} className='fixed z-20 top-0 left-0 w-full h-screen bg-black opacity-50'></div>
          <div className='fixed z-30 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-full'>
            <ModalAddAsset updateData={updateData} setUpdateData={setUpdateData} user={user} setIsModalOpen={setIsModalOpen} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
          </div>
        </>
      )}
      <AssetsList user={user} updateData={updateData} setUpdateData={setUpdateData}/>
    </main>
  )
}


export default FeedPage
