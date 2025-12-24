
import React from 'react';
import ServicesHome from '../components/pages/Services/ServicesHome';

export const metadata = {
  title: "Services - Ethical Den",
  description: "Explore the wide range of web, mobile, and software development services offered by Ethical Den.",
  keywords: [
    "Ethical Den Services",
    "Web Development",
    "Mobile App Development",
    "Software Solutions",
    "UI/UX Design",
    "Branding",
    "Cyber Security",
    ""
  ],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "Services - Ethical Den",
    description: "Explore the wide range of web, mobile, and software development services offered by Ethical Den.",
    url: "https://ethicalden-gsap.netlify.app/services",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/web-development.jpg?updatedAt=1749635855170",
        width: 1200,
        height: 630,
        alt: "Ethical Den Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Ethical Den",
    description: "Explore Ethical Den's expert services in web, mobile, and software development.",
    creator: "@ethicalden",
    images: ["https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/web-development.jpg?updatedAt=1749635855170"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};



const ServicesPage = () => {
    return (
        <div>
            <ServicesHome />
        </div>
    );
};

export default ServicesPage;