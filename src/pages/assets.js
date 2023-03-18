import { Fragment, useContext, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AuthContext } from '@/contexts/AuthContext'
import { api } from '@/services/api'
import { parseCookies } from 'nookies'
import AssetsComponent from '@/components/Assets/AssetsComponent'
import AssetsPage from '@/components/Private/AssetsPage/AssetsPage'
import { redirectIfNotAuthenticated } from '@/utils/auth'

const userConst = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '/', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false }
]
const userNavigation = [
  { name: 'Your Profile', href: '/userProfile' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' }
]

function classNames(...classes){
  return classes.filter(Boolean).join(' ')
}

const Assets = () => {
  const [assets, setAssets] = useState([])
  const { user } = useContext(AuthContext)
  
  useEffect(() => {
    api.get('/assets').then(data => {
      setAssets(data)
    }).catch(error => {
      alert('NO DATA')
    })
  }, [])
  
  return (
    <>
      <AssetsPage classNames={classNames} assets={assets} user={user} userConst={userConst} navigation={navigation} userNavigation={userNavigation}/>
    </>
  )
}

//verificar se o temos token valido nos cookies, se nao redireciona para login.
//mudamos isto opara uma util
export async function getServerSideProps(ctx){
  return await redirectIfNotAuthenticated(ctx)
}

export default Assets


