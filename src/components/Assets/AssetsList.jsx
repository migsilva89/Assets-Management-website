import React, { useContext } from 'react'
import Loading from '@/components/Layout/Loading'
import AssetCard from '@/components/Assets/AssetCard/AssetCard'
import { AuthContext } from '@/contexts/AuthContext'

const AssetsList = ({ assets }) => {
  const { data } = assets
  const { user } = useContext(AuthContext)
  const userId = user ? user._id : ''
  return (
    <div>
      {!data ? (
        <Loading/>
      ) : (
        data.map((asset, index) => (
          <AssetCard key={index} asset={asset} userId={userId}/>
        ))
      )}
    </div>
  )
}

export default AssetsList
