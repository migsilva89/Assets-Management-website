import React from 'react'
import AssetsList from '@/components/FeedPage/AssetsList'


const FeedPage = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <div className='flex justify-center'>
        <button onClick={() => {
          alert('SHOW MODAL')
        }} className='w-full mx-7 hover:bg-gray-300 mt-10 text-gray-300 bg-gray-700 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium'>
          + Add
          Asset
        </button>
      </div>
      <AssetsList/>
    </main>
  )
}


export default FeedPage
