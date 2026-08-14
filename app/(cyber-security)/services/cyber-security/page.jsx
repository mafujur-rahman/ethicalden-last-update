'use client'


import { useEffect } from 'react'
import LoadScreen from '../../../(public)/components/pages/Services/LoadScreen';
import Navigation from '../../../(public)/components/pages/Services/Navigation';
import HeroSection from '../../../(public)/components/pages/Services/HeroSection';
import FeaturesSection from '../../../(public)/components/pages/Services/FeaturesSection';
import SliderSection from '../../../(public)/components/pages/Services/SliderSection';
import StatsSection from '../../../(public)/components/pages/Services/StatsSection';
import CustomersSection from '../../../(public)/components/pages/Services/CustomersSection';
import QuoteSection from '../../../(public)/components/pages/Services/QuoteSection';
import InvestorsSection from '../../../(public)/components/pages/Services/InvestorsSection';
import CTASection from '../../../(public)/components/pages/Services/CTASection';
import EventsSection from '../../../(public)/components/pages/Services/EventsSection';
import LanternSection from '../../../(public)/components/pages/Services/LanternSection';
import FAQSection from '../../../(public)/components/pages/Services/FAQSection';


export default function Home() {
  useEffect(() => {
    // Remove h-reveal and p-reveal attributes from all elements on mobile
    if (window.innerWidth <= 767) {
      const elements = document.querySelectorAll("[h-reveal], [p-reveal]");
      elements.forEach((element) => {
        element.removeAttribute("h-reveal");
        element.removeAttribute("p-reveal");
      });
    }
  }, []);

  return (
    <>
      <LoadScreen />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SliderSection />
      <StatsSection />
      <CustomersSection />
      <QuoteSection />
      <InvestorsSection />
      <CTASection />
      <EventsSection />
      <LanternSection />
      <FAQSection />
    </>
  )
}