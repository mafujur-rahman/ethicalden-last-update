'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);

const MarziiArea5 = () => {


    const imageRef = useRef(null);
    const paragraphRefs = useRef([]);


    useEffect(() => {
        // Animate image
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

        // Animate paragraphs
        paragraphRefs.current.forEach((el) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    scrollTrigger: {
                        trigger: el,
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

    const addToRefs = (el) => {
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
                        src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/work-details/marzii/details-img-4.webp"
                        alt="Marzii"
                        width={1270}
                        height={630}
                        placeholder='blur'
                        blurDataURL={blurPlaceholder}
                        className="w-full shadow-md mb-6"
                        style={{ marginLeft: 'auto', marginRight: '0' }}
                        priority
                        loading="eager"
                    />

                </div>

                <div className='flex flex-col lg:flex-row justify-between gap-10'>
                    {/* Left Side - Client Info */}
                    <div className='lg:w-1/4'>
                    </div>

                    {/* descroption */}
                    <div className='lg:w-3/4 mt-10'>
                        <h2 ref={addToRefs} className='text-3xl font-extrabold mb-3 text-black'>
                            Social Media Design System
                        </h2>

                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                            We developed a digital visual system that feels bold, youthful, and consistent.
                        </p>
                        <p
                            ref={addToRefs}
                            className='text-2xl mb-3 font-bold lg:pr-12'
                        >
                            Using a UI/UX-led approach:
                        </p>

                        <ul
                            ref={addToRefs}
                            className='list-disc text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12 pl-6 leading-relaxed'
                        >
                            <li>Modular grid structures</li>
                            <li>Consistent spacing & alignment patterns</li>
                            <li>High-contrast compositions for product highlights</li>
                            <li>Engaging layouts for offers, launches & lifestyle content</li>
                        </ul>

                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                            The result: a cohesive social presence that enhances brand visibility and user engagement.
                        </p>

                        <h2 ref={addToRefs} className='text-3xl font-extrabold mb-5 text-black'>
                            Outcome
                        </h2>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                            A unified, scalable brand experience across offline and online touchpoints.
                        </p>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                            Ethical Den delivered a complete identity system that positions Marzii as a modern, expressive men’s clothing brand with a strong, memorable visual voice.
                        </p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default MarziiArea5;