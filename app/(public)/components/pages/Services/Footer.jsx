import Link from 'next/link'

export default function Footer() {
    return (
        <section className="footer">
            <div className="padding-global">
                <div className="container-1280">
                    <div className="relative">
                        <div className="footer_ellipse_light"></div>
                        <div className="padding-vertical padding-96">
                            <div className="vflex-center text-align-center">
                                <div className="flotteur_footer">
                                    <img 
                                        src="/images/logo.png" 
                                        loading="lazy" 
                                        sizes="100vw" 
                                        srcSet="/images/edn-3dIcon.png 500w, /images/edn-3dIcon.png 629w" 
                                        alt="Hexagon-patterned object" 
                                        className="fullsize"
                                    />
                                </div>
                                <div className="margin-bottom margin-24">
                                    <div h-reveal="" className="heading-style-display text-align-center z-index-1">Looking to go deeper? </div>
                                    <div h-reveal="" className="heading-style-display text-align-center text-glow-white">Let's light up the depths.</div>
                                </div>
                                <p p-reveal="" className="max-width-640">Book a demo and discover what attackers could find if they scanned your perimeter right now and how Lantern helps you detect and fix exposures before they become entry points.</p>
                                <div className="margin-top margin-48">
                                    <div className="hflex-center gap-8">
                                        <a data-w-id="41d0fb15-73c9-aa4e-b960-91182de686fb" href="/contact" className="button-cta w-inline-block">
                                            <div className="button-cta-bg">
                                                <div className="button-m z-index-1">Contact us</div>
                                                <div className="button_hover_light"></div>
                                            </div>
                                            <div className="inset-0 background-color-gs-800"></div>
                                        </a>
                                        <a data-w-id="a43da8e7-f026-4360-08c1-7387d0a39628" href="/contact?tab=w-tabs-0-data-w-pane-1" className="button-cta w-inline-block">
                                            <div className="button-cta-bg">
                                                <div className="button-m z-index-1">Book a demo</div>
                                                <div className="svg z-index-2 w-embed">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.1118 4.16699L16.6673 10.0003M16.6673 10.0003L11.1118 15.8337M16.6673 10.0003L3.33398 10.0003" stroke="white" strokeWidth="1.66667"></path>
                                                    </svg>
                                                </div>
                                                <div className="button_hover_light"></div>
                                            </div>
                                            <div className="border-gradient"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-w-id="7b64abaf-86df-9a08-a92d-c7f99712a339">
                            <div className="padding-vertical padding-80">
                                <div className="footer_links_wrapper">
                                    <div>
                                        <div className="margin-bottom margin-64">
                                            <a href="#" className="w-inline-block">
                                                <img src="/images/logo.png" loading="lazy" alt="EDN Logo" />
                                            </a>
                                        </div>
                                        <div className="hflex-left-center gap-16">
                                            <a href="https://www.linkedin.com/company/edn/" target="_blank" className="social_links w-inline-block" rel="noopener noreferrer">
                                                <div className="svg w-embed">
                                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="https://www.instagram.com/edn.io/" target="_blank" className="social_links w-inline-block" rel="noopener noreferrer">
                                                <div className="svg w-embed">
                                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="https://www.facebook.com/people/edn/61578289934052/" target="_blank" className="social_links w-inline-block" rel="noopener noreferrer">
                                                <div className="svg w-embed">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22 12.3033C22 6.7467 17.5229 2.24219 12 2.24219C6.47715 2.24219 2 6.7467 2 12.3033C2 17.325 5.65684 21.4874 10.4375 22.2422V15.2116H7.89844V12.3033H10.4375V10.0867C10.4375 7.56515 11.9305 6.17231 14.2146 6.17231C15.3088 6.17231 16.4531 6.36882 16.4531 6.36882V8.8448H15.1922C13.95 8.8448 13.5625 9.62041 13.5625 10.4161V12.3033H16.3359L15.8926 15.2116H13.5625V22.2422C18.3432 21.4874 22 17.3252 22 12.3033Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="footer_page_links_list">
                                        <div className="vflex-left-top">
                                            <div className="margin-bottom margin-8">
                                                <div className="heading-style-overline">Offers</div>
                                            </div>
                                            <a href="/baits" className="footer-text-link">Baits</a>
                                            <a href="/lantern" className="footer-text-link">Lantern</a>
                                        </div>
                                        <div className="vflex-left-top">
                                            <div className="margin-bottom margin-8">
                                                <div className="heading-style-overline">Company</div>
                                            </div>
                                            <a href="/about-us" className="footer-text-link">About us</a>
                                            <a href="/contact" className="footer-text-link">Contact</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-bottom padding-80">
                                <div className="separator margin-bottom margin-32"></div>
                                <div className="hflex-between-center z-index-1 gap-16">
                                    <div className="text-regular">© 2026 EDN Cyber Security. All rights reserved.</div>
                                    <div className="hflex-between-center">
                                        <a href="/terms-of-service" className="footer-text-link">Terms of service</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}