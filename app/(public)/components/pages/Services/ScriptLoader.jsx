'use client'

import { useEffect } from 'react'

export default function ScriptLoader() {
    useEffect(() => {
        // Load all scripts in the exact order as original HTML
        const loadScripts = async () => {
            // Helper function to load script
            const loadScript = (src, isAsync = false, isDefer = false) => {
                return new Promise((resolve) => {
                    const script = document.createElement('script')
                    script.src = src
                    if (isAsync) script.async = true
                    if (isDefer) script.defer = true
                    script.onload = resolve
                    script.onerror = resolve
                    document.head.appendChild(script)
                })
            }

            // Helper to execute inline script
            const executeInline = (code) => {
                const script = document.createElement('script')
                script.textContent = code
                document.head.appendChild(script)
            }

            // Load in exact order as original HTML

            // 1. Webfont
            await loadScript('/js/webfont.js')
            executeInline(`WebFont.load({ google: { families: ["Outfit:300,400,500,600,700","Space Grotesk:300,400,500,600,700"] } });`)

            // 2. Webflow touch detection
            executeInline(`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`)

            // 3. Google Analytics
            executeInline(`(function(w,i,g){w[g]=w[g]||[];if(typeof w[g].push=='function')w[g].push.apply(w[g],Array.isArray(i)?i:[i]);})(window,['G-8RTLH2Y5JY'],'google_tags_first_party');`)
            await loadScript('/js/ux9YctQuZIK6MC3h5dgXIYWGWIk.js', true)
            executeInline(`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('set', 'developer_id.dZGVlNj', true);gtag('set', 'developer_id.dYWYxNW', true);gtag('js', new Date());gtag('config', 'G-8RTLH2Y5JY');`)

            // 4. Finsweet
            const finsweetScript = document.createElement('script')
            finsweetScript.src = '/js/attributes.js'
            finsweetScript.type = 'module'
            finsweetScript.async = true
            document.head.appendChild(finsweetScript)

            // 5. jQuery and Webflow core
            await loadScript('/js/jquery-3.5.1.min.dc5e7f18c8.js')
            await loadScript('/js/webflow.schunk.36b8fb49256177c8.js')
            await loadScript('/js/webflow.schunk.c42549641b7d4501.js')
            await loadScript('/js/webflow.schunk.75081a9d19c69de0.js')
            await loadScript('/js/webflow.schunk.22b828e28e7d2015.js')
            await loadScript('/js/webflow.601e753a.ae07a48ba6e8c948.js')

            // 6. GSAP Libraries
            await loadScript('/js/gsap.min.js')
            await loadScript('/js/ScrollTrigger.min.js')
            await loadScript('/js/SplitText.min.js')
            await loadScript('/js/MotionPathPlugin.min.js')
            await loadScript('/js/ScrollSmoother.min.js')
            await loadScript('/js/TextPlugin.min.js')

            // 7. GSAP Register Plugins
            executeInline(`gsap.registerPlugin(ScrollTrigger,SplitText,MotionPathPlugin,ScrollSmoother,TextPlugin);`)

            // 8. Custom Site Scripts
            await loadScript('/js/global.js')
            await loadScript('/js/accueil.js')

            // 9. Dynamic Script Loading
            executeInline(`
        var isPreview = location.href.includes("canvas");
        var isDev = localStorage.getItem("devMode") === "true";
        var globalScript = document.createElement("script");
        globalScript.src = isDev || isPreview ? "http://localhost:3000/global.js" : "https://cdn.jsdelivr.net/gh/40-60/mokn/dist/global.js";
        document.head.appendChild(globalScript);
        var script = document.createElement("script");
        script.src = isDev || isPreview ? "http://localhost:3000/pages/accueil.js" : "https://cdn.jsdelivr.net/gh/40-60/mokn/dist/pages/accueil.js";
        document.head.appendChild(script);
      `)

            // 10. Mobile animation removal
            executeInline(`
        if (window.innerWidth <= 767) {
          var elements = document.querySelectorAll("[h-reveal], [p-reveal]");
          for (var i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("h-reveal");
            elements[i].removeAttribute("p-reveal");
          }
        }
      `)

            // 11. External scripts
            await loadScript('/js/disable-hubspot-chatbot.js', false, true)
            await loadScript('/js/145883235.js', false, true)
        }

        // Start loading scripts immediately
        loadScripts()
    }, [])

    return null
}