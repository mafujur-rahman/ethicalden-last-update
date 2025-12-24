
import React from 'react';
import MakCommunityHome from '../components/pages/ProjectDetails/MakCommunityHome';

export const metadata = {
  title: "MAK Community Project - Ethical Den",
  description: "MAK Community is a social platform built by Ethical Den to engage and empower communities digitally.",
  keywords: ["MAK Community", "Social Platform", "Community Engagement", "Ethical Den Project"],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "MAK Community Project - Ethical Den",
    description: "Discover the MAK Community platform — developed by Ethical Den to bring people together online.",
    url: "https://ethicalden-gsap.netlify.app/projects/mak-community",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MAK Community Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAK Community Project - Ethical Den",
    description: "A powerful community-building platform developed by Ethical Den for digital engagement.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const MakCommunityPage = () => {
    return (
        <div>
            <MakCommunityHome />
        </div>
    );
};

export default MakCommunityPage;