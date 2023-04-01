import React, { useContext, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form'
import { AuthContext } from '@/contexts/AuthContext'

const RegisterPage = () => {
  const { register, handleSubmit } = useForm()
  const { registerUser } = useContext(AuthContext)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  
  async function handleRegister(data){
    const { name, nickName, email, password } = data
    try {
      await registerUser(name, nickName, email, password)
      setIsError(false)
    } catch (error) {
      setIsError(true)
      setErrorMessage(error.message) // set the error message state
    }
  }
  
  return (
    <div className='w-full max-w-md space-y-8 mx-auto'>
      <div>
        <img
          className='mx-auto h-12 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt='Your Company'
        />
        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-white'>
          Register an account
        </h2>
      </div>
      <form onSubmit={handleSubmit(handleRegister)} className='mt-8 space-y-6' action='#' method='POST'>
        <input type='hidden' name='remember' defaultValue='true'/>
        <div className='-space-y-px rounded-t-md shadow-sm'>
          <div>
            <label htmlFor='name' className='sr-only'>
              Full Name
            </label>
            <input
              {...register('name')}
              id='name'
              name='name'
              type='name'
              required
              autoComplete='name'
              className='relative block w-full rounded t-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='Full Name'
            />
          </div>
          <div>
            <label htmlFor='nickName' className='sr-only'>
              Nick Name
            </label>
            <input
              {...register('nickName')}
              id='nickName'
              name='nickName'
              type='nickName'
              autoComplete='nickName'
              required
              className='relative block w-full border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='Nick Name'
            />
          </div>
          <div>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              {...register('email')}
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='relative block w-full s border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='Email address'
            />
          </div>
          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>
            <input
              {...register('password')}
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='Password'
            />
          </div>
        </div>
        {isError && <p className='my-2 text-red-500 font-semibold'>{errorMessage}</p>}
        <div>
          <button
            type='submit'
            className='group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockClosedIcon className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400' aria-hidden='true'/>
                </span>
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
