'use client'
import React, { useEffect, useRef, useState } from 'react'
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaYoutube
} from 'react-icons/fa6'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Footer.css'
import Link from 'next/link'
import Image from 'next/image'
import { blurPlaceholder } from '../../utils/blur-placeholder'


gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const footerRef = useRef(null)
  const [darkBackground, setDarkBackground] = useState(false)
  const [isReady, setIsReady] = useState(false)

  // Wait for layout paint to complete
  useEffect(() => {
    let rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsReady(true)
        ScrollTrigger.refresh()
      })
    })

    return () => {
      cancelAnimationFrame(rafId)
      ScrollTrigger.getAll().forEach(instance => instance.kill())
    }
  }, [])

  function CTAArea({ darkMode }) {
    const titleRef = useRef(null)
    const charRefs = useRef([])
    const animationRef = useRef(null)

    const addToCharRefs = el => {
      if (el && !charRefs.current.includes(el)) {
        charRefs.current.push(el)
      }
    }

    useEffect(() => {
      if (!isReady || !titleRef.current || charRefs.current.length === 0) return

      animationRef.current?.kill()

      gsap.set(charRefs.current, { color: 'gray' })

      animationRef.current = gsap.to(charRefs.current, {
        color: darkMode ? 'white' : 'black',
        stagger: {
          from: 'random',
          each: 0.05
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
          markers: false,
          invalidateOnRefresh: true
        }
      })

      return () => {
        animationRef.current?.kill()
      }
    }, [isReady, darkMode])

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

      // Initial setup
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
            color: 'yellow',
            duration: 0.3
          },
          '-=0.3'
        )

      let scrollTween

      const handleMouseEnter = () => {
        hoverTL.play().then(() => {
          // Start scrolling animation only after the hover animation completes
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
          // Reset position when mouse leaves
          gsap.set(scrollingText, { x: 0 })
        }
      }

      button.addEventListener('mouseenter', handleMouseEnter)
      button.addEventListener('mouseleave', handleMouseLeave)

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
        button.removeEventListener('mouseenter', handleMouseEnter)
        button.removeEventListener('mouseleave', handleMouseLeave)
        hoverTL.kill()
        if (scrollTween) scrollTween.kill()
      }
    }, [])

    const titleText = 'Bring Us In Early. Thank Us Later.'
    const words = titleText.split(' ')

    // Clear charRefs before render
    charRefs.current = []

    return (
      <section className='text-center px-5 mb-16 pt-[110px] md:pt-[170px] lg:pt-[200px] 2xl:pt-[250px]'>
        <div className='flex justify-center mb-[40px]'>
          {/* Title with character spans */}
          <h1
            ref={titleRef}
            className='text-center text-[35px] md:text-[40px] lg:text-[50px] xl:text-[55px]  2xl:text-[65px] md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-3xl font-urbanist font-black leading-[1.06] flex flex-wrap justify-center'
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className='whitespace-nowrap mr-2'>
                {word.split('').map((char, charIndex) => {
                  const globalIndex =
                    word.split('').slice(0, charIndex).join('').length +
                    wordIndex
                  return (
                    <span
                      key={`${wordIndex}-${charIndex}`}
                      ref={el => charRefs.current.push(el)}
                      className='inline-block text-gray-400'
                      style={{ letterSpacing: '-0.05em' }}
                    >
                      {char}
                    </span>
                  )
                })}
              </span>
            ))}
          </h1>
        </div>

        {/* button */}
        <div className='md:mt-2  flex justify-center'>
          <div className='relative lg:mt-8 md:mt-3 inline-block'>
            <Link
              ref={buttonRef}
              className='relative px-6 py-2 sm:px-8 sm:py-3 rounded-full text-black sm:text-lg bg-[#a8ff57] overflow-hidden inline-flex items-center justify-center group'
              href={'/contact'}
              style={{ opacity: 1 }}
            >
              {/* Background element */}
              <span
                ref={buttonBgRef}
                className='absolute inset-0 z-0 bg-black'
                style={{
                  transform: 'scaleX(0)',
                  transformOrigin: 'center center'
                }}
              />

              {/* Text container */}
              <span
                ref={buttonTextRef}
                className='relative z-10 text-[16px] md:text-2xl overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center'
                style={{ color: 'black' }} // Force text color
              >
                <span
                  ref={buttonStaticTextRef}
                  className='static-text'
                  style={{ opacity: 1 }}
                >
                  Let's Talk
                </span>
                <span
                  ref={buttonScrollingTextRef}
                  className='scrolling-text absolute left-0 text-black'
                  style={{ opacity: 0 }}
                >
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span key={i} className='inline-block mr-8'>
                      Let's Talk
                    </span>
                  ))}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // Background color scroll trigger
  useEffect(() => {
    if (!isReady || !footerRef.current) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: footerRef.current,
      start: 'top 90%',
      end: 'bottom top',
      onEnter: () => {
        gsap.to(document.body, {
          backgroundColor: '#111',
          color: '#ffffff',
          duration: 0.5
        })
        setDarkBackground(true)
      },
      onLeaveBack: () => {
        gsap.to(document.body, {
          backgroundColor: '',
          color: '',
          duration: 0.5
        })
        setDarkBackground(false)
      },
      markers: false
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [isReady])

  // Extra refresh after ready
  useEffect(() => {
    if (isReady) {
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    }
  }, [isReady])

  if (!isReady) return null

  return (
    <>
      <CTAArea darkMode={darkBackground} />
      <section
        ref={footerRef}
        className='edn__f__container transition-all  duration-500'
      >
        <div className=''>
          {/* second column */}
          <div className='edn__f__menu__parent'>
            <div>
              <div>
                <img
                  className='w-50 md:w-80 h-auto'
                  loading='lazy'
                  src='https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/logo/footer-logo.webp'
                  alt=''
                />
              </div>
              <p className='mt-[4vh] font-helvetica text-lg pr-[4vw] font-bold'>
                At Ethical Den, we turn your brand vision into captivating web,
                graphic, and video experiences that captivate prospective
                clients
              </p>
            </div>

            <div>
              <div>
                <Link
                  href='/our-works'
                  className=''
                >
                  <h3 className='edn__f__title font-helvetica m-0 p-0'>Our Works</h3>
                </Link>
              </div>

              <div>
                <Link href='/about-den'>
                  <h3 className='edn__f__title font-helvetica '>The Agency</h3>
                </Link>
              </div>
              <div>
                <Link href='/services'>
                  <h3 className='edn__f__title font-helvetica'>Services</h3>
                </Link>
              </div>
              <div>
                <Link href='/privacy-policy'>
                  <h3 className='edn__f__title font-helvetica'>
                    Privacy Policy
                  </h3>
                </Link>
              </div>
            </div>

            <div>
              <div>
                <div className='mb-5'>
                  <div>
                    <Link href='/contact' className='inline-block w-fit '>
                      <h3 className='edn__f__title font-helvetica '>
                        Let's Talk
                      </h3>
                    </Link>
                  </div>
                  <h3 className='text-xl md:text-[18px] lg:text-2xl xl:text-2xl font-bold mb-4 inline-block w-fit font-helvetica'>
                    connect@ethicalden.com
                  </h3>
                </div>


                {/* partners */}
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-2.5 xl:gap-5 h-full mt-[2vh] mb-10 lg:mb-0'>
                  {[
                    {
                      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/footer/google-ads.webp',
                      alt: 'Google Ads',
                    },
                    {
                      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/footer/shopify.webp',
                      alt: 'Shopify',
                    },
                    {
                      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/footer/partner.webp',
                      alt: 'Partner',
                    },
                    {
                      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/footer/meta.webp',
                      alt: 'Meta',
                    },
                    {
                      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/footer/iso.webp',
                      alt: 'ISO',
                    },
                    {
                      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/footer/amazon.webp',
                      alt: 'Amazon',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='relative w-full h-14 md:h-10 xl:h-12 bg-white rounded-md p-2 flex items-center justify-center '
                    >

                      <Image
                        src={item.src}
                        alt={item.alt}
                        placeholder='blur'
                        blurDataURL={blurPlaceholder}
                        className='object-contain rounded-md'
                        priority
                        loading="eager"
                        fill
                        sizes='(max-width: 768px) 100vw, 33vw'
                      />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* address and location */}
          <div className='xl:mt-16 md:mt-10 lg:flex items-center gap-6'>
            <p className='text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-helvetica whitespace-nowrap leading-tight mb-3 md:mb-4 md:mb-0'>
              SRI L P IT AND MEDIA
            </p>

            {/* vertical line */}
            <span className='hidden md:block border-l border-gray-500 self-stretch'></span>

            <p className='text-[16px] text-lg xl:text-[16px] 2xl:text-lg  font-bold font-helvetica leading-relaxed '>
              HOLDING NO 4/4E, CLUBTOWN HOUSING COMPLEX, VIP ROAD, TEGHARIA, <br />PO - KOLKATA AIRPORT SO, PS - ULTADANGA, DISTRICT - NORTH 24 PARGANAS
            </p>
          </div>


        </div>

        {/* socail icons */}
        <hr className='w-full border-gray-500 my-8' />
        <div className='md:flex justify-between'>
          <div className='flex gap-3 mt-4 lg:mt-10 flex-wrap'>
            <span className='edn__f___socail___icons '>
              <a
                target='_blank'
                href='https://www.linkedin.com/company/ethicalden/?originalSubdomain=in'
              >
                <FaLinkedin />
              </a>
            </span>
            <span className='edn__f___socail___icons'>
              <a target='_blank' href='https://www.facebook.com/ethicalden/'>
                <FaFacebook />
              </a>
            </span>
            <span className='edn__f___socail___icons'>
              <a href='https://www.behance.net/Realethicalden' target='_blank'>
                <FaBehance />
              </a>
            </span>
            <span className='edn__f___socail___icons'>
              <a href='https://www.instagram.com/ethical.den/' target='_blank'>
                <FaInstagram />
              </a>
            </span>
          </div>
          <p className='text-lg font-bold mt-5 lg:mt-10 font-helvetica '>
            © Copyright {new Date().getFullYear()} - SRI L P IT AND MEDIA
          </p>
        </div>
      </section>
    </>
  )
}

export default Footer
