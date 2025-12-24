'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuthInfo from '../../hooks/useAuthInfo'
import Link from 'next/link'
import { FaEye, FaGlobe } from 'react-icons/fa'

export default function ClientAssignedServices () {
  const { token } = useAuthInfo()
  const [cardsData, setCardsData] = useState([])

  const serviceList = [
    { title: 'Branding', link: '/dashboard/client/branding' },
    { title: 'Logo Design', link: '/dashboard/client/logo-design' },
    { title: 'AI Services', link: '/dashboard/client/ai-services' },
    { title: 'Web Development', link: '/dashboard/client/web-development' },
    { title: 'UI/UX Design', link: '/dashboard/client/ui-ux-design' },
    {
      title: 'Software Development',
      link: '/dashboard/client/software-development'
    },
    { title: 'App Development', link: '/dashboard/client/app-development' },
    { title: 'Cyber Security', link: '/dashboard/client/cyber-security' },
    { title: 'Digital Marketing', link: '/dashboard/client/digital-marketing' },
    {
      title: 'Photo and Video Editing',
      link: '/dashboard/client/photo-video-editing'
    },
    { title: 'SEO Optimization', link: '/dashboard/client/seo-optimization' },
    {
      title: 'Maintenance & Support',
      link: '/dashboard/client/maintenance-support'
    }
  ]

  useEffect(() => {
    if (!token) return

    const getData = async () => {
      try {
        const response = await axios.get(
          'https://api.clientservice.mrshakil.com/api/client_serivce_queries/',
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )
        setCardsData(response.data.slice(0, 3))
        console.log(response.data , "admin asign data")
      } catch (error) {
        console.error('Error fetching service data:', error)
      }
    }

    getData()
  }, [token])

  return (
    <section className='text-white/80 '>
      <div className='flex justify-between items-center'>
        <div className='mb-5 flex flex-col gap-y-5 md:gap-y-0 md:flex-row   md:justify-between md:items-center w-full'>
          <Link href='/'>
            <button className='text-sm md:text-base inline-flex items-center gap-2 border rounded-full border-white/10 text-white/80 hover:text-white transition-all px-4 py-1  cursor-pointer'>
              <FaGlobe className='text-sm  text-[#a8ff57]' />
              Back to Website 
            </button>
          </Link>
          <Link href='/dashboard/all-services-list'>
            <button className='text-sm md:text-base inline-flex items-center gap-2 border rounded-full border-white/10 text-white/80 hover:text-white transition-all px-4 py-1  cursor-pointer'>
              <FaEye className='text-sm  text-[#a8ff57]' />
              Show all
            </button>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className='bg-white/5 rounded-2xl pb-10 overflow-x-auto'>
        <table className='w-full divide-y divide-white/10 '>
          <thead>
            <tr>
              <th className='px-6 pb-4 text-left text-sm font-semibold text-[#a8ff57] pt-10'>
                Request Date
              </th>
              <th className='px-6 pb-4 text-left text-sm font-semibold text-[#a8ff57] pt-10'>
                Email
              </th>
              <th className='px-6 pb-4 text-left text-sm font-semibold text-[#a8ff57] pt-10'>
                Service
              </th>
              <th className='px-6 pb-4 text-left text-sm font-semibold text-[#a8ff57] pt-10'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=' divide-y divide-white/10 '>
            {cardsData.length > 0 ? (
              cardsData.map((data, i) => (
                <tr key={i} className={`hover:bg-white/2 transition ${ data.fill_status === "Yes"? "hidden" : ""}`}>
                  <td className='px-6 py-4 text-sm'>
                    {new Date(data.created_at).toDateString()}
                  </td>
                  <td className='px-6 py-4 text-sm text-nowrap'>{data.email}</td>
                  <td className='px-6 py-4 text-sm'>
                    <button className='hover:text-[#a8ff57] text-nowrap'>
                      {data.service_name}
                    </button>
                  </td>
                  <td className='px-6 py-4 text-sm flex gap-x-2'>
                    {(() => {
                      const matchedService = serviceList.find(
                        item =>
                          item.title.toLowerCase() ===
                          data.service_name.toLowerCase()
                      )
                      const serviceLink = matchedService?.link || '#'
                      return (
                        <Link href={`${serviceLink}?id=${data.id}`}>
                          <button className='border border-white/10 text-white/80 px-4 py-1.5 rounded-md hover:bg-[#a8ff57] hover:text-black transition cursor-pointer'>
                            Submit 
                          </button>
                        </Link>
                      )
                    })()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='4' className='px-6 py-4 text-center text-sm'>
                  No matching results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
