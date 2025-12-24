'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuthInfo from '../../hooks/useAuthInfo'


export default function ServiceOfferRequestsCmp () {
  const { token } = useAuthInfo()
  const [cardsData, setCardsData] = useState([])

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
        const data = response.data
        setCardsData(data.slice(0, 3))
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching service data:', error)
      }
    }

    getData()
  }, [token])

  return (
    <section className='text-white/80 '>
      {/* Desktop Table */}
      <div className=' overflow-x-auto'>
        <table className='w-full divide-y divide-white/10 '>
          {/* <thead className='bg-white/5'>
            <tr>
              <th className=' py-3 text-left text-sm font-semibold text-[#a8ff57]'>
                Request Date
              </th>
              <th className=' py-3 text-left text-sm font-semibold text-[#a8ff57]'>
                Full Name
              </th>
              <th className=' py-3 text-left text-sm font-semibold text-[#a8ff57]'>
                Service
              </th>
     
              <th className=' py-3 text-left text-sm font-semibold text-[#a8ff57]'>
                Actions
              </th>
            </tr>
          </thead> */}
          <tbody className='divide-y divide-white/10'>
            {cardsData?.map((data, i) => (
              <tr key={i} className='hover:bg-white/2 transition'>
                <td className='px-4 text-nowrap py-4 text-sm'>
                  {new Date(data.created_at).toDateString()}
                </td>
                <td className='px-4 text-nowrap py-4 text-sm hover:text-[#a8ff57]'>
                  {data.client}
                </td>
                <td className='px-4 text-nowrap py-4 text-sm hover:text-[#a8ff57] '>
                  <button className='   hover:text-[#a8ff57]'>
                    {data.service_name}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
