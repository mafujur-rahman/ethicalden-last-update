// components/service/ServiceAbout.js
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceAbout({ service }) {
  const description =
    service?.aboutDescription ||
    service?.description ||
    "Visibility is a start. Revenue is the goal. We combine creative thinking with analytical rigour to build campaigns that reach people when it matters and move them to act. No spray-and-pray. No vanity metrics.";

  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    // Split text into words to preserve word integrity
    const words = description.split(" ");

    // Clear text ref
    text.innerHTML = "";

    // Create word spans with character spans inside
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "word inline-block mr-1";
      
      // Split each word into characters
      word.split("").forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.className = "char";
        charSpan.style.color = "#595f61";
        charSpan.textContent = char;
        wordSpan.appendChild(charSpan);
      });
      
      text.appendChild(wordSpan);
      
      // Add space after word (except last)
      if (wordIndex < words.length - 1) {
        const space = document.createTextNode(" ");
        text.appendChild(space);
      }
    });

    // Get all character elements
    const chars = text.querySelectorAll(".char");
    const totalChars = chars.length;

    // Kill any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(st => st.kill());

    // Create animation that follows scroll exactly
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: "bottom center",
        pin: true,
        pinSpacing: true,
        scrub: 0.5, // Tight scrub so it follows scroll exactly
        invalidateOnRefresh: true,
        markers: false,
      },
      defaults: {
        duration: 0.1,
        ease: "none",
      }
    });

    // MUCH SLOWER reveal - spread across entire scroll
    const staggerDuration = 15; // Total time for all characters to reveal (increased from 5)
    const staggerAmount = staggerDuration / totalChars;
    
    chars.forEach((char, index) => {
      tl.to(char, {
        color: "#ffffff",
        duration: 0.1,
        ease: "none",
      }, index * staggerAmount);
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [description]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1e1e1e] text-white px-6 md:px-10 lg:px-12 xl:px-20 pb-20 overflow-hidden"
    >
      <div className="w-full relative max-w-full">
        {/* Image - positioned absolutely to stay in top-left */}
        <div
          className="
            absolute
            top-0
            left-0
            w-[180px]
            h-[180px]
            rounded-[14px]
            bg-[#d9d9d9]
            overflow-hidden
            flex-shrink-0
          "
        >
          {/* Dynamic image will go here later */}
        </div>

        {/* Text wrapper with padding to push text down */}
        <div className="pl-[211px] pt-[140px] w-full">
          <p
            ref={textRef}
            className="
              text-[40px]
              leading-[1.28]
              font-bold
              tracking-[-0.7px]
              w-full
              break-words
              hyphens-auto
            "
            style={{ 
              wordBreak: "break-word",
              overflowWrap: "break-word"
            }}
          >
            {/* Characters will be rendered by useEffect */}
          </p>
        </div>
      </div>
    </section>
  );
}