"use client";

import { usePathname } from "next/navigation"; 
import { useEffect, useState } from "react";

import PageTransition from "./PageTransition/PageTransition";
import SmoothScroll from "./hooks/smooth-scroll";
import CustomCursor from "./CustomCursor/CustomCursor";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [transitionTrigger, setTransitionTrigger] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    // Trigger page transition
    setTransitionTrigger(true);
    const timeout = setTimeout(() => setTransitionTrigger(false), 2000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <PageTransition trigger={transitionTrigger} />
      <CustomCursor />
      <SmoothScroll />
      {children}
    </>
  );
}
