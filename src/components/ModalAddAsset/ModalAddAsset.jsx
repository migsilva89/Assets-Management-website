import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'
import { api } from '@/services/api'

const ModalAddAsset = ({ setIsModalOpen, isOpen, user, setUpdateData, updateData }) => {
  const { register, handleSubmit } = useForm()
  const handlePostAsset = (data, event) => {
    event.preventDefault()
    api.post(`/assets/`, { name: data.name, description: data.description }).then(function(response){
      // console.log(response)
      setUpdateData(!updateData)
      setIsModalOpen(false)
    })
  }
  
  return (
    <form onSubmit={handleSubmit(handlePostAsset)}>
      <div className='space-y-12 sm:space-y-16 max-w-2xl mx-auto mt-10 bg-white px-10 py-5 rounded-xl'>
        <div>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>Add an asset</h2>
          <div className='mt-5 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-gray-900/10 sm:pb-0'>
            <div className=''>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                <input
                  {...register('name')}
                  type='text'
                  name='name'
                  className='block flex-1 border-0 bg-transparent py-1.5 pl-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='Insert asset name'
                />
              </div>
            </div>
            <div className=''>
              <label htmlFor='about' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Description
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <textarea
                  {...register('description')}
                  id='description'
                  name='description'
                  rows={3}
                  className='block w-full max-w-2xl rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
                <p className='mt-3 text-sm leading-6 text-gray-600'>Write a few sentences about the asset.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <button onClick={((e) => {
            setIsModalOpen(false)
          })} type='button' className='text-sm font-semibold leading-6 text-gray-900'>
            Cancel
          </button>
          <button
            type='submit'
            className='w-1/2 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default ModalAddAsset