/* ============================================ */
/* WEBPACK BUNDLED MODULE - PAGES/ACCUEIL       */
/* ============================================ */

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pages/accueil",[],t):"object"==typeof exports?exports["pages/accueil"]=t():e["pages/accueil"]=t()}(this,()=>(()=>{

/* ============================================ */
/* MODULE DEFINITIONS                           */
/* ============================================ */

var e = {
    /* ======================================== */
    /* MODULE 150: LANTERN VIDEO                */
    /* ======================================== */
    150: e => {
        e.exports = function() {
            const e = {
                loop: {
                    mp4: "/media/logo-lantern.mp4",
                    mov: "/media/logo-lantern.mov"
                },
                intro: {
                    mp4: "/media/logo-lantern.mp4",
                    mov: "/media/logo-lantern.mov"
                }
            };
            
            let t = document.querySelector("[lantern-wrapper]");
            
            function s(e) {
                const t = document.createElement("video");
                t.className = e.className || "fullsize z-index-1 inset-0";
                t.muted = !0;
                t.playsInline = !0;
                Object.assign(t, e.attributes);
                
                const s = document.createElement("source");
                s.src = e.sources.mp4;
                s.type = "video/mp4";
                
                const o = document.createElement("source");
                o.src = e.sources.mov;
                o.type = "video/quicktime";
                
                t.appendChild(s);
                t.appendChild(o);
                
                return t;
            }
            
            if(t) {
                t.innerHTML = "";
            }
            
            !function() {
                if(!t) {
                    return void console.warn("Lantern wrapper not found");
                }
                
                const o = s({
                    sources: e.loop,
                    className: "fullsize z-index-1 inset-0",
                    attributes: { loop: !0 }
                });
                
                const n = s({
                    sources: e.intro,
                    className: "fullsize z-index-1 inset-0",
                    attributes: { autoplay: !1 }
                });
                
                n.addEventListener("ended", () => {
                    n.classList.add("hide");
                    o.play().catch(e => {
                        console.error("Failed to play lantern loop video:", e);
                    });
                });
                
                [o, n].forEach(e => {
                    e.addEventListener("error", e => {
                        console.error("Lantern video loading error:", e);
                    });
                });
                
                t.appendChild(o);
                t.appendChild(n);
                
                gsap.to({}, {
                    scrollTrigger: {
                        trigger: t,
                        start: "top 80%",
                        once: !0,
                        onEnter: () => {
                            console.log("Lantern wrapper reached center - starting intro video");
                            n.play().catch(e => {
                                console.error("Failed to play lantern intro video:", e);
                            });
                        }
                    }
                });
            }();
        };
    },
    
    /* ======================================== */
    /* MODULE 648: SLIDER SEQUENCE              */
    /* ======================================== */
    648: e => {
        e.exports = function() {
            const e = [
                "/media/sequence-1.mp4",
                "/media/2.mp4",
                "/media/3.mp4",
                "/media/4.mp4",
                "/media/5.mp4",
                "/media/6.mp4"
            ];
            
            const t = document.querySelector(".slider_lottie_wrapper");
            const s = document.querySelectorAll("[slider-h2]");
            const o = document.querySelector("[slider-prev]");
            const n = document.querySelector("[slider-next]");
            const r = document.querySelector(".section_home_slider").querySelectorAll(".slider-dot");
            
            let i = 0;
            t.innerHTML = "";
            
            const a = [];
            const l = [];
            
            function c(e, t) {
                if(r && r.length) {
                    r[e].classList.remove("is-active");
                    r[t].classList.add("is-active");
                }
            }
            
            function d(e, t) {
                a[e].classList.add("hide");
                a[t].classList.remove("hide");
            }
            
            function p(e) {
                if(l[e]) {
                    l[e].currentTime = 0;
                    l[e].play();
                }
            }
            
            e.forEach((e, s) => {
                const o = document.createElement("div");
                o.classList.add("slider_lottie");
                if(0 !== s) o.classList.add("hide");
                o.style.width = "100%";
                o.style.height = "100%";
                
                const n = document.createElement("video");
                n.src = e;
                n.style.width = "100%";
                n.style.height = "100%";
                n.style.objectFit = "contain";
                n.muted = !0;
                n.playsInline = !0;
                n.preload = "metadata";
                
                o.appendChild(n);
                t.appendChild(o);
                a.push(o);
                l.push(n);
            });
            
            if(l[0] && "undefined" != typeof gsap) {
                gsap.registerPlugin(gsap.plugins && gsap.plugins.ScrollTrigger ? gsap.plugins.ScrollTrigger : window.ScrollTrigger);
                gsap.to({}, {
                    scrollTrigger: {
                        trigger: t,
                        start: "top 70%",
                        once: !0,
                        onEnter: () => p(0)
                    }
                });
            }
            
            s.forEach((e, t) => {
                e.classList.remove("is-active", "is-done");
                if(0 === t) e.classList.add("is-active");
            });
            
            n.addEventListener("click", () => {
                var t, r;
                if(i >= e.length - 1) return;
                r = i + 1;
                t = i;
                s[t].classList.remove("is-active");
                s[t].classList.add("is-done");
                s[r].classList.add("is-active");
                d(i, i + 1);
                c(i, i + 1);
                i++;
                p(i);
                n.classList.toggle("is-disabled", i >= e.length - 1);
                o.classList.remove("is-disabled");
            });
            
            o.addEventListener("click", () => {
                if(i <= 0) return;
                t.classList.add("opacity-0");
                setTimeout(() => {
                    s[i].classList.remove("is-active", "is-done");
                    s[i - 1].classList.remove("is-done");
                    s[i - 1].classList.add("is-active");
                    d(i, i - 1);
                    c(i, i - 1);
                    i--;
                    t.classList.remove("opacity-0");
                    o.classList.toggle("is-disabled", i <= 0);
                    n.classList.remove("is-disabled");
                }, 200);
            });
        };
    },
    
    /* ======================================== */
    /* MODULE 975: CARBON BG SEQUENCE           */
    /* ======================================== */
    975: e => {
        e.exports = function() {
            if(window.innerWidth <= 767) return;
            
            const e = Array.from({ length: 135 }, (e, t) => `https://cdn.jsdelivr.net/gh/40-60/mokn@master/dist/img_sequences/carbon-bg/carbon-bg${t}.webp`);
            
            document.querySelectorAll("[placeholder-carbon]").forEach(e => {
                e.style.display = "none";
            });
            
            document.querySelectorAll("[carbon-bg]").forEach(t => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: t,
                        start: "center bottom",
                        end: "center center",
                        scrub: !0
                    }
                }).add((t => {
                    const s = { frame: 0 };
                    const o = t.canvas;
                    const n = o.getContext("2d");
                    const r = e.map(e => {
                        const t = new Image();
                        t.src = e;
                        return t;
                    });
                    
                    return gsap.to(s, {
                        frame: r.length - 1,
                        ease: "none",
                        onUpdate: () => {
                            n.clearRect(0, 0, o.width, o.height);
                            const e = r[Math.round(s.frame)];
                            if(e?.complete) {
                                n.drawImage(e, 0, 0, o.width, o.height);
                            }
                        },
                        duration: t.duration || .675,
                        repeat: 0
                    });
                })({ canvas: t, duration: .675 }));
            });
        };
    },
    
    /* ======================================== */
    /* MODULE 995: SCROLL PATH ANIMATION        */
    /* ======================================== */
    995: e => {
        e.exports = function() {
            const e = document.querySelector("#scroll-path");
            const t = document.querySelector(".path_light");
            const s = document.querySelector("#section-features");
            
            if(document.querySelector(".line_path_wrapper"), e && t) {
                const o = e.getTotalLength();
                
                e.style.strokeDasharray = o;
                e.style.strokeDashoffset = o;
                e.style.willChange = "stroke-dashoffset";
                t.style.willChange = "transform";
                
                gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
                
                gsap.to(e, {
                    strokeDashoffset: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: s,
                        start: "top bottom",
                        end: "bottom 70%",
                        scrub: !0
                    }
                });
                
                gsap.to(t, {
                    motionPath: {
                        path: e,
                        align: e,
                        alignOrigin: [.5, .5]
                    },
                    ease: "none",
                    scrollTrigger: {
                        trigger: s,
                        start: "top bottom",
                        end: "bottom 70%",
                        scrub: !0
                    }
                });
                
                gsap.set(".implement_light", { opacity: 0 });
                
                gsap.to(".implement_light", {
                    opacity: 1,
                    ease: "power2.inOut",
                    duration: .7,
                    scrollTrigger: {
                        trigger: e,
                        start: "bottom 65%",
                        end: "bottom center",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        };
    }
};

/* ============================================ */
/* MODULE CACHE & REQUIRE FUNCTION             */
/* ============================================ */

var t = {};

function s(o) {
    var n = t[o];
    if(void 0 !== n) return n.exports;
    var r = t[o] = { exports: {} };
    return e[o](r, r.exports, s), r.exports;
}

/* ============================================ */
/* EXECUTE MODULES                             */
/* ============================================ */

s(648)();
s(995)();
s(975)();
s(150)();

/* ============================================ */
/* HERO VIDEO CONFIGURATION                     */
/* ============================================ */

const o = {
    FIRST_VISIT: {
        NAV_DELAY: 3700,
        CONTENT_DELAY: 4700
    },
    RETURN_VISIT: {
        NAV_DELAY: 100,
        CONTENT_DELAY: 500
    }
};

const n = "https://cdn.jsdelivr.net/gh/40-60/mokn/dist/img_sequences";

// ADD THIS: Helper function to add cache-busting query parameter
const addCacheBuster = (url) => {
    // Only add cache-buster in development or when needed
    if (process.env.NODE_ENV === 'development') {
        const separator = url.includes('?') ? '&' : '?';
        return `${url}${separator}v=${Date.now()}`;
    }
    return url;
};

// UPDATE THIS: Replace with your new video URLs
const r = {
    home: {
        loop: {
            mp4: "/media/banner-video.mp4",
            mov: "/media/banner-video.mov"
        }
    }
};

/* ============================================ */
/* DOM ELEMENT SELECTIONS                       */
/* ============================================ */

const i = document.querySelector(".home_hero_3d_wrapper");
const a = document.querySelector(".nav-large");
const l = document.querySelector(".nav-small");
const c = document.querySelector(".hero_home_content");
const d = document.querySelector(".load-screen") || { style: { display: "none" } };

/* ============================================ */
/* VIDEO CREATION HELPER FUNCTION               */
/* ============================================ */

function p(e) {
    const t = document.createElement("video");
    t.className = e.className || "home_hero_3d";
    t.muted = !0;
    t.playsInline = !0;
    t.loop = !0;
    t.autoplay = !0;
    Object.assign(t, e.attributes);
    
    // Clear any existing sources
    while (t.firstChild) {
        t.removeChild(t.firstChild);
    }
    
    const s = document.createElement("source");
    s.src = e.sources.mp4;
    s.type = "video/mp4";
    t.appendChild(s);
    
    // Add error handling to log video URL
    t.addEventListener('error', (error) => {
        console.error(`Video failed to load: ${e.sources.mp4}`, error);
    });
    
    return t;
}

/* ============================================ */
/* FUNCTION TO CLEAN UP EXISTING VIDEOS         */
/* ============================================ */

function cleanupExistingVideos(wrapper) {
    if (!wrapper) return;
    const existingVideos = wrapper.querySelectorAll('video');
    existingVideos.forEach(video => {
        video.pause();
        video.removeAttribute('src');
        video.load();
        video.remove();
    });
}

/* ============================================ */
/* HERO VIDEO INITIALIZATION                    */
/* ============================================ */

return function(e) {
    const {
        wrapper: t,
        videoSources: s,
        className: o,
        onIntroPlay: n,
        logPrefix: r
    } = e;
    
    if(!t) {
        return void console.warn(`${r} wrapper not found`);
    }
    
    // Clean up existing videos first
    cleanupExistingVideos(t);
    
    // Create and show only the loop video
    const a = p({
        sources: s.loop,
        className: o,
        attributes: { autoplay: !0, loop: !0 }
    });
    
    t.appendChild(a);
    
    a.addEventListener("error", e => {
        console.error(`${r} video loading error:`, e);
        console.error(`Failed URL: ${s.loop?.mp4}`);
    });
    
    // Show wrapper immediately
    if(t) {
        t.style.opacity = 1;
    }
    
    // Trigger UI animations immediately
    if(n) {
        n(!1);
    }
}({
    wrapper: i,
    videoSources: r.home,
    className: "home_hero_3d",
    onIntroPlay: function(e = !0) {
        console.log("Loop video playing - triggering UI animations");
        const t = e ? o.FIRST_VISIT : o.RETURN_VISIT;
        
        if(window.innerWidth > 991) {
            setTimeout(() => {
                if(a) {
                    a.style.transform = "translateY(0)";
                }
            }, t.NAV_DELAY);
        } else {
            setTimeout(() => {
                if(l) {
                    l.style.transform = "translateY(0)";
                }
            }, t.NAV_DELAY);
        }
        
        setTimeout(() => {
            if(c) {
                c.style.opacity = 1;
            }
            if(d && d.style) {
                d.style.display = "none";
            }
        }, t.CONTENT_DELAY);
    },
    logPrefix: "Hero"
});

/* ============================================ */
/* NAVIGATION VISIBILITY FOR DESKTOP            */
/* ============================================ */

if(window.innerWidth > 991) {
    gsap.set(l, { opacity: 0 });
    l.style.transform = "translateY(0%)";
    gsap.to(l, {
        opacity: 1,
        duration: .5,
        ease: "power1.out",
        scrollTrigger: {
            trigger: "[section-feature]",
            start: "top bottom",
            toggleActions: "play none none reverse"
        }
    });
} else {
    gsap.set(l, { opacity: 1 });
}

/* ============================================ */
/* END OF MODULE                                */
/* ============================================ */

})());