import './CyberSeccurity.css'
import Footer from '@/app/(public)/components/pages/Services/Footer'
import PageTransitionLayout from '@/app/(public)/components/PageTransition/PageTransitionLayout'
import Navbar from '@/app/(public)/components/Shared/Navbar/Navbar'


export const metadata = {
  title: "EDN Cyber Security - The smartest way to end credential threats.",
  description: "Phish-back your credentials from attackers using contextualized deceptive technology.",
  openGraph: {
    title: "EDN Cyber Security - The smartest way to end credential threats.",
    description: "Phish-back your credentials from attackers using contextualized deceptive technology.",
    images: ["/images/68d165a3ee9bb9e230e28edf_b20942f21fcb82fe6cbf6e86b66be74f_opengraph-Mokn.png"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-wf-domain="www.mokn.io"
      data-wf-page="68946a7f9dd4e558382abd0a"
      data-wf-site="68946a7f9dd4e558382abd0f"
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <link href="https://cdn.prod.website-files.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="/css/mokn.webflow.shared.5083226c0.min.css" rel="stylesheet" type="text/css" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />

        {/* All scripts loaded directly without Next.js optimization */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Load scripts in exact order as original HTML
            function loadScript(src, isAsync, isDefer, callback) {
              var script = document.createElement('script');
              script.src = src;
              if (isAsync) script.async = true;
              if (isDefer) script.defer = true;
              script.onload = callback;
              document.head.appendChild(script);
              return script;
            }
            
            function executeInline(code) {
              var script = document.createElement('script');
              script.textContent = code;
              document.head.appendChild(script);
            }
            
            // Start loading immediately
            (function() {
              // 1. Webfont
              loadScript('/js/webfont.js', false, false, function() {
                executeInline('WebFont.load({ google: { families: ["Outfit:300,400,500,600,700","Space Grotesk:300,400,500,600,700"] } });');
              });
              
              // 2. Webflow touch detection
              executeInline('!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);');
              
              // 3. Google Analytics
              executeInline('(function(w,i,g){w[g]=w[g]||[];if(typeof w[g].push=="function")w[g].push.apply(w[g],Array.isArray(i)?i:[i]);})(window,["G-8RTLH2Y5JY"],"google_tags_first_party");');
              loadScript('/js/ux9YctQuZIK6MC3h5dgXIYWGWIk.js', true, false);
              executeInline('window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("set", "developer_id.dZGVlNj", true);gtag("set", "developer_id.dYWYxNW", true);gtag("js", new Date());gtag("config", "G-8RTLH2Y5JY");');
              
              // 4. Finsweet
              var finsweet = document.createElement('script');
              finsweet.src = '/js/attributes.js';
              finsweet.type = 'module';
              finsweet.async = true;
              document.head.appendChild(finsweet);
              
              // 5. jQuery
              loadScript('/js/jquery-3.5.1.min.dc5e7f18c8.js', false, false, function() {
                // 6. Webflow chunks after jQuery
                loadScript('/js/webflow.schunk.36b8fb49256177c8.js', false, false, function() {
                  loadScript('/js/webflow.schunk.c42549641b7d4501.js', false, false, function() {
                    loadScript('/js/webflow.schunk.75081a9d19c69de0.js', false, false, function() {
                      loadScript('/js/webflow.schunk.22b828e28e7d2015.js', false, false, function() {
                        loadScript('/js/webflow.601e753a.ae07a48ba6e8c948.js', false, false, function() {
                          // 7. GSAP after Webflow
                          loadScript('/js/gsap.min.js', false, false, function() {
                            loadScript('/js/ScrollTrigger.min.js', false, false, function() {
                              loadScript('/js/SplitText.min.js', false, false, function() {
                                loadScript('/js/MotionPathPlugin.min.js', false, false, function() {
                                  loadScript('/js/ScrollSmoother.min.js', false, false, function() {
                                    loadScript('/js/TextPlugin.min.js', false, false, function() {
                                      // 8. Register GSAP plugins
                                      executeInline('gsap.registerPlugin(ScrollTrigger,SplitText,MotionPathPlugin,ScrollSmoother,TextPlugin);');
                                      // 9. Custom scripts
                                      loadScript('/js/global.js', false, false, function() {
                                        loadScript('/js/accueil.js', false, false, function() {
                                          // 10. IMPORTANT FIX: Load LOCAL accueil.js instead of CDN
                                          // This ensures your local video changes are used
                                          var localScript = document.createElement("script");
                                          localScript.src = "/js/accueil.js";
                                          document.head.appendChild(localScript);
                                          
                                          // 11. Mobile animation removal
                                          executeInline('if (window.innerWidth <= 767) { var elements = document.querySelectorAll("[h-reveal], [p-reveal]"); for (var i = 0; i < elements.length; i++) { elements[i].removeAttribute("h-reveal"); elements[i].removeAttribute("p-reveal"); } }');
                                          // 12. External scripts
                                          loadScript('/js/disable-hubspot-chatbot.js', false, true);
                                          loadScript('/js/145883235.js', false, true);
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            })();
          `
        }} />
      </head>
      <body suppressHydrationWarning>
        <div data-w-id="3f1e8c66-dc14-e31c-04fc-9dd7679fff78" className="page-wrapper">
          <main className="main-wrapper">
            <PageTransitionLayout>
              {children}
            </PageTransitionLayout>

          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}