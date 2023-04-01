import Head from 'next/head'
import LoginPage from '@/components/Login/LoginPage'
import PublicLayout from '@/components/Layout/PublicLayout'

export default function Login(){
  
  return (
    <PublicLayout>
      <Head>
        <title>Dev Assets | Login</title>
        <meta name='description' content='Login to Dev Assets to manage your assets easily. Keep your images and text organized and accessible.'/>
      </Head>
      <LoginPage/>
    </PublicLayout>
  )
}
