'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Recognition = () => {
    // GSAP title animation
    const titleRef = useRef(null);
    const charRefs = useRef([]);

    useEffect(() => {
        if (!charRefs.current.length) return;

        gsap.fromTo(
            charRefs.current,
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
                    start: 'top 90%',
                    end: 'top 50%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    const title = 'What We Brag About When No One’s Looking.';

    // video animation
    const wrapperRef = useRef(null);
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const video = videoRef.current;
        const videoContainer = videoContainerRef.current;

        if (!wrapper || !video || !videoContainer) return;

        let mm = gsap.matchMedia();

        // Animation for laptop and larger devices (1024px and up)
        mm.add("(min-width: 1024px)", () => {
            gsap.set(videoContainer, {
                width: '60%',
                margin: '0 auto',
                transformOrigin: 'center center',
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    start: '-=20%top top',
                    end: 'bottom',
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    markers: false,
                },
            });

            tl.to(videoContainer, {
                width: '100%',
                ease: 'power2.out',
            });

            // Cleanup function for this breakpoint
            return () => {
                tl.kill();
            };
        });

        // Styles for mobile/tablet (below 1024px)
        mm.add("(max-width: 1023px)", () => {
            // Reset any GSAP styles that might have been applied
            gsap.set(videoContainer, {
                width: '100%',
                margin: '0 auto',
            });
            
            // Make video responsive
            gsap.set(video, {
                width: '100%',
                height: 'auto',
            });
        });

        return () => {
            mm.revert(); // cleanup all media queries
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40 my-20 pt-[50px] md:pt-[100px] lg:pt-[120px] xl:pt-[150px] 2xl:pt-[190px]">
            <div className="text-center mb-12">
                <h2
                    ref={titleRef}
                    className="text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[90px] font-urbanist font-black leading-[1.06] mb-5 flex flex-wrap justify-center gap-x-1 gap-y-2"
                >
                    {title.split(' ').map((word, wi) => (
                        <span key={wi} className="flex whitespace-nowrap">
                            {word.split('').map((char, ci) => (
                                <span
                                    key={ci}
                                    ref={(el) => (charRefs.current[wi * 100 + ci] = el)}
                                    className="inline-block"
                                    style={char !== " " ? { letterSpacing: "-0.05em" } : {}}
                                >
                                    {char}
                                </span>
                            ))}
                            <span className="w-2 md:w-3" />
                        </span>
                    ))}
                </h2>

                <p className="text-black text-xl md:text-2xl font-helvetica">Who needs shiny trophies when you’ve got chaos, craft, and coffee-fueled wins that actually count?</p>
            </div>
            <div
                ref={wrapperRef}
                className=""
            >
                <div
                    ref={videoContainerRef}
                    className="overflow-hidden"
                >
                    <video
                        ref={videoRef}
                        loop
                        muted
                        autoPlay
                        playsInline
                        className="object-cover rounded-2xl w-full h-auto lg:h-[500px]"
                    >
                        <source src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/recognition.webm" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Recognition;