"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition() {
  const transitionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!transitionRef.current || !imgRef.current) return;

    // Set initial styles
    gsap.set(transitionRef.current, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "80vw",
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      pointerEvents: "none",
    });

    gsap.set(imgRef.current, {
      scale: 1,
      opacity: 1,
      y: 50,
    });

    // Create the animation timeline
    const tl = gsap.timeline();

    tl.to(imgRef.current, {
      duration: 0.8,
      scale: 1.1,
      y: -30,
      ease: "power2.out",
    })
      .to(imgRef.current, {
        duration: 0.8,
        scale: 1,
        y: 0,
        ease: "power2.inOut",
      })
      .to(transitionRef.current, {
        duration: 0.5,
        opacity: 0,
        ease: "power1.out",
        onComplete: () => {
          if (transitionRef.current) {
            transitionRef.current.style.display = "none";
          }
        },
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={transitionRef}>
      <img
        ref={imgRef}
        src="/page-transition.png"
        alt="Page Transition"
        className="w-screen h-screen object-cover"
      />
    </div>
  );
}
