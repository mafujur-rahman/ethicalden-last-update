'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const transitionVideos = {
  '/about-den': '/video/transition-videos/transition-5.mp4',
  '/products': '/video/transition-videos/transition-5.mp4',
  '/services': '/video/transition-videos/transition-5.mp4',
  '/contact': '/video/transition-videos/transition-5.mp4',
}

export default function PageTransitionVideo() {
  const pathname = usePathname()
  const videoRef = useRef(null)
  const [showVideo, setShowVideo] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(transitionVideos.default)

  useEffect(() => {
    const handleRouteChange = () => {
      const matchedVideo = Object.entries(transitionVideos).find(([path]) =>
        pathname.startsWith(path) && path !== 'default'
      )?.[1] || transitionVideos.default

      setCurrentVideo(matchedVideo)
      setShowVideo(true)

      // Hide after video plays for 1.5 seconds (adjust to match transition)
      const timer = setTimeout(() => {
        setShowVideo(false)
      }, 1500)

      return () => clearTimeout(timer)
    }

    handleRouteChange()
  }, [pathname])

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(err => console.error('Playback failed', err))
    }
  }, [showVideo, currentVideo])

  if (!showVideo) return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      >
        <source src={currentVideo} type="video/mp4" />
      </video>
    </div>
  )
}
