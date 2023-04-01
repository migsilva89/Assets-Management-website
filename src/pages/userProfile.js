import React, { useContext, useState } from 'react'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import { AuthContext } from '@/contexts/AuthContext'
import MainLayout from '@/components/Layout/MainLayout'
import Loading from '@/components/Layout/Loading'
import UserCard from '@/components/UserProfilePage/UserCard/UserCard'
import EditUserForm from '@/components/UserProfilePage/EditUserForm'
import { useForm } from 'react-hook-form'
import { api } from '@/services/api'
import Head from 'next/head'

const UserProfile = () => {
  const { user, updateUser } = useContext(AuthContext)
  const { register, handleSubmit } = useForm()
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  
  if (!user) {
    return <Loading className='w-1/3'/>
  }
  
  const handleEditUser = (data) => {
    const { name, nickName, email, password, avatar } = data
    const formData = new FormData()
    
    formData.append('name', name)
    formData.append('nickName', nickName)
    formData.append('email', email)
    formData.append('password', password)
    
    // Verifica se um novo avatar foi selecionado
    if (avatar[0]) {
      formData.append('avatar', avatar[0])
    }
    
    api.put(`/users`, formData).then(function(response){
      updateUser(response.data)
      setIsError(false)
    }).catch(function(error){
      setIsError(true)
      setErrorMessage(error.response.data.error)
    })
  }
  
  return (
    <MainLayout>
      <Head>
        <title>Dev Assets | User Profile</title>
        <meta name='description' content='View and edit your user profile.'/>
      </Head>
      <main className='w-full max-w-7xl px-8 mx-auto'>
        <UserCard user={user} register={register}/>
        {isError ?
          <div className='flex justify-center my-10'>
            <div className='text-white text-center px-4 py-2 bg-red-500 w-1/3 rounded-xl'>{errorMessage}</div>
            :
          </div> :
          ''
        }
        <EditUserForm
          user={user}
          handleEditUser={handleEditUser}
          register={register}
          handleSubmit={handleSubmit}/>
      </main>
    </MainLayout>
  )
}


// Verify if the user has a valid token in cookies, if not, redirect to login.
// This was moved to a utility function.
export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}


export default UserProfile