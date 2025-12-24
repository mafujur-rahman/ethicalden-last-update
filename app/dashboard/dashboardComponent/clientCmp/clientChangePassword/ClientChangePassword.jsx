'use client'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import useAuthInfo from '../../hooks/useAuthInfo'

export default function ClientChangePassword () {
  const [formData, setFormData] = useState({
    old_password: '',
    new_password: '',
    confirm_password: ''
  })
  const { token } = useAuthInfo()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { old_password, new_password, confirm_password } = formData

    if (!old_password || !new_password || !confirm_password) {
      Swal.fire({
        title: 'Warning!',
        text: 'All fields are required!',
        icon: 'Warning',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#ff4d4f',
        customClass: {
          confirmButton: 'swal-confirm-btn'
        }
      })
      return
    }

    if (new_password !== confirm_password) {
      Swal.fire('Error', 'New passwords do not match!', 'error')
      return
    }

    // Ask for permission before proceeding
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to change your password?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, change it',
      confirmButtonColor: '#a8ff57',
      customClass: {
        confirmButton: 'swal-confirm-btn'
      }
    })

    if (!result.isConfirmed) {
      return
    }

    // Proceed with API request if confirmed
    try {
      const response = await axios.post(
        'https://api.clientservice.mrshakil.com/api/change-password/',
        {
          old_password,
          new_password,
          confirm_password
        },
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      )

      Swal.fire({
        title: 'Success!',
        text: 'Change password successfully.',
        icon: 'success',
        confirmButtonText: 'Okay, got it!',
        confirmButtonColor: '#a8ff57',
        customClass: {
          confirmButton: 'swal-confirm-btn'
        }
      })
      setFormData({ old_password: '', new_password: '', confirm_password: '' })
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
  }

  return (
    <section className='flex justify-center items-center mt-16 md:mt-20 xl:mt-28'>
      <div className='xl:w-[40vw] w-full md:w-[80vw]  p-6 bg-[#151515] text-white/80 rounded-xl shadow-md'>
        <h2 className='text-2xl font-semibold mb-4'>Change Password</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='service-form-label'>Old Password</label>
            <input
              type='text'
              name='old_password'
              value={formData.old_password}
              onChange={handleChange}
              className='inputForm'
              placeholder='Enter old password'
            />
          </div>

          <div>
            <label className='service-form-label'>New Password</label>
            <input
              type='text'
              name='new_password'
              value={formData.new_password}
              onChange={handleChange}
              className='inputForm'
              placeholder='Enter new password'
            />
          </div>

          <div>
            <label className='service-form-label'>Confirm Password</label>
            <input
              type='text'
              name='confirm_password'
              value={formData.confirm_password}
              onChange={handleChange}
              className='inputForm'
              placeholder='Confirm new password'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-[#a8ff57] text-black font-semibold py-2 px-4 rounded-lg cursor-pointer'
          >
            Change Password
          </button>
        </form>
      </div>
    </section>
  )
}
