import React, { Fragment, useContext } from 'react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { AuthContext } from '@/contexts/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/router'

function classNames(...classes){
  return classes.filter(Boolean).join(' ')
}

const userConst = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}
const navigation = [
  { name: 'Feed', href: '/assets', current: true },
  { name: 'My Activity', href: '/activity', current: false },
  { name: 'Tags', href: '/tags', current: false },
  { name: 'Rules', href: '/rules', current: false }
  // { name: 'Reports', href: '#', current: false }
]
const userNavigation = [
  { name: 'Your Profile', href: '/userProfile' },
  // { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' }
]

const useIsActive = (href) => {
  const { pathname } = useRouter()
  return pathname === href
}

const NavBar = () => {
  const useIsActive = (href) => {
    const { pathname } = useRouter()
    return pathname === href
  }
  const { user } = useContext(AuthContext)
  const { signOut } = useContext(AuthContext)
  
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <Link href='/'>
                    <img
                      className='h-8 w-8'
                      src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                      alt='Your Company'
                    />
                  </Link>
                </div>
                <div className='hidden md:block'>
                  <div className='ml-10 flex items-baseline space-x-4'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          useIsActive(item.href)
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={useIsActive(item.href) ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='ml-4 flex items-center md:ml-6'>
                  {/*<button*/}
                  {/*  type='button'*/}
                  {/*  className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'*/}
                  {/*>*/}
                  {/*  <span className='sr-only'>View notifications</span>*/}
                  {/*  <BellIcon className='h-6 w-6' aria-hidden='true'/>*/}
                  {/*</button>*/}
                  
                  {/* Profile dropdown */}
                  <Menu as='div' className='relative ml-3'>
                    <div>
                      <Menu.Button className='flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                        <span className='sr-only'>Open user menu</span>
                        {user ?
                          <img className='h-8 w-8 rounded-full' src={user.avatar === 'no-photo.jpg' ? 'https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' : `http://localhost:5000/images/usersAvatar/${user.avatar}`} alt={`${user.nickName}'s avatar`}/> :
                          <img className='h-8 w-8 rounded-full' src='https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg'/>}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              item.name === 'Sign out' ? (
                                <div
                                  onClick={() => signOut()}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </div>
                              ) : (
                                <Link
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </Link>
                              )
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className='-mr-2 flex md:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true'/>
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true'/>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          
          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className='border-t border-gray-700 pt-4 pb-3'>
              {user ?
                <div className='flex items-center px-5'>
                  
                  <div className='flex-shrink-0'>
                    <img className='h-10 w-10 rounded-full' src={user.avatar === 'no-photo.jpg' ? 'https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small_2x/man-avatar-character-isolated-icon-free-vector.jpg' : `http://localhost:5000/images/usersAvatar/${user.avatar}`} alt={`${user.nickName}'s avatar`}/>
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium leading-none text-white'>{user.nickName}</div>
                    <div className='text-sm font-medium leading-none text-gray-400'>{user.email}</div>
                  </div>
                  {/*<button*/}
                  {/*  type='button'*/}
                  {/*  className='ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'*/}
                  {/*>*/}
                  {/*  <span className='sr-only'>View notifications</span>*/}
                  {/*  <BellIcon className='h-6 w-6' aria-hidden='true'/>*/}
                  {/*</button>*/}
                </div> : <div>Loading...</div>
              }
              
              <div className='mt-3 space-y-1 px-2'>
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
