'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FiKey, FiLogOut } from 'react-icons/fi'
import PasswordChange from './adminCmp/PasswordChange/PasswordChange'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Topbar ({ title, des }) {
  const [passwordModal, setPasswordModal] = useState(false)
  const router = useRouter()

  // Function to handle password change
  const handlePasswordChange = () => {
    setPasswordModal(true)
  }
  // Function to handle logout
  const handleLogOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#111',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out'
    }).then(result => {
      if (result.isConfirmed) {
        localStorage.clear()

        Swal.fire({
          title: 'Success!',
          text: 'You have been logged out.',
          icon: 'success',
          confirmButtonText: 'Okay, got it!',
          confirmButtonColor: '#a8ff57',
          customClass: {
            confirmButton: 'swal-confirm-btn'
          }
        })
        router.push('/sign-in')
      }
    })
  }
  return (
    <>
      <div className='mb-8 border-b border-white/10 shadow-white pb-5  md:flex justify-between items-center'>
        <div className='flex gap-x-10 items-center'>
          <Link href='/dashboard'>
            <div className='flex items-center mb-5 gap-x-2.5'>
              <Image
                src='https://ik.imagekit.io/ethicalden/logo/fav.png?updatedAt=1751979476770'
                height={500}
                width={500}
                alt='Ethical Den Logo'
                className='size-10'
              />
              <h3 className='text-xl font-semibold text-white'>Ethical Den</h3>
            </div>
          </Link>
        </div>

        <div className='text-white/80 flex items-center gap-x-4 pt-5 md:pt-0 border-t-[1px] border-white/10  md:border-t-0'>
          <button
            onClick={handlePasswordChange}
            className='flex items-center gap-2 border border-white/10 cursor-pointer text-sm md:text-base  rounded-full px-4 py-1 hover:text-white transition'
          >
            <FiKey className='text-sm md:text-base ' />
            Change Password
          </button>
          <button
            onClick={handleLogOut}
            className='flex items-center gap-2 border border-white/10 cursor-pointer text-sm md:text-base rounded-full px-4 py-1 hover:text-white transition'
          >
            <FiLogOut className='text-sm md:text-base' />
            Logout
          </button>
        </div>
      </div>

      {passwordModal && (
        <section className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 '>
          <PasswordChange closeModal={() => setPasswordModal(false)} />
        </section>
      )}
    </>
  )
}
