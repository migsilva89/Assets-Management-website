import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
]

export default function Home(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className='bg-gray-900 h-screen '>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt=''
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true'/>
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className='text-sm font-semibold leading-6 text-white'>
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a href='/login' className='text-sm font-semibold leading-6 text-white'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50'/>
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-400'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true'/>
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/25'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='/login'
                    className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800'
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      
      <div className='relative isolate pt-36'>
        <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <svg
            className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
          >
            <path
              fill='url(#f4773080-2a16-4ab4-9fd7-579fec69a4f7)'
              fillOpacity='.2'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='f4773080-2a16-4ab4-9fd7-579fec69a4f7'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#9089FC'/>
                <stop offset={1} stopColor='#FF80B5'/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='py-24 sm:py-32 lg:pb-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                Data to enrich your online business
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='/assets'
                  className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
                >
                  Get started
                </a>
                <a href='/register' className='text-sm font-semibold leading-6 text-white'>
                  Register <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
          <svg
            className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
          >
            <path
              fill='url(#ee0717bf-3e43-49df-b1bd-de36422ed3d3)'
              fillOpacity='.2'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='ee0717bf-3e43-49df-b1bd-de36422ed3d3'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#9089FC'/>
                <stop offset={1} stopColor='#FF80B5'/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
