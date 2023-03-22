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
      {/*<div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>*/}
      {/*  <svg*/}
      {/*    className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'*/}
      {/*    viewBox='0 0 1155 678'*/}
      {/*  >*/}
      {/*    <path*/}
      {/*      fill='url(#ee0717bf-3e43-49df-b1bd-de36422ed3d3)'*/}
      {/*      fillOpacity='.2'*/}
      {/*      d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'*/}
      {/*    />*/}
      {/*    <defs>*/}
      {/*      <linearGradient*/}
      {/*        id='ee0717bf-3e43-49df-b1bd-de36422ed3d3'*/}
      {/*        x1='1155.49'*/}
      {/*        x2='-78.208'*/}
      {/*        y1='.177'*/}
      {/*        y2='474.645'*/}
      {/*        gradientUnits='userSpaceOnUse'*/}
      {/*      >*/}
      {/*        <stop stopColor='#9089FC'/>*/}
      {/*        <stop offset={1} stopColor='#FF80B5'/>*/}
      {/*      </linearGradient>*/}
      {/*    </defs>*/}
      {/*  </svg>*/}
      {/*</div>*/}
    </div>
  )
}

export default HomePage
