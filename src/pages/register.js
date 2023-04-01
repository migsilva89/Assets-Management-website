import Head from 'next/head'
import React from 'react'
import RegisterPage from '@/components/Register/RegisterPage'
import PublicLayout from '@/components/Layout/PublicLayout'

const Register = () => {
  return (
    <PublicLayout>
      <Head>
        <title>Dev Assets | Register</title>
        <meta name='description' content='Register for an account with Dev Assets and start managing your assets like images and text. Sign up now and start categorizing, tagging, and sharing your assets with others.'/>
      </Head>
      <RegisterPage/>
    </PublicLayout>
  )
}

export default Register
