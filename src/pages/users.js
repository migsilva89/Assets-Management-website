import React, { useEffect, useState } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import { api } from '@/services/api'
import UserCard from '@/components/UserProfilePage/UserCard/UserCard'

//const [assetsByUser, setAssetsByUser] = useState([])

// useEffect(() => {
//   api.get(`/users/${user._id}/assets`).then(function(response){
//     setAssetsByUser(response.data)
//   }).catch(function(error){
//     console.log(error)
//   })
// }, [])
//
// if (!assetsByUser) {
//   return ''
// }


const Users = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    api.get(`/users`).then(function(response){
      setUsers(response.data)
    }).catch(function(error){
      console.log(error)
    })
  }, [])
  // setUsers(novodata)
  return (
    <MainLayout>
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
