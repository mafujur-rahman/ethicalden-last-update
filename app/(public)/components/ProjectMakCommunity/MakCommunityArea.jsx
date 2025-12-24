'use client'
import React, { useEffect, useRef } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MakCommunityArea = () => {
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
                    <p className='text-xl font-bold text-black'>Project Overview</p>
                </div>

                {/* Middle Section - Description */}
                <div className='lg:w-3/4 flex gap-5'>
                    <div>
                        <p
                            ref={firstPRef}
                            className='text-xl lg:text-3xl mb-8 text-black leading-relaxed'
                        >
                            “Mak Community is an enrichment and caregiving organisation committed to supporting individuals with empathy, dignity, and personalised care. Ethical Den partnered with Mak Community to design an end-to-end visual identity and a digital presence that reflects warmth, trust, and accessibility across every user touchpoint.
                        </p>

                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                           Our focus is on creating a consistent, human-centred brand ecosystem grounded in clarity and emotional resonance.
                        </p>
                        <h2 ref={addToRefs} className='text-3xl lg:4xl font-extrabold mb-5 text-black'>
                            Brand Identity System
                        </h2>
                        <h2 ref={addToRefs} className='text-3xl font-bold mb-3 text-black'>
                            Logo Design
                        </h2>

                        <p ref={addToRefs} className='text-xl lg:text-2xl mb-8 text-gray-800'>
                            We crafted a heart-driven logo supported by gentle, upward-holding hands — a visual metaphor for care, upliftment, and community support.
                        </p>
                         <p
                            ref={addToRefs}
                            className='text-2xl mb-3 font-bold lg:pr-12'
                        >
                            UI/UX-informed principles included:
                        </p>

                        <ul
                            ref={addToRefs}
                            className='list-disc text-xl lg:text-2xl mb-8 text-gray-800 lg:pr-12 pl-6 leading-relaxed'
                        >
                            <li>Soft, reassuring colour palette (yellow + purple) for warmth & credibility</li>
                            <li>Clean, symmetrical iconography for easy recognition</li>
                            <li>Screen-friendly typography optimised for clarity</li>
                            <li>Scalable structure that adapts seamlessly across digital and print formats</li>
                        </ul>
                    </div>

                    

                </div>
            </div>
        </div>
    );
};

export default MakCommunityArea;
