
'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); 
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

const MeetTheCrew = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [hoveredMember, setHoveredMember] = useState(null);
    const isMobile = useIsMobile();

    const crewMembers = [
        { id: 1, name: 'Fardeen', profession: 'Founder & CEO', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Fardeen.webp' },
        { id: 2, name: 'Arihant', profession: 'Co-Founder & CEO', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/arihant.webp' },
        { id: 3, name: 'Arth', profession: 'Co-Founder', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Arth.webp' },
        { id: 4, name: 'Nazmul', profession: 'Creative Director Country Head', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Nazmul.webp' },
        { id: 5, name: 'Ayushi', profession: 'Content Executive', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Ayushi.webp' },
        { id: 6, name: 'Samrat', profession: 'Senior Software Developer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Samrat.webp' },
        { id: 7, name: 'Khokon', profession: 'Cyber Security Expert', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/khokon.webp' },
        { id: 8, name: 'Yathish', profession: 'Chief Data Scientist', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Yathish.webp' },
        { id: 9, name: 'Shamim', profession: 'AI Developer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/shamim.png' },
        { id: 10, name: 'Noor', profession: 'AI Developer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/noor.png' },
        { id: 11, name: 'Alvira', profession: 'HR officer India', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Alvira.webp' },
        { id: 12, name: 'Sagnik', profession: 'Business Development Expert', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Shagnik.webp' },
        { id: 13, name: 'Sumaiya', profession: 'App Developer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/sumaiya.png' },
        { id: 14, name: 'Fatema', profession: 'Mobile App Developer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Fatema.webp' },
        { id: 15, name: 'MD. Shakil', profession: 'Senior Backend Developer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/MD.%20Shakil.webp' },
         { id: 16, name: 'Joy', profession: 'Frontend Developer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Joy.webp' },
        { id: 17, name: 'Tahamid', profession: 'Wordpress Developer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/tahamid.webp' },
        { id: 18, name: 'Mafujur', profession: 'Frontend Developer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Mafuzur.webp' },
        { id: 19, name: 'Nafijur', profession: 'junior Backend Developer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Nafijur.webp' },
        { id: 20, name: 'Partho', profession: 'SEO Expert', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Partho.webp' },
        { id: 21, name: 'Tanisha', profession: 'Student Counsellor Placement Executive', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Tanisha.webp' },
        { id: 22, name: 'Sharmistha', profession: 'Student Counsellor Placement Executive', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Sharmistha.webp' },
        { id: 23, name: 'Tahsin', profession: 'Student Counsellor Placement Executive', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/Tahsin.webp' },
        { id: 24, name: 'Mouradul', profession: 'Graphics Designer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/mouradul.webp' },
        { id: 25, name: 'Shad', profession: 'Graphics Designer', imageUrl: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/aboutPage/crew-members/shad.webp' },
    ];

    const shouldShowMember = (member) => activeFilter === 'All' || member.profession === activeFilter;

    const titleRef = useRef(null);
    const charRefs = useRef([]);

    useEffect(() => {
        if (!charRefs.current.length) return;

        gsap.fromTo(
            charRefs.current,
            { color: 'gray' },
            {
                color: 'black',
                stagger: { from: 'random', each: 0.05 },
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

    const title = 'Meet the Chaos Creators';



    return (
        <section className="px-5 md:px-10 lg:px-10 xl:px-20 2xl:px-40 pt-[11px] md:pt-[60px] lg:pt-[120px] xl:pt-[130px] 2xl:pt-[180px]">
            <div className="text-center mb-12">
                <h2
                    ref={titleRef}
                    className="text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[90px] font-urbanist font-black leading-[1.06] mb-4 flex flex-wrap justify-center gap-x-1 gap-y-2"
                >
                    {title.split('').map((char, i) => (
                        <span
                            key={i}
                            ref={(el) => (charRefs.current[i] = el)}
                            className={`inline-block ${char === ' ' ? 'w-2 md:w-3' : ''}`}
                            style={char !== " " ? { letterSpacing: "-0.10em" } : {}}
                        >
                            {char}
                        </span>
                    ))}
                </h2>
                <p className="text-xl lg:text-2xl text-black font-helvetica">
                    The team turning chaos into craft.
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-4 xl:gap-8">
                {crewMembers.map((member, index) => {
                    const isActive = shouldShowMember(member);
                    const isRevealed = hoveredMember === index;

                    return (
                        <div
                            key={`${member.id}-${member.imageUrl}-${index}`}
                            className={`relative overflow-hidden rounded-lg transition-all duration-300 ease-out ${isActive ? 'grayscale-0 group' : 'grayscale pointer-events-none'}`}
                            onClick={() => isMobile && setHoveredMember(index)}
                            onMouseEnter={() => !isMobile && setHoveredMember(index)}
                            onMouseLeave={() => !isMobile && setHoveredMember(null)}
                        >
                            {/* Image */}
                            <div
                                className="relative h-60 md:h-90 lg:h-80 2xl:h-100 rounded-lg bg-gray-200"
                                style={{
                                    backgroundImage: `url(${member.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'top',
                                }}
                            />

                            {/* Name & Designation Overlay */}
                            {isActive && (
                                <div
                                    className={`
                                        absolute bottom-0 left-0 right-0
                                        bg-black bg-opacity-80 text-white
                                        transition-transform duration-500 ease-out
                                        ${isMobile ? 'translate-y-0 p-3' : isRevealed ? 'translate-y-0 p-3' : 'translate-y-full p-0'}
                                    `}
                                >
                                    <div className="font-medium text-sm md:text-lg font-helvetica">{member.name}</div>
                                    <div
                                        className="text-[10px] md:text-sm uppercase tracking-wider"
                                        dangerouslySetInnerHTML={{ __html: member.profession }}
                                    ></div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default MeetTheCrew;
