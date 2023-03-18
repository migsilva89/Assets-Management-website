import { createContext, useEffect, useState } from 'react'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import Router from 'next/router'
import { api } from '@/services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }){
  const [user, setUser] = useState()
  
  const isAuthenticated = !!user
  
  useEffect(() => {
    const { 'devassets-token': token } = parseCookies()
    
    if (token) {
      fetch(`http://localhost:5000/api/v1/user`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => response.json()).then(data => {
        setUser(data)
      }).catch(error => {
        console.log(error)
      })
    }
  }, [])
  
  async function signIn(email, password){
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      
      if (response.ok) {
        const data = await response.json()
        const { user, token } = data
        // console.log(user)
        // console.log(token)
        
        // save data in local storage or cookies
        setCookie(undefined, 'devassets-token', token, {
          maxAge: 60 * 60 //1hour
        })
        
        //atribuir o token ao header do nosso request AXIOS para a api:
        api.defaults.headers['Authorization'] = `Bearer ${token}`
        
        
        setUser(user)
        await Router.push('./assets')
        
      } else {
        throw new Error('Login failed.')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  function signOut(){
    destroyCookie(undefined, 'devassets-token')
    delete api.defaults.headers['Authorization']
    setUser(null)
    Router.push('/')
  }
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
