import Link from 'next/link'

export default function LanternSection() {
    return (
        <section className="section_lanterne padding-vertical-mobile">
            <div className="padding-global padding-custom-lantern">
                <div className="container-1280 max-height-full relative">
                    <div className="relative vflex-center-top">
                        <div className="absolute z-index-2">
                            <div className="max-width-768 text-align-center vflex-center align-center">
                                <div className="margin-bottom margin-16">
                                    <h2 h-reveal="">We have <span className="text-glow-white">way more</span> to offer:<br />monitor your attack surface with Lantern</h2>
                                </div>
                                <div className="margin-bottom margin-48">
                                    <p p-reveal="" className="text-color-gs-300 text-large">Combine credential deception with external attack surface management for full-spectrum protection.</p>
                                </div>
                                <Link href="/lantern" className="button-cta w-inline-block" data-w-id="a43da8e7-f026-4360-08c1-7387d0a39628">
                                    <div className="button-cta-bg">
                                        <div className="button-m z-index-1">Learn more about Lantern</div>
                                        <div className="button_hover_light"></div>
                                    </div>
                                    <div className="border-gradient"></div>
                                </Link>
                            </div>
                        </div>
                        <div className="lanter-wrapper">
                            <div lantern-wrapper="" className="section_lantern_box">
                            </div>
                            <div className="section_lantern_mask"></div>
                            <div className="section_lantern_mask left"></div>
                            <div className="section_lantern_mask right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}