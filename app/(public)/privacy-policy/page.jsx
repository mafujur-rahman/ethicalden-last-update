
import React from 'react';
import PrivacyPolicyHome from '../components/pages/PrivacyPolicy/PrivacyPolicyHome';

export const metadata = {
  title: "Privacy Policy - Ethical Den",
  description: "Understand how Ethical Den collects, uses, and protects your personal information with transparency and care.",
  keywords: [
    "Ethical Den Privacy Policy",
    "Data Protection",
    "User Privacy",
    "Information Security",
    "GDPR Compliance",
    "Privacy Terms",
  ],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "Privacy Policy - Ethical Den",
    description: "Review the privacy practices of Ethical Den regarding data usage, collection, and protection.",
    url: "https://ethicalden-gsap.netlify.app/privacy-policy",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Ethical Den",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Ethical Den",
    description: "Learn how Ethical Den ensures the privacy and protection of your personal information.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const PrivacyPage = () => {
    return (
        <div>
            <PrivacyPolicyHome />
        </div>
    );
};

export default PrivacyPage;