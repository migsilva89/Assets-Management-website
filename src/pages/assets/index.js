import React, { useContext } from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import FeedPage from '@/components/FeedPage/FeedPage'
import { AuthContext } from '@/contexts/AuthContext'
import Head from 'next/head'
import { redirectIfNotAuthenticated } from '@/utils/auth'

const Index = () => {
  const { user } = useContext(AuthContext)
  
  return (
    <MainLayout>
      <Head>
        <title>Dev Assets | Feed </title>
        <meta name='description' content='Explore the latest development resources shared by other developers on Dev Assets.'/>
      </Head>
      <FeedPage user={user}/>
    </MainLayout>
  )
}

// Check if there's a valid token in the cookies. If not, redirect to the login page.
// We moved this to a utility function.
export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}

export default Index
