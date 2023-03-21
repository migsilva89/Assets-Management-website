import React from 'react'
import AddComment from '@/components/AssetsPage/AssetCard/AddComment'
import UserCard from '@/components/AssetsPage/AssetCard/UserCard'
import Asset from '@/components/AssetsPage/AssetCard/Asset'

const AssetCard = ({ asset, userId, setUpdateData, updateData }) => {
  return (
    <div>
      <div className='flex'>
        <Asset asset={asset} userId={userId} setUpdateData={setUpdateData} updateData={updateData}/>
        <UserCard name={asset.name}/>
      </div>
      <AddComment id={asset._id} setUpdateData={setUpdateData} updateData={updateData}/>
    </div>
  )
}

export default AssetCard
