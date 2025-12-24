'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuthInfo from '../../hooks/useAuthInfo'
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'

export default function ServiceOfferRequestAllCmp () {
  const { token } = useAuthInfo()
  const [cardsData, setCardsData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (!token) return

    const getData = async () => {
      try {
        const response = await axios.get(
          'https://api.clientservice.mrshakil.com/api/client_services/',
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )
        setCardsData(response.data)
        setFilteredData(response.data)
      } catch (error) {
        console.error('Error fetching service data:', error)
      }
    }

    getData()
  }, [token])

  useEffect(() => {
    const term = searchTerm.toLowerCase()
    const filtered = cardsData.filter(
      item =>
        item.client.toLowerCase().includes(term) ||
        item.service_name.toLowerCase().includes(term)
    )
    setFilteredData(filtered)
  }, [searchTerm, cardsData])

  return (
    <section className='text-white/80 '>
      <div className='flex justify-between items-center'>
        <div>
          <Link href='/dashboard'>
            <button className=' inline-flex items-center gap-2 border rounded-full border-white/10 text-white/80 hover:text-white transition-all px-4 py-1  cursor-pointer'>
              <FiHome className='text-sm  text-[#a8ff57]' />
              Back to Home
            </button>
          </Link>
        </div>
        {/* Search Input */}
        <div className='p-4'>
          <input
            type='text'
            placeholder='Search by email or service name'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            autoComplete='off'
            className='bg-transparent border border-white/10  px-4 py-2 outline-none rounded-full w-full focus:border-white/30 transition'
          />
        </div>
      </div>

      {/* Table */}
      <div className='bg-white/5 rounded-2xl pb-10'>
        <table className='w-full divide-y divide-white/10 '>
          <thead>
            <tr>
              <th className='px-6 pb-4 text-left text-sm font-semibold text-[#a8ff57] pt-10'>
                Request Date
              </th>
              <th className='px-6 pb-4 text-left text-sm font-semibold text-[#a8ff57] pt-10'>
                Full Name
              </th>
              <th className='px-6 pb-4 text-left text-sm font-semibold text-[#a8ff57] pt-10'>
                Service
              </th>
            </tr>
          </thead>
          <tbody className=' divide-y divide-white/10 '>
            {filteredData.length > 0 ? (
              filteredData.map((data, i) => (
                <tr key={i} className='hover:bg-white/2 transition  '>
                  <td className='px-6 py-4 text-sm'>
                    {new Date(data.created_at).toDateString()}
                  </td>
                  <td className='px-6 py-4 text-sm'>{data.client}</td>
                  <td className='px-6 py-4 text-sm'>
                    <button className='hover:text-[#a8ff57]'>
                      {data.service_name}
                    </button>
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
