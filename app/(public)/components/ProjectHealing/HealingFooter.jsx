'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

const HealingFooter = () => {
    const sectionRef = useRef(null);
    const hasNavigated = useRef(false);
    const router = useRouter();


    const handleNavigation = () => {
        if (hasNavigated.current) return;

        hasNavigated.current = true;
        gsap.to(sectionRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
                router.push('/project-massArt');
            }
        });
    };

    // Handle scroll to bottom detection
    const handleScroll = () => {
        if (hasNavigated.current) return;

        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 10;

        if (atBottom) {
            handleNavigation();
        }
    };

    // Handle wheel events when section is fully visible
    const handleWheel = (e) => {
        if (hasNavigated.current) return;

        // Check if section is fully visible
        const rect = sectionRef.current.getBoundingClientRect();
        const isFullyVisible = (
            rect.top >= 0 &&
            rect.bottom <= window.innerHeight
        );

        if (isFullyVisible) {
            handleNavigation();
        }
    };

    useEffect(() => {
        // Only add scroll event if you want bottom detection
        window.addEventListener('scroll', handleScroll);
        // Add wheel event for immediate response when fully visible
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);



    return (
        <div
            ref={sectionRef}
            className="relative w-full xl:min-h-screen transition-opacity duration-500"
        >


            {/* Background Image */}
            <Image
                src="https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/project-details/banner(5).jpg?updatedAt=1750065619605"
                alt="Project Banner"
                width={1920}
                height={952}
                className="w-full h-auto"
                placeholder='blur'
                blurDataURL={blurPlaceholder}
                priority
                loading="eager"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content aligned to top */}
            <div className="absolute top-0 left-0 right-0 z-10 pt-10 md:pt-16 lg:mt-10 xl:mt-16 2xl:mt-20 px-5 md:px-10 lg:px-16 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto text-center">
                <p className="text-white text-xl font-semibold mb-2">Next Project:</p>
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] text-4xl md:text-6xl font-bold">massArt</h1>
                <p className="text-white mt-4">Scroll down to continue</p>
            </div>
        </div>
    );
};

export default HealingFooter;