'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

export default function TransitionOverlay() {
  const overlayRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;

    const animateIn = () => {
      return gsap.fromTo(
        overlay,
        { y: '100%' },
        {
          y: '0%',
          duration: 0.8,
          ease: 'power4.inOut',
        }
      );
    };

    const animateOut = () => {
      return gsap.to(overlay, {
        y: '-100%',
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.1,
      });
    };

    const handleRouteChange = async () => {
      await animateIn();
      await animateOut();
    };

    handleRouteChange();
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black z-[9999] pointer-events-none"
      style={{ transform: 'translateY(100%)' }}
    ></div>
  );
}
