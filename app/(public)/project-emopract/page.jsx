
import React from 'react';
import EmopractHome from '../components/pages/ProjectDetails/EmopractHome';

export const metadata = {
  title: "EmoPract Project - Ethical Den",
  description: "EmoPract is a mental wellness platform designed by Ethical Den to support emotional and psychological well-being.",
  keywords: ["EmoPract", "Mental Health Platform", "Wellness App", "Ethical Den Projects"],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "EmoPract Project - Ethical Den",
    description: "Explore how Ethical Den developed EmoPract — a platform focusing on emotional health and therapeutic support.",
    url: "https://ethicalden-gsap.netlify.app/projects/emopract",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EmoPract Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmoPract Project - Ethical Den",
    description: "A digital mental wellness platform offering emotional health support — created by Ethical Den.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const EmopractPage = () => {
    return (
        <div>
            <EmopractHome />
        </div>
    );
};

export default EmopractPage;