import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { api } from '@/services/api'
import AssetsPage from '@/components/AssetsPage/AssetsPage'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import MainLayout from '@/components/Layout/MainLayout'
import FeedPage from '@/components/FeedPage/FeedPage'

const Assets = () => {
  
  
  return (
    <MainLayout>
      <FeedPage/>
      {/*<AssetsPage assets={assets} user={user} setUpdateData={setUpdateData} updateData={updateData}/>*/}
    </MainLayout>
  )
}

//verificar se o temos token valido nos cookies, se nao redireciona para login.
//mudamos isto opara uma util
export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}

export default Assets


