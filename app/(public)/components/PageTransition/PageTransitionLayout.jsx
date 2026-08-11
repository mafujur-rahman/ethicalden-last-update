'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

export default function PageTransitionLayout({ children }) {
  const containerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const contentRef = useRef(null);
  
  const pathname = usePathname();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Set initial states - curtains start fully visible (scaled to 1)
    gsap.set([row1Ref.current, row2Ref.current, row3Ref.current], {
      scaleX: 1,
      transformOrigin: 'left center',
      display: 'block',
    });
    gsap.set(contentRef.current, { opacity: 1 });

    // ONLY the closing transition (black bg takes over and reveals content)
    tl.to(row1Ref.current, {
      scaleX: 0,
      transformOrigin: 'right center',
      duration: 0.4,
      ease: 'power3.inOut',
    })
    .to(
      row2Ref.current,
      {
        scaleX: 0,
        transformOrigin: 'right center',
        duration: 0.4,
        ease: 'power3.inOut',
      },
      '-=0.3'
    )
    .to(
      row3Ref.current,
      {
        scaleX: 0,
        transformOrigin: 'right center',
        duration: 0.4,
        ease: 'power3.inOut',
      },
      '-=0.3'
    )
    .to(contentRef.current, {
      opacity: 1,
      duration: 0.3,
    });
  }, { scope: containerRef, dependencies: [pathname] });

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* Target Content */}
      <div ref={contentRef} className="w-full h-full">
        {children}
      </div>

      {/* 3-Row Curtain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 flex flex-col">
        <div ref={row1Ref} className="h-1/3 w-full bg-black" />
        <div ref={row2Ref} className="h-1/3 w-full bg-black" />
        <div ref={row3Ref} className="h-1/3 w-full bg-black" />
      </div>
    </div>
  );
}