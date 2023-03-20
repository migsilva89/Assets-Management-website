import React from 'react'
import AddComment from '@/components/Assets/AssetCard/AddComment'
import UserCard from '@/components/Assets/AssetCard/UserCard'
import Asset from '@/components/Assets/AssetCard/Asset'

const AssetCard = ({ asset }) => {
  return (
    <div>
      <div className='flex'>
        <Asset asset={asset}/>
        <UserCard name={asset.name}/>
      </div>
      <AddComment id={asset._id}/>
    </div>
  )
}

export default AssetCard
