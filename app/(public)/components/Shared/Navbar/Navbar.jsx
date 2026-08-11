'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

// Service data with numbers
const servicesData = [
    { id: '04', name: 'Branding', slug: 'branding' },
    { id: '06', name: 'Digital Marketing', slug: 'digital-marketing' },
    { id: '04', name: 'SEO', slug: 'seo' },
    { id: '05', name: 'UI/UX Design', slug: 'ui-ux-design' },
    { id: '05', name: 'Software Development', slug: 'software-development' },
    { id: '05', name: 'Web Development', slug: 'web-development' },
    { id: '04', name: 'Mobile App Development', slug: 'mobile-app-development' },
    { id: '05', name: 'Cyber Security', slug: 'cyber-security' },
    { id: '04', name: 'AI Services', slug: 'ai-services' },
    { id: '05', name: 'Photo & Video Editing', slug: 'photo-video-editing' }
];

const Navbar = ({ backgroundColor = "white", textColor = "black" }) => {
    const pathname = usePathname();
    const titleRef = useRef(null);
    const charRefs = useRef([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const menuItemsRef = useRef([]);
    const menuIconRef = useRef(null);
    const dropdownTimeoutRef = useRef(null);

    const isActive = (href) => {
        if (href === '/') return pathname === href;
        return pathname?.startsWith(href);
    };

    // Animate text on scroll
    useEffect(() => {
        if (!charRefs.current.length) return;
        gsap.fromTo(
            charRefs.current,
            { color: 'gray' },
            {
                color: textColor,
                stagger: { from: 'random', each: 0.05 },
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                    end: "top 50%",
                    toggleActions: "play none none none",
                }
            }
        );
    }, [textColor]);

    // Button hover animation
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

        gsap.set(button, { opacity: 1, y: 0 });
        gsap.set(bg, { scaleX: 0, transformOrigin: "center", backgroundColor: "#09e5e5" });
        gsap.set(scrollingText, { opacity: 0, x: 0 });
        gsap.set(staticText, { opacity: 1 });

        const hoverTL = gsap.timeline({ paused: true });

        hoverTL
            .to(bg, { scaleX: 1, duration: 0.5, ease: "power2.out" })
            .to(staticText, { opacity: 0, duration: 0.2 }, "-=0.2")
            .to(scrollingText, { opacity: 1, duration: 0.2 })
            .to(textWrapper, { color: "black", duration: 0.3 }, "-=0.3");

        let scrollTween;

        const handleMouseEnter = () => {
            hoverTL.play().then(() => {
                if (!scrollTween) {
                    const contentWidth = scrollingText.scrollWidth;
                    const buttonWidth = button.offsetWidth;
                    const duration = contentWidth / 50;
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
                gsap.set(scrollingText, { x: 0 });
            }
        };

        button?.addEventListener("mouseenter", handleMouseEnter);
        button?.addEventListener("mouseleave", handleMouseLeave);

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
            button?.removeEventListener("mouseenter", handleMouseEnter);
            button?.removeEventListener("mouseleave", handleMouseLeave);
            hoverTL.kill();
            if (scrollTween) scrollTween.kill();
        };
    }, []);

    // Services dropdown hover handlers
    const handleServicesMouseEnter = () => {
        clearTimeout(dropdownTimeoutRef.current);
        setIsServicesOpen(true);
    };

    const handleServicesMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setIsServicesOpen(false);
        }, 200);
    };

    const handleServiceItemClick = () => {
        setIsServicesOpen(false);
    };

    // Mobile menu animations
    useEffect(() => {
        if (isMenuOpen) {
            // Open menu animation
            gsap.fromTo(mobileMenuRef.current,
                { y: '-100%', opacity: 0 },
                {
                    y: '0%',
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out"
                }
            );

            // Menu items animation
            gsap.fromTo(menuItemsRef.current,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    delay: 0.3
                }
            );

            // Menu icon animation
            gsap.to(menuIconRef.current, {
                rotate: 180,
                duration: 0.4,
                ease: "power2.inOut"
            });
        } else {
            // Close menu animation
            if (mobileMenuRef.current) {
                gsap.to(mobileMenuRef.current, {
                    y: '-100%',
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.in"
                });
            }

            // Menu icon animation
            gsap.to(menuIconRef.current, {
                rotate: 0,
                duration: 0.4,
                ease: "power2.inOut"
            });
        }
    }, [isMenuOpen]);

    const handleCloseMenu = () => {
        // Animate menu items out first
        gsap.to(menuItemsRef.current, {
            x: 100,
            opacity: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in",
            onComplete: () => {
                setIsMenuOpen(false);
            }
        });
    };

    const addMenuItemToRefs = (el) => {
        if (el && !menuItemsRef.current.includes(el)) {
            menuItemsRef.current.push(el);
        }
    };

    const toggleMobileServices = () => {
        const mobileServices = document.getElementById('mobile-services');
        if (mobileServices) {
            mobileServices.classList.toggle('hidden');
        }
    };

    return (
        <div className="relative z-30 px-6 md:px-10 lg:px-12 xl:px-20 pt-5" style={{ backgroundColor }}>
            <nav className="flex items-center justify-between py-6">
                <div className="font-bold text-4xl z-50">
                    <a href="/">
                        <img src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/logo/ethicalden.png" className="w-12 h-auto" alt="Logo" />
                    </a>
                </div>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-10 text-[20px]" style={{ color: textColor }}>
                    <a
                        href="/about-den"
                        className={`relative font-medium 
                                ${isActive('/about-den')
                                ? 'line-through decoration-2 decoration-current pointer-events-none'
                                : 'after:content-[""] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'
                            }`}
                    >
                        About Den
                    </a>
                    <a
                        href="/our-works"
                        className={`relative font-medium 
                                ${isActive('/our-works')
                                ? 'line-through decoration-2 decoration-current pointer-events-none'
                                : 'after:content-[""] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'
                            }`}
                    >
                        Our Works
                    </a>

                    {/* Services with Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                    >
                        <a
                            href="/services"
                            className={`relative font-medium flex items-center gap-1
                                ${isActive('/services')
                                ? 'line-through decoration-2 decoration-current pointer-events-none'
                                : 'after:content-[""] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'
                            }`}
                        >
                            Services
                            <HiChevronDown 
                                className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                                size={18}
                            />
                        </a>

                        {/* Services Dropdown */}
                        {isServicesOpen && (
                            <div className="absolute left-1/2 -translate-x-1/2 mt-3 bg-[#1e1e1e] border border-gray-700 rounded-xl py-3 min-w-[800px] z-50 shadow-2xl">
                                <div className="grid grid-cols-3 gap-8 p-8">
                                    {servicesData.map((service) => (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            onClick={handleServiceItemClick}
                                            className="flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors border border-gray-700/50 "
                                        >
                                            <span className="text-xs font-bold text-[#09e5e5] opacity-60 min-w-[28px]">
                                                {service.id}
                                            </span>
                                            <span className="text-sm font-medium text-white/80 hover:text-white whitespace-nowrap">
                                                {service.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <a
                        href="/products"
                        className={`relative font-medium 
                                ${isActive('/products')
                                ? 'line-through decoration-2 decoration-current pointer-events-none'
                                : 'after:content-[""] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'
                            }`}
                    >
                        Products
                    </a>

                    {/* Sub brands - KEPT EXACTLY AS ORIGINAL */}
                    <div className="relative group">
                        <button className="flex items-center font-medium relative">
                            <span className="mr-1 relative after:content-[''] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                                Sub brands
                            </span>
                            <HiChevronDown
                                className="transition-transform duration-300 group-hover:rotate-180"
                            />
                        </button>

                        <div className="absolute left-0 mt-2 rounded-md z-50 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <a
                                href="http://eduden.io/"
                                target="_blank"
                                className="block px-4 py-2 relative font-medium 
                                after:content-[''] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                            >
                                Eduden
                            </a>
                            <a
                                href="http://hivyr.ai/"
                                target="_blank"
                                className="block px-4 py-2 relative font-medium 
                                after:content-[''] after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                            >
                                Hivyr
                            </a>
                        </div>
                    </div>

                    <Link
                        ref={buttonRef}
                        href="/contact"
                        className="relative px-6 py-2 bg-[#a8ff57] rounded-full overflow-hidden group"
                    >
                        <span ref={buttonBgRef} className="absolute inset-0 z-0" />
                        <span ref={buttonTextRef} className="relative text-[20px] z-10 flex items-center text-black">
                            <span ref={buttonStaticTextRef}>Let's Talk</span>
                            <span ref={buttonScrollingTextRef} className="absolute left-0 text-[20px] flex whitespace-nowrap">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <span key={i} className="mr-8">Let's Talk</span>
                                ))}
                            </span>
                        </span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="xl:hidden z-50">
                    <button
                        ref={menuIconRef}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-4xl p-2 rounded-md focus:outline-none "
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <HiX className="text-black" /> : <HiMenu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={`fixed top-0 left-0 w-full h-screen bg-white text-black z-40 flex flex-col justify-center p-6 space-y-6 xl:hidden ${!isMenuOpen ? 'hidden' : ''}`}
                style={{ transform: 'translateY(-100%)' }}
            >
                {/* Menu Links */}
                <div className="flex flex-col items-start space-y-4 pl-6">
                    <a
                        ref={addMenuItemToRefs}
                        href="/about-den"
                        onClick={handleCloseMenu}
                        className="text-4xl font-semibold hover:underline opacity-0"
                    >
                        About Den
                    </a>
                    <a
                        ref={addMenuItemToRefs}
                        href="/our-works"
                        onClick={handleCloseMenu}
                        className="text-4xl font-semibold hover:underline opacity-0"
                    >
                        Our Works
                    </a>
                    
                    {/* Services in Mobile with Sub-items */}
                    <div className="w-full">
                        <div
                            ref={addMenuItemToRefs}
                            className="text-4xl font-semibold hover:underline opacity-0 cursor-pointer"
                            onClick={toggleMobileServices}
                        >
                            Services
                        </div>
                        <div id="mobile-services" className="hidden mt-4 space-y-3 pl-4">
                            {servicesData.map((service) => (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    onClick={handleCloseMenu}
                                    className="flex items-center gap-3 text-2xl font-medium text-gray-700 hover:text-[#09e5e5] transition-colors"
                                >
                                    <span className="text-sm font-bold text-[#09e5e5] opacity-60">
                                        {service.id}
                                    </span>
                                    <span>{service.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <a
                        ref={addMenuItemToRefs}
                        href="/products"
                        onClick={handleCloseMenu}
                        className="text-4xl font-semibold hover:underline opacity-0"
                    >
                        Products
                    </a>
                    
                    {/* Sub Brands Title - KEPT EXACTLY AS ORIGINAL */}
                    <div
                        ref={addMenuItemToRefs}
                        className="text-4xl font-semibold hover:underline opacity-0"
                    >
                        Sub Brands
                    </div>

                    {/* Sub-brands - KEPT EXACTLY AS ORIGINAL */}
                    <div className="flex flex-col items-start space-y-4 mt-2 pl-4">
                        <a
                            ref={addMenuItemToRefs}
                            href="https://eduden.example.com"
                            target="_blank"
                            className="text-2xl font-medium text-[#333] hover:underline opacity-0"
                        >
                            Eduden
                        </a>
                        <a
                            ref={addMenuItemToRefs}
                            href="https://hivyr.example.com"
                            target="_blank"
                            className="text-2xl font-medium text-[#333] hover:underline opacity-0"
                        >
                            Hivyr
                        </a>
                    </div>

                    <Link
                        ref={addMenuItemToRefs}
                        href="/contact"
                        onClick={handleCloseMenu}
                        className="rounded-full text-[#09e5e5] text-4xl font-semibold opacity-0"
                    >
                        Let's Talk
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;