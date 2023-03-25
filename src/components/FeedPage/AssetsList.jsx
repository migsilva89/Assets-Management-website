import React, { useContext, useEffect, useState } from 'react'
import AssetCard from '@/components/FeedPage/AssetsCard/AssetCard'
import { api } from '@/services/api'

const AssetsList = ({ user, updateData, setUpdateData, selectedTag }) => {
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    let url = '/assets'
    if (selectedTag) {
      url += `/tags/${selectedTag}`
    }
    api.get(url).then((response) => {
      setAssets(response.data)
      setLoading(false)
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }, [updateData, selectedTag])
  
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
