'use client'

import { useEffect, useState } from 'react'

const useAuthInfo = () => {
  const [token, setToken] = useState(null)
  const [userType, setUserType] = useState(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient) {
      const storedToken = localStorage.getItem('authToken')
      const storedType = localStorage.getItem('user_type')

      setToken(storedToken)
      setUserType(storedType)
    }
  }, [isClient])

  const isLoggedIn = !!token
  const isSuperAdmin = userType === 'SuperAdmin'

  return {
    token,
    userType,
    isLoggedIn,
    isSuperAdmin,
  }
}

export default useAuthInfo
