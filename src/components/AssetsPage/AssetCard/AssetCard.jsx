import React from 'react'
import AddComment from '@/components/AssetsPage/AssetCard/AddComment'
import UserCard from '@/components/AssetsPage/AssetCard/UserCard'
import Asset from '@/components/AssetsPage/AssetCard/Asset'

const AssetCard = ({ asset, userId }) => {
  return (
    <div>
      <div className='flex'>
        <Asset asset={asset} userId={userId}/>
        <UserCard name={asset.name}/>
      </div>
      <AddComment id={asset._id}/>
    </div>
  )
}

export default AssetCard
