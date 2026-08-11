"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function ServiceBanner({ service }) {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const titleContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const title = titleRef.current;
    const container = containerRef.current;

    if (!title || !container) return;

    // Get the title text
    const titleText = service?.bannerTitle || service?.title || "BRANDING - BUILD AN IDENTITY";

    // Clear existing content
    title.innerHTML = '';

    // Create single title row
    const row = document.createElement('div');
    row.className = 'title-row';
    row.style.display = 'flex';
    row.style.whiteSpace = 'nowrap';
    row.style.opacity = '0';
    row.style.transform = 'translateY(100%)';
    row.style.justifyContent = 'center';
    row.style.width = '100%';

    // Create text with duplicates for infinite scroll
    const textSpan = document.createElement('span');
    textSpan.textContent = titleText;
    textSpan.style.display = 'inline-block';
    textSpan.style.paddingRight = '1.5em';
    
    const duplicateSpan1 = document.createElement('span');
    duplicateSpan1.textContent = titleText;
    duplicateSpan1.style.display = 'inline-block';
    duplicateSpan1.style.paddingRight = '1.5em';

    const duplicateSpan2 = document.createElement('span');
    duplicateSpan2.textContent = titleText;
    duplicateSpan2.style.display = 'inline-block';
    duplicateSpan2.style.paddingRight = '1.5em';

    row.appendChild(textSpan);
    row.appendChild(duplicateSpan1);
    row.appendChild(duplicateSpan2);
    
    title.appendChild(row);

    // Calculate row width for infinite scrolling
    const rowWidth = row.scrollWidth / 3;

    // Timeline for reveal animation (bottom to top)
    const revealTl = gsap.timeline({
      defaults: { ease: 'power2.out' }
    });

    revealTl.to(row, {
      opacity: 1,
      y: '0%',
      duration: 0.5,
      ease: 'power2.out',
    });

    // Create the infinite scroll animation
    let scrollTl = null;
    let currentDirection = 1; // 1 = left, -1 = right
    
    function createAnimation(direction) {
      // Kill existing animation
      if (scrollTl) {
        scrollTl.kill();
      }
      
      currentDirection = direction;
      
      if (direction === 1) {
        // Moving left (down scroll)
        scrollTl = gsap.to(row, {
          x: -rowWidth,
          duration: 18,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: (x) => {
              const currentX = parseFloat(x);
              if (currentX <= -rowWidth) {
                return currentX + rowWidth;
              }
              return x;
            }
          }
        });
      } else {
        // Moving right (up scroll)
        scrollTl = gsap.to(row, {
          x: rowWidth,
          duration: 18,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: (x) => {
              const currentX = parseFloat(x);
              if (currentX >= rowWidth) {
                return currentX - rowWidth;
              }
              return x;
            }
          }
        });
      }
    }

    // Initial animation (moving left)
    createAnimation(1);

    // Speed control variables
    let currentSpeed = 1;
    let targetSpeed = 1;
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    let scrollTimeout = null;
    let isScrolling = false;
    let lastDirection = 1;

    // Smooth speed transition
    const speedInterval = setInterval(() => {
      // If not scrolling, gradually return to default speed
      if (!isScrolling) {
        targetSpeed = 1;
      }
      
      // Smooth transition with easing
      if (Math.abs(currentSpeed - targetSpeed) > 0.001) {
        const diff = targetSpeed - currentSpeed;
        currentSpeed += diff * 0.08;
        
        if (scrollTl) {
          scrollTl.timeScale(currentSpeed);
        }
      }
    }, 16);

    // Handle scroll with proper velocity calculation
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      
      // Calculate time difference
      const timeDiff = currentTime - lastScrollTime;
      
      // Calculate distance scrolled
      const scrollDelta = currentScrollY - lastScrollY;
      
      // Calculate velocity (pixels per second)
      let velocity = 0;
      if (timeDiff > 0) {
        velocity = Math.abs(scrollDelta) / (timeDiff / 1000);
      }
      
      // Determine direction
      const direction = scrollDelta > 0 ? 1 : -1;
      
      // Update last values
      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
      
      // Update isScrolled state
      const shouldBeScrolled = currentScrollY > 150;
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
      
      // Only update speed if there's actual movement
      if (scrollDelta !== 0) {
        // Map velocity to speed multiplier (faster scroll = faster animation)
        // Base speed is 1, increases with scroll velocity
        const speedMultiplier = 1 + (velocity / 200);
        targetSpeed = Math.max(0.5, Math.min(8, speedMultiplier));
        
        // If direction changed, reverse animation
        if (direction !== lastDirection) {
          lastDirection = direction;
          createAnimation(direction);
          currentSpeed = 1;
          targetSpeed = 1;
          if (scrollTl) {
            scrollTl.timeScale(1);
          }
        }
      }
      
      // Mark as scrolling
      isScrolling = true;
      clearTimeout(scrollTimeout);
      
      // Reset scrolling flag after 300ms of no scroll
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 300);
    };

    // Add scroll listener with throttling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Cleanup
    return () => {
      clearInterval(speedInterval);
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', onScroll);
      if (scrollTl) {
        scrollTl.kill();
      }
      revealTl.kill();
    };
  }, [service]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#1e1e1e] text-white px-5 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8 pb-3 sm:pb-4 md:pb-5 lg:pb-6 overflow-hidden relative"
    >
      {/* Breadcrumb */}
      <div className="mb-6 sm:mb-7 md:mb-8 lg:mb-9 xl:mb-10 hidden md:block">
        <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.02em] text-white/90">
          SERVICES / {service?.category || "BRANDING"}
        </p>
      </div>

      {/* Title Container */}
      <div 
        ref={titleContainerRef}
        className="mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 overflow-hidden relative" 
      >
        <div
          className={`
            transition-all duration-1000 ease-in-out
            ${isScrolled ? 'ml-0' : 'mx-auto'}
          `}
          style={{
            maxWidth: isScrolled ? '80%' : '100%',
            textAlign: isScrolled ? 'left' : 'center',
          }}
        >
          <div
            ref={titleRef}
            className={`
              text-[48px] lg:text-[64px] xl:text-[96px] 2xl:text-[120px]
              leading-[0.95] sm:leading-[0.92] md:leading-[0.9] lg:leading-[0.88] xl:leading-[0.85]
              font-bold
              uppercase
              tracking-[-0.02em] sm:tracking-[-0.025em] md:tracking-[-0.025em] lg:tracking-[-0.03em] xl:tracking-[-0.035em] 2xl:tracking-[-0.04em]
              will-change-transform
              ${isScrolled ? 'flex flex-col items-start' : ''}
            `}
            style={{
              display: isScrolled ? 'flex' : 'block',
              flexDirection: isScrolled ? 'column' : 'row',
              alignItems: isScrolled ? 'flex-start' : 'center',
              justifyContent: isScrolled ? 'flex-start' : 'center',
            }}
          />
        </div>
      </div>

      {/* Video */}
      <div
        className="
          relative
          w-full
          h-[340px] lg:h-[420px] xl:h-[550px] 2xl:h-[650px]
          rounded-[8px] sm:rounded-[10px] md:rounded-[11px] lg:rounded-[12px] xl:rounded-[14px] 2xl:rounded-[16px]
          overflow-hidden
          bg-[#d9d9d9]
        "
      >
        {service?.bannerVideo ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={service.bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No video available
          </div>
        )}
      </div>

      {/* Description */}
      <div className="my-5 sm:my-6 md:my-7 lg:my-8 xl:my-9 2xl:my-10">
        <p
          className="
            text-[16px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px]
            leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.55] 2xl:leading-[1.6]
            font-normal
            text-white
          "
        >
          {service?.bannerDescription ||
            service?.description ||
            "We don't dress up businesses. We build brands with a clear point of view that attracts the right audience and repels the wrong one."}
        </p>
      </div>
    </section>
  );
}