'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesArea from './ServicesArea';

import IndustryServices from './IndustryServices';
import TechStack from './TechStack';
import ServiceVideo from './ServiceVideo';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

const ServicesHome = () => {

    const titleRef = useRef(null);
    const charRefs = useRef([]);

    // for start scrollling top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // Title animation
    useEffect(() => {
        if (!charRefs.current.length) return;

        gsap.fromTo(charRefs.current,
            { color: 'gray' },
            {
                color: 'black',
                stagger: {
                    from: 'random',
                    each: 0.05,
                },
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                    end: "top 50%",
                    toggleActions: "play none none none",
                }
            }
        );
    }, []);


    return (
        <div>
            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 md:mt-40 lg:mt-50 xl:mt-60 2xl:mt-70 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-10 my-10'>
                    <h2
                        ref={titleRef}
                        className="text-left w-full  text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px]  2xl:text-[90px] font-urbanist font-black leading-[1.06]"
                    >
                        {"Creative Chaos, Controlled.".split(" ").map((word, wi) => (
                            <span key={wi} className="whitespace-nowrap inline-block mr-2 md:mr-3 lg:mr-4 xl:mr-5">
                                {word.split("").map((char, ci) => (
                                    <span
                                        key={ci}
                                        ref={(el) => (charRefs.current[wi * 100 + ci] = el)}
                                        className="inline-block"
                                        style={char !== " " ? { letterSpacing: "-0.05em" } : {}}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h2>


                    <p className='text-left text-xl md:text-2xl flex-1 lg:flex-2/3 font-ethosnova leading-relaxed text-black'>
                        Design. Code. Motion. Marketing. We bring the firepower that startups and scale-ups need to build, grow, and own their space in the digital jungle. Whatever you’re building, we’ve got your back.
                    </p>
                </div>
            </div>


            {/* service video */}
            <ServiceVideo />

            {/* services area */}
            <ServicesArea />

            {/* Industry services */}
            <IndustryServices />


            {/* techstack */}
            <TechStack />


            {/* footer */}
            <Footer />
        </div>
    );
};

export default ServicesHome;