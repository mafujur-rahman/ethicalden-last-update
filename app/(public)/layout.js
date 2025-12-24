import { Geist, Geist_Mono } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";


import SmoothScroll from "./components/hooks/smooth-scroll";
import CustomCursor from "./components/CustomCursor/CustomCursor";

// Define the Geist and Geist_Mono fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define the Urbanist font
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Ethical Den | Best Software Company in India",
  description: "Ethical Den is a top-rated software development company specializing in web, mobile, and AI-powered solutions.",
  keywords: [
    "Ethical Den",
    "Software Company India",
    "Web Development",
    "Mobile Apps",
    "Next.js SEO",
    "Tech Company",
    "AI Solutions",
  ],
  authors: [{ name: "Ethical Den", url: "https://ethicalden-gsap.netlify.app/" }],
  creator: "Mafujur Rahman",
  publisher: "Ethical Den",
  metadataBase: new URL("https://ethicalden-gsap.netlify.app/"),
  openGraph: {
    title: "Ethical Den | Best Software Company in India",
    description: "Top-rated web and mobile app development company delivering modern digital solutions.",
    url: "https://ethicalden-gsap.netlify.app/",
    siteName: "Ethical Den",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/gal-1.webp?updatedAt=1749634191768",
        width: 1200,
        height: 630,
        alt: "Ethical Den Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethical Den | Best Software Company in India",
    description: "Modern software solutions for businesses and startups.",
    creator: "@ethicalden",
    images: ["https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/gal-1.webp?updatedAt=1749634191768"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <body
        cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} antialiased`}
      >
        <CustomCursor />
        <SmoothScroll />

        {children}
      </body>
    </html>
  );
}
