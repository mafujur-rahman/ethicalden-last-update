'use client'
import React, { useEffect, useRef } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation'; 

const HealingBanner = () => {
    const router = useRouter(); 

    // button animation
    const arrowOutRef = useRef(null);
    const arrowInRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(arrowOutRef.current, {
            x: -30,
            opacity: 0,
            duration: 0.3,
        });
        gsap.fromTo(
            arrowInRef.current,
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.3 }
        );
    };

    const handleMouseLeave = () => {
        gsap.to(arrowInRef.current, {
            x: 30,
            opacity: 0,
            duration: 0.3,
        });
        gsap.to(arrowOutRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.3,
        });
    };

    // Handle button click to go back
    const handleGoBack = () => {
        router.back(); 
    };

    // title animation
    const titleRef = useRef(null);
    const charRefs = useRef([]);

    // Title animation
    useEffect(() => {
        if (!charRefs.current.length) return;

        gsap.fromTo(charRefs.current,
            { color: 'gray' },
            {
                color: 'black',
                stagger: {
                    from: 'random',
                    each: 0.05,
                },
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                    end: "top 50%",
                    toggleActions: "play none none none",
                }
            }
        );
    }, []);

    return (
        <div>
            <button
                className="relative w-20 h-20 border border-gray-300 rounded-full overflow-hidden hover:border-[#111]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleGoBack} // Add onClick handler
            >
                {/* Arrow that moves out to the left */}
                <span
                    ref={arrowOutRef}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <FaArrowLeftLong className="text-xl" />
                </span>

                {/* Arrow that comes in from the right */}
                <span
                    ref={arrowInRef}
                    className="absolute inset-0 flex items-center justify-center opacity-0"
                >
                    <FaArrowLeftLong className="text-xl" />
                </span>
            </button>

            <div className='mt-10 lg:mt-20 lg:flex lg:justify-between'>
                <div className='flex-1'>
                    <p className='text-gray-600 mb-3 font-bold'>Project:</p>
                    <h2
                        ref={titleRef}
                        className="  text-4xl md:text-5xl lg:text-6xl xl:text-7xl   font-urbanist font-extrabold leading-[1.06]"
                    >
                        {"Healing Home Healthcare LLC : Creating the Worlds Most Recognizable Sports Identity".split(" ").map((word, wi) => (
                            <span
                                key={wi}
                                className="inline-block whitespace-nowrap mr-2 md:mr-3 lg:mr-4 xl:mr-5" 
                            >
                                {word.split("").map((char, ci) => (
                                    <span
                                        key={ci}
                                        ref={(el) => (charRefs.current[wi * 100 + ci] = el)}
                                        className="inline-block"
                                        style={{ letterSpacing: "-0.05em" }} 
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h2>
                </div>
                <div className='flex flex-1 mt-10 lg:mt-0 lg:justify-end justify-between lg:gap-30'>
                    <ul>
                        <li className='text-gray-600 mb-3 font-bold'>Services Provided :</li>
                        <li className='text-xl font-bold mb-1'>Web site</li>
                        <li className='text-xl font-bold mb-1'>Social Media</li>
                        <li className='text-xl font-bold mb-1'>Branding</li>
                    </ul>
                    <ul>
                        <li className='text-gray-600 mb-3 font-bold'>Industry :</li>
                        <li className='text-xl font-bold mb-1'>Sport</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HealingBanner;