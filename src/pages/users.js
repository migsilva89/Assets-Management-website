import React, { useEffect, useState } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import Chat from '@/components/Chat/Chat'
import { api } from '@/services/api'
import Loading from '@/components/Layout/Loading'
import TagCard from '@/components/Tags/TagCard'

const Users = () => {
  
  
  return (
    <MainLayout>
      dasdasdas
      {/*<Chat/>*/}
    </MainLayout>
  )
}

export default Users

export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}
