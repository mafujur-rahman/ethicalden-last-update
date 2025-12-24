'use client'
import React, { useEffect, useRef } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HealingArea = () => {
    const firstPRef = useRef(null);
    const paragraphRefs = useRef([]);

    useEffect(() => {
        //Word-by-word animation for the first paragraph
        const firstP = firstPRef.current;
        const words = firstP.innerText.split(' ');

        firstP.innerHTML = words
            .map(word => `<span class="word" style="opacity:0; display:inline-block; margin-right:6px;">${word}</span>`)
            .join(' ');

        gsap.to(firstP.querySelectorAll('.word'), {
            scrollTrigger: {
                trigger: firstP,
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
            },
            opacity: 1,
            stagger: 0.1,
            ease: 'power2.out',
            duration: 1,
        });

        //Animate other paragraphs from bottom to position
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

    // Utility to collect refs
    const addToRefs = (el) => {
        if (el && !paragraphRefs.current.includes(el)) {
            paragraphRefs.current.push(el);
        }
    };

    return (
        <div className='mt-20 mb-10 px-5 md:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between gap-10'>

                {/* Left Side - Client Info */}
                <div className='lg:w-1/4'>
                    <p className='text-gray-500 mb-2 font-medium'>Client</p>
                    <p className='text-xl font-bold text-black'>Croatian Football Federation</p>
                </div>

                {/* Middle Section - Description */}
                <div className='lg:w-3/4 flex gap-5'>
                    <div>
                        <p
                            ref={firstPRef}
                            className='text-xl lg:text-3xl mb-8 text-black leading-relaxed'
                        >
                            “You only get one shot, do not miss your chance to blow. This opportunity comes once in a lifetime, yo.” While we do appreciate what our friend Eminem is trying to say, we’re proud to say that we got not one but two opportunities to design the Croatian national football team’s website. And boy did we embrace both of them.
                        </p>

                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                            Our cooperation with Croatian Football Federation dates back to 2013 when they trusted us with overhauling their entire visual identity. Not an easy feat by all means. The traditional Croatian red and white squares have been omnipresent and widely recognized in the world of football ever since Croatia became an independent state.
                        </p>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                            Croatian national football team is more than just a sports team. For millions of Croatian football fans they’ve become an icon they identify with, a world renowned team that punches well above its weight and brings joy to all generations.
                        </p>

                        <h2 ref={addToRefs} className='text-3xl font-extrabold mb-5 text-black'>
                            Chapter One
                        </h2>

                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                            So where did we start? From the beginning of course. First we spruced up the HNS badge and gave it some new shine and depth, while keeping its traditional and well known shape intact. With that done, it was time for the real deal.
                        </p>
                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                            Our graphic design team crafted a stunning new brand identity that pays homage to tradition while setting its sights firmly on the future. We built detailed branding guidelines to prepare the HNS brand for every possible challenge in the years to come.
                        </p>
                    </div>

                    

                </div>
            </div>
        </div>
    );
};

export default HealingArea;
