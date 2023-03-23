import React from 'react'
import AssetsListTwo from './AssetsListTwo'
import AddAsset from '@/components/AssetsPage/AssetCard/AddAsset'
import MainLayout from '@/components/Layout/MainLayout'
import Chat from '@/components/Chat/Chat'

const AssetsPage = ({ assets, user, setUpdateData, updateData }) => {
  
  return (
    <MainLayout>
      {/*<Chat/>*/}
      <div className='min-h-full'>
        <header className='bg-white shadow'>
          <div className='mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Welcome {user ? user.nickName : '...'} </h1>
          </div>
        </header>
        <main>
          <div>
            <AddAsset/>
          </div>
          <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
            <AssetsListTwo assets={assets} setUpdateData={setUpdateData} updateData={updateData}/>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}

export default AssetsPage
