"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React from 'react';
import AboutUsVideo from "./AboutUsVideo";
import AboutUsArea from "./AboutUsArea";
import MeetTheCrew from "./MeetTheCrew";
import Recognition from "./Recognition";
import AwardsSection from "./AwardSection";

import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import OurProducts from "../../OurProducts/OurProducts";

gsap.registerPlugin(ScrollTrigger);

const AboutUsHome = () => {

    const titleRef = useRef(null);
    const charRefs = useRef([]);


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
        <div className="">

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 md:mt-40 lg:mt-50 xl:mt-60 2xl:mt-70 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-10 my-10'>
                    <h2
                        ref={titleRef}
                        className="text-left w-full  text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px]  2xl:text-[90px] font-urbanist font-black leading-[1.06]"
                    >
                        {"A Team That Feels Like Yours.".split(" ").map((word, wi) => (
                            <span
                                key={wi}
                                className="inline-block whitespace-nowrap mr-2 md:mr-3 lg:mr-4 xl:mr-5" 
                            >
                                {word.split("").map((char, ci) => (
                                    <span
                                        key={ci}
                                        ref={(el) => (charRefs.current[wi * 100 + ci] = el)}
                                        className="inline-block"
                                        style={{ letterSpacing: "-0.05em" }} 
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h2>


                    <p className='text-left text-lg sm:text-xl md:text-2xl flex-1 lg:flex-2/3 font-ethosnova leading-relaxed font-helvetica text-black'>
                        From design-first thinking to code-level execution, we help startups build smarter and move faster. Based in Kolkata and Bangalore, driven is everywhere.
                    </p>
                </div>
            </div>


            {/* about us video */}
            <AboutUsVideo />

            {/* about us area */}
            <AboutUsArea />

            {/* meet the crew */}
            <MeetTheCrew />

            {/* recognition */}
            <Recognition />

            {/* award section */}
            <AwardsSection />

            {/* our products*/}
            <OurProducts />

            {/* footer */}
            <Footer />
        </div>
    );
};

export default AboutUsHome;