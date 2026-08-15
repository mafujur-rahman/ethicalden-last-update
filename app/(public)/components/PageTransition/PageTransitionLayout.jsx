'use client';

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname, useRouter } from 'next/navigation';
import { toPng } from 'html-to-image'; // npm install html-to-image

const TransitionContext = createContext(null);

// For BUTTONS or any programmatic nav (form submit, onClick handlers, etc.)
export function useTransitionRouter() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error('useTransitionRouter must be used inside <PageTransitionLayout>');
  return ctx;
}

export default function PageTransitionLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  const prevPathname = useRef(pathname);
  const isFirstRender = useRef(true);
  const pendingReveal = useRef(false);
  const isTransitioning = useRef(false); // guards against double-clicks

  const [displayChildren, setDisplayChildren] = useState(children);
  const [snapshot, setSnapshot] = useState(null);

  const rows = () => [row1Ref.current, row2Ref.current, row3Ref.current];

  // ---- COVER: captures the CURRENT page and plays the sweep-in ----
  const cover = useCallback(async () => {
    let dataUrl = null;
    try {
      dataUrl = await toPng(contentRef.current, {
        pixelRatio: 1,
        cacheBust: true,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    } catch {
      dataUrl = null;
    }
    setSnapshot(dataUrl);
    await new Promise((r) => requestAnimationFrame(r));

    return new Promise((resolve) => {
      gsap.set(rows(), { xPercent: -100 });
      gsap.to(rows(), {
        xPercent: 0,
        duration: 0.45,
        ease: 'power3.inOut',
        stagger: 0.08,
        onComplete: resolve,
      });
    });
  }, []);

  const reveal = useCallback(() => {
    gsap.to(rows(), {
      xPercent: 100,
      duration: 0.5,
      ease: 'power3.inOut',
      stagger: 0.08,
      onComplete: () => setSnapshot(null),
    });
  }, []);

  const navigate = useCallback(
    async (href) => {
      if (href === pathname || isTransitioning.current) return;
      isTransitioning.current = true;
      pendingReveal.current = true;
      await cover();       // screen is now fully hidden behind slices of the OLD page
      router.push(href);   // only NOW does the route change, while hidden
    },
    [cover, pathname, router]
  );

  // ---- Catch-all: intercept every internal <a> click, no matter what
  // component rendered it (Link, plain <a>, whatever). Buttons still need
  // to call navigate() explicitly via useTransitionRouter() below.
  const handleContainerClick = useCallback(
    (e) => {
      const anchor = e.target.closest('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const isInternal = href.startsWith('/') || href.startsWith(window.location.origin);
      const isModifiedClick =
        e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
      const opensNewTab = anchor.target === '_blank';

      if (!isInternal || isModifiedClick || opensNewTab || anchor.hasAttribute('download')) {
        return; // let the browser handle it normally
      }

      e.preventDefault();
      navigate(href);
    },
    [navigate]
  );

  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      gsap.set(rows(), { xPercent: -100 });
      gsap.to(rows(), { xPercent: 100, duration: 0.6, ease: 'power3.inOut', stagger: 0.08 });
      return;
    }

    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;

    setDisplayChildren(children);

    if (pendingReveal.current) {
      pendingReveal.current = false;
      reveal();
    } else {
      // Route changed without going through navigate() — e.g. browser
      // back/forward button. Still cover-then-reveal so it's not jarring.
      gsap.set(rows(), { xPercent: -100 });
      reveal();
    }

    isTransitioning.current = false;
  }, { scope: containerRef, dependencies: [pathname] });

  return (
    <TransitionContext.Provider value={{ navigate }}>
      <div
        ref={containerRef}
        onClickCapture={handleContainerClick}
        className="relative min-h-screen w-full overflow-hidden"
      >
        <div ref={contentRef} className="w-full h-full">
          {displayChildren}
        </div>

        <div className="pointer-events-none fixed inset-0 z-50 flex flex-col">
          {[row1Ref, row2Ref, row3Ref].map((ref, i) => (
            <div
              key={i}
              ref={ref}
              className="h-1/3 w-full bg-[#f2f1ec]"
              style={
                snapshot
                  ? {
                      backgroundImage: `url(${snapshot})`,
                      backgroundSize: '100% 300%',
                      backgroundPosition: `0% ${i * 50}%`,
                      backgroundRepeat: 'no-repeat',
                    }
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </TransitionContext.Provider>
  );
}