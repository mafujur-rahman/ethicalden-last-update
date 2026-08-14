'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function SliderSection() {
    useEffect(() => {
        // Slider initialization logic would go here
        // Your existing slider JavaScript
    }, [])

    return (
        <section className="section_home_slider padding-vertical-mobile">
            <div className="padding-global padding-section-112">
                <div className="container-1280">
                    <div className="slider-wrapper">
                        <div className="slider_lottie_wrapper"></div>
                        <div className="margin-bottom margin-64">
                            <div className="slider_h2_wrapper">
                                <h2 slider-h2="" className="heading-style-h3 animated-heading is-active">Phishing, info-stealers, social engineering… <br />One way or another, some credentials will always leak.</h2>
                                <h2 slider-h2="" className="heading-style-h3 animated-heading is-active">Once in possession, attackers map the target's internet-exposed assets and quickly test the stolen credentials across them.</h2>
                                <h2 slider-h2="" className="heading-style-h3 animated-heading is-active">MokN deploys defensive phishing pages with valid certs, ultra realistic behavior, and domains crafted to blend into the attack surface.</h2>
                                <h2 slider-h2="" className="heading-style-h3 animated-heading is-active">When attackers try to use stolen credentials on the Bait, they're met with a login failed response.</h2>
                                <h2 slider-h2="" className="heading-style-h3 animated-heading is-active">Behind the scenes, MokN agents check the credentials in real time, and valid ones instantly trigger a critical alert.</h2>
                                <h2 slider-h2="" className="heading-style-h3 animated-heading is-active">The password is reset within minutes, stopping the attack early and providing immediate, actionable intelligence on the attackers.</h2>
                            </div>
                        </div>
                        <div className="vflex-center is-button_wrapper_opx">
                            <a 
                                data-w-id="154c3e49-ed6d-5442-8d94-825a2e265139" 
                                style={{ display: 'none', opacity: 0 }} 
                                href="/contact?tab=w-tabs-0-data-w-pane-1" 
                                className="button-cta slider-decalage w-inline-block"
                            >
                                <div className="button-cta-bg">
                                    <div className="button-m z-index-1">Book a demo session</div>
                                    <div data-w-id="154c3e49-ed6d-5442-8d94-825a2e26513e" className="button_hover_light"></div>
                                </div>
                                <div style={{ opacity: 0 }} className="border-gradient"></div>
                            </a>
                        </div>
                        <div className="slider_nav">
                            <div className="hflex-left-center gap-8">
                                <div className="slider-dot is-active"></div>
                                <div className="slider-dot"></div>
                                <div className="slider-dot"></div>
                                <div className="slider-dot"></div>
                                <div className="slider-dot"></div>
                                <div className="slider-dot"></div>
                            </div>
                            <div className="hflex-center">
                                <a 
                                    slider-prev="" 
                                    style={{ display: 'none', opacity: 0 }} 
                                    href="#" 
                                    className="icon-button is-left w-inline-block"
                                >
                                    <div className="svg w-embed">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 15L8 10L13 5" stroke="currentColor" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                    <div className="hidden-label">Back</div>
                                </a>
                                <a 
                                    slider-next="" 
                                    data-w-id="a82e6f51-cdee-65c3-3f18-5dac3471331c" 
                                    href="#" 
                                    className="icon-button is-right button-cta w-inline-block"
                                >
                                    <div className="hidden-label">Right</div>
                                    <div className="button-cta-bg is-slider">
                                        <div className="svg w-embed">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2"></path>
                                            </svg>
                                        </div>
                                        <div style={{ opacity: 0 }} className="button_hover_light"></div>
                                    </div>
                                    <div className="border-gradient icon"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}