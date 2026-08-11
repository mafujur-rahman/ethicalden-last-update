// components/service/ServiceFooter.js
'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import Image from 'next/image';

export default function ServiceFooter({ service, nextService, link }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const isNavigating = useRef(false);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  const navigateToNextService = () => {
    if (isNavigating.current || isExiting) return;
    isNavigating.current = true;
    setIsExiting(true);

    // Fade out the content first
    gsap.to(contentRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        // Then fade out the section
        gsap.to(sectionRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            const targetLink = link || service?.link || '/services';
            
            // Navigate with scroll disabled
            router.push(targetLink, { scroll: false });
            
            // Handle scroll after navigation complete
            const scrollToTop = () => {
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              document.documentElement.scrollLeft = 0;
              document.body.scrollTop = 0;
              document.body.scrollLeft = 0;
            };
            
            // Multiple scroll attempts at different timings
            scrollToTop();
            setTimeout(scrollToTop, 10);
            setTimeout(scrollToTop, 50);
            setTimeout(scrollToTop, 100);
            setTimeout(scrollToTop, 200);
            
            // Reset states
            setTimeout(() => {
              isNavigating.current = false;
              setIsExiting(false);
            }, 300);
          }
        });
      }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigateToNextService();
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#1e1e1e] text-white px-6 md:px-10 lg:px-12 xl:px-20 py-12 md:py-14 lg:py-18 xl:py-28 transition-opacity duration-300"
    >
      <div
        ref={contentRef}
        className="
          relative
          flex
          min-h-[230px]
          md:min-h-[300px]
          lg:min-h-[400px]
          xl:min-h-[550px]
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-[16px]
          cursor-pointer
          group
        "
        onClick={navigateToNextService}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Navigate to ${nextService?.title || service?.footerTitle || 'next service'}`}
      >
        {/* Background Image */}
        {service?.footerImage ? (
          <Image
            src={service.footerImage}
            alt={service?.title || "Footer background"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-[#d9d9d9]" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 transition-all duration-700 group-hover:bg-black/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-none tracking-[-0.02em] text-white/90">
            Next Service
          </p>

          <h2 className="mt-[22px] text-[32px] md:text-[40px] xl:text-[48px] font-bold leading-none tracking-[-0.045em] md:text-[40px] text-white transition-transform duration-300 group-hover:scale-105">
            {nextService?.title || service?.footerTitle || "Digital Marketing"}
          </h2>

          <div className="mt-[30px] flex items-center gap-3 text-white/80">
            <p className="md:text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-none tracking-[-0.02em]">
              Click to continue
            </p>
            <svg 
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}