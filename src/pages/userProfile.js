import React, { useContext } from 'react'
import UserProfilePage from '@/components/Private/UserProfilePage/UserProfilePage'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import { AuthContext } from '@/contexts/AuthContext'

const UserProfile = () => {
  const { user } = useContext(AuthContext)
  
  return (
    <div>
      <UserProfilePage userInfo={user}/>
    </div>
  )
}

//verificar se o temos token valido nos cookies, se nao redireciona para login.
//mudamos isto opara uma util
export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}


export default UserProfile