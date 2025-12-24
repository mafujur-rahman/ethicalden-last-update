'use client';
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const OurWorksArea3 = () => {
    const projects = [
        {
            id: 1,
            title: "Mr Cafe",
            category: "Restaurant",
            media: {
                src: "https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/ourWorksPage/mr-Cafe.webp",
                alt: "Mr Cafe",
            },
            link: "/project-mrCafe",
        },
        {
            id: 2,
            title: "Marzii",
            category: "E-commerce / Branding",
            media: {
                src: "https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/ourWorksPage/marzi.jpg",
                alt: "Marzii",
            },
            link: "/project-marzii",
        },
        {
            id: 3,
            title: "E-laj",
            category: "Medical Healthcare",
            media: {
                src: "https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/ourWorksPage/e-laj.jpg",
                alt: "E-laj",
            },
            link: "/project-e-laj",
        },
        {
            id: 4,
            title: "Mak Community",
            category: "Site / Branding",
            media: {
                src: "https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/ourWorksPage/mak-community.jpg",
                alt: "Mak Community",
            },
            link: "/project-mak-community",
        },
        {
            id: 5,
            title: "Agarwal Tibrewal Co",
            category: "Site / Branding",
            media: {
                src: "https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/ourWorksPage/agarwal.png",
                alt: "Agarwal Tibrewal Co",
            },
            link: "/project-agarwal-tibrewal",
        },
        {
            id: 6,
            title: "Emopract",
            category: "UI/UX / Site",
            media: {
                src: "https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/ourWorksPage/emopract.jpg",
                alt: "Emopract",
            },
            link: "/project-emopract",
        },
        {
            id: 7,
            title: "Sandeep Autolines",
            category: "Marketing / Branding",
            media: {
                src: "https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/ourWorksPage/sandeep.jpg",
                alt: "Sandeep Autolines",
            },
            link: "/project-sandeep-autolines",
        },

        {
            id: 8,
            title: "massArt",
            category: "UI/UX / Site",
            media: {
                src: "https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/ourWorksPage/massart.webp",
                alt: "massArt",
            },
            link: "/project-massArt",
        },
        {
            id: 9,
            title: "Laljhal",
            category: "UI/UX / Site",
            media: {
                src: "https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/ourWorksPage/lal-jhal.jpg",
                alt: "Laljhal",
            },
            link: "/project-laljhal",
        },
    ];

    const categories = ["All", ...new Set(projects.map((p) => p.category))];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    const cardsRef = useRef([]);
    const imagesRef = useRef([]);

    useEffect(() => {
        const isWideEnough = window.innerWidth >= 1000;

        cardsRef.current.forEach((card, i) => {
            if (!card) return;
            if (i % 3 === 1 && isWideEnough) {
                gsap.to(card, { y: -65, duration: 0.6, ease: "power3.out" });
            } else {
                gsap.to(card, { y: 0, duration: 0.6, ease: "power3.out" });
            }
        });
    }, [filteredProjects]);


    const handleMouseEnter = (index) => {
        const card = cardsRef.current[index];
        const image = imagesRef.current[index];
        if (!card || !image) return;

        const tl = gsap.timeline();

        // Animate both simultaneously with the same duration
        tl.to(
            card,
            {
                scale: 0.96,
                duration: 0.5,
                ease: "power3.out",
                overwrite: "auto",
            },
            0 // start at time 0
        );

        tl.to(
            image,
            {
                scale: 1.05,
                duration: 0.5,
                ease: "power3.out",
                overwrite: "auto",
            },
            0 // start at time 0
        );
    };

    const handleMouseLeave = (index) => {
        const card = cardsRef.current[index];
        const image = imagesRef.current[index];
        if (!card || !image) return;

        const tl = gsap.timeline();

        tl.to(
            card,
            {
                scale: 1,
                duration: 0.5,
                ease: "power3.out",
                overwrite: "auto",
            },
            0
        );

        tl.to(
            image,
            {
                scale: 1,
                duration: 0.5,
                ease: "power3.out",
                overwrite: "auto",
            },
            0
        );
    };

    return (
        <section className="py-20 px-6 md:px-12 bg-[#0e0e0e] min-h-screen">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-16   gap-6">
                <div className="sm:w-1/2 text-left">
                    <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Our Works
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                        Explore some of our recent projects across different categories.
                        Click on the categories to filter the works.
                    </p>
                </div>

                <div className="gap-6 mt-5">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 mr-3 mb-3 md:mb-5  xl:mb-20
                            ${selectedCategory === cat
                                    ? "bg-[#00f5d4] text-black "
                                    : "bg-gray-800 text-gray-300 hover:bg-[#00f5d4] hover:text-black"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10 xl:gap-x-28 gap-y-6 md:gap-y-10 xl:gap-y-32 pt-3 lg:pt-10 ">
                {filteredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="group w-full rounded-xl overflow-hidden cursor-pointer shadow-black/20"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        style={{ transformOrigin: "center bottom" }}
                    >
                        <Link href={project.link} className="block rounded-xl overflow-hidden">
                            <div className="overflow-hidden rounded-xl h-[400px]  xl:h-[450px]">
                                <img
                                    ref={(el) => (imagesRef.current[index] = el)}
                                    src={project.media.src}
                                    alt={project.media.alt}
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                />
                            </div>
                            <div className="px-4 py-6 text-center">
                                <h3 className="text-white text-2xl font-semibold transition-colors duration-300 group-hover:text-[#00f5d4]">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 mt-1 tracking-wider">
                                    {project.category.toUpperCase()}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurWorksArea3;
