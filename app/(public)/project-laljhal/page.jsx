
import React from 'react';
import LaljhalHome from '../components/pages/ProjectDetails/LaljhalHome';

export const metadata = {
  title: "Laljhal Project - Ethical Den",
  description: "Laljhal is a creative portfolio and service platform developed by Ethical Den for artists and entrepreneurs.",
  keywords: ["Laljhal", "Creative Platform", "Portfolio Website", "Ethical Den Design Project"],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "Laljhal Project - Ethical Den",
    description: "A bold and artistic digital experience designed by Ethical Den for the Laljhal platform.",
    url: "https://ethicalden-gsap.netlify.app/projects/laljhal",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Laljhal Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laljhal Project - Ethical Den",
    description: "Explore Laljhal — a modern creative expression platform brought to life by Ethical Den.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const LaljhalPage = () => {
    return (
        <div>
            <LaljhalHome />
        </div>
    );
};

export default LaljhalPage;