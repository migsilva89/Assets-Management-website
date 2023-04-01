import React, { useContext, useEffect, useState } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { useRouter } from 'next/router'
import { api } from '@/services/api'
import Loading from '@/components/Layout/Loading'
import Head from 'next/head'
import AssetCard from '@/components/FeedPage/AssetsCard/AssetCard'
import { AuthContext } from '@/contexts/AuthContext'

const SingleAssetPage = () => {
  const router = useRouter()
  const { query } = router
  const [asset, setAsset] = useState(null)
  const { user, updateData, setUpdateData } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    api.get(`/assets/${query.id}`).then(function(response){
      // Updates the asset state with the response from the API
      setAsset(response.data.asset)
    }).catch(function(error){
      console.log(error)
    })
  }, [query.id, updateData])
  
  if (!asset) {
    // Renders a loading component if the asset is not yet available
    return <Loading/>
  }
  
  console.log(asset)
  return (
    <MainLayout>
      <Head>
        <title>Dev Assets | {asset.name}</title>
        <meta name='description' content={asset.description}/>
      </Head>
      <AssetCard
        asset={asset}
        setLoading={setLoading}
        loading={loading}
        user={user}
        updateData={updateData}
        setUpdateData={setUpdateData}
      />
    
    </MainLayout>
  )
}

export default SingleAssetPage
