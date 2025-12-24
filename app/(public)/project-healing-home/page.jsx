
import React from 'react';
import HealingHome from '../components/pages/ProjectDetails/HealingHome';

export const metadata = {
  title: "Healing Home Healthcare LLC Project - Ethical Den",
  description: "Ethical Den partnered with Healing Home Healthcare LLC to deliver a digital platform for quality in-home patient care.",
  keywords: ["Healing Home Healthcare", "Home Healthcare Website", "Ethical Den Medical Project"],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "Healing Home Healthcare LLC Project - Ethical Den",
    description: "A full-service home healthcare website built for Healing Home Healthcare LLC by Ethical Den.",
    url: "https://ethicalden-gsap.netlify.app/projects/healing-home-healthcare-llc",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healing Home Healthcare Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healing Home Healthcare LLC Project - Ethical Den",
    description: "Modernizing home healthcare through digital transformation — a project by Ethical Den.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const HealingPage = () => {
    return (
        <div>
           <HealingHome /> 
        </div>
    );
};

export default HealingPage;