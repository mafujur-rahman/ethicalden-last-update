'use client';

import React, { useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import Image from 'next/image';

export default function ServiceFooter({ service, nextService, link }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const isNavigating = useRef(false);

  /*
   * ---------------------------------------------------------
   * Reset scroll position
   * ---------------------------------------------------------
   */
  const resetScroll = () => {
    if (typeof window === 'undefined') return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  /*
   * ---------------------------------------------------------
   * Disable browser automatic scroll restoration
   * ---------------------------------------------------------
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = 'manual';
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * IMPORTANT:
   *
   * Whenever pathname changes, the NEW page starts at top.
   * ---------------------------------------------------------
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Immediately reset
    resetScroll();

    // Reset after browser paints the new page
    requestAnimationFrame(() => {
      resetScroll();
    });

    // Extra protection against Next.js/browser restoration
    const timer1 = setTimeout(() => {
      resetScroll();
    }, 50);

    const timer2 = setTimeout(() => {
      resetScroll();
    }, 150);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  /*
   * ---------------------------------------------------------
   * Navigate to next service (Click Only)
   * ---------------------------------------------------------
   */
  const navigateToNextService = () => {
    // Prevent duplicate navigation
    if (isNavigating.current) {
      return;
    }

    const targetLink = link || service?.link || '/services';

    if (!targetLink) return;

    // Lock navigation immediately
    isNavigating.current = true;

    /*
     * Animate content out
     */
    gsap.to(contentRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        gsap.to(sectionRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            /*
             * Reset BEFORE navigation.
             */
            resetScroll();

            /*
             * Navigate to the new page.
             *
             * scroll: true tells Next.js that this is a
             * normal navigation and the new page should
             * start at the top.
             */
            router.push(targetLink, {
              scroll: true,
            });

            // Reset navigation lock after navigation
            setTimeout(() => {
              isNavigating.current = false;
            }, 500);
          },
        });
      },
    });
  };

  /*
   * ---------------------------------------------------------
   * Render
   * ---------------------------------------------------------
   */
  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-[#1e1e1e]
        lg:min-h-full
        text-white
        px-6
        md:px-10
        lg:px-12
        xl:px-20
        pt-12
        md:py-14
        lg:py-20
        xl:py-28
        transition-opacity
        duration-300
      "
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
          group
          cursor-pointer
        "
        onClick={navigateToNextService}
      >
        {/* Background Image */}
        {service?.footerImage ? (
          <Image
            src={service.footerImage}
            alt={service?.title || 'Footer background'}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-[#d9d9d9]" />
        )}

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/30
            transition-all
            duration-700
            group-hover:bg-black/20
          "
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <p
            className="
              text-[12px]
              md:text-[16px]
              lg:text-[18px]
              xl:text-[20px]
              font-normal
              leading-none
              tracking-[-0.02em]
              text-white/90
            "
          >
            Next Service
          </p>

          <h2
            className="
              mt-[22px]
              text-[32px]
              md:text-[40px]
              xl:text-[48px]
              font-bold
              leading-none
              tracking-[-0.045em]
              text-white
              transition-transform
              duration-300
              group-hover:scale-105
            "
          >
            {nextService?.title ||
              service?.footerTitle ||
              'Digital Marketing'}
          </h2>

          <div className="mt-[30px] flex items-center gap-3 text-white/80">
            <p
              className="
                md:text-[16px]
                lg:text-[18px]
                xl:text-[20px]
                font-normal
                leading-none
                tracking-[-0.02em]
              "
            >
              Click to continue
            </p>

            <svg
              className="w-6 h-6 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}