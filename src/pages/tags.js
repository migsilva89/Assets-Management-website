import React from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import { redirectIfNotAuthenticated } from '@/utils/auth'
import ModalAddAsset from '@/components/ModalAddAsset/ModalAddAsset'

const Tags = () => {
  return (
    <MainLayout>
      <ModalAddAsset/>
    </MainLayout>
  )
}

export default Tags

export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}
