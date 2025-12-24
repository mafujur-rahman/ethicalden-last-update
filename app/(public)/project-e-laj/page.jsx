
import React from 'react';
import ELajHome from '../components/pages/ProjectDetails/ELajHome';

export const metadata = {
  title: "E-Laj Project - Ethical Den",
  description: "E-Laj is a modern telemedicine platform crafted by Ethical Den to simplify healthcare access and online consultations.",
  keywords: ["E-Laj", "Telemedicine", "Healthcare App", "Ethical Den Healthcare Project"],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "E-Laj Project - Ethical Den",
    description: "See how Ethical Den built E-Laj — a digital healthcare platform offering seamless virtual medical consultations.",
    url: "https://ethicalden-gsap.netlify.app/projects/e-laj",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "E-Laj Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Laj Project - Ethical Den",
    description: "An innovative telehealth platform enabling accessible and affordable care — built by Ethical Den.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const ELajPage = () => {
    return (
        <div>
            <ELajHome />
        </div>
    );
};

export default ELajPage;