'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CTAArea({ darkBackground = false }) {
  const titleRef = useRef(null)
  const charRefs = useRef([])
  charRefs.current = []

  const addToCharRefs = (el) => {
    if (el && !charRefs.current.includes(el)) {
      charRefs.current.push(el)
    }
  }

  useEffect(() => {
    if (!charRefs.current.length) return

    gsap.fromTo(
      charRefs.current,
      { color: 'gray' },
      {
        color: darkBackground ? 'white' : 'black',
        stagger: {
          from: 'random',
          each: 0.05,
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [darkBackground])

  const titleLines = [
    "Up for an adventure?",
    "Let’s kickstart your next project."
  ]

  return (
    <section className={`text-center my-[20vh] ${darkBackground ? 'bg-black' : ''}`}>
      <h2
        ref={titleRef}
        className={`text-3xl  md:text-6xl font-bold mb-[5vh] max-w-4xl mx-auto leading-snug px-4   ${darkBackground ? 'text-white font-rota ' : 'text-black'}`}
      >
        {titleLines.map((line, lineIndex) => (
          <div key={lineIndex} className='block'>
            {line.split('').map((char, charIndex) => (
              <span key={charIndex} ref={addToCharRefs}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        ))}
      </h2>

      <button className='text-base font-semibold py-4 px-10 rounded-full bg-yellow-300'>
        Let's Talk
      </button>
    </section>
  )
}

export default CTAArea

