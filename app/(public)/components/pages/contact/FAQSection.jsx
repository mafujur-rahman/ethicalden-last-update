import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First item open by default

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What services do you offer?",
            answer: (
                <>
                    <p className="mb-3">
                        We do the digital hustle: design, development, branding, marketing, motion graphics, SaaS builds, AI integrations. If it involves pixels and code, we’ve got it covered.
                    </p>
                </>
            )
        },
        {
            question: "How long does a typical project take?",
            answer: (
                <>
                    <p className="mb-3">
                        Every project is different, but we work fast and smart. A small website might take a few weeks, while a complex SaaS product could take a couple of months. We’ll always give you a realistic timeline upfront.
                    </p>
                </>
            )
        },
        {
            question: "Do you work with startups?",
            answer: (
                <>
                    <p className="mb-3">
                        Absolutely. Startups are our jam. We love turning ideas into MVPs and helping founders bring their visions to life. Whether you’re at seed stage or scaling up, we’re in.
                    </p>
                </>
            )
        },
        {
            question: "Can you work with our in-house team?",
            answer: (
                <>
                    <p className="mb-3">
                        Definitely. We love collaborating with internal teams. Think of us as your creative tech pit crew. We slot in wherever you need us, bringing extra firepower and fresh ideas.
                    </p>
                </>
            )
        },
        {
            question: "What makes you different from other agencies?",
            answer: (
                <>
                    <p className="mb-3">
                        We blend creativity with code, strategy with design. We don’t just build things that look good; we make sure they work, scale, and actually solve problems. Plus, we’re fun to work with.
                    </p>
                </>
            )
        },
        {
            question: "How do we get started?",
            answer: (
                <>
                    <p className="mb-3">
                         Simple. Hit the Let’s Talk button, tell us a bit about what you need, and we’ll get right back to you. No long forms or red tape. Just a conversation that gets the ball rolling.

                    </p>
                </>
            )
        },
    ];

    return (
        <div className="pt-[100px] md:pt-[150px] lg:pt-[180px] 2xl:pt-[200px]  ">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold font-helvetica leading-[1] xl:max-w-3xl mb-8" style={{ letterSpacing: "-0.05em" }}>
                No Nonsense. Just Answers.
            </h1>

            <div className="flex justify-center">
                <div className="space-y-4 w-full lg:ml-50 xl:ml-100">
                    {faqs.map((faq, index) => (
                        <div key={index} className="  border-t border-t-gray-300  overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex items-center space-x-4" >
                                    <h2 className="text-3xl font-extrabold font-helvetica text-gray-800" style={{ letterSpacing: "-0.05em" }}>
                                        {faq.question}
                                    </h2>
                                </div>
                                <div className="flex justify-center items-center h-12 w-12 min-w-12 min-h-12 aspect-square border border-[#111] rounded-full text-[#111]">
                                    {activeIndex === index ? (
                                        <FiChevronUp className="w-6 h-6" />
                                    ) : (
                                        <FiChevronDown className="w-6 h-6" />
                                    )}
                                </div>

                            </button>

                            <div
                                className={`px-6 pb-6 pt-0 transition-all duration-300 ease-in-out ${activeIndex === index ? "block" : "hidden"
                                    }`}
                            >
                                <div className="text-black text-xl lg:text-2xl font-helvetica pl-14">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default FAQSection;