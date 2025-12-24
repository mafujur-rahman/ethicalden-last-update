'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import useAuthInfo from '../../hooks/useAuthInfo'
import { PiPasswordThin } from 'react-icons/pi'

function PasswordChange ({ closeModal }) {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { token } = useAuthInfo()

  const handleChangePassword = async e => {
    e.preventDefault()
    if (!oldPassword || !newPassword || !confirmPassword) {
      Swal.fire('Error', 'All fields are required', 'error')
      return
    }

    if (newPassword !== confirmPassword) {
      Swal.fire('Error', 'New password and confirmation do not match', 'error')
      return
    }

    setLoading(true)

    try {
      console.log(token, 'token')
      const response = await axios.post(
        'https://api.clientservice.mrshakil.com/api/change-password/',
        {
          old_password: oldPassword,
          new_password: newPassword,
          confirm_password: confirmPassword
        },

        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      )

      console.log('Password changed:', response)

      Swal.fire('Success', 'Password changed successfully!', 'success')
      setOldPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (error) {
      console.log(error, 'check eror')
      Swal.fire(
        'Error',
        error.response?.data?.message || 'Failed to change password',
        'error'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-[90vw] md:w-[65vw] lg:w-[55vw] xl:w-[45vw] 2xl:w-[35vw] p-6 bg-[#1f1f1f] text-white/80 shadow rounded-2xl mt-10'>
      <form onSubmit={handleChangePassword}>
        <div className='flex justify-end items-center mb-4'>
          <button
            className='text-white/80 cursor-pointer border border-white/10 py-1 px-4 rounded-full hover:text-white hover:bg-red-400 transition-colors duration-200'
            onClick={closeModal}
          >
            Close
          </button>
        </div>
        <div className='mb-4'>
          <label className='block mb-2 font-medium'>Old Password</label>
          <input
            type='text'
            className='w-full border border-white/10 px-3 py-2 rounded-md outline-none '
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block mb-2 font-medium'>New Password</label>
          <input
            type='text'
            className='w-full border border-white/10 px-3 py-2 rounded-md outline-none'
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className='mb-6'>
          <label className='block mb-2 font-medium'>Confirm New Password</label>
          <input
            type='text'
            className='w-full border border-white/10 px-3 py-2 rounded-md outline-none'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type='submit'
          className='bg-[#a8ff57] text-black px-4 py-2 rounded-full hover:bg-[#8cd04c] transition-colors duration-200 inline-block mt-5  gap-2'
          disabled={loading}
        >
          <span className='flex items-center gap-2'>
            {' '}
            <PiPasswordThin /> {loading ? 'Changing...' : 'Change Password'}
          </span>
        </button>
      </form>
    </div>
  )
}

export default PasswordChange
