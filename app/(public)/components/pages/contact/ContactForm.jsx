'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ContactForm = ({  onSubmit, nameRef, companyRef, emailRef, phoneRef  }) => {



        const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            company: companyRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value
        };
        onSubmit(formData);
    };

    // Handle focus event
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

    // Handle blur event
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




    return (
        <div className="pt-[100px] md:pt-[150px] lg:pt-[180px] xl:pt-[200px] 2xl:pt-[230px]  bg-white rounded-lg">
            <form onSubmit={handleSubmit}>
            <div className='mb-6 lg:flex gap-20'>
                <div className="flex-1/3">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold font-helvetica leading-[1]" style={{ letterSpacing: "-0.05em" }}>Start with some basic info.</h2>
                    <p className="mt-5 mb-5 lg:mb-0 text-xl text-gray-700 font-helvetica">
                        No red tape. No complicated forms. Just real people who love building bold things.
                    </p>
                </div>

                <div className="space-y-4 flex-2/3 relative">
                    {/* Name Field */}
                    <div className="relative">
                        <label
                            htmlFor="name"
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Your name
                        </label>
                        <input
                            ref={nameRef}
                            type="text"
                            id="name"
                            className="mt-1 block w-full p-6  bg-[#111] text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        />
                    </div>

                    {/* Company Field */}
                    <div className="relative">
                        <label
                            htmlFor="company"
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Your company's name
                        </label>
                        <input
                            ref={companyRef}
                            type="text"
                            id="company"
                            className="mt-1 block w-full p-6  bg-[#111] text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <label
                            htmlFor="email"
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Your e-mail address
                        </label>
                        <input
                            ref={emailRef}
                            type="email"
                            id="email"
                            className="mt-1 block w-full p-6  bg-[#111] text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                        <label
                            htmlFor="phone"
                            className="absolute left-6 top-6 pointer-events-none text-xl text-gray-300 font-bold font-helvetica transition-all"
                        >
                            Phone number
                        </label>
                        <input
                            ref={phoneRef}
                            type="tel"
                            id="phone"
                            className="mt-1 block w-full p-6  bg-[#111] text-white text-xl font-bold font-helvetica"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
            </div>


        </form>
        </div>
    );
};

export default ContactForm;