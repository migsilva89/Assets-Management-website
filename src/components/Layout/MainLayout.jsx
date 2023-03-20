import React from 'react'
import NavBar from '@/components/Layout/NavBar'

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar/>
      {children}
    </>
  
  )
}

export default MainLayout
