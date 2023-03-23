/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { FaceSmileIcon as FaceSmileIconOutline, PaperClipIcon } from '@heroicons/react/24/outline'
import { Listbox, Transition } from '@headlessui/react'
import {
  FaceFrownIcon,
  FaceSmileIcon as FaceSmileIconMini,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon
} from '@heroicons/react/20/solid'
import AddCommentTwo from '@/components/AssetsPage/AssetCard/AddCommentTwo'

const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIconMini, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' }
]

const AddComment = () => {
  return (
    <div className='flex items-start space-x-4 mt-10 max-w-2xl lg:max-w-7xl mx-auto'>
      <div className='min-w-0 flex-1'>
        <form action='src/components/FeedPage/Assets#'>
          <div className='border-b border-gray-200 focus-within:border-indigo-600'>
            <label htmlFor='comment' className='sr-only'>
              Add your comment
            </label>
            <textarea
              rows={2}
              name='comment'
              id='comment'
              className='block text-white w-full bg-gray-900 resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder='Add your comment...'
              defaultValue={''}
            />
          </div>
          <div className='flex pt-2'>
            <div className='flex-shrink-0 mt-4'>
              <button
                type='submit'
                className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddComment