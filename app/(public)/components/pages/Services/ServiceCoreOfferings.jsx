"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCoreOfferings({ service }) {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  const numberStackRef = useRef(null);
  const titleStackRef = useRef(null);
  const descriptionStackRef = useRef(null);
  const numberItemRefs = useRef([]);
  const titleItemRefs = useRef([]);
  const descriptionItemRefs = useRef([]);

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

  useLayoutEffect(() => {
    if (offerings.length < 2) return;

    function measure() {
      const getMaxHeight = (refs) =>
        refs.current
          .filter(Boolean)
          .reduce((max, el) => Math.max(max, el.scrollHeight), 0);

      // Add a small buffer (2-3px) to prevent any clipping/overlap
      const buffer = 3;
      const maxNumber = getMaxHeight(numberItemRefs) + buffer;
      const maxTitle = getMaxHeight(titleItemRefs) + buffer;
      const maxDescription = getMaxHeight(descriptionItemRefs) + buffer;

      setRowHeights({
        number: Math.max(maxNumber, 50),
        title: Math.max(maxTitle, 50),
        description: Math.max(maxDescription, 50),
      });
    }

    // Use requestAnimationFrame to ensure DOM is fully painted
    requestAnimationFrame(() => {
      setTimeout(measure, 100);
    });

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [offerings.length]);

  // Apply uniform height to all items
  useLayoutEffect(() => {
    if (!rowHeights.number || !rowHeights.title || !rowHeights.description) return;

    numberItemRefs.current.forEach((el) => {
      if (el) {
        el.style.height = `${rowHeights.number}px`;
        el.style.minHeight = `${rowHeights.number}px`;
        el.style.maxHeight = `${rowHeights.number}px`;
        el.style.overflow = "hidden";
      }
    });

    titleItemRefs.current.forEach((el) => {
      if (el) {
        el.style.height = `${rowHeights.title}px`;
        el.style.minHeight = `${rowHeights.title}px`;
        el.style.maxHeight = `${rowHeights.title}px`;
        el.style.overflow = "hidden";
      }
    });

    descriptionItemRefs.current.forEach((el) => {
      if (el) {
        el.style.height = `${rowHeights.description}px`;
        el.style.minHeight = `${rowHeights.description}px`;
        el.style.maxHeight = `${rowHeights.description}px`;
        el.style.overflow = "hidden";
      }
    });
  }, [rowHeights]);

  useEffect(() => {
    if (!sectionRef.current || offerings.length < 2) return;
    if (!rowHeights.number || !rowHeights.title || !rowHeights.description) return;

    if (window.innerWidth <= 1024) return;

    const ctx = gsap.context(() => {
      const images = imageRefs.current.filter(Boolean);
      if (images.length < 2) return;

      images.forEach((image, index) => {
        gsap.set(image, {
          clipPath: "inset(0% 0% 0% 0%)",
          zIndex: images.length - index,
        });
      });

      gsap.set([numberStackRef.current, titleStackRef.current, descriptionStackRef.current], {
        y: 0,
      });

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

        timeline.to(
          currentImage,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1,
            ease: "none",
          },
          index
        );

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
      <div className="absolute left-6 top-0 z-[100] md:left-10 md:top-10 lg:left-12 xl:left-20 xl:top-[5%]">
        <span className="text-[16px] font-bold uppercase tracking-[-0.01em] text-white">
          Core Offerings
        </span>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden xl:block">
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
              style={{ 
                height: rowHeights.number || 'auto',
                // Add will-change to hint at optimization
                willChange: 'transform'
              }}
            >
              <div 
                ref={numberStackRef}
                style={{
                  willChange: 'transform'
                }}
              >
                {offerings.map((offering, index) => (
                  <div
                    key={index}
                    ref={(element) => {
                      numberItemRefs.current[index] = element;
                    }}
                    className="flex items-center"
                    style={{ 
                      height: rowHeights.number || 'auto',
                      minHeight: rowHeights.number || 'auto',
                      maxHeight: rowHeights.number || 'auto',
                      overflow: 'hidden'
                    }}
                  >
                    <span
                      className="
                        text-[40px]
                        font-bold
                        leading-none
                        tracking-[-0.04em]
                        text-white
                        block
                        w-full
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
              className="mb-[26px] overflow-hidden max-w-full"
              style={{ 
                height: rowHeights.title || 'auto',
                willChange: 'transform'
              }}
            >
              <div 
                ref={titleStackRef}
                style={{
                  willChange: 'transform'
                }}
              >
                {offerings.map((offering, index) => (
                  <div
                    key={index}
                    ref={(element) => {
                      titleItemRefs.current[index] = element;
                    }}
                    className="flex items-center"
                    style={{ 
                      height: rowHeights.title || 'auto',
                      minHeight: rowHeights.title || 'auto',
                      maxHeight: rowHeights.title || 'auto',
                      overflow: 'hidden'
                    }}
                  >
                    <h2
                      className="
                        text-[48px]
                        font-bold
                        leading-[1.08]
                        tracking-[-0.035em]
                        text-white
                        block
                        w-full
                        break-words
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
              className="overflow-hidden max-w-full"
              style={{ 
                height: rowHeights.description || 'auto',
                willChange: 'transform'
              }}
            >
              <div 
                ref={descriptionStackRef}
                style={{
                  willChange: 'transform'
                }}
              >
                {offerings.map((offering, index) => (
                  <div
                    key={index}
                    ref={(element) => {
                      descriptionItemRefs.current[index] = element;
                    }}
                    className="flex items-center"
                    style={{ 
                      height: rowHeights.description || 'auto',
                      minHeight: rowHeights.description || 'auto',
                      maxHeight: rowHeights.description || 'auto',
                      overflow: 'hidden'
                    }}
                  >
                    <p
                      className="
                        text-[20px]
                        font-normal
                        leading-[1.45]
                        tracking-[-0.015em]
                        text-white
                        block
                        w-full
                        break-words
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

        {/* IMAGES */}
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
                willChange: 'clip-path'
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

      {/* MOBILE/TABLET */}
      <div className="xl:hidden">
        <div className="flex flex-col pt-16 px-6 pb-[8%] md:px-10 md:pt-24 lg:px-12">
          {offerings.map((offering, index) => (
            <div key={index} className="mb-16 last:mb-0">
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