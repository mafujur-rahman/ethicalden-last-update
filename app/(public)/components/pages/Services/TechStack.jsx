'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const techs = [
    { id: 1, name: 'Adobe', profession: 'Creative', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/adobe.svg' },
    { id: 2, name: 'AWS', profession: 'Develop', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/aws.svg' },
    { id: 3, name: 'Cloud Flare', profession: 'Deliver', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/cloud-flare.svg' },
    { id: 4, name: 'Firebase', profession: 'Deliver', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/firebase.svg' },
    { id: 5, name: 'Github', profession: 'Deliver', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/github.svg' },
    { id: 6, name: 'React JS', profession: 'Develop', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/react-js.webp' },
    { id: 7, name: 'Next JS', profession: 'Develop', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/next-js.webp' },
    { id: 8, name: 'HTML', profession: 'Develop', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/html.webp' },
    { id: 9, name: 'CSS', profession: 'Develop', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/CSS.png' },
    { id: 10, name: 'React Native', profession: 'Develop', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/react-native.webp' },
    { id: 11, name: 'Python', profession: 'Develop', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/pythone.webp' },
    { id: 12, name: 'DJango', profession: 'Develop', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/tech-logos/django.webp' },
  ];

  const shouldShowtech = (tech) => activeFilter === 'All' || tech.profession === activeFilter;

  const titleRef = useRef(null);
  const charRefs = useRef([]);

  useEffect(() => {
    if (!charRefs.current.length) return;

    gsap.fromTo(
      charRefs.current,
      { color: 'gray' },
      {
        color: 'black',
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
  }, []);

  const title = 'Our Tech Stack';

  return (
    <section className="px-5 md:px-10 lg:px-15 xl:px-30 2xl:px-50 py-12 pt-[150px] md:pt-[200px] lg:pt-[230px] xl:pt-[250px] 2xl:pt-[270px]">
      <div className="text-center mb-12">
        <h2
          ref={titleRef}
          className="text-[32px] sm:text-[36px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[90px] font-urbanist font-black leading-[1.06] mb-4 flex flex-wrap justify-center gap-x-2 gap-y-3"
        >
          {title.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="whitespace-nowrap flex mr-1 md:mr-3 lg:mr-4 xl:mr-5">
              {word.split('').map((char, charIndex) => (
                <span
                  key={charIndex}
                  ref={(el) => (charRefs.current[wordIndex * 100 + charIndex] = el)}
                  style={{ letterSpacing: '-0.05em' }}
                  className="inline-block"
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h2>

        <p className="font-helvetica text-black text-xl md:text-2xl">
          All the wizardry behind our work
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-start md:justify-center mb-12">
        <div className="flex flex-col justify-center w-full md:flex-row gap-4 font-helvetica font-bold">
          {['All', 'Creative', 'Deliver', 'Develop'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 font-rota text-2xl md:text-3xl rounded-4xl transition-colors ${activeFilter === filter
                  ? 'bg-[#9EFCF1] text-black'
                  : 'bg-white text-black hover:bg-gray-100'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {techs.map((tech) => {
          const isActive = shouldShowtech(tech);

          return (
            <div
              key={`${tech.id}-${tech.imageUrl}`}
              className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${isActive ? 'grayscale-0' : 'grayscale pointer-events-none'
                }`}
            >
              <div className="relative aspect-square w-full flex items-center justify-center bg-gray-100 rounded-xl p-8">

                <Image
                  src={tech.imageUrl}
                  alt={tech.name}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                  priority
                  loading="eager"
                  className="h-[80%] w-[80%] object-contain md:h-[85%] md:w-[85%] 2xl:h-[95%] 2xl:w-[95%] z-20"
                />

                {/* Label */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                    <div className="flex flex-col items-center text-center">
                      <span className="font-bold font-helvetica text-black text-lg whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
