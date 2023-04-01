import React, { useEffect, useState } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { useRouter } from 'next/router'
import { api } from '@/services/api'
import Loading from '@/components/Layout/Loading'
import Head from 'next/head'

const SingleAssetPage = () => {
  const router = useRouter()
  const { query } = router
  const [asset, setAsset] = useState(null)
  
  useEffect(() => {
    api.get(`/assets/${query.id}`).then(function(response){
      // Updates the asset state with the response from the API
      setAsset(response.data.asset)
    }).catch(function(error){
      console.log(error)
    })
  }, [query.id])
  
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
      <div className='text-white'>
        <h1>{asset.name}</h1>
        <h1>{asset.description}</h1>
        <h1>{asset.createdAt}</h1>
        <p>Add comments</p>
        <p>Add tags</p>
      </div>
    </MainLayout>
  )
}

export default SingleAssetPage
