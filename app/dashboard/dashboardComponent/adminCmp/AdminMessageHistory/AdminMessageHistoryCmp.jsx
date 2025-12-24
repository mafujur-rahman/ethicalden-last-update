// import React from 'react'

// export default function AdminMessageHistoryCmp() {
//   return (
//     <div>AdminMessageHistoryCmp</div>
//   )
// }


'use client'
import React, { useEffect, useState } from 'react'
import useAuthInfo from '../../hooks/useAuthInfo'
import axios from 'axios'

export default function AdminMessageHistoryCmp () {
  const { token } = useAuthInfo()
  const [messageData, setMessageData] = useState([])

  useEffect(() => {
    if (!token) return

    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          'https://api.clientservice.mrshakil.com/api/client_message_list/',
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )
        setMessageData(res.data)
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    fetchMessages()
  }, [token])

  return (
    <div className=''>
      {messageData.map((user, index) => (
        <div
          key={index}
          className='max-w-3xl  mb-10  rounded-xl bg-[#151515]  lg:p-10'
        >
          <div className='mb-4 border-b border-white/10 pb-3'>
            <h2 className='text-xl font-semibold text-white/80 '>
              {user.username}
            </h2>
            <p className='text-sm text-white '>{user.email}</p>
          </div>

          <div className=' space-y-4'>
            {user.messages.map(msg => (
              <div
                key={msg.id}
                className='bg-[#111] text-white/80 rounded-lg p-3 '
              >
                <h2 className='text-base lg:text-xl font-semibold text-white mb-4 '>
                  {user.service_name || "Not Found"}
                </h2>
                <p className=''>{msg.messages}</p>
                <p className='text-xs  mt-1 text-right'>
                  {new Date(msg.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
