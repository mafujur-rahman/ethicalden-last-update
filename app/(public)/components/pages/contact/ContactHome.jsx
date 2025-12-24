'use client'

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from './ContactForm';
import MoreAboutProject from './MoreAboutProject';
import SocialContact from './SocialContact';
import FAQSection from './FAQSection';
import WeAreAllEars from './WeAreAllEars';
import LayItOnUs from './LayItOnUs';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { sendEmail } from '../../utils/emailjs';



gsap.registerPlugin(ScrollTrigger);

const ContactHome = () => {
    const titleRef = useRef(null);
    const charRefs = useRef([]);
    const formRef = useRef(null);
    const [selectedCard, setSelectedCard] = useState('project');
    const nameRef = useRef(null);
    const companyRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);



    // for start scrollling top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


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

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: 'smooth' });
        });
    };


    const handleSubmit = async (formData, formType) => {
        const templateId = {
            'project': 'template_tq7iwpf',
            'tell': 'template_tq7iwpf',
            'business': 'template_tq7iwpf'
        }[formType];

        const result = await sendEmail(templateId, formData);

        if (result.success) {
            // Show success message
            console.log('Email sent successfully!');
        } else {
            // Show error message
            console.error('Failed to send email');
        }
    };


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
                        {"Things are about to get real.".split(" ").map((word, wi) => (
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


                    <p className='text-left text-xl md:text-2xl flex-1 lg:flex-2/3 2xl:max-w-lg font-ethosnova leading-relaxed text-black'>
                        Ready to turn that spark of an idea into a full-fledged digital experience? Whether you’re launching a new product, redesigning your brand, or just want to talk tech over coffee, we’re here for it.
                    </p>
                </div>

                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 mt-20'>
                    <div
                        className={`cursor-pointer px-4 py-8 md:px-8 lg:px-6 xl:px-12 md:py-10 rounded-2xl ${selectedCard === 'project' ? 'bg-[#06caca]' : 'bg-[#09e5e5]'}`}
                        onClick={() => handleCardClick('project')}
                    >
                        <p className='text-xl'>01/ <span className='text-gray-400'>03</span></p>
                        <h3 className='font-bold text-xl md:text-2xl mt-10 font-helvetica'>I have a project in mind.</h3>
                    </div>
                    <div
                        className={`cursor-pointer px-4 py-8 md:px-8 lg:px-6 xl:px-12 md:py-6 rounded-2xl ${selectedCard === 'tell' ? 'bg-[#90e344]' : 'bg-[#a8ff57]'}`}
                        onClick={() => handleCardClick('tell')}
                    >
                        <p className='text-xl text-black'>02/ <span className='text-gray-400'>03</span></p>
                        <h3 className='font-bold text-xl md:text-2xl mt-10 font-helvetica text-black'>I have something to tell you.</h3>
                    </div>
                    <div
                        className={`cursor-pointer px-4 py-8 md:px-8 lg:px-6 xl:px-12 md:py-6 rounded-2xl ${selectedCard === 'business' ? 'bg-[#333]' : 'bg-[#111]'}`}
                        onClick={() => handleCardClick('business')}
                    >
                        <p className='text-xl text-white'>03/ <span className='text-gray-400'>03</span></p>
                        <h3 className='font-bold text-xl md:text-2xl mt-10 font-helvetica text-white'>I have a business proposal.</h3>
                    </div>
                </div>

                {/* Contact Form */}
                <div ref={formRef}>
                    <ContactForm
                        nameRef={nameRef}
                        companyRef={companyRef}
                        emailRef={emailRef}
                        phoneRef={phoneRef} onSubmit={(data) => handleSubmit(data, selectedCard)} />
                </div>

                {/* Conditional Sections */}
                {selectedCard === 'project' && <MoreAboutProject
                    nameRef={nameRef}
                    companyRef={companyRef}
                    emailRef={emailRef}
                    phoneRef={phoneRef} onSubmit={(data) => handleSubmit(data, 'project')} />}


                {selectedCard === 'tell' && <WeAreAllEars
                    nameRef={nameRef}
                    companyRef={companyRef}
                    emailRef={emailRef}
                    phoneRef={phoneRef} onSubmit={(data) => handleSubmit(data, 'tell')} />}


                {selectedCard === 'business' && <LayItOnUs nameRef={nameRef}
                    companyRef={companyRef}
                    emailRef={emailRef}
                    phoneRef={phoneRef} onSubmit={(data) => handleSubmit(data, 'business')} />}

                {/* Social & FAQ */}
                <SocialContact />
                <FAQSection />
            </div>
            <Footer />
        </div>
    );
};

export default ContactHome;
