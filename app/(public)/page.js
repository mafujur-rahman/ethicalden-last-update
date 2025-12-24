"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AboutUs from "./home/AboutUs/AboutUs";
import ClientsCollaboration from "./home/ClientsCollaboration/ClientsCollaboration";
import Gallery from "./home/Gallery/Gallery";
import NewLattestProjects from "./home/NewLattestProjects/NewLattestProjects";

import "./globals.css";
import "./main.css";



import { SiWhatsapp } from "react-icons/si";
import Loader from "./components/Loader/Loader";
import { delay } from "./components/utils/delay";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import NewBanner from "./components/NewBanner/NewBanner";
import OurProducts from "./components/OurProducts/OurProducts";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const whatsappRef = useRef(null);

  useEffect(() => {
    delay(2000).then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!loading && whatsappRef.current) {
      gsap.to(whatsappRef.current, {
        backgroundColor: "#a8ff57",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(whatsappRef.current, {
        backgroundColor: "#09e5e5",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 2,
      });
    }
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="">
      <Navbar />
      <NewBanner />
      <Gallery />
      <NewLattestProjects />
      <section></section>
      <OurProducts />
      <ClientsCollaboration />
      <Footer />

      {/* WhatsApp Floating Button */}
      <div
        ref={whatsappRef}
        className="fixed bottom-4 right-4 md:bottom-10 md:right-10 lg:bottom-5 lg:right-5 xl:bottom-10 xl:right-10 p-4 rounded-full shadow-lg z-50 transition cursor-pointer"
      >
        <a
          href="https://wa.me/919547578920"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black"
        >
          <SiWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
}
