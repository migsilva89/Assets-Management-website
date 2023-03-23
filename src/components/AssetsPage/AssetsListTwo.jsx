import React, { useContext } from 'react'
import Loading from '@/components/Layout/Loading'
import AssetCardTwo from '@/components/AssetsPage/AssetCard/AssetCardTwo'
import { AuthContext } from '@/contexts/AuthContext'

const AssetsListTwo = ({ assets, setUpdateData, updateData }) => {
  const { data } = assets
  const { user } = useContext(AuthContext)
  const userId = user ? user._id : ''
  return (
    <div>
      {!data ? (
        <Loading/>
      ) : (
        data.map((asset, index) => (
          <AssetCardTwo setUpdateData={setUpdateData} updateData={updateData} key={index} asset={asset} userId={userId}/>
        ))
      )}
    </div>
  )
}

export default AssetsListTwo
