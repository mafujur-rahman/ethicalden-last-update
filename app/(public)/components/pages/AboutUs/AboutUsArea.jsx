'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../../utils/blur-placeholder';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const AboutUsArea = () => {
  const titleRef = useRef(null);
  const charRefs = useRef([]);


  useEffect(() => {
    // Animate character-by-character title
    if (!charRefs.current.length) return;

    gsap.fromTo(
      charRefs.current,
      { color: 'black' },
      {
        color: 'white',
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
    );
  }, []);



  useEffect(() => {
    // Background color change logic
    const bgOverlay = document.createElement('div');
    bgOverlay.style.position = 'fixed';
    bgOverlay.style.top = '0';
    bgOverlay.style.left = '0';
    bgOverlay.style.width = '100vw';
    bgOverlay.style.height = '100vh';
    bgOverlay.style.backgroundColor = '#06171D';
    bgOverlay.style.zIndex = '-1';
    bgOverlay.style.opacity = '0';
    bgOverlay.style.pointerEvents = 'none';
    document.body.appendChild(bgOverlay);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.bg-change-anim',
        start: 'top 60%',
        end: 'top+=30%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(bgOverlay, {
      opacity: 1,
      ease: 'none',
    }).to(
      '.bg-change-anim',
      {
        backgroundColor: '#111',
        ease: 'none',
      },
      0
    );

    ScrollTrigger.create({
      trigger: '.bg-change-anim',
      start: 'bottom bottom',
      end: 'bottom+=1 bottom',
      onEnterBack: () => {
        gsap.to(bgOverlay, { opacity: 1, backgroundColor: '#111' });
        gsap.to('.bg-change-anim', { backgroundColor: '#111' });
      },
      onLeave: () => {
        gsap.to(bgOverlay, { opacity: 0, backgroundColor: 'white' });
        gsap.to('.bg-change-anim', { backgroundColor: 'white' });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
      bgOverlay.remove();
    };
  }, []);

  // paragraph text animation
  const wordRefs = useRef([]);
  wordRefs.current = [];
  const splitWords = (text, pIndex) => {
    return text.split(' ').map((word, i) => (
      <span
        key={`${pIndex}-${i}`}
        ref={(el) => el && wordRefs.current.push(el)}
        className='inline-block mr-2'
      >
        {word}
      </span>
    ));
  };

  useEffect(() => {
    wordRefs.current.forEach((wordEl) => {
      gsap.fromTo(
        wordEl,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: wordEl,
            start: 'top 95%',
            end: 'top 75%',
            scrub: true,
          },
        }
      );
    });
  }, []);



  // Button animation setup
  const buttonRef = useRef(null);
  const buttonTextRef = useRef(null);
  const buttonBgRef = useRef(null);
  const buttonStaticTextRef = useRef(null);
  const buttonScrollingTextRef = useRef(null);


  useEffect(() => {
    const button = buttonRef.current;
    const textWrapper = buttonTextRef.current;
    const bg = buttonBgRef.current;
    const staticText = buttonStaticTextRef.current;
    const scrollingText = buttonScrollingTextRef.current;

    // Initial setup
    gsap.set(button, { opacity: 1, y: 0 });
    gsap.set(bg, {
      scaleX: 0,
      transformOrigin: "center center",
      backgroundColor: "#09e5e5"
    });
    gsap.set(scrollingText, { opacity: 0, x: 0 });
    gsap.set(staticText, { opacity: 1 });

    const hoverTL = gsap.timeline({ paused: true });

    hoverTL
      .to(bg, {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.out"
      })
      .to(staticText, {
        opacity: 0,
        duration: 0.2
      }, "-=0.2")
      .to(scrollingText, {
        opacity: 1,
        duration: 0.2
      })
      .to(textWrapper, {
        color: "black",
        duration: 0.3
      }, "-=0.3");

    let scrollTween;

    const handleMouseEnter = () => {
      hoverTL.play().then(() => {
        // Start scrolling animation only after the hover animation completes
        if (!scrollTween) {
          const contentWidth = scrollingText.scrollWidth;
          const buttonWidth = button.offsetWidth;
          const duration = contentWidth / 50; // Adjust speed here (lower number = faster)

          scrollTween = gsap.to(scrollingText, {
            x: `-=${contentWidth - buttonWidth}`,
            duration: duration,
            ease: "linear",
            repeat: -1
          });
        } else {
          scrollTween.play();
        }
      });
    };

    const handleMouseLeave = () => {
      hoverTL.reverse();
      if (scrollTween) {
        scrollTween.pause();
        // Reset position when mouse leaves
        gsap.set(scrollingText, { x: 0 });
      }
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    gsap.from(button, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "back.out(1.7)",
      immediateRender: false,
      scrollTrigger: {
        trigger: button,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      hoverTL.kill();
      if (scrollTween) scrollTween.kill();
    };
  }, []);



  const titleText = 'We’re Here __NEWLINE__ Because __NEWLINE__ We Love This.   ';


  return (
    <div className='bg-change-anim  md:pt-[10px] lg:pt-[60px] xl:pt-[80px] 2xl:pt-[160px] pb-25  flex items-center'>
      <div className='mt-20 md:mt-40 lg:mt-30 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
        <h2
          ref={titleRef}
          className="text-left text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px]  2xl:text-[90px] font-urbanist font-black leading-[1.06] my-10 text-black font-helvetica  w-full"
        >
          {titleText.split(' ').map((word, wi) => {
            if (word === '__NEWLINE__') {
              return <br key={wi} />;
            }

            return (
              <span key={wi} className="inline-block whitespace-nowrap mr-3 lg:mr-4 xl:mr-5">
                {word.split('').map((char, ci) => (
                  <span
                    key={ci}
                    ref={(el) => (charRefs.current[wi * 100 + ci] = el)}
                    className="inline-block"
                    style={char !== " " ? { letterSpacing: "-0.05em" } : {}}
                  >
                    {char}
                  </span>
                ))}
              </span>
            );
          })}
        </h2>



        {/* grid layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* 1st text */}
          <div>
            <p className='md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl  text-gray-400 md:my-5 lg:my-6 xl:my-10 font-ethosnova'>
              {splitWords("We didn’t choose the digital life. The digital life chose us, and we ran with it like caffeinated cheetahs in a code jungle. What started as a ragtag crew of designers, devs, and motion wizards is now Ethical Den, your creative tech pit crew working at full throttle. From brainstorming in Notion to battling bugs at 2AM, we thrive in beautiful chaos, crafting solutions that don’t just work but actually wow.", 0)}
            </p>
            {/* <p className='md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-400 md:my-5 lg:my-6 xl:my-10 font-ethosnova'>
              {splitWords("We’re equal parts strategy, pixels, and keyboard shortcuts. When we’re not designing scroll-stopping UI or shipping SaaS builds, we’re probably arguing over fonts or debugging something that shouldn’t even exist. That’s the thrill. That’s the grind. That’s us.", 1)}
            </p> */}
            {/* <p className='md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-400 md:my-5 lg:my-6 xl:my-10 font-ethosnova'>
              {splitWords("We’re not afraid to blur the lines between work and play because, let’s face it, the best ideas often emerge over a friendly banter or a pint of beer.", 2)}
            </p> */}
          </div>


          {/* 1st video */}
          <div className=''>
            <video
              src='https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/video-1.webm'
              muted
              autoPlay
              loop
              className='w-[40vw] h-[20vh] Md:w-full md:h-[65vh] object-cover'
            ></video>
          </div>

          {/* 1st image */}
          <div className='md:mt-14 -mt-32 flex justify-end relative'>

            <Image
              src='https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/about-team.webp'
              height={1000}
              width={1000}
              placeholder='blur'
              blurDataURL={blurPlaceholder}
              className='w-[40vw] h-[20vh] Md:w-[40vw] md:h-[65vh] object-cover'
              priority
              loading="eager"
              alt='Project 1'
            />
          </div>

          {/* 2nd image */}
          <div className='-mt-10 md:mt-2 lg:mt-5 xl:-mt-2 2xl:mt-2 relative w-[40vw] h-[20vh] md:w-[30vh] md:h-[30vh]'>


            <Image
              src='https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/ceo%26co-ceo.webp'
              height={1000}
              width={1000}
              placeholder='blur'
              blurDataURL={blurPlaceholder}
              className='object-cover object-top w-full h-full'
              priority
              loading="eager"
              alt='Project 2'
            />
          </div>


          {/* 2nd video */}
          <div className='flex justify-end -mt-35 md:mt-3 '>
            <video
              src='https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/video-2.webm'
              muted
              autoPlay
              loop
              className='h-[20vh] w-[40vw] md:h-[25vh] md:w-[25vh] object-cover'
            ></video>
          </div>

          {/* 2nd text */}
          <div className=' md:-mt-70 lg:-mt-72 xl:-mt-82'>
            <p className=' md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-400 md:my-5 lg:my-6 xl:my-10 font-ethosnova'>
              {splitWords("We’re equal parts strategy, pixels, and keyboard shortcuts. When we’re not designing scroll-stopping UI or shipping SaaS builds, we’re probably arguing over fonts or debugging something that shouldn’t even exist. That’s the thrill. That’s the grind. That’s us.", 0)}
            </p>
            {/* <p className='md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-400 md:my-5 lg:my-6 xl:my-10 font-ethosnova'>
              {splitWords("When you partner with us, you’re not just getting experts, you’re getting allies who know how to balance the two.", 1)}
            </p>
            <p className='md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-400 md:my-5 lg:my-6 xl:my-10 font-ethosnova'>
              {splitWords("Real connections, real results — that’s the mater way. Let’s build stuff together.", 2)}
            </p> */}

            {/* button */}
            <div className=" relative mt-8 md:mt-3 inline-block">
              <Link
                ref={buttonRef}
                className="relative px-6 py-2 sm:px-8 sm:py-3 rounded-full border-none text-base sm:text-lg bg-[#a8ff57] overflow-hidden inline-flex items-center justify-center group"
                href="/services"
                style={{ opacity: 1 }}
              >
                <span ref={buttonBgRef} className="absolute inset-0 z-0" />
                <span
                  ref={buttonTextRef}
                  className="relative z-10 text-[16px] md:text-2xl text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center"
                >
                  <span ref={buttonStaticTextRef} className="static-text font-helvetica">
                    Services
                  </span>
                  <span
                    ref={buttonScrollingTextRef}
                    className="scrolling-text absolute left-0"
                  >
                    {Array.from({ length: 20 }).map((_, i) => (
                      <span key={i} className="inline-block mr-8 font-helvetica">
                        Services
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUsArea;
