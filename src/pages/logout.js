import { useContext, useEffect } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

export default function Logout(){
  const { signOut, setUser } = useContext(AuthContext)
  
  useEffect(() => {
    signOut()
  }, [signOut])
  
  return <div>Logging out...</div>
}