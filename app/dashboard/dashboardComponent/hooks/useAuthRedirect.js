'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const useAuthRedirect = () => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      router.push('/sign-in')
    }
  }, [router])
}

export default useAuthRedirect
