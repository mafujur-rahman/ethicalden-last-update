// app/service/[slug]/page.js
import { notFound } from 'next/navigation';

import ServiceBanner from '../../components/pages/Services/ServiceBanner';
import ServiceAbout from '../../components/pages/Services/ServiceAbout';
import ServiceCoreOfferings from '../../components/pages/Services/ServiceCoreOfferings';
import ServiceFooter from '../../components/pages/Services/ServiceFooter';
import { getAllServiceSlugs, getServiceBySlug } from '../../data/services';
import Navbar from '../../components/Shared/Navbar/Navbar';


// Generate static paths
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata - MUST be async and await params
export async function generateMetadata({ params }) {
  // ✅ Unwrap params with await
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.metaTitle || `${service.title} | Your Company`,
    description: service.metaDescription || service.shortDescription,
    openGraph: {
      title: service.metaTitle || service.title,
      description: service.metaDescription || service.shortDescription,
      images: [service.image],
    },
  };
}

// Main Page Component - MUST be async and await params
export default async function ServicePage({ params }) {
  // ✅ Unwrap params with await
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[#1e1e1e] min-h-screen">
      {/* Navbar */}
      <Navbar backgroundColor="#1e1e1e" textColor="white"  />

      {/* Banner Section */}
      <ServiceBanner service={service} />

      {/* About Section */}
      <ServiceAbout service={service} />

      {/* Core Offerings Section */}
      <ServiceCoreOfferings service={service} />

      {/* Footer Section */}
      <ServiceFooter service={service} />
    </div>
  );
}