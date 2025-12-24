
import React from 'react';
import SandeepHome from '../components/pages/ProjectDetails/SandeepHome';

export const metadata = {
  title: "Sandeep Autolines Project - Ethical Den",
  description: "Sandeep Autolines is a transport and logistics management platform developed by Ethical Den for efficiency and growth.",
  keywords: ["Sandeep Autolines", "Logistics Website", "Transportation Business", "Ethical Den Logistics Project"],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "Sandeep Autolines Project - Ethical Den",
    description: "A logistics and transport digital solution by Ethical Den — discover the Sandeep Autolines project.",
    url: "https://ethicalden-gsap.netlify.app/projects/sandeep-autolines",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sandeep Autolines Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep Autolines Project - Ethical Den",
    description: "A powerful transport and logistics website crafted by Ethical Den for Sandeep Autolines.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const SandeepPage = () => {
    return (
        <div>
            <SandeepHome />
        </div>
    );
};

export default SandeepPage;