import Head from 'next/head'
import HomePage from '@/components/HomePage/HomePage'
import PublicLayout from '@/components/Layout/PublicLayout'

export default function Home(){
  return (
    <PublicLayout>
      <Head>
        <title>Dev Assets | Home</title>
        <meta name='description' content='Welcome to Dev Assets, the platform for managing your digital assets. Store and organize your images, text, and other media. Sign up today and start managing your assets with ease.'/>
      </Head>
      <HomePage/>
    </PublicLayout>
  )
}
