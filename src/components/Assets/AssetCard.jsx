import React from 'react'
import AddComment from '@/components/Assets/AddComment'
import UserCard from '@/components/Assets/UserCard'
import Asset from '@/components/Assets/Asset'

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
