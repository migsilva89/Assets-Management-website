import React, { useContext, useEffect, useState } from 'react'
import AssetCard from '@/components/FeedPage/AssetsCard/AssetCard'
import { AuthContext } from '@/contexts/AuthContext'
import { api } from '@/services/api'
import Loading from '@/components/Layout/Loading'

const AssetsList = () => {
  const [assets, setAssets] = useState([])
  const { user } = useContext(AuthContext)
  const [updateData, setUpdateData] = useState(false)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    api.get('/assets').then(data => {
      // console.log(data)
      setAssets(data.data)
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
