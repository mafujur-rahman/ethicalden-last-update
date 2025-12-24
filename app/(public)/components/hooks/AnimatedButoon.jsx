"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const AnimatedButton = ({ 
  text = "About Us", 
  href = "#",
  textColor = "text-black",
  bgColor = "bg-black",
  hoverTextColor = "text-white",
  borderColor = "border-black",
  className = ""
}) => {
    const buttonRef = useRef(null);
    const buttonTextRef = useRef(null);
    const buttonBgRef = useRef(null);
    const buttonStaticTextRef = useRef(null);
    const buttonScrollingTextRef = useRef(null);

    useEffect(() => {
        // Button animation setup
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
            backgroundColor: "inherit" // Will use the bgColor from props
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
                color: hoverTextColor.replace("text-", ""),
                duration: 0.3
            }, "-=0.3");

        let scrollTween;
        let resetTimeout;

        const handleMouseEnter = () => {
            hoverTL.play().then(() => {
                // Create seamless infinite loop
                const textWidth = scrollingText.firstChild.offsetWidth + 32;
                const duration = textWidth / 100;
                
                // Double the content to create seamless loop
                scrollingText.innerHTML = '';
                const content = Array.from({ length: 4 }).map((_, i) => (
                    `<span class="inline-block mr-8">${text}</span>`
                )).join('');
                scrollingText.innerHTML = content + content;

                scrollTween = gsap.fromTo(scrollingText,
                    { x: 0 },
                    {
                        x: -textWidth * 2,
                        duration: duration * 2,
                        ease: "none",
                        repeat: -1,
                        onRepeat: () => {
                            gsap.set(scrollingText, { x: 0 });
                        }
                    }
                );
            });
        };

        const handleMouseLeave = () => {
            hoverTL.reverse();
            if (scrollTween) {
                scrollTween.pause();
                clearTimeout(resetTimeout);
                resetTimeout = setTimeout(() => {
                    gsap.set(scrollingText, { 
                        opacity: 0,
                        x: 0 
                    });
                    scrollingText.innerHTML = Array.from({ length: 4 }).map((_, i) => (
                        `<span class="inline-block mr-8">${text}</span>`
                    )).join('');
                }, 300);
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
            immediateRender: false
        });

        return () => {
            button.removeEventListener("mouseenter", handleMouseEnter);
            button.removeEventListener("mouseleave", handleMouseLeave);
            hoverTL.kill();
            if (scrollTween) scrollTween.kill();
            clearTimeout(resetTimeout);
        };
    }, [text, hoverTextColor]);

    return (
        <div className={`relative inline-block ${className}`}>
            <Link
                ref={buttonRef}
                className={`relative px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg border-2 ${borderColor} overflow-hidden inline-flex items-center justify-center group`}
                href={href}
                style={{ opacity: 0 }}
            >
                <span 
                    ref={buttonBgRef} 
                    className={`absolute inset-0 z-0 ${bgColor}`}
                />
                <span
                    ref={buttonTextRef}
                    className={`relative z-10 font-medium ${textColor} overflow-hidden whitespace-nowrap w-[200px] h-full flex items-center justify-center`}
                >
                    <span ref={buttonStaticTextRef} className="static-text">
                        {text}
                    </span>
                    <span 
                        ref={buttonScrollingTextRef} 
                        className="scrolling-text absolute left-0 flex"
                        style={{ display: 'none' }}
                    >
                        {Array.from({ length: 4 }).map((_, i) => (
                            <span key={i} className={`inline-block mr-8 ${textColor}`}>
                                {text}
                            </span>
                        ))}
                    </span>
                </span>
            </Link>
        </div>
    );
};

export default AnimatedButton;