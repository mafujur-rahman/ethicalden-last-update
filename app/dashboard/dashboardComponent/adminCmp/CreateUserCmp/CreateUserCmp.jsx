'use client'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { FaSearch, FaUserPlus, FaSave, FaTimes } from 'react-icons/fa'
import axios from 'axios'
import useAuthInfo from '../../hooks/useAuthInfo'

export default function CreateUserCmp ({ closeModal }) {
  const [email, setEmail] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const { token } = useAuthInfo()
  const [foundUser, setFoundUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [services, setServices] = useState([])

  const allServices = [
    'Branding',
    'Logo Design',
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

  useEffect(() => {
    const fetchServices = async () => {
      if (!token || !searchEmail.trim()) return

      try {
        const res = await axios.get(
          `https://api.clientservice.mrshakil.com/api/client-service-search/?email=${searchEmail}`,
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )

        console.log(res.data, 'fetched services')
        const data = res.data?.data
        const allServices = Object.values(data).flat()
        setServices(allServices)

        if (res.data && res.data.email === searchEmail.trim()) {
          setFoundUser(res.data) // ✅ store full user object
        } else {
          setFoundUser(null)
        }
      } catch (error) {
        console.error('Failed to fetch services:', error)
        setFoundUser(null)
      }
    }

    fetchServices()
  }, [token])

  const handleServiceChange = e => {
    const value = e.target.value
    if (value && !selectedServices.includes(value)) {
      setSelectedServices([...selectedServices, value])
    }
  }

  const removeService = serviceToRemove => {
    setSelectedServices(selectedServices.filter(s => s !== serviceToRemove))
  }

  const handleCreateUser = async () => {
    if (!email.trim() || selectedServices.length === 0) {
      Swal.fire({
        title: 'Please fill all fields',
        text: 'Email and at least one service are required.',
        icon: 'warning',
        confirmButtonColor: '#e63946'
      })

      return
    }

    const confirm = await Swal.fire({
      title: 'Create this user?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#a8ff57',
      cancelButtonColor: '#e63946',
      confirmButtonText: 'Yes, Create!',
      customClass: {
        confirmButton: 'swal-confirm-btn'
      }
    })

    if (!confirm.isConfirmed) return

    setLoading(true)

    try {
      // Simulate API call to create user
      const response = await axios.post(
        'https://api.clientservice.mrshakil.com/api/client_services/',
        {
          client: email.trim(),
          services: selectedServices
        },
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      )
      console.log('User created:', response.data)

      setEmail('')
      setSelectedServices([])

      Swal.fire({
        title: 'Successfully Created !',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#a8ff57',
        cancelButtonColor: '#e63946',
        confirmButtonText: 'Created!',
        customClass: {
          confirmButton: 'swal-confirm-btn'
        }
      })
    } catch (error) {
      console.error('Error creating user:', error)
      // Swal.fire('Error', 'Failed to create user.', 'error')
      Swal.fire({
        title: 'Error',
        text: 'Failed to create user and assign services.',
        icon: 'error',
        confirmButtonColor: '#e63946'
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (foundUser) {
      setSelectedServices(foundUser.services)
    }
  }, [foundUser])

  return (
    <>
      <div className='flex justify-center items-center w-[90vw] md:w-[65vw] lg:w-[55vw] xl:w-[45vw] 2xl:w-[35vw]'>
        <div className='bg-[#1f1f1f]  p-5 rounded-xl text-white/80 '>
          <div className='flex justify-end items-center '>
            <button
              className='text-white/80 cursor-pointer border border-white/10 py-1 px-4 rounded-full hover:text-white hover:bg-red-400 transition-colors duration-200'
              onClick={closeModal}
            >
              Close
            </button>
          </div>
          <label className='inline-block mb-2 mt-5 text-white/80 text-base font-medium'>
            User Email
          </label>
          <input
            type='email'
            placeholder='Enter email'
            className='w-full p-2  rounded text-sm  outline-none border border-white/10'
            autoComplete='off'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label className='inline-block mb-2 mt-5 text-white/80 text-base font-medium'>
            Select a service
          </label>
          <select
            onChange={handleServiceChange}
            className='w-full border border-white/10 p-2 mb-4 text-sm rounded outline-none cursor-pointer '
            defaultValue=''
          >
            <option value='' className='text-sm bg-[#222]'>
              Select a service
            </option>
            {allServices.map(service => (
              <option
                className='text-sm bg-[#222]'
                key={service}
                value={service}
              >
                {service}
              </option>
            ))}
          </select>

          <div className='flex flex-wrap gap-2 mt-4 mb-10'>
            {selectedServices.map(service => (
              <div
                key={service}
                className='bg-[#a8ff57]  text-black px-3 py-1 text-sm rounded-full flex items-center gap-2'
              >
                {service}
                <FaTimes
                  className='cursor-pointer'
                  size={14}
                  onClick={() => removeService(service)}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleCreateUser}
            disabled={loading}
            className={`mb-5 text-sm lg:text-base text-black px-4 py-2 rounded-full flex items-center gap-2
    ${
      loading
        ? 'bg-lime-50 cursor-not-allowed'
        : 'bg-lime-400 hover:bg-lime-500 cursor-pointer'
    }
    transition-all duration-300 ease-in-out
  `}
          >
            {/* Icon fades out when loading */}
            <span
              className={`transition-opacity duration-300 ${
                loading ? 'opacity-0 w-0' : 'opacity-100 w-auto'
              }`}
            >
              <FaUserPlus size={18} />
            </span>

            {loading ? 'Creating...' : 'Create Service'}
          </button>
        </div>
      </div>
    </>
  )
}
