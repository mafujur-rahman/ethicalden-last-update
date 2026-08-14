'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ClientLayout({ children }) {
    useEffect(() => {
        // Load GSAP and other scripts in correct order
        const loadScripts = async () => {
            const checkGsap = setInterval(() => {
                if (typeof window.gsap !== 'undefined') {
                    clearInterval(checkGsap)
                    if (window.gsap && window.ScrollTrigger && window.SplitText) {
                        window.gsap.registerPlugin(
                            window.ScrollTrigger,
                            window.SplitText,
                            window.MotionPathPlugin,
                            window.ScrollSmoother,
                            window.TextPlugin
                        )
                    }
                }
            }, 100)
        }

        loadScripts()
    }, [])

    return (
        <>
            <div data-w-id="3f1e8c66-dc14-e31c-04fc-9dd7679fff78" className="page-wrapper">
                <Navigation />
                <main className="main-wrapper">
                    {children}
                </main>
                <Footer />
            </div>

            {/* Webfont Loader - Load first */}
            <Script
                src="/js/webfont.js"
                strategy="beforeInteractive"
            />

            <Script
                id="webfont-loader"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            WebFont.load({
              google: {
                families: ["Outfit:300,400,500,600,700","Space Grotesk:300,400,500,600,700"]
              }
            });
          `
                }}
            />

            {/* Webflow Core Scripts */}
            <Script
                src="/js/jquery-3.5.1.min.dc5e7f18c8.js"
                strategy="afterInteractive"
            />

            <Script
                src="/js/webflow.schunk.36b8fb49256177c8.js"
                strategy="afterInteractive"
            />

            <Script
                src="/js/webflow.schunk.c42549641b7d4501.js"
                strategy="afterInteractive"
            />

            <Script
                src="/js/webflow.schunk.75081a9d19c69de0.js"
                strategy="afterInteractive"
            />

            <Script
                src="/js/webflow.schunk.22b828e28e7d2015.js"
                strategy="afterInteractive"
            />

            <Script
                src="/js/webflow.601e753a.ae07a48ba6e8c948.js"
                strategy="afterInteractive"
            />

            {/* GSAP Libraries */}
            <Script
                src="/js/gsap.min.js"
                strategy="afterInteractive"
            />

            <Script
                src="/js/ScrollTrigger.min.js"
                strategy="afterInteractive"
            />

            <Script
                src="/js/SplitText.min.js"
                strategy="afterInteractive"
            />

            <Script
                src="/js/MotionPathPlugin.min.js"
                strategy="afterInteractive"
            />

            <Script
                src="/js/ScrollSmoother.min.js"
                strategy="afterInteractive"
            />

            <Script
                src="/js/TextPlugin.min.js"
                strategy="afterInteractive"
            />

            {/* GSAP Register Plugins */}
            <Script
                id="gsap-register-plugins"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            function registerGSAPPlugins() {
              if (typeof gsap !== 'undefined') {
                if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
                if (typeof SplitText !== 'undefined') gsap.registerPlugin(SplitText);
                if (typeof MotionPathPlugin !== 'undefined') gsap.registerPlugin(MotionPathPlugin);
                if (typeof ScrollSmoother !== 'undefined') gsap.registerPlugin(ScrollSmoother);
                if (typeof TextPlugin !== 'undefined') gsap.registerPlugin(TextPlugin);
                console.log('GSAP plugins registered');
              } else {
                setTimeout(registerGSAPPlugins, 100);
              }
            }
            registerGSAPPlugins();
          `
                }}
            />

            {/* Webflow Touch Detection */}
            <Script
                id="webflow-touch-detection"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
          `
                }}
            />

            {/* Google Analytics */}
            <Script
                id="google-tags-first-party"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w,i,g){w[g]=w[g]||[];if(typeof w[g].push=='function')w[g].push.apply(w[g],Array.isArray(i)?i:[i]);})(window,['G-8RTLH2Y5JY'],'google_tags_first_party');
          `
                }}
            />

            <Script src="/js/ux9YctQuZIK6MC3h5dgXIYWGWIk.js" strategy="afterInteractive" async />

            <Script
                id="google-analytics-config"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('set', 'developer_id.dZGVlNj', true);
            gtag('set', 'developer_id.dYWYxNW', true);
            gtag('js', new Date());
            gtag('config', 'G-8RTLH2Y5JY');
          `
                }}
            />

            {/* Finsweet Attributes */}
            <Script src="/js/attributes.js" strategy="afterInteractive" type="module" async />

            {/* Custom Site Scripts */}
            <Script
                src="/js/global.js"
                strategy="afterInteractive"
            />

            <Script
                src="/js/accueil.js"
                strategy="afterInteractive"
            />

            {/* Custom Animation Controls */}
            <Script
                id="animation-controls"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            setTimeout(function() {
              if (window.innerWidth <= 767) {
                const elements = document.querySelectorAll("[h-reveal], [p-reveal]");
                elements.forEach((element) => {
                  element.removeAttribute("h-reveal");
                  element.removeAttribute("p-reveal");
                });
              }
            }, 500);
          `
                }}
            />

            {/* Dynamic Script Loading */}
            <Script
                id="dynamic-script-loader"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            setTimeout(function() {
              const isPreview = location.href.includes("canvas");
              const isDev = localStorage.getItem("devMode") === "true";
              const globalScript = document.createElement("script");
              globalScript.src = isDev || isPreview
                ? "http://localhost:3000/global.js"
                : "https://cdn.jsdelivr.net/gh/40-60/mokn/dist/global.js";
              document.head.appendChild(globalScript);
              
              const script = document.createElement("script");
              script.src = isDev || isPreview
                ? "http://localhost:3000/pages/accueil.js"
                : "https://cdn.jsdelivr.net/gh/40-60/mokn/dist/pages/accueil.js";
              document.head.appendChild(script);
            }, 100);
          `
                }}
            />

            {/* External Scripts */}
            <Script src="/js/disable-hubspot-chatbot.js" strategy="lazyOnload" async defer />
            <Script src="/js/145883235.js" strategy="lazyOnload" async defer />
        </>
    )
}