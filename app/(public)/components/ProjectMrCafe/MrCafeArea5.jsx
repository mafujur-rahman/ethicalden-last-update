'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);

const MrCafeArea5 = () => {


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
                        src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/work-details/mr-cafe/details-img-4.webp"
                        alt="Mr Cafe"
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
                        {/* <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                            And we didn’t stop there.
                        </p>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                            With the Qatar World Cup just around the corner at the time, we overhauled the design of HNS social media posts, including match results, team rosters, quotes from players and coaches and many more. But the best part was yet to come. When the Croatian national team won the bronze medal at the World Cup, we designed the celebration bus that was used in the parade when the team came back to Croatia and celebrated with hundreds of thousands of fans.
                        </p>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                            Even though most of our work was done, our collaboration with HNS continues to this day. In 2024 we hooked up again for International Women’s Day, for purposes of the “Women have a place in football” campaign, promoting women’s role in today’s football.
                        </p> */}

                        {/* <h2 ref={addToRefs} className='text-3xl font-extrabold mb-5 text-black'>
                            Website Design & Development
                        </h2>

                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                            We designed a user-centric website that mirrors the offline cafe experience in an intuitive digital flow.
                        </p>

                        <p
                            ref={addToRefs}
                            className='text-2xl mb-8 font-bold lg:pr-12'
                        >
                            UI/UX Highlights
                        </p>

                        <ul
                            ref={addToRefs}
                            className='list-disc text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12 pl-6 leading-relaxed'
                        >
                            <li>Clean, modern interface with a focus on visual storytelling</li>
                            <li>Smooth navigation architecture for frictionless user journeys</li>
                            <li>Interactive menu experience for easy exploration</li>
                            <li>Mobile-first layout for seamless cross-device performance</li>
                            <li>Optimised UI components for scalability and easy updates</li>
                        </ul> */}

                        <h2 ref={addToRefs} className='text-3xl font-extrabold mb-5 text-black'>
                            Social Media Design & Management
                        </h2>

                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                           To enhance Mr Cafe’s digital footprint, we developed a consistent social media language.

                        </p>

                        <p
                            ref={addToRefs}
                            className='text-2xl mb-8 font-bold lg:pr-12'
                        >
                            Deliverables
                        </p>

                        <ul
                            ref={addToRefs}
                            className='list-disc text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12 pl-6 leading-relaxed'
                        >
                            <li>Cohesive visual templates based on the brand system</li>
                            <li>High-engagement content focusing on food, ambience, and community vibes</li>
                            <li>Platform-specific layouts optimised for readability and retention</li>
                            <li>Consistent typography, colour palette, and graphic elements</li>
                        </ul>

                        <h2 ref={addToRefs} className='text-3xl font-extrabold mb-5 text-black'>
                            Outcome
                        </h2>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                            Ethical Den delivered a complete brand and digital experience ecosystem for Mr Cafe, ensuring every touchpoint, from print to digital, speaks the same design language. The result is a warm, cohesive, and aesthetically engaging brand presence that enhances customer experience both offline and online.
                        </p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default MrCafeArea5;