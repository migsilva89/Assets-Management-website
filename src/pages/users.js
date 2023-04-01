import React, { useEffect, useState } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import { api } from '@/services/api'
import UserCard from '@/components/UserProfilePage/UserCard/UserCard'
import Head from 'next/head'

const Users = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    api.get(`/users`).then(function(response){
      setUsers(response.data)
    }).catch(function(error){
      console.log(error)
    })
    
  }, [])
  
  return (
    <MainLayout>
      <Head>
        <title>Dev Assets | Users</title>
        <meta name='description' content='Explore and connect with other developers on Dev Assets.'/>
      </Head>
      <div className='max-w-7xl mb-10 mx-auto px-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
        {users.map((user, index) => (
          <UserCard key={index} user={user}/>
        ))}
      </div>
    </MainLayout>
  )
}

export default Users

export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}
