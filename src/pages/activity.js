import React from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { redirectIfNotAuthenticated } from '@/utils/auth'

const Activity = () => {
  return (
    <MainLayout>
      Oi
    </MainLayout>
  )
}

export default Activity

export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}
