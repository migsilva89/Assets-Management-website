import React from 'react'
import MainLayout from '@/components/Layout/MainLayout'

const UserProfilePage = ({ userInfo }) => {
  const { avatar, createdAt, email, name, nickName, _id } = userInfo ? userInfo : {}
  
  return (
    <MainLayout>
      {userInfo ? <div>
        {avatar}
        <br/>
        {createdAt}
        <br/>
        {email}
        <br/>
        {name}
        <br/>
        {nickName}
        <br/>
        {_id}
      </div> : <div>Loading...</div>}
    
    </MainLayout>
  )
}

export default UserProfilePage
