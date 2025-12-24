
import React from 'react';
import AboutUsHome from '../components/pages/AboutUs/AboutUsHome';

export const metadata = {
  title: "About Us - Ethical Den",
  description: "Learn more about Ethical Den, our mission, values, and the passionate team behind our innovative digital solutions.",
  keywords: [
    "About Ethical Den",
    "Our Team",
    "Company Mission",
    "Software Company India",
    "Tech Startup",
    "Who We Are",
  ],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "About Us - Ethical Den",
    description: "Discover the story, values, and vision behind Ethical Den — a leading software development company.",
    url: "https://ethicalden-gsap.netlify.app/about",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/1.jpg?updatedAt=1750495874844",
        width: 1200,
        height: 630,
        alt: "About Ethical Den",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Ethical Den",
    description: "Get to know the team and mission behind Ethical Den, where technology meets innovation.",
    creator: "@ethicalden",
    images: ["https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/1.jpg?updatedAt=1750495874844"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const AboutPage = () => {
    return (
        <div>
            
            <AboutUsHome />
        </div>
    );
};

export default AboutPage;