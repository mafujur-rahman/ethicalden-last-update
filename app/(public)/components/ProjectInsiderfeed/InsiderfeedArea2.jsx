'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InsiderfeedArea2 = () => {
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
                <div className='lg:mr-10'>
                    <img
                        ref={imageRef}
                        src="/images/project-details/HNS_archive.jpg"
                        alt="Croatian Football Team"
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

export default InsiderfeedArea2;
