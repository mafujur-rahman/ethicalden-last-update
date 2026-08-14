'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {/* Mobile Navigation */}
            <div 
                data-animation="over-right" 
                className={`nav_component nav-small w-nav ${isMenuOpen ? 'w-nav-open' : ''}`} 
                data-easing2="ease" 
                no-flicker="" 
                data-easing="ease" 
                data-collapse="medium" 
                data-w-id="37a5bc10-21ac-9cbe-992b-2a81faf76cb0" 
                role="banner" 
                data-duration="400" 
                data-doc-height="1"
            >
                <div className="padding-global">
                    <div className="nav_container is-small">
                        <Link href="/" aria-current="page" className="nav_brand is-mobile w-nav-brand w--current">
                            <img 
                                loading="lazy" 
                                src="/images/logo.png" 
                                alt="Logo displaying Mokn with a red and white design" 
                                className="nav_logo"
                            />
                        </Link>
                        <nav role="navigation" className={`nav_menu w-nav-menu ${isMenuOpen ? 'w-nav-menu-open' : ''}`}>
                            <div className="nav_links_wrapper is-small">
                                <Link href="/" aria-current="page" className="nav_brand is-desktop w-nav-brand w--current">
                                    <img 
                                        width="115" 
                                        loading="lazy" 
                                        alt="Logo displaying Mokn" 
                                        src="/images/logo.png" 
                                        className="nav_logo"
                                    />
                                </Link>
                                <div className="nav_page_links_wrapper">
                                    <Link href="/baits" className="text-link is-nav w-nav-link">Baits</Link>
                                    <Link href="/lantern" className="text-link is-nav w-nav-link">Lantern</Link>
                                    <Link href="/about-us" className="text-link is-nav w-nav-link">About us</Link>
                                    <div className="bloc-lang">
                                        <div className="nav_lang_divider"></div>
                                        <div data-hover="false" data-delay="0" className="w-dropdown">
                                            <div className="text-link w-dropdown-toggle">
                                                <div className="text-color-white">en</div>
                                            </div>
                                            <nav className="background-color-gs-950 w-dropdown-list">
                                                <div className="w-locales-list">
                                                    <div role="list" className="w-locales-items">
                                                        <div role="listitem" className="w-locales-item">
                                                            <Link hrefLang="en" href="/" aria-current="page" className="text-link w--current">en</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <Link data-w-id="a43da8e7-f026-4360-08c1-7387d0a39628" href="/contact" className="button-cta w-inline-block">
                                    <div className="button-cta-bg">
                                        <div className="button-m z-index-1">Contact us</div>
                                        <div className="button_hover_light"></div>
                                    </div>
                                    <div className="border-gradient"></div>
                                </Link>
                            </div>
                        </nav>
                        <div className="nav_button w-nav-button" onClick={toggleMenu}>
                            <div className="burger-icon w-embed">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 18H20M4 12H20M4 6H20" stroke="white" strokeWidth="2"></path>
                                </svg>
                            </div>
                            <div className="close-icon w-embed">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M18 18L6 6" stroke="white" strokeWidth="2"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="nav_brand is-mobile hide"></div>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div 
                no-flicker="" 
                data-animation="default" 
                data-collapse="medium" 
                data-duration="400" 
                data-easing="ease" 
                data-easing2="ease" 
                role="banner" 
                className="nav_component nav-large w-nav"
            >
                <div className="padding-global">
                    <div className="nav_container">
                        <Link href="/" aria-current="page" className="nav_brand w-nav-brand w--current">
                            <img 
                                src="/images/logo.png" 
                                loading="lazy" 
                                width="64" 
                                alt="Logo displaying Mokn" 
                                className="nav_logo"
                            />
                        </Link>
                        <nav role="navigation" className="nav_menu w-nav-menu">
                            <div className="nav_links_wrapper">
                                <Link href="/baits" className="text-link w-nav-link">Baits</Link>
                                <Link href="/lantern" className="text-link w-nav-link">Lantern</Link>
                                <Link href="/about-us" className="text-link w-nav-link">About us</Link>
                            </div>
                        </nav>
                        <Link data-w-id="a43da8e7-f026-4360-08c1-7387d0a39628" href="/contact" className="button-cta w-inline-block">
                            <div className="button-cta-bg">
                                <div className="button-m z-index-1">Contact us</div>
                                <div className="button_hover_light"></div>
                            </div>
                            <div className="border-gradient"></div>
                        </Link>
                        <div className="nav_button w-nav-button">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}