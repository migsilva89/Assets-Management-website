import React, { useContext } from 'react'
import Likes from '@/components/FeedPage/AssetsCard/Likes'
import { AuthContext } from '@/contexts/AuthContext'
import { api } from '@/services/api'

const Asset = ({ asset, userId, setUpdateData, updateData }) => {
  const { name, description, image, owner, tags, likes, isPublic, comments, createdAt, slug, _id } = asset
  
  const handleDeleteComment = (commentId, event) => {
    console.log(commentId)
    api.delete(`/assets/${_id}/comments/${commentId}`).then(function(response){
      console.log(response)
      setUpdateData(!updateData)
    })
  }
  
  return (
    <div className='flex flex-col items-center bg-white rounded-tl-lg shadow md:flex-row w-full dark:border-gray-700 dark:bg-gray-800'>
      <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src='https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt=''/>
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {name}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        {/*<button type='button' className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>Purple</button>*/}
        <div>
          <Likes likes={likes} id={_id} setUpdateData={setUpdateData} updateData={updateData}/>
          <div className='text-white'>
            <h1>Comments:</h1>
            <div>{comments.map((comment, index) => (
              <div key={index} className='pl-2 flex items-center gap-5 border justify-between'>
                <p>{comment.text}</p>
                {comment.author === userId ?
                  <button onClick={(event) => {
                    handleDeleteComment(comment._id)
                  }} className='border p-2 bg-red-500'>Delete</button> :
                  <div className='border py-4 px-8 bg-blue-500'></div>}
              </div>
            ))}</div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Asset
