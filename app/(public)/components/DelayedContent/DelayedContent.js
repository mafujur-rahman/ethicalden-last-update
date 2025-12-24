'use client'

import { useTransition } from "../Context/TransitionContext"



export default function DelayedContent({ children }) {
  const { isTransitioning } = useTransition()

  if (isTransitioning) return null // Hide page content

  return (
    <div className="fade-in-animation">
      {children}
    </div>
  )
}
