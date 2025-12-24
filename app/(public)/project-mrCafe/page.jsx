
import React from 'react';
import MrCafeHome from '../components/pages/ProjectDetails/MrCafeHome';

export const metadata = {
  title: "MrCafe Project - Ethical Den",
  description: "MrCafe is a cozy and smart cafe website designed by Ethical Den to modernize food & beverage business presence.",
  keywords: ["MrCafe", "Cafe Website", "Food Business", "Ethical Den Cafe Project"],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "MrCafe Project - Ethical Den",
    description: "Explore the digital identity of MrCafe — crafted by Ethical Den for delightful cafe experiences.",
    url: "https://ethicalden-gsap.netlify.app/projects/mrcafe",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MrCafe Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MrCafe Project - Ethical Den",
    description: "Delicious design meets digital functionality — MrCafe website built by Ethical Den.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const MrCafePage = () => {
    return (
        <div>
            <MrCafeHome />
        </div>
    );
};

export default MrCafePage;