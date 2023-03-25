import React, { useContext, useEffect, useState } from 'react'
import AddComment from '@/components/FeedPage/AssetsCard/AddComment'
import Comment from '@/components/FeedPage/AssetsCard/Comment'
import { AuthContext } from '@/contexts/AuthContext'
import Loading from '@/components/Layout/Loading'
import Link from 'next/link'
import { api } from '@/services/api'
import Likes from '@/components/FeedPage/AssetsCard/Likes'
import CardHeader from '@/components/FeedPage/AssetsCard/CardHeader'

const AssetCard = ({ asset, user, updateData, setUpdateData }) => {
  const [activateComments, setActivateComments] = useState(false)
  const { name, description, image, owner, tags, likes, isPublic, comments, createdAt, slug, _id } = asset
  const [userOwner, setUserOwner] = useState()
  
  useEffect(() => {
    api.get(`/users/${owner}`).then(data => {
      setUserOwner(data.data)
    }).catch(error => {
      alert('NO DATA')
    })
  }, [owner])
  
  
  if (!userOwner || !user) {
    return <Loading className='w-52 h-52'/>
  }
  
  return (
    <div className='mt-10 mx-auto max-w-7xl'>
      <div className='px-8 py-8'>
        <div className='mx-auto max-w-2xl lg:max-w-7xl'>
          <div className='space-y-20 lg:space-y-20'>
            <article key={_id} className='relative isolate flex flex-col gap-8 lg:flex-row'>
              <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'>
                <img
                  src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'
                  alt=''
                  className='absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover'
                />
                <img className='h-8 w-8 rounded-full' src={image === 'no-photo.jpg' ? 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' : `http://localhost:5000/images/usersAvatar/${image}`} alt={`${name}'s avatar`}/> :
                <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10'/>
              </div>
              <div className='w-full'>
                <CardHeader
                  updateData={updateData}
                  setUpdateData={setUpdateData}
                  assetId={_id}
                  owner={owner}
                  user={user}
                  createdAt={createdAt}
                  tags={tags}
                  description={description}
                  name={name}
                />
                <div className='mt-6 flex justify-between border-t border-gray-900/5 pt-6 items-end'>
                  <div className='relative flex items-center gap-x-4'>
                    <img className='h-10 w-10 rounded-full' src={userOwner.avatar === 'no-photo.jpg' ? 'https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' : `http://localhost:5000/images/usersAvatar/${userOwner.avatar}`} alt={`${userOwner.nickName}'s avatar`}/>
                    <div className='text-sm leading-6'>
                      <p className='font-semibold text-white'>
                        <Link href='/'>
                          <span className='absolute inset-0'/>
                          {userOwner.name}
                        </Link>
                      </p>
                      <p className='text-gray-500'>{userOwner.nickName}</p>
                    </div>
                  </div>
                  <div className='flex gap-5 text-white text-sm'>
                    <Likes likes={likes} id={_id} setUpdateData={setUpdateData} updateData={updateData}/>
                    -
                    <button className='hover:border-b hover:text-gray-400' onClick={() => {
                      setActivateComments(!activateComments)
                    }}>Comments {comments.length}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        {activateComments ?
          <div>
            <div className='flex justify-end text-white'>
              <button onClick={() => {
                setActivateComments(!activateComments)
              }}>X
              </button>
            </div>
            <AddComment setUpdateData={setUpdateData} updateData={updateData} id={_id}/>
            {comments.map((comment, index) => (
              <Comment user={user} id={_id} key={index} comment={comment} setUpdateData={setUpdateData} updateData={updateData}/>
            ))}
          </div> : ''
        }
      </div>
    </div>
  )
}

export default AssetCard
