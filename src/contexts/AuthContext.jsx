import { createContext, useEffect, useState } from 'react'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import Router from 'next/router'
import { api } from '@/services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const isAuthenticated = !!user
  const [updateData, setUpdateData] = useState(false)
  
  const updateUser = (updatedUser) => {
    setUser(updatedUser)
  }
  
  useEffect(() => {
    const { 'devassets-token': token } = parseCookies()
    
    if (token) {
      api.get('/auth/user').then(({ data }) => setUser(data)).catch((error) => console.error(error))
    }
  }, [])
  
  async function signIn(email, password){
    try {
      const { data } = await api.post('/auth/login', { email, password })
      const { user, token } = data
      
      setCookie(undefined, 'devassets-token', token, {
        maxAge: 60 * 60 // 1 hour
      })
      
      api.defaults.headers['Authorization'] = `Bearer ${token}`
      setUser(user)
      await Router.push('/assets')
    } catch (error) {
      console.log(error)
      throw error // re-throw the error here
    }
  }
  
  async function registerUser(name, nickName, email, password){
    try {
      const { data } = await api.post('/auth/register', { name, nickName, email, password })
      const { user, token } = data
      
      setCookie(undefined, 'devassets-token', token, {
        maxAge: 60 * 60 // 1 hour
      })
      
      api.defaults.headers['Authorization'] = `Bearer ${token}`
      setUser(user)
      await Router.push('/assets')
    } catch (error) {
      console.error(error)
      throw new Error(error.response.data.error) // re-throw the error with the error message
    }
  }
  
  function signOut(){
    Router.push('/')
    destroyCookie(undefined, 'devassets-token')
    delete api.defaults.headers['Authorization']
    setUser(null)
  }
  
  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      signIn,
      signOut,
      registerUser,
      updateUser,
      updateData,
      setUpdateData
    }}>
      {children}
    </AuthContext.Provider>
  )
}
