'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'

// const servicesList = [
//   'Branding',
//   'AI Services',
//   'Web Development',
//   'UI/UX Design',
//   'Software Development',
//   'App Development',
//   'Cyber Security',
//   'Digital Marketing',
//   'Photo and Video Editing',
//   'SEO Optimization',
//   'Maintenance & Support',
//   'Others'
// ]

const MakeARequestArea = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    service: ''
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleDetailsSubmit = async e => {
    e.preventDefault()

    try {
      const sendRequest = await axios.post(
        'https://api.clientservice.mrshakil.com/api/client-request/',
        formData
      )

      console.log(sendRequest)
      router.push('/services')
      setFormData({ full_name: '', email: '', service: '' })
    } catch (error) {
      console.error('Submission failed:', error)
      setIsError(true)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e] text-white flex flex-col items-center justify-center px-4 py-8'>
      <AnimatePresence>
        <motion.form
          onSubmit={handleDetailsSubmit}
          className='form-section bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#a8ff57]/80 p-8 rounded-2xl shadow-2xl shadow-[#a8ff57]/40 w-full max-w-xl space-y-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-center mb-6'>
            <h2 className='text-4xl font-bold bg-clip-text text-[#09e5e5] '>
              Start Your Project
            </h2>
            <p className='text-gray-400 mt-2'>
              Tell us about your needs and we'll get back to you
            </p>
          </div>

          <div className='space-y-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Full Name '
                className='peer w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#a8ff57]/30 text-white transition-all outline-none'
                value={formData.full_name}
                onChange={e =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
                required
              />
            </div>

            <div className='relative'>
              <input
                type='email'
                placeholder='Email Address '
                className='peer w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#a8ff57]/30 text-white transition-all outline-none'
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            {/* <div className='relative'>
              <select
                className='peer w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#09e5e5]/70 text-white appearance-none outline-none'
                value={formData.service}
                onChange={e =>
                  setFormData({ ...formData, service: e.target.value })
                }
                required
              >
                <option value='' disabled hidden>
                  Select a Service
                </option>
                {servicesList.map((service, i) => (
                  <option key={i} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div> */}
          </div>

          <button
            type='submit'
            className='w-full py-4 rounded-xl bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] hover:from-[#a8ff57]/90 hover:to-[#09e5e5]/90 transition-all font-bold text-black shadow-lg '
          >
            Submit Request
          </button>

          <p className='text-center text-white/70 text-sm mt-4'>
           Already sign up <Link href="/sign-in"><span className='underline underline-offset-4 text-medium font-base'>Sign In</span></Link>
          </p>
        </motion.form>
      </AnimatePresence>

      {/*Modal after submission */}
      {/* 
      {isModalOpen && (
        <div className='fixed inset-0 bg-black flex items-center justify-center z-50'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className='bg-[#1a1a1a] p-8 rounded-xl border border-[#a8ff57]/70 max-w-md text-center space-y-4'
          >
            <h2 className='text-2xl font-bold text-[#a8ff57]'>
              Request Received
            </h2>
            <p className='text-gray-300'>
              Please check your email. Once admin approves your request, you can
              log in.
            </p>
            <button
              onClick={() => {
                setIsModalOpen(false)
                router.push('/services')
              }}
              className='mt-4 px-6 py-2 bg-[#a8ff57] text-black font-semibold rounded-lg hover:bg-[#09e5e5] transition-all'
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      */}

      {/*Modal after error */}
      {isError && (
        <div className='fixed inset-0 bg-black flex items-center justify-center z-50'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className='bg-[#1a1a1a] p-8 rounded-xl border border-[#a8ff57]/70 max-w-md text-center space-y-4'
          >
            <h2 className='text-2xl font-bold text-red-500'>
              Request Failed
            </h2>
            <p className='text-gray-300'>
              Please check again , something error
            </p>
            <button
              onClick={() => {
                setIsError(false)
                
              }}
              className='mt-4 px-6 py-2 bg-[#a8ff57] text-black font-semibold rounded-lg hover:bg-[#09e5e5] transition-all'
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default MakeARequestArea
