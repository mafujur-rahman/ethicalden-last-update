'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);

const EmopractArea3 = () => {
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
                        src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/work-details/emopract/2.webp"
                        alt="Emopract"
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
                       <p
                            ref={addToRefs}
                            className='text-2xl mb-3 font-bold lg:pr-12'
                        >
                            Key UI/UX Elements:
                        </p>

                        <ul
                            ref={addToRefs}
                            className='list-disc text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12 pl-6 leading-relaxed'
                        >
                            <li>Clean, calming interface with spacious layouts</li>
                            <li>Accessible font sizes suitable for all age groups</li>
                            <li>Soft colour gradients aligned with trust and wellness</li>
                            <li>Clear information hierarchy to simplify decision-making</li>
                            <li>Guided user pathways for services, appointments, and support</li>
                            <li>Mobile-responsive design ensuring comfort across devices</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmopractArea3;
