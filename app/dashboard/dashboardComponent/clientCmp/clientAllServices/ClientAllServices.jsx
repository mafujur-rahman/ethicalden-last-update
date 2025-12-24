import React from 'react'
import Topbar from '../../topbar'
import Link from 'next/link'

export default function ClientAllServices () {
  const serviceList = [
    {
      title: 'Branding',
      des: 'We help businesses develop a unique identity through logo design, brand voice, and visual consistency to ensure strong market presence and memorable customer experiences.',
      link: '/dashboard/client/branding'
    },
    {
      title: 'Logo Design',
      des: 'We help businesses develop a unique identity through logo design, brand voice, and visual consistency to ensure strong market presence and memorable customer experiences.',
      link: '/dashboard/client/logo-design'
    },
    {
      title: 'AI Services',
      des: 'Leverage artificial intelligence to automate tasks, analyze data, and improve decision-making processes with tailored AI models and machine learning solutions for your business.',
      link: '/dashboard/client/ai-services'
    },
    {
      title: 'Web Development',
      des: 'Build high-performance websites using modern technologies that are fast, responsive, SEO-optimized, and tailored to your brand and customer experience.',
      link: '/dashboard/client/web-development'
    },
    {
      title: 'UI/UX Design',
      des: 'Craft intuitive and engaging user interfaces that enhance customer satisfaction, with thoughtful design focused on usability, accessibility, and aesthetic appeal.',
      link: '/dashboard/client/ui-ux-design'
    },
    {
      title: 'Software Development',
      des: 'Develop powerful, custom software solutions tailored to your workflow and goals—ensuring security, scalability, and seamless integration with your existing systems.',
      link: '/dashboard/client/software-development'
    },
    {
      title: 'App Development',
      des: 'We build user-friendly mobile applications for iOS and Android that are optimized for performance, user engagement, and seamless functionality.',
      link: '/dashboard/client/app-development'
    },
    {
      title: 'Cyber Security',
      des: 'Protect your digital assets through robust security protocols, regular audits, penetration testing, and threat monitoring tailored to your business infrastructure.',
      link: '/dashboard/client/cyber-security'
    },
    {
      title: 'Digital Marketing',
      des: 'Grow your brand’s online presence with targeted digital marketing strategies including social media campaigns, PPC, content creation, and analytics tracking.',
      link: '/dashboard/client/digital-marketing'
    },
    {
      title: 'Photo and Video Editing',
      des: 'Professional editing services that enhance your visual content with precision color correction, motion graphics, and storytelling techniques to elevate brand appeal.',
      link: '/dashboard/client/photo-video-editing'
    },
    {
      title: 'SEO Optimization',
      des: 'Improve search engine rankings through on-page, off-page, and technical SEO strategies designed to drive organic traffic and maximize your online visibility.',
      link: '/dashboard/client/seo-optimization'
    },
    {
      title: 'Maintenance & Support',
      des: 'We offer ongoing support, updates, bug fixes, and server maintenance to ensure your website or application remains secure, up-to-date, and running smoothly.',
      link: '/dashboard/client/maintenance-support'
    }
  ]

  return (
    <div className='section_space px-4'>
      <Topbar
        title='All Services'
        des='Stay on top of every service in your workflow. Track statuses, make adjustments, and respond quickly to ensure seamless operations.'
      />
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {serviceList.map((list, i) => (
          <div
            key={i}
            className='border border-white/10 p-5 rounded-xl shadow-md bg-[#111] hover:shadow-lg transition duration-300 flex flex-col justify-between group'
          >
            <div>
              <h3 className='text-lg font-bold text-[#a8ff57] mb-2'>
                {list.title}
              </h3>
              <p className='text-sm text-white/70 mb-4'>{list.des}</p>
            </div>
            <Link href={list.link}>
              <button className=' py-2  text-[#a8ff57]/50 group-hover:text-[#a8ff57] underline underline-offset-4 text-left  font-medium rounded-md  transition cursor-pointer'>
                Make Request
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
