// components/service/ServiceBanner.js
"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function ServiceBanner({ service }) {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const titleContainerRef = useRef(null);
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
      className="w-full bg-[#1e1e1e] text-white px-6 md:px-10 lg:px-12 xl:px-20 pt-5 sm:pt-6 pb-4 overflow-hidden relative"
    >
      {/* Breadcrumb */}
      <div className="mb-7 sm:mb-8">
        <p className="text-[12px] font-bold uppercase tracking-[0.02em] text-white/90">
          SERVICES / {service?.category || "BRANDING"}
        </p>
      </div>

      {/* Title Container */}
      <div 
        ref={titleContainerRef}
        className="mb-7 sm:mb-8 overflow-hidden relative"
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
              text-[42px]
              sm:text-[52px]
              md:text-[64px]
              lg:text-[72px]
              xl:text-[96px]
              leading-[0.95]
              font-bold
              uppercase
              tracking-[-0.025em]
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

      {/* Video Placeholder */}
      <div
        className="
          relative
          w-full
          h-[220px]
          sm:h-[280px]
          md:h-[360px]
          lg:h-[390px]
          xl:h-[550px]
          rounded-[10px]
          sm:rounded-[11px]
          overflow-hidden
          bg-[#d9d9d9]
        "
      >
        {/* Video will go here later */}
      </div>

      {/* Description */}
      <div className="my-7 sm:my-8">
        <p
          className="
            text-[10px]
            sm:text-[11px]
            md:text-[20px]
            leading-[1.5]
            font-normal
            text-white/90
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