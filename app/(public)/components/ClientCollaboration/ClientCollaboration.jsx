'use client'
import React, { useEffect, useRef } from 'react'
import ClientsLogo from './ClientsLogo'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ClientCollaboration() {
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
        color: 'black',
        stagger: {
          from: 'random',
          each: 0.03,
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
  }, [])

  // Split title into words and characters
  const titleText = "Great ideas deserve great execution. These folks agreed."
  const words = titleText.split(" ")

  return (
    <section className='  px-5 pt-[100px] md:pt-[150px] lg:pt-[150px] 2xl:pt-[160px] '>
      <div className='flex justify-center mb-[30px] lg:mb-[50px] xl:mb-[50px] 2xl:[60px]'>
        {/* Title with character spans */}
        <h1
          ref={titleRef}
          className="text-center text-[35px] md:text-[40px] lg:text-[50px] xl:text-[55px] 2xl:text-[65px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-3xl font-urbanist font-black leading-[1.06] flex flex-wrap justify-center"
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="whitespace-nowrap mr-2">
              {word.split("").map((char, charIndex) => {
                const globalIndex = word.split("").slice(0, charIndex).join("").length + wordIndex
                return (
                  <span
                    key={`${wordIndex}-${charIndex}`}
                    ref={el => charRefs.current.push(el)}
                    className="inline-block text-gray-400"
                    style={{ letterSpacing: "-0.05em" }}
                  >
                    {char}
                  </span>
                )
              })}
            </span>
          ))}
        </h1>

      </div>


      {/* clients logos */}
      <div>
        <ClientsLogo />
      </div>
    </section>
  )
}

export default ClientCollaboration
