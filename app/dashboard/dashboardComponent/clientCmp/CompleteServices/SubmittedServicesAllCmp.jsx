'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuthInfo from '../../hooks/useAuthInfo'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

export default function SubmittedServicesAllCmp () {
  const { token } = useAuthInfo()
  const [cardsData, setCardsData] = useState([])
  const [searchEmail, setSearchEmail] = useState('')

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
        setCardsData(response.data)
      } catch (error) {
        console.error('Error fetching service data:', error)
      }
    }

    getData()
  }, [token])

  // Filtered Data
  const filteredData = cardsData.filter(item =>
    item.email.toLowerCase().includes(searchEmail.toLowerCase())
  )

  return (
    <section className='text-white/80'>
      <div className='md:flex justify-between items-center mb-5'>
        <Link href='/dashboard'>
          <button className='inline-flex items-center gap-2 border text-sm md:text-base rounded-full border-white/10 text-white/80 hover:text-white transition-all px-4 py-1 cursor-pointer'>
            <FaHome className='text-sm text-[#a8ff57]' />
            Back to home
          </button>
        </Link>
        <input
          type='text'
          placeholder='Search by email...'
          value={searchEmail}
          onChange={e => setSearchEmail(e.target.value)}
          className='bg-white/5 border border-white/10 text-white text-sm md:text-base  px-4 py-1 rounded-full outline-none w-64 mt-5 md:mt-0'
        />
      </div>

      {/* Table */}
      <div className='bg-white/5 rounded-2xl pb-10 overflow-x-auto'>
        <table className='w-full divide-y divide-white/10'>
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
          <tbody className='divide-y divide-white/10'>
            {filteredData.length > 0 ? (
              filteredData.map((data, i) => (
                <tr key={i} className={`hover:bg-white/2 transition ${ data.fill_status === "False"? "hidden" : ""}`}>
                  <td className='px-6 py-4 text-sm'>
                    {new Date(data.created_at).toDateString()}
                  </td>
                  <td className='px-6 py-4 text-sm'>{data.email}</td>
                  <td className='px-6 py-4 text-sm'>
                    <button className='hover:text-[#a8ff57] text-nowrap'>
                      {data.service_name}
                    </button>
                  </td>
                  <td className='px-6 py-4 text-sm'>
                    <Link href={`/dashboard/service-details/${data.id}`}>
                      <button className='border text-nowrap border-white/10 text-white/80 px-4 py-1.5 rounded-md hover:bg-[#a8ff57] hover:text-black transition cursor-pointer'>
                        View Details
                      </button>
                    </Link>
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
