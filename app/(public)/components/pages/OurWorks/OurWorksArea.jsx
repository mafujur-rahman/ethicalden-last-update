'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

function OurWorksArea() {
  gsap.registerPlugin(ScrollTrigger)
  const containerRef = useRef(null)
  const worksSectionRef = useRef(null)
  const projectImagesRef = useRef([])
  const projectContentsRef = useRef([])
  const marqueeRef = useRef(null)
  const marqueeContentRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "Mr Cafe",
      category: "Restaurant",
      description: "A modern cafe experience with digital ordering",
      media: {
        type: "image",
        src: "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/our-works/mrCafe-w.jpg?updatedAt=1750611893584",
        alt: "Mr Cafe"
      },
      link: "/project-mrCafe",
      color: "#FF9F1C"
    },
    {
      id: 2,
      title: "Marzii",
      category: "E-commerce / Branding",
      description: "Smart Fashion Interface",
      media: {
        type: "image",
        src: "/images/marzi-c-w.jpg",
        alt: "Marzii"
      },
      link: "/project-marzii",
      color: "#2EC4B6"
    },
    {
      id: 3,
      title: "E-laj",
      category: "Medical Healthcare",
      description: "Digital healthcare appointment and consultation platform",
      media: {
        type: "image",
        src: "/images/e-laj-c-w.jpg",
        alt: "E-laj"
      },
      link: "/project-e-laj",
      color: "#E71D36"
    },
    {
      id: 4,
      title: "Mak Community",
      category: "Site / Branding",
      description: "A vibrant community platform for creators and innovators",
      media: {
        type: "image",
        src: "/images/mak-c-w.jpg",
        alt: "Mak Community"
      },
      link: "/project-mak-community",
      color: "#F6AE2D"
    },
    {
      id: 5,
      title: "Agarwal Tibrewal Co",
      category: "Site / Branding",
      description: "Professional corporate website for a consultancy firm",
      media: {
        type: "image",
        src: "/images/agarwal-w-c.jpg",
        alt: "Agarwal Tibrewal Co"
      },
      link: "/project-agarwal-tibrewal",
      color: "#3D348B"
    },
    {
      id: 6,
      title: "Emopract",
      category: "UI/UX / Site",
      description: "A mental wellness support platform with modern UI/UX",
      media: {
        type: "image",
        src: "/images/emopract-final-logoaaa.jpg",
        alt: "Emopract"
      },
      link: "/project-emopract",
      color: "#FF6B6B"
    },
    {
      id: 7,
      title: "Sandeep Autolines",
      category: "Marketing / Branding",
      description: "Automotive service platform with strong branding presence",
      media: {
        type: "image",
        src: "/images/sandeep-c-w.jpg",
        alt: "Sandeep Autolines"
      },
      link: "/project-sandeep-autolines",
      color: "#4ECDC4"
    },
    {
      id: 8,
      title: "Laljhal",
      category: "UI/UX / Site",
      description: "Creative portfolio site for visual design and experiences",
      media: {
        type: "image",
        src: "/images/lal-jhal-c-w.jpg",
        alt: "Laljhal"
      },
      link: "/project-laljhal",
      color: "#1A535C"
    },
    {
      id: 9,
      title: "massArt",
      category: "UI/UX / Site",
      description: "Art showcase platform with sleek and minimal design",
      media: {
        type: "image",
        src: "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/massart.png?updatedAt=1749702878941",
        alt: "massArt"
      },
      link: "/project-massArt",
      color: "#FF4D6D"
    }
  ]

  useEffect(() => {
    // Infinite marquee setup
    const marqueeContent = marqueeContentRef.current
    marqueeContent.innerHTML = 'Our Works • '.repeat(20)

    gsap.to(marqueeContent, {
      xPercent: -100,
      repeat: -1,
      duration: 30,
      ease: "none"
    })

    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
      // Desktop animations
      setupDesktopAnimations()
    })

    mm.add("(max-width: 767px)", () => {
      // Mobile animations
      setupMobileAnimations()
    })

    return () => mm.revert()
  }, [])

  const setupDesktopAnimations = () => {
    // Initial setup - first image centered in front of text
    gsap.set(projectImagesRef.current[0], {
      width: "30vw",
      height: "35vh",
      borderRadius: "1rem",
      position: "absolute",
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      zIndex: 20 
    })

    // Marquee text positioned exactly behind first image
    gsap.set(marqueeRef.current, {
      opacity: 0.4,
      position: "absolute",
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      zIndex: 10,
      marginTop: "2rem" 
    })

    // Other projects start below viewport with increasing z-index
    for (let i = 1; i < projects.length; i++) {
      gsap.set(projectImagesRef.current[i], {
        opacity: 0,
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "100%",
        left: 0,
        zIndex: 20 + i 
      })
    }

    // Content initially hidden
    gsap.set(projectContentsRef.current, {
      opacity: 0,
      y: 20,
      pointerEvents: 'none'
    })

    // Create master timeline with smooth sequencing
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: worksSectionRef.current,
        start: "top top",
        end: `+=${projects.length * 100}%`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    })

    // First project expansion animation
    masterTimeline.to(projectImagesRef.current[0], {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      top: 0,
      left: 0,
      x: 0,
      y: 0,
      duration: 1.5,
      ease: "power3.inOut"
    }, 0)

    // First project content reveal
    masterTimeline.to(projectContentsRef.current[0], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      pointerEvents: 'auto'
    }, 0.7)

    // Marquee fade
    masterTimeline.to(marqueeRef.current, {
      opacity: 0.15,
      duration: 0.8
    }, 0.5)

    // Subsequent projects animation with improved timing
    projects.forEach((project, index) => {
      if (index === 0) return

      const prevImage = projectImagesRef.current[index - 1]
      const currentImage = projectImagesRef.current[index]
      const currentContent = projectContentsRef.current[index]
      const position = index * 1.2 // Adjusted spacing between projects

      // Bring in new project with smooth ease
      masterTimeline.to(currentImage, {
        top: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut"
      }, position)

      // Shrink previous project with parallax effect
      masterTimeline.to(prevImage, {
        scale: 0.85,
        opacity: 0.7,
        y: "5%",
        duration: 1.2,
        ease: "power2.inOut"
      }, position)

      // Hide previous content
      masterTimeline.to(projectContentsRef.current[index - 1], {
        opacity: 0,
        y: 30,
        duration: 0.6,
        pointerEvents: 'none'
      }, position)

      // Reveal new content with nice bounce
      masterTimeline.to(currentContent, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "back.out(1.7)",
        pointerEvents: 'auto'
      }, position + 0.4)
    })
  }

  const setupMobileAnimations = () => {
    // Set mobile-specific height (shorter than desktop)
    const mobileImageHeight = "60vh";
    
    // Reset all project images to mobile-friendly layout
    projectImagesRef.current.forEach((image, index) => {
      gsap.set(image, {
        width: "100vw",
        height: mobileImageHeight,
        position: "fixed",
        top: index === 0 ? 0 : "100%",
        left: 0,
        zIndex: 20 + index,
        opacity: index === 0 ? 1 : 0,
        borderRadius: 0
      })
    })

    // Marquee styling for mobile
    gsap.set(marqueeRef.current, {
      opacity: 0.2,
      position: "fixed",
      top: "60%", // Adjusted to account for shorter images
      left: 0,
      zIndex: 10,
      width: "100%"
    })

    // Content styling for mobile - positioned lower to account for shorter images
    gsap.set(projectContentsRef.current, {
      opacity: 0,
      y: 20,
      pointerEvents: 'none',
      top: `calc(${mobileImageHeight} - 20px)`,
      position: 'fixed'
    })

    // Show first content immediately on mobile
    gsap.to(projectContentsRef.current[0], {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
      duration: 0.5
    })

    // Create simplified mobile timeline
    const mobileTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: worksSectionRef.current,
        start: "top top",
        end: `+=${projects.length * 100}%`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    })

    // Mobile project transitions
    projects.forEach((project, index) => {
      if (index === 0) return

      const prevImage = projectImagesRef.current[index - 1]
      const currentImage = projectImagesRef.current[index]
      const currentContent = projectContentsRef.current[index]
      const position = index * 1.0 // Closer spacing for mobile

      // Bring in new project
      mobileTimeline.to(currentImage, {
        top: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power2.inOut"
      }, position)

      // Fade out previous project
      mobileTimeline.to(prevImage, {
        opacity: 0,
        duration: 0.8
      }, position)

      // Hide previous content
      mobileTimeline.to(projectContentsRef.current[index - 1], {
        opacity: 0,
        y: 20,
        duration: 0.4,
        pointerEvents: 'none'
      }, position)

      // Reveal new content
      mobileTimeline.to(currentContent, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        pointerEvents: 'auto'
      }, position + 0.3)
    })
  }

  // Add image to ref array
  const addImageToRefs = (el, index) => {
    projectImagesRef.current[index] = el
  }

  // Add content to ref array
  const addContentToRefs = (el, index) => {
    projectContentsRef.current[index] = el
  }

  // Button animation setup
  const buttonRefs = useRef([])

  useEffect(() => {
    buttonRefs.current.forEach((buttonRef, index) => {
      if (!buttonRef) return

      const button = buttonRef
      const textWrapper = button.querySelector('.button-text-wrapper')
      const bg = button.querySelector('.button-bg')
      const staticText = button.querySelector('.static-text')
      const scrollingText = button.querySelector('.scrolling-text')

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

      button.addEventListener('mouseenter', handleMouseEnter)
      button.addEventListener('mouseleave', handleMouseLeave)

      // Touch events for mobile
      const handleTouchStart = () => {
        handleMouseEnter()
      }

      const handleTouchEnd = () => {
        handleMouseLeave()
      }

      button.addEventListener('touchstart', handleTouchStart)
      button.addEventListener('touchend', handleTouchEnd)

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
        button.removeEventListener('touchstart', handleTouchStart)
        button.removeEventListener('touchend', handleTouchEnd)
        hoverTL.kill()
        if (scrollTween) scrollTween.kill()
      }
    })
  }, [])

  const addButtonToRefs = (el, index) => {
    buttonRefs.current[index] = el
  }

  // title animation
  const titleRef = useRef(null);
  const charRefs = useRef([]);

  // Title animation
  useEffect(() => {
    if (!charRefs.current.length) return;

    gsap.fromTo(charRefs.current,
      { color: 'gray' },
      {
        color: '#09e5e5',
        stagger: {
          from: 'random',
          each: 0.05,
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none none",
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-[300vh] bg-[#111] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative z-10">
        <div className="text-center px-6 relative">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-urbanist font-extrabold pb-5 leading-[1.06]"
          >
            {"Explore Our Works".split(" ").map((word, wi) => (
              <span
                key={wi}
                className="inline-block whitespace-nowrap mr-2 md:mr-3 lg:mr-4 xl:mr-5"
              >
                {word.split("").map((char, ci) => (
                  <span
                    key={ci}
                    ref={(el) => (charRefs.current[wi * 100 + ci] = el)}
                    className="inline-block"
                    style={{ letterSpacing: "-0.05em" }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          <p className="text-lg md:text-xl opacity-80 mb-8">
            Scroll to view featured projects
          </p>

          {/* Scroll down icon with animation */}
          <div className="animate-bounce w-6 h-6 mx-auto mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Pinned Works Section */}
      <section
        ref={worksSectionRef}
        className="h-screen w-full relative"
      >
        {/* Infinite Marquee Text */}
        <div
          ref={marqueeRef}
          className="absolute w-full overflow-hidden py-4 z-10 pointer-events-none hidden md:block"
        >
          <div
            ref={marqueeContentRef}
            className="text-[8vw] md:text-[12vw] font-bold whitespace-nowrap text-white opacity-40"
          />
        </div>

        {/* Project Images and Contents */}
        {projects.map((project, index) => (
          <React.Fragment key={project.id}>
            {/* Project Image */}
            <div
              ref={el => addImageToRefs(el, index)}
              className="overflow-hidden bg-gray-900 origin-center"
              style={index === 0 ? {
                width: '80vw',
                height: '40vh',
                borderRadius: '1rem'
              } : {}}
            >
              {project.media.type === 'image' ? (
                <img
                  src={project.media.src}
                  alt={project.media.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={project.media.src}
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Project Content - for mobile */}
            <div
              ref={el => addContentToRefs(el, index)}
              className="absolute z-30 bottom-10 md:bottom-50 left-0 right-0 text-center md:text-left px-4 md:px-10 lg:px-14 xl:px-20 mt-20 md:mt-0"
              style={{
                top: 'unset',
                bottom: '10%'
              }}
            >
              <span className="text-xs md:text-sm uppercase tracking-wider text-white md:text-gray-800 opacity-80">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] mt-2">
                {project.title}
              </h2>
              <p className="text-sm md:text-lg lg:text-xl mt-2 md:mt-4 max-w-md md:max-w-2xl text-center md:text-left text-white md:text-gray-800 ">
                {project.description}
              </p>
              <Link
                ref={el => addButtonToRefs(el, index)}
                className='relative mt-3 md:mt-5 px-4 py-1 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full border-none text-sm sm:text-base md:text-lg bg-[#a8ff57] overflow-hidden inline-flex items-center justify-center group'
                href={project.link}
                style={{ opacity: 1 }}
              >
                <span className='button-bg absolute inset-0 z-0' />
                <span
                  className='button-text-wrapper relative z-10 text-sm md:text-base lg:text-2xl text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center'
                >
                  <span
                    className='static-text font-helvetica'
                  >
                    View Work
                  </span>
                  <span
                    className='scrolling-text absolute left-0'
                  >
                    {Array.from({ length: 20 }).map((_, i) => (
                      <span
                        key={i}
                        className='inline-block mr-4 md:mr-8 font-helvetica'
                      >
                        View Work
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            </div>
          </React.Fragment>
        ))}
      </section>
    </div>
  )
}

export default OurWorksArea