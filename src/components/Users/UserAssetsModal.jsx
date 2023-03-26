import React from 'react'
import Link from 'next/link'

const UserAssetsModal = ({ assets, user, setShowModal }) => {
  return (
    <div onClick={((e) => {
      setShowModal(false)
    })} id='popup-modal' tabIndex='-1' className='bg-black bg-opacity-50 fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full'>
      <div className='relative w-full h-full max-w-md md:h-auto mx-auto mt-52'>
        <div onClick={((e) => {
          e.stopPropagation()
        })} className='relative rounded-lg bg-gray-700'>
          <button
            onClick={((e) => {
              setShowModal(false)
            })}
            type='button' className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white' data-modal-hide='popup-modal'>
            <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path>
            </svg>
            <span className='sr-only'>Close modal</span>
          </button>
          <div className='p-6 text-center'>
            <h3 className='mb-5 text-lg font-normal text-gray-400'>
              All assets from {user.nickName}
            </h3>
            <div className='relative'>
              {assets.map((asset, index) => (
                <Link href={`/assets/${asset._id}`} className='cursor-pointer relative flex justify-center hover:underline my-5 rounded-lg shadow py-2 hover:bg-indigo-700 bg-indigo-800 text-white' key={index}>
                  <div className='flex gap-10'>
                    <p className='font-semibold'>{asset.name}</p>
                    <div>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'/>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'/>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAssetsModal
