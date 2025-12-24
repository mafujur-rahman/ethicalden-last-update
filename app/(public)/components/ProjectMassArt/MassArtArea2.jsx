'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);

const MassArtArea2 = () => {
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
                        src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/work-details/massArt/1.webp"
                        alt="“massArt"
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
                    <div className='lg:w-1/4'></div>

                    {/* Description */}
                    <div className='lg:w-3/4 mt-10'>
                        <h2 ref={addToParagraphRefs} className='text-3xl lg:4xl font-extrabold mb-5 text-black'>
                            Website Design & Development (UI/UX)
                        </h2>
                        <h2 ref={addToParagraphRefs} className='text-3xl font-bold mb-3 text-black'>
                            Design Philosophy
                        </h2>

                        <p ref={addToParagraphRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                            The website was designed to feel immersive, cultural, and visually powerful — reflecting the artistic excellence of Durga Puja.
                        </p>
                         <p
                            ref={addToParagraphRefs}
                            className='text-2xl mb-3 font-bold lg:pr-12'
                        >
                            Key UI/UX Elements:
                        </p>

                        <ul
                            ref={addToParagraphRefs}
                            className='list-disc text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12 pl-6 leading-relaxed'
                        >
                            <li>Bold visual storytelling using high-impact imagery and festival colours</li>
                            <li>Clean section architecture for easy access to statistics, history, events, and art installations</li>
                            <li>Grid-based layouts to balance content density with clarity</li>
                            <li>Modern typography scale highlighting cultural narratives and key insights</li>
                            <li>Responsive design ensuring smooth experience across mobile, tablet, and desktop</li>
                            <li>Optimised performance for image-heavy pages showcasing pandals and artwork</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MassArtArea2;
