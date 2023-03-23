import React, { useContext, useState } from 'react'
import AddComment from '@/components/FeedPage/Assets/AddComment'
import Comment from '@/components/FeedPage/Assets/Comment'
import { AuthContext } from '@/contexts/AuthContext'
import Loading from '@/components/Layout/Loading'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
  // More posts...
]

const AssetCard = ({ asset, user }) => {
  const [activateComments, setActivateComments] = useState(false)
  const { name, description, image, owner, tags, likes, isPublic, comments, createdAt, slug, _id } = asset
  
  
  return (
    <div className='mt-10 mx-auto max-w-7xl'>
      <div className='px-8 py-8'>
        <div className='mx-auto max-w-2xl lg:max-w-7xl'>
          <div className='space-y-20 lg:space-y-20'>
            {posts.map((post) => (
              <article key={_id} className='relative isolate flex flex-col gap-8 lg:flex-row'>
                <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'>
                  <img
                    src={post.imageUrl}
                    alt=''
                    className='absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover'
                  />
                  <img className='h-8 w-8 rounded-full' src={image === 'no-photo.jpg' ? 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' : `http://localhost:5000/images/usersAvatar/${image}`} alt={`${name}'s avatar`}/> :
                  <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10'/>
                </div>
                <div className='w-full'>
                  <div className='flex items-center gap-x-4 text-xs'>
                    <time dateTime={createdAt} className='text-gray-500'>
                      {createdAt}
                    </time>
                    <a
                      href={tags}
                      className='relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium hover:text-white text-gray-600 hover:bg-gray-600'
                    >
                      {tags}
                    </a>
                  </div>
                  <div className='group relative l'>
                    <h3 className='mt-3 text-lg font-semibold leading-6 text-white'>
                      <a href={post.href}>
                        <span className='absolute inset-0'/>
                        {name}
                      </a>
                    </h3>
                    <p className='mt-5 text-sm leading-6 text-white'>{description}</p>
                  </div>
                  <div className='mt-6 flex justify-between border-t border-gray-900/5 pt-6 items-end'>
                    <div className='relative flex items-center gap-x-4'>
                      <img className='h-10 w-10 rounded-full' src={user.avatar === 'no-photo.jpg' ? 'https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' : `http://localhost:5000/images/usersAvatar/${user.avatar}`} alt={`${user.nickName}'s avatar`}/>
                      <div className='text-sm leading-6'>
                        <p className='font-semibold text-white'>
                          <a href={post.author.href}>
                            <span className='absolute inset-0'/>
                            {user.name}
                          </a>
                        </p>
                        <p className='text-gray-500'>{user.nickName}</p>
                      </div>
                    </div>
                    <div className='flex gap-5 text-white'>
                      <button>Like 24</button>
                      <button className='hover:border-b hover:text-gray-400' onClick={() => {
                        setActivateComments(!activateComments)
                      }}>Comments 36
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
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
            <AddComment/>
            <Comment/>
          </div> : ''
        }
      </div>
    </div>
  )
}

export default AssetCard
