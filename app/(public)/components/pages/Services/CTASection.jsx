import Link from 'next/link'

export default function CTASection() {
    return (
        <section className="section padding-vertical-mobile">
            <div className="padding-global padding-section-112">
                <div className="container-1280">
                    <div className="pattern">
                        <div cta-highlight="" className="cta_ellipse_light"></div>
                        <div className="schedule_cta_wrapper">
                            <div>
                                <div className="margin-bottom margin-8">
                                    <div className="heading-style-overline">YOU NEED MORE?</div>
                                </div>
                                <h2 h-reveal="" className="heading-style-h3">Talk to a security expert from our team.</h2>
                            </div>
                            <Link href="/contact?tab=w-tabs-0-data-w-pane-1" className="button-cta w-inline-block" data-w-id="a43da8e7-f026-4360-08c1-7387d0a39628">
                                <div className="button-cta-bg">
                                    <div className="button-m z-index-1">Schedule your demo</div>
                                    <div className="button_hover_light"></div>
                                </div>
                                <div className="border-gradient"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}