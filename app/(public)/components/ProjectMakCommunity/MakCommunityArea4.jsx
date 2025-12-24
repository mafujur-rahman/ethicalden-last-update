'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);


const MakCommunityArea4 = () => {

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
                        src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/work-details/mak-community/3.webp"
                        alt="Mak Community"
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
                        <h2 ref={addToRefs} className='text-3xl lg:4xl font-extrabold mb-5 text-black'>
                           Website Design (UI/UX)
                        </h2>
                        <h2 ref={addToRefs} className='text-3xl font-bold mb-3 text-black'>
                            Digital Experience Strategy
                        </h2>

                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                           We designed a website that feels supportive, approachable, and easy to navigate, mirroring the caregiving nature of the organisation.
                        </p>
                         <p
                            ref={addToRefs}
                            className='text-2xl mb-3 font-bold lg:pr-12'
                        >
                            Key UI/UX considerations:
                        </p>

                        <ul
                            ref={addToRefs}
                            className='list-disc text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12 pl-6 leading-relaxed'
                        >
                            <li>Calm, accessible colour system to create comfort and trust</li>
                            <li>Clear navigation structure built for all age groups</li>
                            <li>Readable typography scale suitable for community-wide audiences</li>
                            <li>Service-focused layout guiding users directly to the information they need</li>
                            <li>Fully responsive design, ensuring consistent behaviour across screen sizes</li>
                        </ul>

                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                           The website acts as a gentle, informative, and user-friendly touchpoint for families and individuals seeking enrichment services.
                        </p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default MakCommunityArea4;