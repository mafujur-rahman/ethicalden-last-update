
import React from 'react';
import AgarwalHome from '../components/pages/ProjectDetails/AgarwalHome';

export const metadata = {
  title: "Agarwal Tibrewal Project - Ethical Den",
  description: "Discover how Ethical Den empowered Agarwal Tibrewal with a digital solution tailored to modern legal and business practices.",
  keywords: ["Agarwal Tibrewal", "Legal Project", "Business Website", "Ethical Den Portfolio"],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "Agarwal Tibrewal Project - Ethical Den",
    description: "Explore the Agarwal Tibrewal project — a modern platform for legal services and consulting by Ethical Den.",
    url: "https://ethicalden-gsap.netlify.app/projects/agarwal-tibrewal",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agarwal Tibrewal Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agarwal Tibrewal Project - Ethical Den",
    description: "A dynamic legal consultancy website designed for Agarwal Tibrewal by Ethical Den.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const AgarwalPage = () => {
    return (
        <div>
            <AgarwalHome />
        </div>
    );
};

export default AgarwalPage;