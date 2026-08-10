"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCoreOfferings({ service }) {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const contentRefs = useRef([]);

  const offerings =
    service?.coreOfferings && service.coreOfferings.length > 0
      ? service.coreOfferings
      : service?.features?.map((feature) => ({
          title: feature,
          description: `Professional ${feature.toLowerCase()} services tailored to your needs.`,
        })) || [];

  useEffect(() => {
    if (!sectionRef.current || offerings.length < 2) return;

    const ctx = gsap.context(() => {
      const images = imageRefs.current.filter(Boolean);
      const contents = contentRefs.current.filter(Boolean);

      if (images.length < 2) return;

      // -----------------------------------------
      // Initial image state
      // -----------------------------------------
      images.forEach((image, index) => {
        gsap.set(image, {
          clipPath: "inset(0% 0% 0% 0%)",
          zIndex: images.length - index,
        });
      });

      // -----------------------------------------
      // Initial left content state
      // -----------------------------------------
      contents.forEach((content, index) => {
        const number = content.querySelector('.left-number');
        const title = content.querySelector('.left-title');
        const description = content.querySelector('.left-description');
        
        if (index === 0) {
          // First item is visible at its position
          gsap.set(content, { autoAlpha: 1 });
          gsap.set([number, title, description], {
            autoAlpha: 1,
            y: 0,
          });
        } else {
          // Hidden items - each element at its own bottom position
          gsap.set(content, { autoAlpha: 0 });
          gsap.set(number, {
            autoAlpha: 0,
            y: 20, // Just below its own position
          });
          gsap.set(title, {
            autoAlpha: 0,
            y: 20, // Just below its own position
          });
          gsap.set(description, {
            autoAlpha: 0,
            y: 20, // Just below its own position
          });
        }
      });

      // -----------------------------------------
      // Main Timeline
      // -----------------------------------------
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 02%",
          end: `+=${offerings.length * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // -----------------------------------------
      // Image + Content transitions
      // -----------------------------------------
      offerings.forEach((_, index) => {
        if (index === offerings.length - 1) return;

        const currentImage = images[index];
        const currentContent = contents[index];
        const nextContent = contents[index + 1];

        // Image goes from 100% -> 0%
        timeline.to(
          currentImage,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1,
            ease: "none",
          },
          index
        );

        // -----------------------------------------
        // Left Content - Previous goes UP, Next comes from its own BOTTOM
        // -----------------------------------------
        const currentNumber = currentContent?.querySelector('.left-number');
        const currentTitle = currentContent?.querySelector('.left-title');
        const currentDescription = currentContent?.querySelector('.left-description');
        const nextNumber = nextContent?.querySelector('.left-number');
        const nextTitle = nextContent?.querySelector('.left-title');
        const nextDescription = nextContent?.querySelector('.left-description');

        // ---- PREVIOUS CONTENT SLIDES UP FROM ITS POSITION ----
        // Number slides up
        timeline.to(
          currentNumber,
          {
            y: -30,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power2.in",
          },
          index + 0.7
        );

        // Title slides up
        timeline.to(
          currentTitle,
          {
            y: -30,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power2.in",
          },
          index + 0.75
        );

        // Description slides up
        timeline.to(
          currentDescription,
          {
            y: -30,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power2.in",
          },
          index + 0.8
        );

        // ---- NEXT CONTENT COMES FROM ITS OWN BOTTOM ----
        // Show next content container
        timeline.set(
          nextContent,
          {
            autoAlpha: 1,
          },
          index + 0.8
        );

        // Number comes from its own bottom
        timeline.fromTo(
          nextNumber,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          index + 0.85
        );

        // Title comes from its own bottom
        timeline.fromTo(
          nextTitle,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          index + 0.9
        );

        // Description comes from its own bottom
        timeline.fromTo(
          nextDescription,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          index + 0.95
        );

        // Hide current content completely
        timeline.to(
          currentContent,
          {
            autoAlpha: 0,
            duration: 0.1,
          },
          index + 1.0
        );
      });

      // Refresh after timeline is created
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [offerings.length]);

  // ==========================================
  // FALLBACK
  // ==========================================
  if (offerings.length === 0) {
    return (
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        <div className="absolute left-10 top-[11%] z-10 md:left-12 lg:left-14 xl:left-20">
          <span className="text-[11px] font-medium uppercase tracking-[-0.01em] text-white">
            Core Offerings
          </span>
        </div>
        <div className="relative z-10 flex min-h-screen w-[50%] flex-col justify-center pl-10 pr-16 pt-[7%] pb-[7%] md:pl-12 md:pr-20 lg:pl-14 lg:pr-24 xl:pl-20 xl:pr-32">
          <div className="mb-[38px]">
            <span className="text-[30px] font-medium leading-none tracking-[-0.04em] text-white">
              01
            </span>
          </div>
          <h2 className="max-w-[420px] text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-[36px]">
            {service?.offeringsTitle || "What We Deliver"}
          </h2>
          <p className="mt-[26px] max-w-[390px] text-[15px] leading-[1.45] tracking-[-0.015em] text-[#d5d5d5]">
            {service?.offeringsDescription ||
              "Comprehensive solutions tailored to your needs"}
          </p>
        </div>
        <div className="absolute right-16 top-[5.1%] h-[89.8%] w-[42.5%] overflow-hidden rounded-l-[15px] bg-[#d9d9d9] md:right-20 lg:right-24 xl:right-32" />
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#1e1e1e] text-[#ffffff]"
    >
      {/* ==========================================
          SECTION LABEL
      =========================================== */}
      <div className="absolute left-10 top-[11%] z-[100] md:left-12 lg:left-14 xl:left-20">
        <span className="text-[16px] font-bold uppercase tracking-[-0.01em] text-white">
          Core Offerings
        </span>
      </div>

      {/* ==========================================
          LEFT CONTENT - Previous goes UP, Next comes from own BOTTOM
      =========================================== */}
      <div
        className="
          relative
          z-[50]
          flex
          min-h-screen
          w-[50%]
          flex-col
          justify-center
          pl-10
          pr-16
          pt-[7%]
          pb-[7%]
          md:pl-12
          md:pr-20
          lg:pl-14
          lg:pr-24
          xl:pl-20
          xl:pr-32
        "
      >
        {offerings.map((offering, index) => (
          <div
            key={index}
            ref={(element) => {
              contentRefs.current[index] = element;
            }}
            className="
              pointer-events-none
              absolute
              left-10
              top-1/2
              w-[80%]
              -translate-y-1/2
              md:left-12
              lg:left-14
              xl:left-20
            "
          >
            {/* Number */}
            <div className="left-number mb-[38px] overflow-hidden">
              <div className="transform-gpu">
                <span
                  className="
                    text-[40px]
                    font-bold
                    leading-none
                    tracking-[-0.04em]
                    text-white
                    inline-block
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="left-title overflow-hidden mb-[26px]">
              <div className="transform-gpu">
                <h2
                  className="
                    max-w-[420px]
                    text-[48px]
                    font-bold
                    leading-[1.08]
                    tracking-[-0.035em]
                    text-white
                  "
                >
                  {offering?.title || "What We Deliver"}
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="left-description overflow-hidden">
              <div className="transform-gpu">
                <p
                  className="
                    max-w-[480px]
                    text-[20px]
                    font-normal
                    leading-[1.45]
                    tracking-[-0.015em]
                    text-white
                  "
                >
                  {offering?.description ||
                    service?.offeringsDescription ||
                    "Comprehensive solutions tailored to your needs"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ==========================================
          RIGHT IMAGE STACK
      =========================================== */}
      <div
        className="
          absolute
          right-8
          top-[0.01%]
          h-[913px]
          w-[635px]
          overflow-hidden
          rounded-[15px]
          bg-[#d9d9d9]
          md:right-10
          lg:right-12
          xl:right-20
        "
      >
        {offerings.map((offering, index) => (
          <div
            key={index}
            ref={(element) => {
              imageRefs.current[index] = element;
            }}
            className="absolute inset-0 overflow-hidden"
            style={{
              zIndex: offerings.length - index,
            }}
          >
            {offering?.image ? (
              <Image
                src={offering.image}
                alt={offering.title || "Service offering"}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 42.5vw"
              />
            ) : (
              <div className="absolute inset-0 bg-[#d9d9d9]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}