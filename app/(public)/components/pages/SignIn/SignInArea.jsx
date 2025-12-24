'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import useAuthInfo from '@/app/dashboard/dashboardComponent/hooks/useAuthInfo'

const SignInArea = () => {
  // const [activeTab, setActiveTab] = useState('signin');
  const { token } = useAuthInfo()
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const sendRequest = await axios.post(
        'https://api.clientservice.mrshakil.com/api/login/',
        formData
      )

      console.log(sendRequest)
      setIsModalOpen(true)
      setFormData({
        username: '',
        password: ''
      })

      if (sendRequest.status === 200 && sendRequest.data) {
        setLoading(false)
        try {
          if (sendRequest.data) {
            localStorage.setItem('authToken', sendRequest.data.token)
            localStorage.setItem('user_type', sendRequest.data.user_type)
            const userType = localStorage.getItem('user_type')

            if (userType === 'SuperAdmin') {
              router.push('/dashboard')
            } else if (userType === 'Client') {
              router.push('/dashboard')
            } else {
              router.push('/')
            }
          }
        } catch (storageError) {
          console.error('Failed to write to localStorage:', storageError)
        }
      }
    } catch (error) {
      setLoading(false)
      console.error('Submission failed:', error)
      setIsError(true)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e] text-white px-4 overflow-y-auto'>
      <div className='w-full max-w-xl bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#a8ff57]/80 p-8 rounded-2xl shadow-2xl shadow-[#a8ff57]/40'>
        {/* Animated Form */}
        <AnimatePresence mode='wait'>
          <motion.form
            onSubmit={handleSubmit}
            className='space-y-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className='text-center'>
              <h2 className='text-3xl font-bold text-[#09e5e5]'>
                Welcome Back
              </h2>
              <p className='text-sm text-gray-400 mt-1'>
                Join us and get started!
              </p>
            </div>

            {/* Form Fields */}
            {/* <input
              type='text'
              placeholder='Full Name'
              className='w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#a8ff57]/30 text-white outline-none'
              value={formData.fullName}
              onChange={e =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            /> */}

            <input
              type='username'
              placeholder='Username '
              className='w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#a8ff57]/30 text-white outline-none'
              value={formData.username}
              onChange={e =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />

            <input
              type='password'
              placeholder='Password'
              className='w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#a8ff57] focus:ring-1 focus:ring-[#a8ff57]/30 text-white outline-none'
              value={formData.password}
              onChange={e =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />

            <button
              type='submit'
              className='cursor-pointer w-full py-4 rounded-xl bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] hover:from-[#a8ff57]/90 hover:to-[#09e5e5]/90 transition-all font-bold text-black shadow-lg '
            >
              {loading ? (
                <span className='flex items-center justify-center'>
                  <svg
                    className='animate-spin h-5 w-5 mr-3 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.243A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-1.695zM12 20a8 8 0 008-8h-4a4 4 0 01-4 4v4z'
                    ></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                'Sign In'
              )}
            </button>

            {/* <p className='text-center text-white/70 text-sm mt-4'>
              Don't already account ?{' '}
              <Link href='/make-request'>
                <span className='underline underline-offset-4 text-medium font-base'>
                  Sign Up
                </span>
              </Link>
            </p> */}
          </motion.form>
        </AnimatePresence>
      </div>
      {/*Modal after submission */}
      {/* {isModalOpen && (
        <div className='fixed inset-0 bg-black   flex items-center justify-center z-50'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className='bg-[#1a1a1a] p-8 rounded-xl border border-[#a8ff57]/70 max-w-md text-center space-y-4'
          >
            <h2 className='text-2xl font-bold text-[#a8ff57]'>
              Login Sucessfull
            </h2>
            <p className='text-gray-300'>
              Success!, "Welcome back!, "You are all set!
            </p>
            <button
              onClick={() => {
                setIsModalOpen(false)
                const userType = localStorage.getItem('user_type')

                if (userType === 'SuperAdmin') {
                  router.push('/dashboard/admin/service-offer-requests')
                } else if (userType === 'Client') {
                  router.push('dashboard/client/all-services')
                } else {
                  router.push('/') // fallback for unknown user type
                }
              }}
              className='mt-4 px-6 py-2 bg-[#a8ff57] text-black font-semibold rounded-lg hover:bg-[#09e5e5] transition-all'
            >
              Okay
            </button>
          </motion.div>
        </div>
      )} */}

      {/*Modal after error */}
      {isError && (
        <div className='fixed inset-0 bg-black flex items-center justify-center z-50'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className='bg-[#1a1a1a] p-8 rounded-xl border border-[#a8ff57]/70 max-w-md text-center space-y-4'
          >
            <h2 className='text-2xl font-bold text-red-500'>Login Fail</h2>
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

export default SignInArea
