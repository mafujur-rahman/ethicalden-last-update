'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);

const AgarwalArea2 = () => {
    const imageRef = useRef(null);
    const paragraphRefs = useRef([]);

    useEffect(() => {
        // Animate image from bottom
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, y: 50 },
                {
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                }
            );
        }

        // Animate paragraphs from bottom
        paragraphRefs.current.forEach((ref) => {
            if (!ref) return;
            gsap.fromTo(
                ref,
                { opacity: 0, y: 50 },
                {
                    scrollTrigger: {
                        trigger: ref,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                }
            );
        });
    }, []);

    const addToParagraphRefs = (el) => {
        if (el && !paragraphRefs.current.includes(el)) {
            paragraphRefs.current.push(el);
        }
    };

    return (
        <div className=' mb-10 px-5 md:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
            <div className=''>
                <div className='lg:mr-10 relative'>


                    <Image
                        ref={imageRef}
                        src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/work-details/agarwal/1.webp"
                        alt="Agarwal Tibrewal"
                        width={1270}
                        height={630}
                        placeholder='blur'
                        blurDataURL={blurPlaceholder}
                        priority
                        loading="eager"
                        className="w-full shadow-md mb-6"
                        style={{ marginLeft: 'auto', marginRight: '0' }}
                    />
                </div>

                <div className='flex flex-col lg:flex-row justify-between gap-10'>
                    <div className='lg:w-1/4'></div>

                    {/* Description */}
                    <div className='lg:w-3/4 mt-10'>
                        <p
                            ref={addToParagraphRefs}
                            className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'
                        >
                            The final logo communicates confidence, precision, and reliability, core values of the firm.
                        </p>
                        <h2 ref={addToParagraphRefs} className='text-3xl lg:4xl font-extrabold mb-5 text-black'>
                            Print Collateral
                        </h2>
                        <h2 ref={addToParagraphRefs} className='text-3xl font-bold mb-3 text-black'>
                            Letterhead Design
                        </h2>

                        <p ref={addToParagraphRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                            Minimal, structured, and aligned with the brand’s professional tone.
                        </p>

                        <ul
                            ref={addToParagraphRefs}
                            className='list-disc text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12 pl-6 leading-relaxed'
                        >
                            <li>Crisp layout</li>
                            <li>Clear typographic hierarchy</li>
                            <li>Strong icon-to-type balance</li>
                            <li>Ample spacing for a clean, premium look</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgarwalArea2;
