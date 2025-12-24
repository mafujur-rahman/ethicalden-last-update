'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const charRefs = useRef([]);
  const leftVideoRef = useRef(null);
  const topVideoRef = useRef(null);
  const rightImageRef = useRef(null);
  const bottomVideoRef = useRef(null);

  const titleText = "You say jump,\nwe dance.";

  useEffect(() => {
    const banner = bannerRef.current;
    const moveBanner = (e) => {
      const { innerWidth, innerHeight } = window;
      const moveX = (e.clientX - innerWidth / 2) * -0.10;
      const moveY = (e.clientY - innerHeight / 2) * -0.10;

      gsap.to(banner, {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveBanner);
    return () => window.removeEventListener("mousemove", moveBanner);
  }, []);

  useEffect(() => {
    if (!charRefs.current.length) return;
    gsap.fromTo(
      charRefs.current,
      { color: 'gray' },
      {
        color: 'black',
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        const visuals = [leftVideoRef.current, topVideoRef.current, rightImageRef.current, bottomVideoRef.current];

        visuals.forEach((el, index) => {
          if (el) {
            gsap.fromTo(
              el,
              { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50, scale: 0.95 },
              {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const moveParallax = (e) => {
      const { innerWidth, innerHeight } = window;
      const moveX = (e.clientX - innerWidth / 2) * 0.01;
      const moveY = (e.clientY - innerHeight / 2) * 0.01;

      [leftVideoRef, topVideoRef, rightImageRef, bottomVideoRef].forEach((ref, idx) => {
        if (ref.current) {
          gsap.to(ref.current, {
            x: moveX * (idx + 1),
            y: moveY * (idx + 1),
            duration: 0.4,
            ease: "power1.out",
          });
        }
      });
    };

    const handleResize = () => {
      if (window.innerWidth > 1000) {
        window.addEventListener("mousemove", moveParallax);
        return () => window.removeEventListener("mousemove", moveParallax);
      }
    };

    const cleanup = handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      cleanup && cleanup();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="absolute inset-0 text-start flex flex-col items-center justify-center pointer-events-none -mt-80 md:-mt-60 lg:mt-0 px-4 lg:text-center"
      style={{ zIndex: 30 }}
    >

      <div className="max-w-3xl">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl xl:text-7xl font-urbanist font-black leading-[1]"
        >
          {titleText.split("").map((char, index) =>
            char === "\n" ? (
              <br key={index} />
            ) : (
              <span
                key={index}
                ref={(el) => (charRefs.current[index] = el)}
                className={`inline-block text-gray-400 ${char === " " ? "w-2" : ""}`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            )
          )}
        </h1>
        <p className="mt-6 font-helvetica text-xl md:text-2xl text-black">
          We are mater, magicians of the digital age, <br /> dancing on the edge of creativity for more than two decades.
        </p>
      </div>

      <div className="hidden lg:block">
        <div
          ref={leftVideoRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[320px] lg:w-[200px] xl:w-[380px] 2xl:w-[500px] h-[320px] lg:h-[200px] xl:h-[380px] 2xl:h-[500px] rounded-xl overflow-hidden shadow-lg z-20"
        >
          <video src="/images/banner/banner-v-left.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </div>

        <div
          ref={topVideoRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] lg:w-[200px] xl:w-[380px] 2xl:w-[500px] h-[300px] lg:h-[200px] xl:h-[250px] 2xl:h-[320px] rounded-xl overflow-hidden shadow-lg z-30"
        >
          <video src="/images/banner/banner-v-top.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </div>

        <div
          ref={rightImageRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] lg:w-[200px] xl:w-[380px] 2xl:w-[500px] h-[320px] lg:h-[200px] xl:h-[380px] 2xl:h-[500px] rounded-xl overflow-hidden shadow-lg z-40"
        >
          <img src="/images/banner/banner-v-right.jpg" alt="Right Visual" className="w-full h-full object-cover" />
        </div>
      </div>

      <div
        ref={bottomVideoRef}
        className="absolute bottom-0 left-0 w-full h-[500px] pt-24 md:pt-44 md:h-[600px] overflow-hidden z-50
        lg:left-1/2 lg:-translate-x-1/2 lg:w-[200px] lg:h-[200px] lg:pt-0 
        xl:w-[380px] xl:h-[250px] xl:pt-10 
        2xl:w-[500px] 2xl:h-[320px] lg:rounded-xl"
      >
        <video
          src="/images/banner/banner-v-left.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
