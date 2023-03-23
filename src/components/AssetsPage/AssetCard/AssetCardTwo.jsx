import React from 'react'
import AddCommentTwo from '@/components/AssetsPage/AssetCard/AddCommentTwo'
import UserCard from '@/components/AssetsPage/AssetCard/UserCard'
import Asset from '@/components/AssetsPage/AssetCard/Asset'

const AssetCardTwo = ({ asset, userId, setUpdateData, updateData }) => {
  return (
    <div>
      <div className='flex'>
        <Asset asset={asset} userId={userId} setUpdateData={setUpdateData} updateData={updateData}/>
        <UserCard name={asset.name}/>
      </div>
      <AddCommentTwo id={asset._id} setUpdateData={setUpdateData} updateData={updateData}/>
    </div>
  )
}

export default AssetCardTwo
