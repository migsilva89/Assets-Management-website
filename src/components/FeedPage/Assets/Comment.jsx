import React from 'react'

const Comment = () => {
  return (
    <div className='max-w-2xl lg:max-w-7xl mx-auto flex items-center justify-between gap-10 text-sm font-thin text-white mt-7 '>
      <div className='flex items-center gap-5 my-5'>
        <img className='w-7 rounded-full' src='https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' alt=''/>
        <p>
          Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo
          necessitatibus
        </p>
      </div>
      <div>Like</div>
    </div>
  )
}
// border-0 border-b border-t border-transparent border-white
export default Comment
