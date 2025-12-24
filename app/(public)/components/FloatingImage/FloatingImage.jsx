"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function FloatingImage() {
  const floatingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header-banner");


      if (!header) return;

      const headerRect = header.getBoundingClientRect();


      const headerVisible = headerRect.bottom > 0 && headerRect.top < window.innerHeight;


      if (headerVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (floatingRef.current) {
      if (isVisible) {
        // Appears spinning from the right (off-screen)
        gsap.fromTo(
          floatingRef.current,
          {
            x: 500,
            opacity: 0,
            rotation: 720,
          },
          {
            x: 0,
            opacity: 1,
            rotation: 0,
            duration: 2,
            ease: "power3.out",
          }
        );
      } else {
        // Disappears spinning to the right (same as the appearing effect)
        gsap.to(floatingRef.current, {
          x: 500,
          opacity: 0,
          rotation: 720,
          duration: 2,
          ease: "power3.in",
        });
      }
    }
  }, [isVisible]);

  return (
    <div
      ref={floatingRef}
      className="fixed bottom-5 right-5 w-20 h-20 md:bottom-10 md:right-10 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden z-[9999]"
    >
      <img
        src="https://mater.agency/wp-content/themes/ea-web/public/img/sample/ea93-sticker-1.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <img
        src="/images/floatingImg/ea93-sticker-1-txt.webp"
        alt="Floating"
        className={`absolute top-0 left-0 w-full h-full object-cover p-2 md:p-4 ${isVisible ? "animate-spin-slower" : ""}`}
      />
    </div>


  );
}