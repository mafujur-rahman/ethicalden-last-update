"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCoreOfferings({ service }) {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  // Reel (filmstrip) refs — one translating stack per column, each stack
  // holds every offering's number/title/description on top of one another.
  const numberStackRef = useRef(null);
  const titleStackRef = useRef(null);
  const descriptionStackRef = useRef(null);
  const numberItemRefs = useRef([]);
  const titleItemRefs = useRef([]);
  const descriptionItemRefs = useRef([]);

  // Measured row heights so every row in a stack is the same height —
  // that's what makes a simple "index * rowHeight" translate line up.
  const [rowHeights, setRowHeights] = useState({
    number: 0,
    title: 0,
    description: 0,
  });

  const offerings =
    service?.coreOfferings && service.coreOfferings.length > 0
      ? service.coreOfferings
      : service?.features?.map((feature) => ({
          title: feature,
          description: `Professional ${feature.toLowerCase()} services tailored to your needs.`,
        })) || [];

  // -----------------------------------------
  // Measure natural row heights (tallest item per column wins, so a
  // 2-line title doesn't get clipped by a 1-line row).
  // -----------------------------------------
  useLayoutEffect(() => {
    if (offerings.length < 2) return;

    function measure() {
      const tallest = (refs) =>
        refs.current
          .filter(Boolean)
          .reduce((max, el) => Math.max(max, el.offsetHeight), 0);

      setRowHeights({
        number: tallest(numberItemRefs),
        title: tallest(titleItemRefs),
        description: tallest(descriptionItemRefs),
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [offerings.length]);

  useEffect(() => {
    if (!sectionRef.current || offerings.length < 2) return;
    if (!rowHeights.number || !rowHeights.title || !rowHeights.description) return;

    // Skip animations for devices <= 1024px
    if (window.innerWidth <= 1024) return;

    const ctx = gsap.context(() => {
      const images = imageRefs.current.filter(Boolean);
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
      // Initial reel position
      // -----------------------------------------
      gsap.set([numberStackRef.current, titleStackRef.current, descriptionStackRef.current], {
        y: 0,
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

      offerings.forEach((_, index) => {
        if (index === offerings.length - 1) return;

        const currentImage = images[index];

        // Image goes from 100% -> 0% (unchanged)
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
        // Text reel — one hard, masked translateY step per column,
        // all three columns moving together mid-scroll (matches the
        // reference: text holds, then snaps to the next row, clipped
        // by the overflow-hidden window rather than fading).
        // -----------------------------------------
        const nextIndex = index + 1;

        timeline.to(
          numberStackRef.current,
          {
            y: -nextIndex * rowHeights.number,
            duration: 0.5,
            ease: "power2.inOut",
          },
          index + 0.5
        );

        timeline.to(
          titleStackRef.current,
          {
            y: -nextIndex * rowHeights.title,
            duration: 0.5,
            ease: "power2.inOut",
          },
          index + 0.5
        );

        timeline.to(
          descriptionStackRef.current,
          {
            y: -nextIndex * rowHeights.description,
            duration: 0.5,
            ease: "power2.inOut",
          },
          index + 0.5
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [offerings.length, rowHeights]);

  // ==========================================
  // FALLBACK
  // ==========================================
  if (offerings.length === 0) {
    return (
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        <div className="absolute left-0 top-[11%] z-10 md:left-12 lg:left-14 xl:left-20">
          <span className="text-[16px] font-bold uppercase tracking-[-0.01em] text-white">
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
          SECTION LABEL - Stays at top of section for all devices
      =========================================== */}
      <div className="absolute left-6 top-0 z-[100] md:left-10 md:top-10 lg:left-12 xl:left-20 xl:top-[5%]">
        <span className="text-[16px] font-bold uppercase tracking-[-0.01em] text-white">
          Core Offerings
        </span>
      </div>

      {/* ==========================================
          DESKTOP VERSION (> 1024px) - With animations
      =========================================== */}
      <div className="hidden xl:block">
        {/* LEFT CONTENT — masked reel: each column is a fixed-height
            overflow-hidden window with every offering's text stacked
            inside it; the stack translates as one block. */}
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
          <div
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
            {/* Number reel */}
            <div
              className="mb-[38px] overflow-hidden"
              style={rowHeights.number ? { height: rowHeights.number } : undefined}
            >
              <div ref={numberStackRef}>
                {offerings.map((offering, index) => (
                  <div
                    key={index}
                    ref={(element) => {
                      numberItemRefs.current[index] = element;
                    }}
                    className="flex items-center"
                    style={
                      rowHeights.number ? { height: rowHeights.number } : undefined
                    }
                  >
                    <span
                      className="
                        text-[40px]
                        font-bold
                        leading-none
                        tracking-[-0.04em]
                        text-white
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Title reel */}
            <div
              className="mb-[26px] overflow-hidden xl:max-w-[517px] 2xl:max-w-[550px]"
              style={rowHeights.title ? { height: rowHeights.title } : undefined}
            >
              <div ref={titleStackRef}>
                {offerings.map((offering, index) => (
                  <div
                    key={index}
                    ref={(element) => {
                      titleItemRefs.current[index] = element;
                    }}
                    className="flex items-center"
                    style={rowHeights.title ? { height: rowHeights.title } : undefined}
                  >
                    <h2
                      className="
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
                ))}
              </div>
            </div>

            {/* Description reel */}
            <div
              className="overflow-hidden xl:max-w-[506px] 2xl:max-w-[540px]"
              style={
                rowHeights.description ? { height: rowHeights.description } : undefined
              }
            >
              <div ref={descriptionStackRef}>
                {offerings.map((offering, index) => (
                  <div
                    key={index}
                    ref={(element) => {
                      descriptionItemRefs.current[index] = element;
                    }}
                    className="flex items-center"
                    style={
                      rowHeights.description
                        ? { height: rowHeights.description }
                        : undefined
                    }
                  >
                    <p
                      className="
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
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div
          className="
            absolute
            right-8
            top-[0.01%]
            xl:h-[913px]
            2xl:h-[910px]
            xl:w-[635px]
            2xl:w-[800px]
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
                  sizes="42.5vw"
                />
              ) : (
                <div className="absolute inset-0 bg-[#d9d9d9]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          MOBILE/TABLET VERSION (<= 1024px) - Static, no animations
          Each service: Content on top, Image below it
          Core Offerings label stays at very top
      =========================================== */}
      <div className="xl:hidden">
        <div className="flex flex-col pt-16 px-6 pb-[8%] md:px-10 md:pt-24 lg:px-12">
          {offerings.map((offering, index) => (
            <div key={index} className="mb-16 last:mb-0">
              {/* Content */}
              <div className="mb-6">
                <div className="mb-[20px] md:mb-[22px]">
                  <span className="text-[28px] md:text-[30px] font-bold leading-none tracking-[-0.04em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mb-[16px] md:mb-[18px]">
                  <h2 className="text-[24px] font-bold leading-[1.08] tracking-[-0.035em] text-white md:text-[40px]">
                    {offering?.title || "What We Deliver"}
                  </h2>
                </div>
                <div>
                  <p className="text-[14px] font-normal leading-[1.45] tracking-[-0.015em] text-white md:text-[20px]">
                    {offering?.description ||
                      service?.offeringsDescription ||
                      "Comprehensive solutions tailored to your needs"}
                  </p>
                </div>
              </div>

              {/* Image - directly below its content */}
              <div className="relative w-full h-[469px] rounded-[15px] overflow-hidden bg-[#d9d9d9]">
                {offering?.image ? (
                  <Image
                    src={offering.image}
                    alt={offering.title || "Service offering"}
                    fill
                    className="object-cover"
                    sizes="90vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#d9d9d9]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}