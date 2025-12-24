import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const MoreAboutProject = ({ onSubmit, nameRef, companyRef, emailRef, phoneRef }) => {
    const projectAboutRef = useRef(null);
    const budgetRef = useRef(null);
    const findUsRef = useRef(null);
    const [budget, setBudget] = useState('');
    const [findUs, setFindUs] = useState('');
    const [privacyPolicy, setPrivacyPolicy] = useState(false);

    const budgetOptions = [
        'Under $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        'Above $50,000'
    ];

    const findUsOptions = [
        'word of mouth',
        'Facebook',
        'Instagram',
        'I just googled it',
        'Linkdin',
        'other'
    ];


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
           name: nameRef?.current?.value || '',
            company: companyRef?.current?.value || '',
            email: emailRef?.current?.value || '',
            phone: phoneRef?.current?.value || '',
            budget: budgetRef.current.value,
            projectAbout: projectAboutRef.current.value,
            findUs: findUsRef.current.value,
            privacyPolicy
        };
        onSubmit(formData);
    };


    const handleFocus = (e) => {
        const placeholder = e.target.previousElementSibling;
        if (placeholder) {
            gsap.to(placeholder, {
                y: -15,
                fontSize: '14px',
                color: 'white',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    const handleBlur = (e) => {
        const placeholder = e.target.previousElementSibling;
        if (placeholder && !e.target.value) {
            gsap.to(placeholder, {
                y: 0,
                fontSize: '20px',
                color: 'rgb(209 213 219)',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    useEffect(() => {
        if (budget && budgetRef.current) {
            const placeholder = budgetRef.current.previousElementSibling;
            gsap.to(placeholder, {
                y: -10,
                fontSize: '14px',
                color: 'white',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        if (findUs && findUsRef.current) {
            const placeholder = findUsRef.current.previousElementSibling;
            gsap.to(placeholder, {
                y: -10,
                fontSize: '14px',
                color: 'white',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    }, [budget, findUs]);


    // Button animation setup
    const buttonRef = useRef(null);
    const buttonTextRef = useRef(null);
    const buttonBgRef = useRef(null);
    const buttonStaticTextRef = useRef(null);
    const buttonScrollingTextRef = useRef(null);


    useEffect(() => {
        const button = buttonRef.current;
        const textWrapper = buttonTextRef.current;
        const bg = buttonBgRef.current;
        const staticText = buttonStaticTextRef.current;
        const scrollingText = buttonScrollingTextRef.current;

        // Initial setup
        gsap.set(button, { opacity: 1, y: 0 });
        gsap.set(bg, {
            scaleX: 0,
            transformOrigin: "center center",
            backgroundColor: "#09e5e5"
        });
        gsap.set(scrollingText, { opacity: 0, x: 0 });
        gsap.set(staticText, { opacity: 1 });

        const hoverTL = gsap.timeline({ paused: true });

        hoverTL
            .to(bg, {
                scaleX: 1,
                duration: 0.5,
                ease: "power2.out"
            })
            .to(staticText, {
                opacity: 0,
                duration: 0.2
            }, "-=0.2")
            .to(scrollingText, {
                opacity: 1,
                duration: 0.2
            })
            .to(textWrapper, {
                color: "black",
                duration: 0.3
            }, "-=0.3");

        let scrollTween;

        const handleMouseEnter = () => {
            hoverTL.play().then(() => {
                // Start scrolling animation only after the hover animation completes
                if (!scrollTween) {
                    const contentWidth = scrollingText.scrollWidth;
                    const buttonWidth = button.offsetWidth;
                    const duration = contentWidth / 50; // Adjust speed here (lower number = faster)

                    scrollTween = gsap.to(scrollingText, {
                        x: `-=${contentWidth - buttonWidth}`,
                        duration: duration,
                        ease: "linear",
                        repeat: -1
                    });
                } else {
                    scrollTween.play();
                }
            });
        };

        const handleMouseLeave = () => {
            hoverTL.reverse();
            if (scrollTween) {
                scrollTween.pause();
                // Reset position when mouse leaves
                gsap.set(scrollingText, { x: 0 });
            }
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);

        gsap.from(button, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "back.out(1.7)",
            immediateRender: false,
            scrollTrigger: {
                trigger: button,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });

        return () => {
            button.removeEventListener("mouseenter", handleMouseEnter);
            button.removeEventListener("mouseleave", handleMouseLeave);
            hoverTL.kill();
            if (scrollTween) scrollTween.kill();
        };
    }, []);


    return (
        <div className="mt-20 md:mt-25 xl:mt-20  bg-white rounded-lg">
            <form onSubmit={handleSubmit}>
            <div className="mb-6 lg:flex gap-20">
                <div className="flex-1/3">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold font-helvetica leading-[1]" style={ { letterSpacing: "-0.05em" }}>More about your project.</h2>
                    <p className="mt-5 mb-5 lg:mb-0 text-xl text-gray-700 font-helvetica ">
                        Share as much details as you want and we'll take it from there.
                    </p>
                </div>

                <div className="space-y-8 flex-2/3 relative">
                    {/* Budget Field */}
                    <div className="relative font-helvetica">
                        <label
                            htmlFor="budget"
                            className={`absolute text-[18px] left-6 ${budget ? 'top-2 text-sm' : 'top-6 text-xl'}  pointer-events-none text-gray-300 font-bold font-helvetica transition-all`}
                        >
                            What is your estimated budget?
                        </label>
                        <select
                            ref={budgetRef}
                            id="budget"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="mt-1 block w-full p-6  bg-[#111] text-white text-xl font-bold font-helvetica appearance-none"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        >
                            <option value="" disabled hidden></option>
                            {budgetOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        
                    </div>

                    {/* Project About Field */}
                    <div className="relative font-helvetica">
                        <label
                            htmlFor="projectAbout"
                            className={`absolute left-6 ${projectAboutRef.current?.value ? 'top-2 text-sm' : 'top-3 text-xl'} pr-4 py-3 pointer-events-none text-gray-300 font-bold font-helvetica transition-all`}
                        >
                            What is your project about?
                        </label>
                        <textarea
                            ref={projectAboutRef}
                            id="projectAbout"
                            className="mt-1 block w-full p-6  pb-24 bg-[#111] text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    {/* Find Us Field */}
                    <div className="relative font-helvetica">
                        <label
                            htmlFor="findUs"
                            className={`absolute left-6 ${findUs ? 'top-2 text-sm' : 'top-6 text-xl'}  pointer-events-none text-gray-300 font-bold font-helvetica transition-all`}
                        >
                            How did you find us?
                        </label>
                        <select
                            ref={findUsRef}
                            id="findUs"
                            value={findUs}
                            onChange={(e) => setFindUs(e.target.value)}
                            className="mt-1 block w-full p-6  bg-[#111] text-white text-xl font-bold font-helvetica appearance-none"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        >
                            <option value="" disabled hidden></option>
                            {findUsOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Privacy Policy */}
                    <div className="flex items-center mt-6 font-helvetica">
                        <input
                            type="checkbox"
                            id="privacyPolicy"
                            checked={privacyPolicy}
                            onChange={(e) => setPrivacyPolicy(e.target.checked)}
                            className="h-6 w-6 text-[#111] rounded focus:ring-[#111]"
                        />
                        <label htmlFor="privacyPolicy" className="ml-3 block text-xl text-gray-700 font-bold">
                            I have read and I accept the Privacy Policy
                        </label>
                    </div>

                    {/* Send Inquiry Button */}
                    <div className='flex justify-start'>
                        <div className="my-6 sm:mt-8 relative inline-block">
                        <button
                            type="submit"
                            ref={buttonRef}
                            className="relative px-6 py-2 sm:px-8 sm:py-3 rounded-full border-none text-base sm:text-lg bg-[#a8ff57] overflow-hidden inline-flex items-center justify-center group"
                            style={{ opacity: 1 }}
                        >
                            <span ref={buttonBgRef} className="absolute inset-0 z-0" />
                            <span
                                ref={buttonTextRef}
                                className="relative z-10 text-[16px] md:text-2xl text-black overflow-hidden whitespace-nowrap w-auto h-full flex items-center justify-center"
                            >
                                <span ref={buttonStaticTextRef} className="static-text font-helvetica">
                                    Send Inquiry
                                </span>
                                <span
                                    ref={buttonScrollingTextRef}
                                    className="scrolling-text absolute left-0"
                                >
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <span key={i} className="inline-block mr-8 font-helvetica">
                                            Send Inquiry
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
};

export default MoreAboutProject;
