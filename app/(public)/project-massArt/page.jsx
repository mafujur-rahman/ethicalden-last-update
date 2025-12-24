
import React from 'react';
import MassArtHome from '../components/pages/ProjectDetails/MassArtHome';

export const metadata = {
  title: "MassArt Project - Ethical Den",
  description: "MassArt is a digital art platform by Ethical Den supporting creators, galleries, and immersive showcases.",
  keywords: ["MassArt", "Digital Art", "Artist Portfolio", "Ethical Den Art Project"],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "MassArt Project - Ethical Den",
    description: "Unleashing artistic creativity through technology — MassArt is a digital masterpiece by Ethical Den.",
    url: "https://ethicalden-gsap.netlify.app/projects/massart",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MassArt Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MassArt Project - Ethical Den",
    description: "A creative art portfolio and gallery platform — developed by Ethical Den for the digital age.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const MassArtPage = () => {
    return (
        <div>
            <MassArtHome />
        </div>
    );
};

export default MassArtPage;