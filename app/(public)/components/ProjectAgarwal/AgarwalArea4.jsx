'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);


const AgarwalArea4 = () => {

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
                        src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/work-details/agarwal/3.webp"
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
                    {/* Left Side - Client Info */}
                    <div className='lg:w-1/4'>
                    </div>

                    {/* descroption */}
                    <div className='lg:w-3/4 mt-10'>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                           Designed to reinforce trust and create a lasting professional impression.
                        </p>
                       <h2 ref={addToRefs} className='text-3xl lg:4xl font-extrabold mb-5 text-black'>
                            Website Design (UI/UX)
                        </h2>
                        <h2 ref={addToRefs} className='text-3xl font-bold mb-3 text-black'>
                            UX Strategy
                        </h2>

                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                            The website was crafted to provide users with a streamlined, transparent, and approachable experience. The goal was to simplify navigation while presenting important financial services with clarity.
                        </p>
                         <p
                            ref={addToRefs}
                            className='text-2xl mb-3 font-bold lg:pr-12'
                        >
                            UI/UX Highlights:
                        </p>

                        <ul
                            ref={addToRefs}
                            className='list-disc text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12 pl-6 leading-relaxed'
                        >
                            <li>Simple, structured layout with easy access to key services</li>
                            <li>Neutral colour palette supporting professionalism and trust</li>
                            <li>Readable typography scale for effortless content scanning</li>
                            <li>Optimised information architecture to guide users quickly to relevant sections</li>
                            <li>Mobile-responsive design ensuring seamless performance across devices</li>
                        </ul>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default AgarwalArea4;