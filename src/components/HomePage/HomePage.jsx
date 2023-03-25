import React, { useState } from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <div className='py-24 sm:py-32 lg:pb-40'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Discover and Share the Best Development Assets
            </h1>
            <p className='mt-6 sm:text-lg leading-8 text-gray-300'>
              Join DevAssetsPro to Network with Like-Minded Developers, Share Your Best Assets, Gain Valuable Insights,
              and Elevate Your Coding Game to New Heights.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href='/assets'
                className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
              >
                Sign In
              </Link>
              <Link href='/register' className='text-sm font-semibold leading-6 text-white'>
                Register <span aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
