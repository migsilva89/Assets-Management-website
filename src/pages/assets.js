import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { api } from '@/services/api'
import AssetsPage from '@/components/AssetsPage/AssetsPage'
import { redirectIfNotAuthenticated } from '@/utils/auth'

const Assets = () => {
  const [assets, setAssets] = useState([])
  const { user } = useContext(AuthContext)
  const [updateData, setUpdateData] = useState(false)
  
  useEffect(() => {
    api.get('/assets').then(data => {
      console.log(data)
      setAssets(data)
    }).catch(error => {
      alert('NO DATA')
    })
  }, [updateData])
  
  return (
    <>
      <AssetsPage assets={assets} user={user} setUpdateData={setUpdateData} updateData={updateData}/>
    </>
  )
}

//verificar se o temos token valido nos cookies, se nao redireciona para login.
//mudamos isto opara uma util
export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}

export default Assets


