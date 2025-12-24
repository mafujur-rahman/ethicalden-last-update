"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DigitalExpertis from "./digital-experties";

gsap.registerPlugin(ScrollTrigger);

const TheAgencyMain = () => {
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
        <div className='mt-16 container mx-auto'>
            {/* banner */}
            <div className='flex justify-around items-center gap-16 my-10'>
                <h2 ref={titleRef} className='text-7xl text-gray-400 font-extrabold flex-1/2'>{"Digital agency with a\nhuman touch.".split("").map((char, i) => (
                    <span
                        key={i}
                        ref={(el) => (charRefs.current[i] = el)}
                        className="mx-[1px] sm:mx-[2px]"
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}</h2>

                <p className='flex-1/2 text-2xl'>We believe in forging real-talk, fist-bump <br /> relationships with our clients and shaping <br /> their brands and products into amazing <br /> digital experiences.</p>
            </div>

            {/* digital experties section */}
            <DigitalExpertis />
        </div>
    );
};

export default TheAgencyMain;