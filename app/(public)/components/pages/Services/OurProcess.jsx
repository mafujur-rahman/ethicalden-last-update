import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);

const OurProcess = () => {
  const processRef = useRef(null);
  const numberRef = useRef(null);
  const numberInnerRef = useRef(null);
  const titleRef = useRef(null);
  const charRefs = useRef([]);


  useEffect(() => {
    const element = processRef.current;

    const getEndValue = () => {
      if (window.innerWidth < 325) {
        return '+=6800';
      } else if (window.innerWidth < 380) {
        return '+=6200';
      } else if (window.innerWidth < 450) {
        return '+=5700';
      } else if (window.innerWidth < 1220) {
        return '+=5000';
      } else {
        return '+=5500';
      }
    };



    ScrollTrigger.create({
      trigger: element,
      start: 'top center',
      end: getEndValue(),
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    const timeline = gsap.timeline();

    const animateTitle = (text) => {
      if (!titleRef.current) return;

      titleRef.current.innerHTML = '';
      charRefs.current = [];

      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.display = 'inline-block';
        span.style.color = 'gray';
        titleRef.current.appendChild(span);
        charRefs.current.push(span);
      });

      gsap.fromTo(
        charRefs.current,
        { color: 'white' },
        {
          color: 'gray',
          stagger: { from: 'random', each: 0.05 },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            end: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      );
    };

    const animateNumber = (newNumber, direction) => {
      const numberEl = numberInnerRef.current;

      const tl = gsap.timeline();

      tl.to(numberEl, {
        x: direction === 'up' ? 30 : -30,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          numberEl.innerText = newNumber;
        },
      }).to(numberEl, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const changeProcess = (number, title, direction = 'down') => {
      animateNumber(number, direction);
      animateTitle(title);
    };

    let lastScrollTop = 0;
    const handleScrollDirection = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? 'down' : 'up';
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      return direction;
    };

    animateTitle('Dream - It');

    gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: '+=1',
        onEnterBack: () => changeProcess('1', 'Dream - It', 'up'),
      },
    });

    const processes = [
      { class: '.second-process', number: '2', title: 'Design - It', previous: '1', previousTitle: 'Dream - It' },
      { class: '.third-process', number: '3', title: 'Build - It', previous: '2', previousTitle: 'Design - It' },
      { class: '.fourth-process', number: '4', title: 'Launch - It', previous: '3', previousTitle: 'Build - It' },
    ];

    processes.forEach(({ class: triggerClass, number, title, previous, previousTitle }) => {
      timeline.add(
        gsap.timeline({
          scrollTrigger: {
            trigger: triggerClass,
            start: '-=60% top',
            end: '+=100',
            onUpdate: (self) => {
              const direction = handleScrollDirection();
              if (direction === 'down' && self.progress > 0.5) {
                changeProcess(number, title, direction);
              } else if (direction === 'up' && self.progress < 0.5) {
                changeProcess(previous, previousTitle, direction);
              }
            },
          },
        })
      );
    });

    timeline.add(
      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'bottom center',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }).to(element, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      })
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      timeline.kill();
    };
  }, []);

  return (
    <div className="relative mt-40 lg:mt-70 px-5 md:px-10 lg:px-10 xl:max-w-screen-xl xl:mx-auto min-h-screen">
      <div ref={processRef} className="flex flex-col justify-center items-center  z-0">
        <p className="bg-[#09e5e5] p-9 h-20 w-20 flex justify-center items-center text-gray-200 border border-[#09e5e5] rounded-full overflow-hidden">
          <span
            ref={numberRef}
            className="text-2xl font-bold text-black relative w-full h-full flex items-center justify-center"
          >
            <span ref={numberInnerRef} className="inline-block">1</span>
          </span>
        </p>
        <p className="text-2xl md:text-3xl font-extrabold font-helvetica leading-[1] text-[#09e5e5]">Our Process</p>
        <h2 ref={titleRef} style={{ letterSpacing: "-.05em" }} className="text-5xl md:text-8xl 2xl:text-[220px] font-helvetica font-extrabold text-gray-300"></h2>
      </div>

      {/* 1st Process */}
      <div className="relative z-10 flex gap-3 md:gap-30 lg:gap-60 items-center mb-96 mt-40">
        <div className="flex flex-1 h-full items-center justify-center -mb-[600px] relative">

          <Image
            width={450}
            height={450}
            placeholder='blur'
            blurDataURL={blurPlaceholder}
            className="bg-[#09e5e5] object-cover"
            priority
            loading="eager"
            src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/process-1.webp" alt="" />
        </div>

        <div className="flex-1">
          <ul className="bg-[#a8ff57] p-3 md:p-5 lg:p-8 xl:p-16 h-full flex flex-col justify-center list-disc list-inside">
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We start by diving deep into your vision, goals, and what keeps you up at night.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We ask the uncomfortable questions that shape stronger ideas.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We map out user needs, pain points, and opportunities for magic.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We explore different creative directions without fear of wild ideas.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We create a plan that balances creativity, strategy, and ambition.</li>
          </ul>
        </div>
      </div>

      {/* 2nd Process */}
      <div className="second-process relative z-10 flex gap-3 md:gap-30 lg:gap-60 items-center mb-96 pt-96 ">
        <div className="flex-1">
          <ul className="bg-cyan-300 p-3 md:p-5 lg:p-8 xl:p-16 h-full flex flex-col justify-center list-disc list-inside">
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We turn ideas into wireframes that are more blueprint than guesswork.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We craft UI designs that are as beautiful as they are intuitive.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We obsess over the little details colors, fonts, micro-interactions because they matter.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We prototype the experience to get real user feedback before you build.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We iterate fast, refining designs until they’re ready to shine</li>
          </ul>
        </div>

        <div className="flex flex-1 h-full items-center justify-center -mb-[600px] relative">

          <Image
            width={450}
            height={450}
            placeholder='blur'
            blurDataURL={blurPlaceholder}
            className="bg-[#a8ff57] object-cover"
            priority
            loading="eager"
            src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/process-2.webp"
            alt="" />
        </div>
      </div>

      {/* 3rd Process */}
      <div className="third-process relative z-10 flex gap-3 md:gap-30 lg:gap-60 items-center mb-96 pt-96">
        <div className="flex flex-1 h-full items-center justify-center -mb-[600px] relative">
          <Image
            width={450}
            height={450}
            placeholder='blur'
            blurDataURL={blurPlaceholder}
            className="bg-cyan-300 object-cover"
            priority
            loading="eager"
            src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/process-3.webp"
            alt="" />
        </div>

        <div className="flex-1">
          <ul className="bg-[#a8ff57] p-3 md:p-5 lg:p-8 xl:p-16 h-full flex flex-col justify-center list-disc list-inside">
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We bring designs to life with clean, scalable, and lightning-fast code.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We pick the right stack for your project, not just the trendiest one.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We integrate third-party tools and APIs seamlessly.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We test across devices and browsers to make sure everything just works.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We collaborate closely, sharing progress and keeping surprises to a minimum.</li>
          </ul>
        </div>
      </div>

      {/* 4th Process */}
      <div className="fourth-process relative z-10 flex gap-3 md:gap-30 lg:gap-60 items-center mb-24 md:mb-28 lg:mb-40 pt-96">
        <div className="flex-1">
          <ul className="bg-cyan-300 p-3 md:p-5 lg:p-8 xl:p-16 h-full flex flex-col justify-center list-disc list-inside">
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We deploy your project on secure, scalable infrastructure.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We fine-tune performance so it loads fast and stays stable.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We monitor for bugs, fix issues on the fly, and keep things smooth.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We set up analytics and feedback loops so you can measure what matters.</li>
            <li className="text-xl xl:text-2xl font-helvetica font-medium py-2">We stay on as your creative tech partner, helping you grow and evolve.</li>
          </ul>
        </div>

        <div className="flex flex-1 h-full items-center justify-center -mb-[600px] relative">

          <Image
            width={450}
            height={450}
            placeholder='blur'
            blurDataURL={blurPlaceholder}
            className="bg-[#a8ff57] object-cover"
            priority
            loading="eager"
            src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/process-4.webp"
            alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
