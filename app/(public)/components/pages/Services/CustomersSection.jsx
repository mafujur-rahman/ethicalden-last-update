export default function CustomersSection() {
    return (
        <section className="section padding-vertical-mobile">
            <div className="padding-global padding-section-112">
                <div className="container-1280">
                    <div className="vflex-center text-align-center">
                        <div>
                            <h2 h-reveal="">Our customers</h2>
                        </div>
                        <div className="blurred_logo">
                            <img src="/images/68b8566a9170f46dc24273b4_blurred-logo.webp" loading="lazy" sizes="100vw" srcSet="/images/68b8566a9170f46dc24273b4_blurred-logo-p-500.webp 500w, /images/68b8566a9170f46dc24273b4_blurred-logo-p-800.webp 800w, /images/68b8566a9170f46dc24273b4_blurred-logo-p-1080.webp 1080w, /images/68b8566a9170f46dc24273b4_blurred-logo-p-1600.webp 1600w, /images/68b8566a9170f46dc24273b4_blurred-logo-p-2000.webp 2000w, /images/68b8566a9170f46dc24273b4_blurred-logo.webp 2432w" alt="Blurred logos" />
                        </div>
                        <div className="vflex-center text-align-center max-width-768">
                            <div className="margin-bottom margin-32">
                                <h3 h-reveal="">Don't see any logos? That's intentional.</h3>
                            </div>
                            <div className="margin-bottom margin-24">
                                <p p-reveal="" className="text-large text-color-gs-300">We've chosen to keep our clients anonymous. But to give you a sense of scale, the combined annual revenue of organizations protected by MokN exceeds</p>
                            </div>
                            <div className="margin-bottom margin-24">
                                <div p-reveal="" className="heading-style-h1 text-glow-white">$480 billion.</div>
                            </div>
                            <p p-reveal="" className="text-large">We don't showcase logos. We protect them.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}