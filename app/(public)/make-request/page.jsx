
import React from 'react';
import MakeRequestHome from '../components/pages/MakeRequest/MakeRequestHome';

export const metadata = {
  title: "Make a Request - Ethical Den",
  description: "Request a custom quote or service from Ethical Den. Tell us about your project needs and we’ll get back to you shortly.",
  keywords: [
    "Request Quote",
    "Custom Project",
    "Ethical Den Request",
    "Software Proposal",
    "Service Inquiry",
  ],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "Make a Request - Ethical Den",
    description: "Let us know your requirements and we'll help build your vision with tailored solutions.",
    url: "https://ethicalden-gsap.netlify.app/make-request",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ethical Den Quote Request",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Make a Request - Ethical Den",
    description: "Tell us about your project and get a custom proposal from Ethical Den.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const MakeRequestPage = () => {
    return (
        <div>
            <MakeRequestHome />
        </div>
    );
};

export default MakeRequestPage;