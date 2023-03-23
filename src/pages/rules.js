import React from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { redirectIfNotAuthenticated } from '@/utils/auth'

const Rules = () => {
  return (
    <MainLayout>
      Oi
    </MainLayout>
  )
}

export default Rules

export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}
