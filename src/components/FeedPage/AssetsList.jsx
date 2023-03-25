import React, { useContext, useEffect, useState } from 'react'
import AssetCard from '@/components/FeedPage/AssetsCard/AssetCard'
import { api } from '@/services/api'

const AssetsList = ({ user, updateData, setUpdateData }) => {
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    api.get('/assets').then(data => {
      // console.log(data)
      setAssets(data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))) // Sort assets in descending order of creation date
      setLoading(false)
    }).catch(error => {
      alert('NO DATA')
    })
  }, [updateData])
  
  if (!assets) {
    return ''
  }
  
  return (
    <div>
      {assets.map((asset, index) => (
        <AssetCard
          key={index}
          asset={asset}
          setLoading={setLoading}
          loading={loading}
          user={user}
          updateData={updateData}
          setUpdateData={setUpdateData}
        />
      ))}
    </div>
  )
}

export default AssetsList
