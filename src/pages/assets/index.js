import React from 'react'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import MainLayout from '@/components/Layout/MainLayout'
import FeedPage from '@/components/FeedPage/FeedPage'

const Index = () => {
  
  return (
    <MainLayout>
      <FeedPage/>
    </MainLayout>
  )
}

//verificar se o temos token valido nos cookies, se nao redireciona para login.
//mudamos isto opara uma util
export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}

export default Index


