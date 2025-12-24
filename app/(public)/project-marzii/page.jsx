
import React from 'react';
import MarziiHome from '../components/pages/ProjectDetails/MarziiHome';

export const metadata = {
  title: "Marzii Project - Ethical Den",
  description: "Marzii is a fashion and lifestyle platform created by Ethical Den with elegant UX and seamless shopping features.",
  keywords: ["Marzii", "Fashion Website", "Ecommerce Lifestyle", "Ethical Den Fashion Project"],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "Marzii Project - Ethical Den",
    description: "Stylish and modern ecommerce experience for fashion lovers — built by Ethical Den for Marzii.",
    url: "https://ethicalden-gsap.netlify.app/projects/marzii",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marzii Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marzii Project - Ethical Den",
    description: "Experience the digital fashion brand Marzii — powered by Ethical Den’s technology expertise.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const MarziPage = () => {
    return (
        <div>
            <MarziiHome />
        </div>
    );
};

export default MarziPage;