'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);

const HealingArea5 = () => {


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
                        src="https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/project-details/healing-home/ph-4.jpg?updatedAt=1750068757718"
                        alt="Croatian Football Team"
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
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                            And we didn’t stop there.
                        </p>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                            With the Qatar World Cup just around the corner at the time, we overhauled the design of HNS social media posts, including match results, team rosters, quotes from players and coaches and many more. But the best part was yet to come. When the Croatian national team won the bronze medal at the World Cup, we designed the celebration bus that was used in the parade when the team came back to Croatia and celebrated with hundreds of thousands of fans.
                        </p>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                            Even though most of our work was done, our collaboration with HNS continues to this day. In 2024 we hooked up again for International Women’s Day, for purposes of the “Women have a place in football” campaign, promoting women’s role in today’s football.
                        </p>
                        <h2 ref={addToRefs} className='text-3xl font-extrabold mb-5 text-black'>
                            Prologue
                        </h2>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                            Although at times it looked like we would never get it done on time, we are incredibly proud to have shared and been part of this incredible journey, to create a website that will follow this great football team through its challenges in the next decade.
                        </p>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'>
                            And who knows, if the opportunity knocks the third time, we might just take it again. Sorry, Eminem…
                        </p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default HealingArea5;