import React, { useContext } from 'react'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import { AuthContext } from '@/contexts/AuthContext'
import MainLayout from '@/components/Layout/MainLayout'
import Loading from '@/components/Layout/Loading'
import UserCard from '@/components/UserProfilePage/UserCard/UserCard'
import EditUserForm from '@/components/UserProfilePage/EditUserForm'

const UserProfile = () => {
  const { user } = useContext(AuthContext)
  
  if (!user) {
    return <Loading className='w-1/3'/>
  }
  console.log(user)
  
  return (
    <MainLayout>
      <main className='w-full max-w-7xl px-8 mx-auto'>
        <UserCard user={user}/>
        <EditUserForm/>
      </main>
    
    </MainLayout>
  )
}

//verificar se o temos token valido nos cookies, se nao redireciona para login.
//mudamos isto opara uma util
export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}


export default UserProfile