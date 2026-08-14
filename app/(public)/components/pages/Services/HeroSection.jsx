import Link from 'next/link'

export default function HeroSection() {
    return (
        <section data-w-id="5f0c3656-aa3e-adcc-2a5b-db9e00837905" className="section_hero_home">
            <div opacity-0="" data-w-id="6380ed99-3d50-d171-fbd4-55096e0616b9" className="home_hero_3d_wrapper">
                <div className="home_hero_3d"></div>
            </div>
            <div className="homer_hero_spacer"></div>
            <div className="hero_home_content_wrapper">
                <div className="hero_home_text_light"></div>
                <div className="padding-global relative max-width-full">
                    <div className="container-1280 z-index-2">
                        <div opacity-0="" cross-fade-wrapper="" className="hero_home_content">
                            <div to-absolute="" className="home_hero_text _1">
                                <div className="margin-bottom margin-32">
                                    <h1 className="heading-style-display is-first-texte"><span className="z-index-1">The smartest way</span> <span className="text-glow-red">to end credential threats.</span></h1>
                                </div>
                                <Link href="#section-features" className="button-cta w-inline-block" data-w-id="a43da8e7-f026-4360-08c1-7387d0a39628">
                                    <div className="button-cta-bg">
                                        <div className="button-m z-index-1">Discover our solution</div>
                                        <div className="button_hover_light"></div>
                                    </div>
                                    <div className="border-gradient"></div>
                                </Link>
                            </div>
                            <div to-absolute="" className="home_hero_text _2">
                                <h2 className="heading">After decades of evolving security practices, one thing hasn’t changed: credentials remain the easiest way in for attackers.</h2>
                            </div>
                            <div to-absolute="" className="home_hero_text _3">
                                <h2 className="heading-style-display text-glow-red">It’s time for a new approach.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}