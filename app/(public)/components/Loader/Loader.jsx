'use client'

import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

const Loader = ({ className = '' }) => {
  const [randomText, setRandomText] = useState(null)

  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  const texts = [
    "Let's build something great.",
    'Innovation starts today.',
    'Deliver with purpose.',
    'Design. Code. Repeat.',
    'Pushing boundaries forward.',
    'Execute with excellence.',
    'Modern problems, smart solutions.',
    'Crafting clean experiences.',
    'Stay sharp. Stay efficient.',
    'Where ideas meet execution.'
  ]

  // random text 
  useEffect(() => {
    const index = Math.floor(Math.random() * texts.length)
    setRandomText(texts[index])
  }, [])

  // Animate after text is available
  useEffect(() => {
    if (!randomText) return
    const animation = gsap.fromTo(
      '.char',
      { color: '#808080' },
      {
        color: 'black',
        delay: 0,
        stagger: {
          from: 'start',
          amount: 2
        },
        ease: 'power2.out'
      }
    )
    return () => animation.kill()
  }, [randomText])

  if (!randomText) return null 

  const words = [`${currentDay}.`, ...randomText.split(' ')]

  return (
    <section className='h-[100vh] w-full bg-[#EBECE7] fixed top-0 flex justify-center items-center px-10 md:px-12 lg:px-16 xl:px-20 z-50'>
      <div
        className={`flex flex-wrap gap-2 md:gap-3 text-gray-400 text-[38px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[90px] font-urbanist font-black leading-[1.06] py-8 md:py-30 ${className}`}
      >
        {words.map((word, index) => (
          <div className='word flex mr-2' key={`word-${index}`}>
            {word.split('').map((char, i) => (
              <span
                className='char'
                key={`char-${index}-${i}`}
                style={{ letterSpacing: '-0.05em' }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Loader
