'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const NewBanner = () => {
  const titleRef = useRef(null)
  const charRefs = useRef([])
  const statsRef = useRef(null)
  const numberRef = useRef(null)
  const textRef = useRef(null)

  const stats = [
    { number: '3 Days', label: 'Fastest full-stack Imagine.' },
    { number: '40+ ', label: 'Brands reimagined from scratch.' },
    { number: '87% ', label: 'Clients say we sharpen ideas.' }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!charRefs.current.length) return

    const title = 'Imagine. Design. Compile.'
    const digitalStartIndex = title.indexOf('Design.')
    const digitalEndIndex = digitalStartIndex + 'Design. '.length

    const scrollTl = gsap.fromTo(
      charRefs.current,
      { color: 'gray' },
      {
        color: i =>
          i >= digitalStartIndex && i < digitalEndIndex ? '#a8ff57' : 'black',
        stagger: { from: 'random', each: 0.05 },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none none',
          onEnter: () => {
            // After scroll animation ends, start infinite color animation on "Digital"
            const digitalChars = charRefs.current.slice(
              digitalStartIndex,
              digitalEndIndex
            )

            gsap.to(digitalChars, {
              color: '#09e5e5',
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: 'power1.inOut',
              delay: 3
            })
          }
        }
      }
    )
  }, [])

  // Cycle stats every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const tl = gsap.timeline()

      tl.to([numberRef.current, textRef.current], {
        y: 50,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentIndex(prev => (prev + 1) % stats.length)
        }
      })

      tl.fromTo(
        [numberRef.current, textRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out'
        }
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Button animation setup
  const buttonRef = useRef(null)
  const buttonTextRef = useRef(null)
  const buttonBgRef = useRef(null)
  const buttonStaticTextRef = useRef(null)
  const buttonScrollingTextRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    const textWrapper = buttonTextRef.current
    const bg = buttonBgRef.current
    const staticText = buttonStaticTextRef.current
    const scrollingText = buttonScrollingTextRef.current

    gsap.set(button, { opacity: 1, y: 0 })
    gsap.set(bg, {
      scaleX: 0,
      transformOrigin: 'center center',
      backgroundColor: '#09e5e5'
    })
    gsap.set(scrollingText, { opacity: 0, x: 0 })
    gsap.set(staticText, { opacity: 1 })

    const hoverTL = gsap.timeline({ paused: true })

    hoverTL
      .to(bg, {
        scaleX: 1,
        duration: 0.5,
        ease: 'power2.out'
      })
      .to(
        staticText,
        {
          opacity: 0,
          duration: 0.2
        },
        '-=0.2'
      )
      .to(scrollingText, {
        opacity: 1,
        duration: 0.2
      })
      .to(
        textWrapper,
        {
          color: 'black',
          duration: 0.3
        },
        '-=0.3'
      )

    let scrollTween

    const handleMouseEnter = () => {
      hoverTL.play().then(() => {
        if (!scrollTween) {
          const contentWidth = scrollingText.scrollWidth
          const buttonWidth = button.offsetWidth
          const duration = contentWidth / 50

          scrollTween = gsap.to(scrollingText, {
            x: `-=${contentWidth - buttonWidth}`,
            duration: duration,
            ease: 'linear',
            repeat: -1
          })
        } else {
          scrollTween.play()
        }
      })
    }

    const handleMouseLeave = () => {
      hoverTL.reverse()
      if (scrollTween) {
        scrollTween.pause()
        gsap.set(scrollingText, { x: 0 })
      }
    }

    button?.addEventListener('mouseenter', handleMouseEnter)
    button?.addEventListener('mouseleave', handleMouseLeave)

    gsap.from(button, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'back.out(1.7)',
      immediateRender: false,
      scrollTrigger: {
        trigger: button,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })

    return () => {
      button?.removeEventListener('mouseenter', handleMouseEnter)
      button?.removeEventListener('mouseleave', handleMouseLeave)
      hoverTL.kill()
      if (scrollTween) scrollTween.kill()
    }
  }, [])

  const titleText = 'Imagine. \nDesign.  Compile.'

  return (
    <section className='bg-white pt-[60px] md:pt-[160px] lg:pt-[150px] xl:pt-[150px] 2xl:pt-[200px] px-[20px]  md:px-10 lg:px-[50px]  xl:px-[80px] 2xl:px-[90px]'>
      <div className=''>
        <div className='mb-[60px] lg:mb-[10px]'>
          <h1
            ref={titleRef}
            className='text-[38px] md:text-[70px] lg:text-[85px] xl:text-[100px] 2xl:text-[130px] font-urbanist font-extrabold leading-[1.1]'
          >
            {titleText.split('').map((char, index) =>
              char === '\n' ? (
                <br key={index} />
              ) : (
                <span
                  key={index}
                  ref={el => (charRefs.current[index] = el)}
                  className={`inline-block text-gray-400 ${
                    char === ' ' ? 'w-2 lg:w-4' : ''
                  }`}
                  style={char !== ' ' ? { letterSpacing: '-0.05em' } : {}}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              )
            )}
          </h1>
        </div>

        <div className='xl:flex md:flex-row items-center justify-between gap-8 -mt-8 md:-mt-[20px] lg:mt-14 xl:mt-28'>
          {/* Animated Number & Label */}
          <div
            ref={statsRef}
            className='flex-1 text-center flex gap-5 md:gap-8 items-center overflow-hidden pb-[30px]'
          >
            <p className='text-sm md:text-[16px] lg:text-2xl font-bold text-white bg-black w-14 md:w-16 h-14 md:h-16 lg:w-24 lg:h-24  flex items-center justify-center rounded-full'>
              <span ref={numberRef}>{stats[currentIndex].number}</span>
            </p>
            <p
              ref={textRef}
              className='text-sm lg:text-[18px] xl:text-xl text-gray-600'
            >
              {stats[currentIndex].label}
            </p>
          </div>

          <div className='flex-1 md:flex gap-18 xl:gap-10 md:justify-between md:items-center '>
            <p className='text-[16px] md:text-[17px] lg:text-[19px] xl:text-[30px] text-black '>
              We Imagine bold brands and smart digital products that look great, work fast, and help startups grow.
            </p>
            <div className='pt-[15px]'>
              <Link
                ref={buttonRef}
                className='relative px-6 py-2 sm:px-8 sm:py-3 rounded-full border-none text-base sm:text-lg bg-[#a8ff57] overflow-hidden inline-flex items-center justify-center group'
                href= "https://www.behance.net/Realethicalden " target='_blank'
                style={{ opacity: 1 }}
              >
                <span ref={buttonBgRef} className='absolute inset-0 z-0' />
                <span
                  ref={buttonTextRef}
                  className='relative z-10 text-[16px] md:text-2xl text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center'
                >
                  <span
                    ref={buttonStaticTextRef}
                    className='static-text font-helvetica'
                  >
                    Our Work
                  </span>
                  <span
                    ref={buttonScrollingTextRef}
                    className='scrolling-text absolute left-0'
                  >
                    {Array.from({ length: 20 }).map((_, i) => (
                      <span
                        key={i}
                        className='inline-block mr-8 font-helvetica'
                      >
                        Our Work
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewBanner
