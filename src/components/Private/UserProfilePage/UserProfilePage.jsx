import React from 'react'

const UserProfilePage = ({ userInfo }) => {
  const { avatar, createdAt, email, name, nickName, _id } = userInfo ? userInfo : {}
  
  return (
    <div>
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
    
    </div>
  )
}

export default UserProfilePage
