'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { blurPlaceholder } from '../../utils/blur-placeholder';

gsap.registerPlugin(ScrollTrigger);

const ServiceGallery = () => {
    const sectionRef = useRef();
    const col2Ref = useRef(null);
    const col3Ref = useRef(null);
    const col4Ref = useRef(null);
    const col5Ref = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 1200) {

            const section = sectionRef.current;

            const triggers = [];

            triggers.push(
                gsap.fromTo(
                    col2Ref.current,
                    { y: 0 },
                    {
                        y: -40,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 60%",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                )
            );

            triggers.push(
                gsap.fromTo(
                    col3Ref.current,
                    { y: 0 },
                    {
                        y: -120,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 60%",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                )
            );

            triggers.push(
                gsap.fromTo(
                    col4Ref.current,
                    { y: 0 },
                    {
                        y: -40,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 60%",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                )
            );

            triggers.push(
                gsap.fromTo(
                    col5Ref.current,
                    { y: 0 },
                    {
                        y: -60,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 60%",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                )
            );

            // Cleanup when component unmounts
            return () => {
                triggers.forEach(anim => {
                    anim.scrollTrigger?.kill();
                    anim.kill();
                });
            };
        }
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen bg-white py-10 px-5 md:px-10 lg:px-10 relative">
            <div className='flex justify-center items-center'>
                <div className="xl:grid  xl:grid-cols-5 gap-6 w-full relative">

                    {/* First Column */}
                    <div className="flex flex-row space-y-6 xl:block gap-4 md:gap-6 lg:gap-8  2xl:block">
                        <div className="flex-1 bg-[#012d3d] text-white p-4 md:p-6  rounded-2xl w-[28vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh]">
                            <p className="text-base md:text-xl">01 / <span className='text-gray-500'>05</span></p>
                            <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold pt-10 md:pt-24 lg:pt-20 xl:pt-28 2xl:pt-38 pb-4 md:pb-5">Tech Startups</h2>
                            <p className="text-[12px] md:text-base">Fueling growth with design-driven development.</p>
                        </div>
                        <div className='relative w-[19vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh]'>

                            <Image
                                width={500}
                                height={500}
                                placeholder='blur'
                                blurDataURL={blurPlaceholder}
                                src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/services-card-1.webp"
                                priority
                                loading="eager"
                                alt="service-1"
                                className="flex-1 h-full w-full  rounded-2xl object-cover bg-[#a8ff57]" />
                        </div>
                    </div>

                    {/* Second Column */}
                    <div ref={col2Ref} className="space-y-6 flex gap-4 md:gap-6 lg:gap-8  flex-row xl:block 2xl:block xl:mt-8 relative">

                        <Image
                            width={500}
                            height={500}
                            placeholder='blur'
                            blurDataURL={blurPlaceholder}
                            src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/services-card-2.webp"
                            priority
                            loading="eager"
                            alt="service-2"
                            className="flex-1 rounded-2xl w-[19vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh] object-cover bg-[#09e5e5] " />

                        <div className="flex-1 bg-[#071f2b] text-white p-4 md:p-6 rounded-2xl w-[28vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh]">
                            <p className="text-base md:text-xl">02 / <span className='text-gray-500'>05</span></p>
                            <h2 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-5xl  font-bold pt-10 md:pt-20 lg:pt-20 xl:pt-28 pb-2 md:pb-5">e-Commerce & Retail</h2>
                            <p className="text-[12px] md:text-base">Creating experiences that convert, not just look pretty.</p>
                        </div>

                    </div>

                    {/* Third Column */}
                    <div ref={col3Ref} className="space-y-6 flex flex-col mt-2 md:mt-3 xl:mt-0 xl:-mb-20  lg:justify-end">
                        <div className=" bg-[#012d3d] text-white p-4 md:p-6 rounded-2xl w-full h-[25vh] md:h-[40vh] lg:h-[45vh]">
                            <p className="text-base md:text-xl">03 / <span className='text-gray-500'>05</span></p>
                            <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold pt-12 md:pt-24 lg:pt-20 xl:pt-28 pb-2 md:pb-5">EdTech</h2>
                            <p className="text-sm md:text-base">Platforms that make learning addictive.</p>
                        </div>
                    </div>

                    {/* Fourth Column */}
                    <div ref={col4Ref} className="flex flex-row gap-4 md:gap-6 lg:gap-8  mt-5 lg:mt-8 xl:mt-8 space-y-6 xl:block 2xl:block ">
                        <div className="flex-1 bg-[#071f2b] text-white p-4 md:p-6 rounded-2xl w-[28vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh]">
                            <p className="text-base md:text-xl">04 / <span className='text-gray-500'>05</span></p>
                            <h3 className="text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl font-semibold pt-12 md:pt-24 lg:pt-20 xl:pt-30 2xl:pt-38 pb-4 md:pb-5">FinTech</h3>
                            <p className="text-[12px] md:text-base">Designing trust in every transaction.</p>
                        </div>
                        <div className='relative w-[19vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh]'>

                            <Image
                                width={500}
                                height={500}
                                placeholder='blur'
                                blurDataURL={blurPlaceholder}
                                src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/services-card-3.webp"
                                priority
                                loading="eager"
                                alt="service-3"
                                className="flex-1 w-full h-full rounded-2xl object-cover bg-[#09e5e5]"
                            />
                        </div>

                    </div>

                    {/* Fifth Column */}
                    <div className="space-y-6 flex gap-4 md:gap-6 lg:gap-8 flex-row xl:block 2xl:block relative">

                        <Image
                            width={500}
                            height={500}
                            placeholder='blur'
                            blurDataURL={blurPlaceholder}
                            src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/services-card-4.webp"
                            priority
                            loading="eager"
                            alt="services-4"
                            className="flex-1 rounded-2xl w-[19vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh] object-cover bg-[#a8ff57] " />

                        <div className="flex-1 bg-[#012d3d] text-white p-4 md:p-6 rounded-2xl w-[28vh] h-[35vh] md:w-auto md:h-[40vh] lg:h-[45vh]">
                            <p className="text-base md:text-xl">05 / <span className='text-gray-500'>05</span></p>
                            <h3 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-bold pt-10 md:pt-20 lg:pt-20 xl:pt-28 pb-4 md:pb-5">
                                Media & <span className="entertainment-small">Entertainment</span>
                            </h3>
                            <p className="text-[12px] md:text-base">Motion, design, and code that make stories come alive.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceGallery;
