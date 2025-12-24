
import React from 'react';
import SignInHome from '../components/pages/SignIn/SignInHome';

export const metadata = {
  title: "Sign In - Ethical Den",
  description: "Access your Ethical Den account securely and explore our innovative digital solutions tailored for your needs.",
  keywords: [
    "Sign In Ethical Den",
    "Login Ethical Den",
    "User Authentication",
    "Secure Login",
    "Access Dashboard",
    "Tech Startup Login",
  ],
  metadataBase: new URL("https://ethicalden-gsap.netlify.app"),
  openGraph: {
    title: "Sign In - Ethical Den",
    description: "Log into your Ethical Den account and unlock a world of efficient and secure software solutions.",
    url: "https://ethicalden-gsap.netlify.app/signin",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ethicalden-gsap.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sign In - Ethical Den",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign In - Ethical Den",
    description: "Securely access your Ethical Den dashboard and manage your digital experiences.",
    creator: "@ethicalden",
    images: ["https://ethicalden-gsap.netlify.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const SignInPage = () => {
    return (
        <div>
            <SignInHome />
        </div>
    );
};

export default SignInPage;