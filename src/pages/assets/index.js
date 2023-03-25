import React, { useContext, useEffect, useState } from 'react'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import MainLayout from '@/components/Layout/MainLayout'
import FeedPage from '@/components/FeedPage/FeedPage'
import { AuthContext } from '@/contexts/AuthContext'
import Tags from '@/components/Tags/Tags'

const Index = () => {
  const { user } = useContext(AuthContext)
  
  return (
    <MainLayout>
      <FeedPage user={user}/>
    </MainLayout>
  )
}

//verificar se o temos token valido nos cookies, se nao redireciona para login.
//mudamos isto opara uma util
export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}

export default Index


