'use client'
import { useEffect, useRef, useState } from 'react'
import React from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from 'axios'
import Image from 'next/image'
import { blurPlaceholder } from '../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger)

const GalleryMain = () => {
  const sectionRef = useRef()
  const wrapperRef = useRef(null)
  const videoRef = useRef(null)
  const col1Ref = useRef(null)
  const col2Ref = useRef(null)
  const col4Ref = useRef(null)
  const col5Ref = useRef(null)
  const imgContainerRef1 = useRef(null)
  const imgContainerRef2 = useRef(null)


  // left Images for the slideshow
  const leftImages = [
    'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/gallery/gal-1.webp',
    'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/gallery/gal-2.webp',
    'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/gallery/gal-3.webp'
  ]

  // Animation for the left image slideshow
  useEffect(() => {
    if (!imgContainerRef1.current) return;

    const imgElements = imgContainerRef1.current.querySelectorAll('img');
    let currentIndex = 0;

    // Initialize all images except first
    gsap.set(imgElements, {
      opacity: 0,
      display: 'none'
    });

    // Show first image
    gsap.set(imgElements[0], {
      opacity: 1,
      display: 'block'
    });

    const animateImages = () => {
      const nextIndex = (currentIndex + 1) % leftImages.length;
      const currentImg = imgElements[currentIndex];
      const nextImg = imgElements[nextIndex];

      // Prepare next image
      gsap.set(nextImg, {
        opacity: 0,
        display: 'block'
      });

      // Create timeline with smoother easing
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
          duration: 1.5
        },
        onComplete: () => {
          // Hide current image after animation completes
          gsap.set(currentImg, { display: 'none' });
        }
      });

      // Crossfade animation
      tl.to(currentImg, {
        opacity: 0,
        duration: 1.5
      }, 0)
        .to(nextImg, {
          opacity: 1,
          duration: 1.5
        }, 0);

      currentIndex = nextIndex;
    };

    // Start the animation with delay
    const interval = setInterval(animateImages, 3000);

    return () => {
      clearInterval(interval);
      gsap.killTweensOf(imgElements);
    };
  }, [leftImages.length]);

  // right Images for the slideshow
  const RightImages = [
    'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/gallery/gal-4.webp',
    'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/gallery/gal-5.webp',
    'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/gallery/gal-6.webp'
  ]

  // Animation for the right image slideshow
  useEffect(() => {
    if (!imgContainerRef2.current) return;

    const imgElements = imgContainerRef2.current.querySelectorAll('img');
    let currentIndex = 0;

    // Initialize all images except first
    gsap.set(imgElements, {
      opacity: 0,
      display: 'none'
    });

    // Show first image
    gsap.set(imgElements[0], {
      opacity: 1,
      display: 'block'
    });

    const animateImages = () => {
      const nextIndex = (currentIndex + 1) % RightImages.length;
      const currentImg = imgElements[currentIndex];
      const nextImg = imgElements[nextIndex];

      // Prepare next image
      gsap.set(nextImg, {
        opacity: 0,
        display: 'block'
      });

      // Create timeline with smoother easing
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
          duration: 1.5
        },
        onComplete: () => {
          // Hide current image after animation completes
          gsap.set(currentImg, { display: 'none' });
        }
      });

      // Crossfade animation
      tl.to(currentImg, {
        opacity: 0,
        duration: 1.5
      }, 0)
        .to(nextImg, {
          opacity: 1,
          duration: 1.5
        }, 0);

      currentIndex = nextIndex;
    };

    // Start the animation with delay
    const interval = setInterval(animateImages, 3000);

    return () => {
      clearInterval(interval);
      gsap.killTweensOf(imgElements);
    };
  }, [RightImages.length]);

  // Rest of your component remains the same...
  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    const wrapper = wrapperRef.current

    gsap.fromTo(
      video,
      { y: 0 },
      {
        y: 900,
        scrollTrigger: {
          trigger: section,
          start: 'bottom bottom',
          end: '+=100%',
          scrub: 1,
          markers: false
        }
      }
    )

    if (wrapper && video) {
      gsap.set(video, {
        width: '17.5vw',
        height: '48vh',
        position: 'absolute',
        left: '50%',
        xPercent: -50,
        transformOrigin: 'center center'
      })

      let mm = gsap.matchMedia()

      mm.add('(min-width: 1200px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: '+=130% bottom',
            end: '+=110%',
            scrub: 1,
            pin: true,
            pinSpacing: true,
            markers: false
          },
          defaults: {
            ease: 'none'
          }
        })

        tl.to(
          video,
          {
            y: 100,
            width: '80vw',
            height: '80vh',
            duration: 1,
            ease: 'none'
          },
          0
        )

        // Column scroll effects
        gsap.fromTo(
          col2Ref.current,
          { y: 0 },
          {
            y: 60,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          }
        )

        gsap.fromTo(
          col5Ref.current,
          { y: 0 },
          {
            y: -100,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          }
        )

        gsap.fromTo(
          col4Ref.current,
          { y: 0 },
          {
            y: 150,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          }
        )
        gsap.fromTo(
          col1Ref.current,
          { y: 0 },
          {
            y: 30,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          }
        )
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // card time show
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Convert to MST (UTC-7 without daylight saving)
  const mstTime = new Date(time.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const hours = mstTime.getHours();
  const minutes = mstTime.getMinutes();
  const formattedHours = hours % 12 || 12;
  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;


  // weeks lines of code
  const [codeLines, setCodeLines] = useState(14372);
  useEffect(() => {
    const storedCount = localStorage.getItem('codeLines');
    const storedTime = localStorage.getItem('lastUpdate');

    const now = new Date().getTime();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;

    let count = storedCount ? parseInt(storedCount, 10) : 14372;

    if (!storedTime || now - parseInt(storedTime, 10) > oneWeek) {
      const increment = Math.floor(Math.random() * (800 - 500 + 1)) + 500;
      count += increment;
      localStorage.setItem('codeLines', count.toString());
      localStorage.setItem('lastUpdate', now.toString());
    }

    setCodeLines(count);
  }, []);


  // weather 
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  // open weather map api key
  const API_KEY = 'f76b01bbff55b25a891cd38d5f081834';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          );
          setTemperature(Math.round(res.data.main.temp));
          setDescription(res.data.weather[0].description);
        } catch (error) {
          console.error('Weather fetch error:', error);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error('Location error:', error);
        setLoading(false);
      }
    );
  }, []);


  // image loading spinner
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <section
        ref={sectionRef}
        className='min-h-screen pt-[100px] md:pt-[150px] lg:pt-[150px] 2xl:pt-[160px] px-[20px] md:px-10 lg:px-[50px] xl:px-[80px] 2xl:px-[90px] relative'
      >
        <div className='flex justify-center items-center'>
          <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full h-full relative'>
            {/* First Column */}
            <div ref={col1Ref} className='space-y-6'>
              <div className='bg-[#09e5e5] text-black lg:mt-22 2xl:mt-12 min-h-[35vh] md:h-[50vh] lg:h-[38vh] xl:h-[44vh] p-4 md:p-6 rounded-2xl w-full'>
                <p className='text-base md:text-xl'>
                  01 / <span className='text-gray-500'>06</span>
                </p>
                <h2 className='text-xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-7xl font-bold pt-12 md:pt-24 lg:pt-8 xl:pt-20 2xl:pt-28 pb-4 md:pb-5'>
                  {codeLines.toLocaleString()}+
                </h2>
                <p className='text-sm md:text-base'>
                  lines of code written this week.
                </p>
                <p className='text-sm mt-[1vh] md:mt-[5vh] italic'>
                  Probably 3 bugs. Maybe 4. We're honest like that.
                </p>
              </div>

              <div
                ref={imgContainerRef1}
                className="relative rounded-2xl min-h-[35vh] md:h-[50vh] lg:h-[38vh] xl:h-[44vh] w-full overflow-hidden"
              >
                {leftImages.map((src, index) => (
                  <div key={index}>

                    {/* Image with blur placeholder */}
                    <Image
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className='object-cover rounded-2xl '
                      placeholder="blur"
                      priority
                      loading="eager"
                      blurDataURL={blurPlaceholder}
                    />
                  </div>
                ))}
              </div>


            </div>

            {/* Second Column (animated up) */}
            <div
              ref={col2Ref}
              className='space-y-6 flex flex-col mt-30 lg:mt-30 xl:mt-40'
            >
              <div className='bg-[#111] text-white min-h-[35vh] p-4 md:p-6 rounded-2xl w-full md:h-[50vh] lg:h-[38vh] xl:h-[44vh]'>
                <p className='text-base md:text-xl'>
                  02 / <span className='text-gray-500'>06</span>
                </p>
                <h2 className='text-5xl md:text-7xl lg:text-5xl xl:text-7xl 2xl:text-9xl font-bold pt-12 md:pt-24 lg:pt-8 xl:pt-20 2xl:pt-28 pb-2 md:pb-5'>
                  17 +
                </h2>
                <p className='text-sm md:text-base'>
                  clients used the word "wizard" in feedback last month.
                </p>
              </div>
              <div className='bg-[#a8ff57] text-black min-h-[35vh] md:h-[50vh] p-4 md:p-6 rounded-2xl w-full lg:h-[38vh] xl:h-[44vh]'>
                <p className='text-base md:text-xl'>
                  DST / <span className='text-gray-500'>DEN STANDARD TIME</span>
                </p>
                <h2 className='text-4xl md:text-6xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-extrabold pt-12 md:pt-24 lg:pt-8 xl:pt-28 pb-4 md:pb-5'>
                  {formattedHours}:{formattedMinutes}{' '}
                  <span className='text-sm'>{amPm}</span>
                </h2>
                <p className='text-sm md:text-base'>Sleep mode initiated.</p>
              </div>
            </div>

            {/* Third Column (video) */}
            <div
              ref={wrapperRef}
              className='hidden xl:flex tp-hero-bottom-img-wrap space-y-6 flex-col justify-end min-h-screen mx-auto w-full relative'
            >
              <div
                ref={videoRef}
                className='tp-hero-bottom-img rounded-2xl overflow-hidden'
                style={{
                  margin: '0 auto',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  className='w-full h-full rounded-2xl object-cover'
                >
                  <source
                    src='https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/gallery/gallery-video.webm'
                    type='video/mp4'
                  />
                </video>
              </div>
            </div>

            {/* Fourth Column (animated down) */}
            <div
              ref={col4Ref}
              className='space-y-6 -mt-28 md:-mt-28 lg:mt-30 2xl:mt-20'
            >
              <div className='bg-[#111] text-white min-h-[35vh] md:h-[50vh] lg:h-[38vh] xl:h-[44vh] p-4 md:p-6 rounded-2xl w-full'>
                <p className='text-base md:text-xl'>
                  04 / <span className='text-gray-500'>06</span>
                </p>
                <h3 className='text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-7xl font-semibold pt-12 md:pt-24 lg:pt-8 xl:pt-20 2xl:pt-28 pb-4 md:pb-5'>
                  3 cities
                </h3>
                <p className='text-sm md:text-base'>
                  Kolkata crafts. Bangalore codes. Dhaka fuels us.
                </p>
              </div>
              <div className='bg-[#a8ff57] text-black min-h-[35vh] md:h-[50vh] lg:h-[38vh] xl:h-[44vh] p-4 md:p-6 rounded-2xl w-full'>
                <p className='text-base md:text-xl'>HOT OR NOT</p>
                <h2
                  className={`${loading
                    ? 'text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl'
                    : 'text-5xl md:text-7xl lg:text-5xl xl:text-7xl 2xl:text-9xl'
                    } font-bold pt-12 md:pt-24 lg:pt-8 xl:pt-20 2xl:pt-28 pb-4 md:pb-5`}
                >
                  {loading ? 'Loading...' : `${temperature}°`}
                </h2>

                <p className='text-sm md:text-base capitalize'>
                  {loading ? 'Getting weather...' : description}
                </p>
              </div>
            </div>

            {/* Fifth Column (animated up) */}
            <div
              ref={col5Ref}
              className='space-y-6 flex flex-col lg:mt-20 xl:mt-40'
            >
              <div
                ref={imgContainerRef2}
                className='relative rounded-2xl min-h-[35vh] md:h-[50vh] lg:h-[38vh] xl:h-[44vh] w-full overflow-hidden '
              >
                {RightImages.map((src, index) => (
                  <div key={index}>

                    {/* Image with blur placeholder */}
                    <Image
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className='object-cover rounded-2xl'
                      priority
                      loading="eager"
                      placeholder="blur"
                      blurDataURL={blurPlaceholder}
                    />
                  </div>
                ))}
              </div>



              <div className='bg-[#09e5e5] text-black min-h-[35vh] md:h-[50vh] lg:h-[38vh] xl:h-[44vh] p-4 md:p-6 rounded-2xl w-full'>
                <p className='text-base md:text-xl'>
                  06 / <span className='text-gray-500'>06</span>
                </p>
                <h3 className='text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold pt-12 md:pt-24 lg:pt-8 xl:pt-20 2xl:pt-28 pb-4 md:pb-5'>
                  19 cups brewed
                </h3>
                <p className='text-sm md:text-base'>
                  Productivity is measured in espresso shots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GalleryMain