import React, { useContext, useEffect, useState } from 'react'
import AssetCard from '@/components/FeedPage/Assets/AssetCard'
import { AuthContext } from '@/contexts/AuthContext'
import { api } from '@/services/api'
import Loading from '@/components/Layout/Loading'

const AssetsList = () => {
  const [assets, setAssets] = useState([])
  const { user } = useContext(AuthContext)
  const [updateData, setUpdateData] = useState(false)
  
  useEffect(() => {
    api.get('/assets').then(data => {
      setAssets(data.data)
    }).catch(error => {
      alert('NO DATA')
    })
  }, [updateData])
  
  if (!user || !assets) {
    return <Loading/>
  }
  
  return (
    <div>
      {assets.map((asset, index) => (
        <AssetCard key={index} asset={asset} user={user}/>
      ))}
    </div>
  )
}

export default AssetsList
