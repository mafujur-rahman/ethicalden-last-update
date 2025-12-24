'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);

const HealingArea2 = () => {
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
                        src="https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/project-details/healing-home/ph-1.jpg?updatedAt=1750068729938"
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
                    <div className='lg:w-1/4'></div>

                    {/* Description */}
                    <div className='lg:w-3/4 mt-10'>
                        <p
                            ref={addToParagraphRefs}
                            className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'
                        >
                            With such firm foundation blocks in place, we designed a state-of-the-art responsive website offering unprecedented amount of information about the national football team, its players and the football federation in general.
                        </p>
                        <p
                            ref={addToParagraphRefs}
                            className='text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12'
                        >
                            The website lasted more than eight successful years, following the Croatian team through some of the best moments of its rich history, including the three world cups (2014, 2018 and 2022) and two European Championships (2016 and 2020).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealingArea2;
