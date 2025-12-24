'use client'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import useAuthInfo from '../../hooks/useAuthInfo'
import { useRouter } from 'next/navigation'

export default function ClientSendMessageCmp () {
  const router = useRouter()
  const [formData, setFormData] = useState({
    service_name: '',
    messages: ''
  })
  const { token } = useAuthInfo()

  const services = [
    'Branding',
    'AI Services',
    'Web Development',
    'UI/UX Design',
    'Software Development',
    'App Development',
    'Cyber Security',
    'Digital Marketing',
    'Photo and Video Editing',
    'SEO Optimization',
    'Maintenance & Support'
  ]

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const { service_name, messages } = formData

    if (!service_name || !messages) {
      // Swal.fire('Warning', 'All fields are required!', 'warning')
      Swal.fire({
        title: 'Warning!',
        text: 'All fields are required!',
        icon: 'info',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#ff4d4f',
        customClass: {
          confirmButton: 'swal-confirm-btn'
        }
      })

      return
    }

    // Ask for confirmation before submitting
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to submit this form?',
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
        const res = await axios.post(
          'https://api.clientservice.mrshakil.com/api/send-client-message/',
          { service_name, messages },
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )

        Swal.fire({
          title: 'Success!',
          text: 'Form submitted successfully.',
          icon: 'success',
          confirmButtonText: 'Okay, got it!',
          confirmButtonColor: '#a8ff57',
          customClass: {
            confirmButton: 'swal-confirm-btn'
          }
        })
        setFormData({ service_name: '', messages: '' })
        router.push('/dashboard/client/client-message-history')
      } catch (error) {
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
    } else {
      // Optionally handle cancel
      Swal.fire('Cancelled', 'Form submission was cancelled.', 'info')
    }
  }

  return (
    <section className='lg:flex justify-center items-center text-white/80 mt-10 md:mt-16 xl:mt-28 '>
      <div className='w-full lg:w-[80%] xl:w-[70%] 2xl:w-[50%] p-5 xl:p-10 bg-[#151515] rounded-xl shadow-md border border-white/10'>
        <h2 className='text-2xl font-semibold mb-8'>Send Message</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='service-form-label'>Select Service</label>
            <select
              name='service_name'
              value={formData.service_name}
              onChange={handleChange}
              className='inputForm'
            >
              <option value='' className='bg-black'>
                -- Choose a service --
              </option>
              {services.map(service => (
                <option key={service} value={service} className='bg-black'>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className='service-form-label'>Message</label>
            <textarea
              name='messages'
              value={formData.messages}
              onChange={handleChange}
              className='inputForm'
              rows={5}
              placeholder='Write your message here...'
            />
          </div>

          <button
            type='submit'
            className=' bg-[#a8ff57] text-black font-semibold py-2 px-8 rounded-lg cursor-pointer'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
