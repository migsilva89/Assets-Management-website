import React from 'react'
import Loading from '@/components/Layout/Loading'
import AssetCard from '@/components/Assets/AssetCard/AssetCard'

const AssetsList = ({ assets }) => {
  const { data } = assets
  
  return (
    <div>
      {!data ? (
        <Loading/>
      ) : (
        data.map((asset, index) => (
          <AssetCard key={index} asset={asset}/>
        ))
      )}
    </div>
  )
}

export default AssetsList
