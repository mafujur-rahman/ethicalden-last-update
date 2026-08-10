// servicesData.js
export const servicesData = {
  'branding': {
    id: 'branding',
    slug: 'branding',
    title: 'Branding Services',
    metaTitle: 'Professional Branding Services | Your Company',
    metaDescription: 'Transform your brand identity with our expert branding solutions.',
    category: 'BRANDING',
    
    bannerTitle: 'Branding - Build an Identity People Remember.',
    bannerDescription: "We don't dress up businesses. We build brands with a clear point of view one that attracts the right audience and repels the wrong one.",
    bannerImage: '/images/services/branding-banner.jpg',
    
    aboutDescription: "Your brand speaks before you do. In a market full of lookalikes, a generic identity is a liability. Whether you're starting from nothing or outgrowing what you built five years ago, we craft strategic identities rooted in who you actually are and where you're headed.",
    aboutImage: '/images/services/branding-about.jpg',
    
    offeringsTitle: 'What We Deliver',
    offeringsDescription: 'Comprehensive branding solutions to build your brand from the ground up',
    coreOfferings: [
      {
        title: 'Brand Strategy Development',
        description: 'We define your brand\'s purpose, positioning, and personality. Through deep research and strategic workshops, we create a roadmap that aligns your brand with business goals and resonates with your target audience.',
        image: '/images/brand-strategy.jpg'
      },
      {
        title: 'Logo Design & Identity Development',
        description: 'We craft distinctive logos and comprehensive visual identity systems that capture your brand\'s essence. From color palettes to typography, every element is designed to create a cohesive and memorable brand presence.',
        image: '/images/logo-design.jpg'
      },
      {
        title: 'Brand Audit & Refresh',
        description: 'We evaluate your current brand health, identify gaps, and recommend strategic improvements. Whether you need a complete overhaul or a subtle refresh, we ensure your brand stays relevant and competitive.',
        image: '/images/brand-audit.jpg'
      },
      {
        title: 'Stationery Design',
        description: 'We extend your brand identity across all business collateral including business cards, letterheads, envelopes, and digital signatures. Consistent stationery design reinforces professionalism and brand recognition.',
        image: '/images/stationary-design.jpg'
      }
    ],
    
    footerTitle: 'Digital Marketing',
    footerDescription: 'Scroll down to continue',
    footerImage: '/images/services/branding-footer.jpg',
    
    // Additional fields
    description: 'Transform your brand identity with our expert branding solutions.',
    shortDescription: 'Build a powerful brand identity',
    features: [
      'Logo Design & Brand Identity',
      'Brand Strategy Development',
      'Visual Identity Systems',
      'Brand Guidelines & Documentation'
    ],
    stats: [
      { value: '500+', label: 'Brands Created' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '4.9', label: 'Average Rating' }
    ],
    image: '/images/services/branding.jpg',
    icon: '/icons/branding-icon.svg',
    price: '$500 - $5000',
    duration: '2-4 weeks',
    featured: true
  },

  'digital-marketing': {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing Services',
    metaTitle: 'Digital Marketing Services | Grow Your Online Presence',
    metaDescription: 'Boost your online presence with our comprehensive digital marketing strategies.',
    category: 'MARKETING',
    
    bannerTitle: 'Digital Marketing - Turn Attention into Action.',
    bannerDescription: 'We run data-driven campaigns that turn the right audiences into paying customers - not just impressions on a dashboard.',
    bannerImage: '/images/services/digital-marketing-banner.jpg',
    
    aboutDescription: "Visibility is a start. Revenue is the goal. We combine creative thinking with analytical rigour to build campaigns that reach people when it matters and move them to act. No spray-and-pray. No vanity metrics.",
    aboutImage: '/images/services/digital-marketing-about.jpg',
    
    offeringsTitle: 'What We Deliver',
    offeringsDescription: 'Comprehensive digital marketing solutions to grow your business',
    coreOfferings: [
      {
        title: 'Search Engine Optimization (SEO)',
        description: 'We optimize your website to rank higher in search results, driving organic traffic and qualified leads. Our SEO strategies are data-driven and tailored to your industry, ensuring long-term visibility and growth.',
        image: '/images/services/digital-marketing/seo.jpg'
      },
      {
        title: 'Social Media Marketing',
        description: 'We build engaged communities across social platforms with content that resonates. From strategy to execution, we manage your social presence and run targeted ad campaigns that deliver measurable results.',
        image: '/images/services/digital-marketing/social-media.jpg'
      },
      {
        title: 'Email Marketing & Automation',
        description: 'We design personalized email campaigns that nurture leads and drive conversions. Our automated workflows deliver the right message at the right time, maximizing engagement and ROI.',
        image: '/images/services/digital-marketing/email-marketing.jpg'
      },
      {
        title: 'Pay-Per-Click Advertising (PPC)',
        description: 'We manage data-driven PPC campaigns across Google Ads and social platforms. From keyword research to ad copy and landing page optimization, we maximize your ad spend for the best possible returns.',
        image: '/images/services/digital-marketing/ppc.jpg'
      }
    ],
    
    footerTitle: 'Branding',
    footerDescription: 'Scroll down to continue',
    footerImage: '/images/services/digital-marketing-footer.jpg',
    
    description: 'Boost your online presence with our comprehensive digital marketing strategies.',
    shortDescription: 'Grow your business online',
    features: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Content Marketing Strategy',
      'Email Marketing Campaigns'
    ],
    stats: [
      { value: '1000+', label: 'Campaigns Run' },
      { value: '200%', label: 'Average Growth' },
      { value: '4.8', label: 'Client Rating' }
    ],
    image: '/images/services/digital-marketing.jpg',
    icon: '/icons/marketing-icon.svg',
    price: '$300 - $3000',
    duration: 'Ongoing',
    featured: true
  },

  'video-editing': {
    id: 'video-editing',
    slug: 'video-editing',
    title: 'Video Editing Services',
    metaTitle: 'Professional Video Editing Services | High-Quality Content',
    metaDescription: 'Professional video editing services to make your content stand out.',
    category: 'PRODUCTION',
    
    bannerTitle: 'Video Editing - Turn Raw Footage into Stories.',
    bannerDescription: 'Professional video editing that transforms raw footage into compelling stories your audience will remember.',
    bannerImage: '/images/services/video-editing-banner.jpg',
    
    aboutDescription: "Great videos aren't just shot—they're crafted. We bring your footage to life with precision editing, color grading, sound design, and visual effects. Every cut, transition, and effect serves the story, keeping your audience engaged from start to finish.",
    aboutImage: '/images/services/video-editing-about.jpg',
    
    offeringsTitle: 'What We Deliver',
    offeringsDescription: 'Professional video editing services for all your content needs',
    coreOfferings: [
      {
        title: 'Color Grading & Correction',
        description: 'We enhance the visual quality of your footage with professional color correction and grading. Our colorists create the perfect mood and consistency, giving your videos a polished, cinematic look.',
        image: '/images/services/video-editing/color-grading.jpg'
      },
      {
        title: 'Visual Effects & Motion Graphics',
        description: 'We add stunning visual effects and motion graphics that elevate your content. From dynamic titles and lower thirds to complex VFX, we make your videos visually impressive and engaging.',
        image: '/images/services/video-editing/vfx.jpg'
      },
      {
        title: 'Audio Enhancement & Sound Design',
        description: 'We clean up audio, remove background noise, and design immersive soundscapes. Our audio engineers ensure crystal-clear dialogue, perfect music integration, and professional sound mixing.',
        image: '/images/services/video-editing/audio.jpg'
      },
      {
        title: 'Subtitling & Captioning',
        description: 'We add professional subtitles and closed captions to improve accessibility and engagement. Our captioning services include translation, timing, and formatting for all platforms.',
        image: '/images/services/video-editing/subtitles.jpg'
      }
    ],
    
    footerTitle: 'Web Design',
    footerDescription: 'Scroll down to continue',
    footerImage: '/images/services/video-editing-footer.jpg',
    
    description: 'Professional video editing to make your content stand out.',
    shortDescription: 'Create stunning video content',
    features: [
      'Color Grading & Correction',
      'Special Effects & Transitions',
      'Audio Enhancement',
      'Motion Graphics & Animation'
    ],
    stats: [
      { value: '2000+', label: 'Videos Edited' },
      { value: '99%', label: 'Client Satisfaction' },
      { value: '4.9', label: 'Quality Rating' }
    ],
    image: '/images/services/video-editing.jpg',
    icon: '/icons/video-icon.svg',
    price: '$200 - $2000',
    duration: '3-7 days',
    featured: false
  },

  'web-design': {
    id: 'web-design',
    slug: 'web-design',
    title: 'Web Design Services',
    metaTitle: 'Professional Web Design Services | Custom Websites',
    metaDescription: 'Custom web design services that combine aesthetics with functionality.',
    category: 'DEVELOPMENT',
    
    bannerTitle: 'Web Design - Build Digital Experiences That Convert.',
    bannerDescription: 'Custom web design that combines stunning aesthetics with seamless functionality to create exceptional user experiences.',
    bannerImage: '/images/services/web-design-banner.jpg',
    
    aboutDescription: "Your website is your most valuable digital asset. We create responsive, high-performance websites that look beautiful on every device and guide visitors toward action. Our designs are built on user experience principles that drive engagement and conversions.",
    aboutImage: '/images/services/web-design-about.jpg',
    
    offeringsTitle: 'What We Deliver',
    offeringsDescription: 'Comprehensive web design solutions for your business',
    coreOfferings: [
      {
        title: 'Custom Website Design',
        description: 'We create unique, bespoke websites tailored to your brand and business goals. Every design is crafted with attention to detail, user experience, and visual appeal that sets you apart from competitors.',
        image: '/images/services/web-design/custom-design.jpg'
      },
      {
        title: 'Responsive & Mobile-First Design',
        description: 'We build websites that work flawlessly on every device. Our mobile-first approach ensures your site delivers a seamless experience whether viewed on desktop, tablet, or smartphone.',
        image: '/images/services/web-design/responsive.jpg'
      },
      {
        title: 'E-Commerce Solutions',
        description: 'We design and build powerful online stores with intuitive navigation and seamless checkout experiences. From product displays to payment gateways, we create e-commerce sites that drive sales.',
        image: '/images/services/web-design/ecommerce.jpg'
      },
      {
        title: 'Performance Optimization',
        description: 'We optimize your website for speed, SEO, and user experience. Our performance enhancements ensure fast loading times, smooth interactions, and better search engine rankings.',
        image: '/images/services/web-design/performance.jpg'
      }
    ],
    
    footerTitle: 'Video Editing',
    footerDescription: 'Scroll down to continue',
    footerImage: '/images/services/web-design-footer.jpg',
    
    description: 'Custom web design services that combine aesthetics with functionality.',
    shortDescription: 'Build stunning websites',
    features: [
      'Custom Website Design',
      'Responsive Mobile Design',
      'User Experience (UX) Design',
      'E-commerce Solutions'
    ],
    stats: [
      { value: '300+', label: 'Websites Built' },
      { value: '97%', label: 'Client Satisfaction' },
      { value: '4.8', label: 'Rating' }
    ],
    image: '/images/services/web-design.jpg',
    icon: '/icons/web-icon.svg',
    price: '$800 - $8000',
    duration: '4-8 weeks',
    featured: true
  }
};

// Helper functions
export const getAllServices = () => {
  return Object.values(servicesData);
};

export const getFeaturedServices = () => {
  return Object.values(servicesData).filter(service => service.featured);
};

export const getServicesByCategory = (category) => {
  return Object.values(servicesData).filter(service => service.category === category);
};

export const getServiceBySlug = (slug) => {
  return servicesData[slug] || null;
};

export const getAllServiceSlugs = () => {
  return Object.keys(servicesData);
};

export const searchServices = (query) => {
  const searchTerm = query.toLowerCase();
  return Object.values(servicesData).filter(service => 
    service.title.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.category.toLowerCase().includes(searchTerm)
  );
};

export const getRelatedServices = (slug, limit = 3) => {
  const allServices = getAllServices();
  const currentIndex = allServices.findIndex(s => s.slug === slug);
  if (currentIndex === -1) return [];
  
  const related = allServices.filter((_, index) => index !== currentIndex);
  return related.slice(0, limit);
};

export default servicesData;