import React from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { redirectIfNotAuthenticated } from '@/utils/auth'

const Tags = () => {
  return (
    <MainLayout>
      Oi
    </MainLayout>
  )
}

export default Tags

export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}
