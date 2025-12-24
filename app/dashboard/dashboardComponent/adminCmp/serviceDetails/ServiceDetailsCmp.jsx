'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useAuthInfo from '../../hooks/useAuthInfo'
import Swal from 'sweetalert2'
import { FiSend } from 'react-icons/fi'

export default function ServiceDetailsCmp () {
  const [data, setData] = useState(null)
  const [conversation, setConversation] = useState([])
  const params = useParams()
  const id = params?.id
  const { token, isSuperAdmin } = useAuthInfo()
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState('')

  //  Fetch service details (reusable function)
  const fetchServiceDetails = async () => {
    try {
      const res = await axios.get(
        `https://api.clientservice.mrshakil.com/api/client_serivce_queries/${id}/`,
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      )
      setData(res.data)
      console.log(res.data, 'main data')
    } catch (error) {
      console.error('Error fetching service details:', error)
    }
  }

  //  Fetch service details on load
  useEffect(() => {
    if (id && token) fetchServiceDetails()
  }, [id, token])

  // Fetch conversation list
  useEffect(() => {
    if (!token || !data?.service_id) return

    const fetchMessages = async () => {
      try {
        console.log(data?.service_id, 'check service id')
        const res = await axios.get(
          `https://api.clientservice.mrshakil.com/api/client_message_list/?service_id=${data.service_id}`,
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )
        setConversation(res.data)
        console.log(res, 'check list of msges ')
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    fetchMessages()
  }, [token, data?.service_id])

  //  Accept handler
  const handleUpdate = async id => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#ff4d4f',
      confirmButtonText: 'Yes, Accept it!',
      confirmButtonColor: '#a8ff57',
      customClass: {
        confirmButton: 'swal-confirm-btn'
      }
    })

    if (result.isConfirmed) {
      try {
        await axios.patch(
          `https://api.clientservice.mrshakil.com/api/accept-client-service/${id}/`,
          {},
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )

        Swal.fire({
          title: 'Success!',
          text: 'The service request has been accepted.',
          icon: 'success',
          confirmButtonText: 'Okay, got it!',
          confirmButtonColor: '#a8ff57',
          customClass: {
            confirmButton: 'swal-confirm-btn'
          }
        })

        //  Refresh updated data
        fetchServiceDetails()
      } catch (error) {
        console.error('Error accepting request:', error)

        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong during submission.',
          icon: 'error',
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#ff4d4f',
          customClass: {
            confirmButton: 'swal-confirm-btn'
          }
        })
      }
    }
  }

  //  Reject handler
  const handleRejected = async id => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#ff4d4f',
      confirmButtonText: 'Yes, Reject it!',
      confirmButtonColor: '#a8ff57',
      customClass: {
        confirmButton: 'swal-confirm-btn'
      }
    })

    if (result.isConfirmed) {
      try {
        await axios.patch(
          `https://api.clientservice.mrshakil.com/api/reject-client-service/${id}/`,
          {},
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )

        // Swal.fire(
        //   'Rejected!',
        //   'The service request has been rejected.',
        //   'success'
        // )

        Swal.fire({
          title: 'success!',
          text: 'The service request has been rejected. now',
          icon: 'success',
          confirmButtonText: 'Okay',
          confirmButtonColor: '#a8ff57',
          customClass: {
            confirmButton: 'swal-confirm-btn'
          }
        })

        //  Refresh updated data
        fetchServiceDetails()
      } catch (error) {
        console.error('Error reject request:', error)
        Swal.fire('Error', 'Something went wrong while rejecting.', 'error')
      }
    }
  }

  if (!data) return <p className='text-white'>Loading...</p>
  const {
    full_name,
    email,
    service,

    service_name,

    service_id,
    service_status,
    updated_at,
    created_at,
    question_set,
    client_project_assets
  } = data

  console.log(conversation, 'converstaion')

  const handleSendMessage = async () => {
    if (!message.trim()) {
      return Swal.fire('Warning', 'Message cannot be empty!', 'warning')
    }
    console.log(message)
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to submit this message?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, submit it!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#a8ff57',
      customClass: {
        confirmButton: 'swal-confirm-btn'
      }
    })

    if (result.isConfirmed) {
      try {
        const sendData = {
          service: service,
          messages: message
        }
        console.log(sendData, 'check befor send')
        const res = await axios.post(
          'https://api.clientservice.mrshakil.com/api/send-client-message/',
          sendData,
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )

        console.log(res)

        Swal.fire({
          title: 'Success!',
          text: 'Message sent successfully.',
          icon: 'success',
          confirmButtonText: 'Okay',
          confirmButtonColor: '#a8ff57',
          customClass: {
            confirmButton: 'swal-confirm-btn'
          }
        })


        console.log(service_id , "for get message")

        // Refresh messages
        const msgRes = await axios.get(
          `https://api.clientservice.mrshakil.com/api/client_message_list/?service_id=${data.service_id}`,
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )
        setConversation(msgRes)

        console.log(msgRes , "for check return msg")

        setMessage('')
        setModal(false)
      } catch (error) {
        console.log(error)
        Swal.fire({
          title: 'Error!',
          text: 'Failed to send message',
          icon: 'error',
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#ff4d4f',
          customClass: {
            confirmButton: 'swal-confirm-btn'
          }
        })
      }
    } else {
      Swal.fire({
        title: 'Cancelled!',
        text: 'Form submission was cancelled.',
        icon: 'info',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#ff4d4f',
        customClass: {
          confirmButton: 'swal-confirm-btn'
        }
      })
    }
  }

  return (
    <>
      <div className='text-white '>
        <div className=''>
          <div>
            {/* Basic Info */}
            <div className=' bg-white/5 p-6 rounded-lg '>
              <div className='flex flex-wrap justify-between items-center'>
                <div>
                  <div className='py-5 px-5 lg:px-8 border border-white/10 rounded-lg space-y-2.5'>
                    <p className='text-sm text-white/80 mt-1'>{email}</p>
                    <p className=' text-xl font-semibold text-white/80'>
                      {' '}
                      {service_name}
                    </p>
                    <p className='text-sm text-white/80 mt-1'>
                      {' '}
                      Requested On: {new Date(updated_at).toLocaleString()}
                    </p>
                  </div>
                </div>

                {isSuperAdmin ? (
                  <div className='flex flex-col gap-5'>
                    {/* <div>
                      <button
                        onClick={() => handleUpdate(id)}
                        className='border border-white/10 py-1.5 px-8 text-sm rounded-full cursor-pointer'
                      >
                        Accept
                      </button>
                    </div>
                    <button
                      onClick={() => handleRejected(id)}
                      className='border text-white/80 border-white/10 py-1.5 px-8 text-sm rounded-full bg-red-400 cursor-pointer'
                    >
                      Reject
                    </button> */}
                  </div>
                ) : (
                  <div className='flex flex-col gap-5'>
                    <div>
                      <button
                        onClick={() => setModal(true)}
                        className='border border-white/10 py-1.5 px-8 text-sm rounded-full cursor-pointer'
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='grid xl:grid-cols-[70%_30%] lg:gap-x-10 '>
            <div>
              {/* Question Set */}
              <h2 className='text-2xl font-semibold mt-10 mb-4 text-[#a8ff57]'>
                Client Questionnaire
              </h2>
              <div className='grid md:grid-cols-2 gap-5 bg-white/5 p-6 rounded-lg '>
                {Object?.entries(question_set || {}).map(([key, value]) => (
                  <div key={key} className='flex gap-x-1.5 items-center'>
                    <h4 className='capitalize text-white/80 font-medium'>
                      {key.replace(/([A-Z])/g, ' $1')}
                    </h4>
                    :
                    {Array.isArray(value) ? (
                      <ul className='list-disc list-inside ml-2 text-sm text-gray-300'>
                        {value.map((v, i) => (
                          <li key={i}>
                            {typeof v === 'object' && v !== null
                              ? JSON.stringify(v)
                              : v}
                          </li>
                        ))}
                      </ul>
                    ) : typeof value === 'object' && value !== null ? (
                      <pre className='text-sm text-gray-300 whitespace-pre-wrap'>
                        {JSON.stringify(value, null, 2)}
                      </pre>
                    ) : (
                      <span className='block text-sm text-gray-300'>
                        {value || 'N/A'}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className='mr-10'>
              {/* Conversation */}
              <h2 className='text-2xl font-semibold mt-10 mb-4 text-[#a8ff57]'>
                Conversation
              </h2>
              {conversation?.length > 0 ? (
                <>
                  <div className='grid gap-4'>
                    {conversation?.map((con, i) => (
                      <div key={i} className=' p-3 rounded  '>
                        {con.messages.map((msg, i) => (
                          <div
                            key={i}
                            className='border-b-[1px] border-white/10 py-5 flex flex-wrap justify-between items-center  '
                          >
                            <p className=''>{msg?.messages}</p>
                            <p className='text-xs '>
                              {new Date(msg?.created_at).toLocaleString()}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p>No Conversation Found</p>
              )}
            </div>
            <div className=''>
              {/* Assets */}
              {client_project_assets?.length > 0 && (
                <>
                  <h2 className='text-2xl font-semibold mt-10 mb-4 text-[#a8ff57]'>
                    Uploaded Assets
                  </h2>
                  <div className='grid gap-4'>
                    {client_project_assets.map(asset => (
                      <div key={asset.id} className='bg-white/5 p-3 rounded '>
                        <a href={asset.project_assets} target='_blank'>
                          <p className='text-sm mt-2'>
                            {asset.filename}.{asset.file_type}
                          </p>
                        </a>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Sending Message */}
      {modal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-50 '>
          <div className='bg-[#111] border border-white/10 p-6 rounded-lg w-[90%] max-w-xl'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-semibold text-white/80'>
                Send Message
              </h2>
              <button
                onClick={() => setModal(false)}
                className='text-white text-lg font-bold hover:text-red-500 cursor-pointer'
              >
                ×
              </button>
            </div>
            <textarea
              rows='4'
              className='w-full p-2 bg-white/10 text-white rounded resize-none mb-4 border border-white/10 focus:outline-none focus:ring focus:ring-[#a8ff57]/50'
              placeholder='Write your message here...'
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></textarea>

            <button
              onClick={handleSendMessage}
              className='bg-[#a8ff57] text-black px-4 py-1 rounded-full hover:bg-lime-400 transition cursor-pointer flex gap-x-1.5 items-center mt-5'
            >
              <FiSend /> Send Message
            </button>
          </div>
        </div>
      )}
    </>
  )
}
