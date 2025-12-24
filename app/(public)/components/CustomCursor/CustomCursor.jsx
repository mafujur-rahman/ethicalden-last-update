'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MdArrowOutward } from 'react-icons/md';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [isButtonHover, setIsButtonHover] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const observerRef = useRef(null);

  const handleMouseEnter = () => setIsButtonHover(true);
  const handleMouseLeave = () => setIsButtonHover(false);

  const isSpecificDark = (bgColor) => {
    if (!bgColor) return false;
    const rgb = bgColor.match(/\d+/g);
    if (!rgb || rgb.length < 3) return false;
    const [r, g, b] = rgb.map(Number);
    return r === 17 && g === 17 && b === 17;
  };





  const getEffectiveBackgroundColor = (el) => {
    let current = el;
    while (current && current !== document.documentElement) {
      const bg = window.getComputedStyle(current).backgroundColor;
      // Skip if transparent or no color
      if (
        bg &&
        bg !== 'rgba(0, 0, 0, 0)' &&
        bg !== 'transparent' &&
        bg !== 'inherit'
      ) {
        return bg;
      }
      current = current.parentElement;
    }
    // Fallback to body or white
    const bodyBg = window.getComputedStyle(document.body).backgroundColor;
    return bodyBg && bodyBg !== 'rgba(0, 0, 0, 0)' && bodyBg !== 'transparent'
      ? bodyBg
      : 'rgb(255, 255, 255)';
  };





  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    const updateMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      gsap.to(dotRef.current, {
        x: mouse.current.x,
        y: mouse.current.y,
        duration: 0.1,
        ease: 'power2.out',
      });

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el instanceof HTMLElement) {
        if (el.closest('[data-cursor-dark]')) {
          setIsDarkBg(true);
        } else if (el.closest('[data-cursor-light]')) {
          setIsDarkBg(false);
        } else {
          const effectiveBg = getEffectiveBackgroundColor(el);
          setIsDarkBg(isSpecificDark(effectiveBg));
        }
      }
    };


    const follow = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      gsap.set(circle, {
        x: pos.current.x,
        y: pos.current.y,
      });

      requestAnimationFrame(follow);
    };

    document.addEventListener('mousemove', updateMouse);

    const addEventListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], .cursor-pointer, [data-cursor-hover]'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    addEventListeners();

    observerRef.current = new MutationObserver((mutations) => {
      let needsUpdate = false;
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          needsUpdate = true;
        }
      });
      if (needsUpdate) {
        addEventListeners();
      }
    });

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    follow();

    return () => {
      document.removeEventListener('mousemove', updateMouse);

      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], .cursor-pointer, [data-cursor-hover]'
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <section data-cursor-dark>
        {/* Circle Outline */}
        <div
          ref={circleRef}
          className={`pointer-events-none fixed top-0 left-0 w-16 h-16 rounded-full -translate-x-1/2 -translate-y-1/2 border transition-colors duration-150 ${isDarkBg ? 'border-white' : 'border-black'
            }`}
          style={{ zIndex: 999999 }}
        ></div>

        <div
          ref={dotRef}
          className={`pointer-events-none fixed top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-colors duration-150 ${isButtonHover
            ? `${isDarkBg ? 'text-white' : 'text-black'} text-xl px-1 py-1`
            : `w-3 h-3 ${isDarkBg ? 'bg-white' : 'bg-black'}`
            }`}
          style={{ zIndex: 999999 }}
        >
          {isButtonHover ? <MdArrowOutward /> : null}
        </div>
      </section>
    </>
  );
};

export default CustomCursor;
