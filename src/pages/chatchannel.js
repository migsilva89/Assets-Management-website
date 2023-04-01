import React from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import Chat from '@/components/Chat/Chat'

const Chatchannel = () => {
  return (
    <MainLayout>
      <Chat/>
    </MainLayout>
  )
}

export default Chatchannel

export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}
