// components/service/ServiceAbout.js
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
        scrub: 0.5,
        invalidateOnRefresh: true,
        markers: false,
      },
      defaults: {
        duration: 0.1,
        ease: "none",
      }
    });

    // MUCH SLOWER reveal - spread across entire scroll
    const staggerDuration = 15;
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
        {/* Text wrapper with padding to push text down */}
        <div className=" w-full">
          {/* Container with overflow hidden to contain the float */}
          <div className="w-full overflow-hidden">
            {/* FLOATING IMAGE - positioned in top-left with text wrapping around it */}
            <div
              className="
                float-left
                w-[108px]
                md:w-[140px]
                lg:w-[160px]
                xl:w-[180px]
                2xl:w-[200px]
                h-[108px]
                md:h-[140px]
                lg:h-[160px]
                xl:h-[180px]
                2xl:h-[200px]
                rounded-[14px]
                bg-[#d9d9d9]
                overflow-hidden
                mr-[17px]
                md:mr-[24px]
                lg:mr-[28px]
                xl:mr-[31px]
                2xl:mr-[40px]
                mb-0
              "
            >
              {service?.aboutImage ? (
                <Image
                  src={service.aboutImage}
                  alt={service?.title || "About image"}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  No image
                </div>
              )}
            </div>

            {/* TEXT - wraps around the floated image */}
            <p
              ref={textRef}
              className="
                pt-[80px]
                md:pt-[110px]
                lg:pt-[120px]
                xl:pt-[140px]
                2xl:pt-[145px]
                text-[24px]
                md:text-[30px]
                lg:text-[35px]
                xl:text-[40px]
                2xl:text-[48px]
                leading-[1.28]
                font-bold
                tracking-[-0.7px]
                break-words
                hyphens-auto
                block
              "
              style={{
                wordBreak: "break-word",
                overflowWrap: "break-word",
                display: "block"
              }}
            >
              {/* Characters will be rendered by useEffect */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}