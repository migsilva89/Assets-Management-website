import React, { useEffect, useState } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { useRouter } from 'next/router'
import { api } from '@/services/api'
import Loading from '@/components/Layout/Loading'


const MyComponent = () => {
  const router = useRouter()
  const { query } = router
  const [asset, setAsset] = useState(null)
  
  useEffect(() => {
    api.get(`/assets/${query.id}`).then(function(response){
      // Atualiza o usuário no AuthContext com a resposta da API
      setAsset(response.data.asset)
    }).catch(function(error){
      console.log(error)
      // setIsError(true)
    })
  }, [query.id])
  
  if (!asset) {
    return <Loading/>
  }
  
  console.log(asset)
  return (
    <MainLayout>
      <div className='text-white'>
        <h1>{asset.name}</h1>
        <h1>{asset.description}</h1>
        <h1>{asset.createdAt}</h1>
        <p>add commets</p>
        <p>add tags</p>
      </div>
    </MainLayout>
  )
}

export default MyComponent
