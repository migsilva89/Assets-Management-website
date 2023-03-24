import { useContext, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form'
import { AuthContext } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function LoginPage(){
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)
  const [isError, setIsError] = useState(false)
  
  async function handleSignIn(data){
    try {
      await signIn(data.email, data.password)
      setIsError(false)
    } catch (error) {
      setIsError(true)
      console.error(error) // log the error here
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
          Sign in to your account
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Dont have an account yet?{' '}
          <Link href='/register' className='font-medium text-indigo-600 hover:text-indigo-500'>
            Register
          </Link>
        </p>
      </div>
      <form className='mt-8' onSubmit={handleSubmit(handleSignIn)}>
        <input type='hidden' name='remember' defaultValue='true'/>
        <div className='-space-y-px rounded-md shadow-sm'>
          <div>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              {...register('email')}
              onChange={(() => {
                setIsError(false)
              })}
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
              onChange={(() => {
                setIsError(false)
              })}
            />
          </div>
        </div>
        {isError && <p className='my-2 text-red-500 font-semibold'>Invalid email or password!</p>}
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
            />
            <label htmlFor='remember-me' className='my-5 ml-2 block text-sm text-white'>
              Remember me
            </label>
          </div>
          
          <div className='text-sm'>
            <a href='src/components/LoginPage#' className='font-medium text-indigo-600 hover:text-indigo-500'>
              Forgot your password?
            </a>
          </div>
        </div>
        
        <div>
          <button
            type='submit'
            className='group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockClosedIcon className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400' aria-hidden='true'/>
                </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}
