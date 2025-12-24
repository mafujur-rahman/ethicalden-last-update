'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InsiderfeedArea6 = () => {
    
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
                <div className='lg:mr-10'>
                    <img
                    ref={imageRef}
                        src="/images/project-details/HNS_bus_blue-2.jpg"
                        alt="Croatian Football Team"
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

export default InsiderfeedArea6;