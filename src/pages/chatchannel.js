import React from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import Chat from '@/components/Chat/Chat'
import Head from 'next/head'

const Chatchannel = () => {
  return (
    <MainLayout>
      <Head>
        <title>Dev Assets | Chat Channel</title>
        <meta name='description' content="Join the conversation and chat with other developers on Dev Assets' chat channel."/>
      </Head>
      <Chat/>
    </MainLayout>
  )
}

export default Chatchannel

export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}
