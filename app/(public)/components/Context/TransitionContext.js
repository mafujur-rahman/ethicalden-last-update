// app/context/TransitionContext.js
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const TransitionContext = createContext()

export function TransitionProvider({ children }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    // Start transition on path change
    setIsTransitioning(true)

    const timeout = setTimeout(() => {
      setIsTransitioning(false)
    }, 1600) // ✅ match your video duration (in ms)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <TransitionContext.Provider value={{ isTransitioning }}>
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  return useContext(TransitionContext)
}
