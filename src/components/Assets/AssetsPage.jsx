import React from 'react'
import AssetsList from './AssetsList'
import NavBar from '@/components/Layout/NavBar'
import AddAsset from '@/components/Assets/AddAsset'
import MainLayout from '@/components/Layout/MainLayout'

const AssetsPage = ({ assets, user }) => {
  return (
    <MainLayout>
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
            <AssetsList assets={assets}/>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}

export default AssetsPage