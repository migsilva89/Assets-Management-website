import React from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { useRouter } from 'next/router'


const MyComponent = () => {
  const router = useRouter()
  const { query } = router
  console.log(query)
  return (
    <MainLayout>
      <div className='text-white'>
        {query.id}
      </div>
    </MainLayout>
  )
}

export default MyComponent
