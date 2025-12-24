'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Topbar from '../../dashboardComponent/topbar'
import useAuthInfo from '../../dashboardComponent/hooks/useAuthInfo'

export default function Page () {
  const [serviceRequests, setServiceRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const { token, userType, isLoggedIn, isSuperAdmin } = useAuthInfo()

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(
          'https://api.clientservice.mrshakil.com/api/client-request/'
        )
        setServiceRequests(res.data)
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching service requests:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRequests()
  }, [serviceRequests])

  const handleDelete = async id => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#ff4d4f',
      confirmButtonText: 'Yes, delete it!'
    })

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `https://api.clientservice.mrshakil.com/api/client-delete/${id}/`,
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )
        setServiceRequests(serviceRequests.filter(item => item.id !== id))

        Swal.fire(
          'Deleted!',
          'The service request has been deleted.',
          'success'
        )
      } catch (error) {
        console.error('Error deleting request:', error)
        Swal.fire('Error', 'Something went wrong while deleting.', 'error')
      }
    }
  }

  // accepted
  const handleUpdate = async id => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#151515',
      cancelButtonColor: '#ff4d4f',
      confirmButtonText: 'Yes, Accept it!'
    })

    if (result.isConfirmed) {
      try {
        await axios.patch(
          `https://api.clientservice.mrshakil.com/api/client-accept/${id}/`,
          {},
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )

        setServiceRequests(serviceRequests.filter(item => item.id !== id))

        Swal.fire(
          'Accepted!',
          'The service request has been accepted.',
          'success'
        )
      } catch (error) {
        console.error('Error accepting request:', error)
        Swal.fire('Error', 'Something went wrong while accepting.', 'error')
      }
    }
  }

  //  rejected
  const handleRejected = async id => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#151515',
      cancelButtonColor: '#ff4d4f',
      confirmButtonText: 'Yes, Reject it!'
    })

    if (result.isConfirmed) {
      try {
        await axios.patch(
          `https://api.clientservice.mrshakil.com/api/client-reject/${id}/`,
          {},
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )

        setServiceRequests(serviceRequests.filter(item => item.id !== id))

        Swal.fire(
          'Rejected!',
          'The service request has been reject.',
          'success'
        )
      } catch (error) {
        console.error('Error reject request:', error)
        Swal.fire('Error', 'Something went wrong while reject.', 'error')
      }
    }
  }

  return (
    <section className='section_space '>
      <Topbar
        title='Manage Service Requests'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />

      {loading ? (
        <p className='text-white font-semibold'>Loading...</p>
      ) : (
        <ul className=' grid md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-4 h-full'>
          {serviceRequests.map((request, i) => (
            <li
              key={request._id}
              className='p-4 rounded shadow bg-[#151515] text-white/80 '
            >
              <div>
                <div className='flex  justify-between py-5 border-b border-[#a8ff57]/10 pb-5'>
                  <div>
                    <h3 className='text-xl font-semibold text-white/80'>
                      {request.full_name}
                      <p className='text-sm font-medium text-white/60'>
                        {request.email}
                      </p>
                    </h3>
                  </div>
                  <p className=' text-sm text-amber-200 font-semibold '>
                    {request.request_status}
                  </p>
                </div>
                {/* <ul className=' text-base font-medium py-5 flex gap-x-1.5 items-center'>
                  <span>{i + 1}.</span>
                  <li>{request.service}</li>
                </ul> */}
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-5 py-8'>
                  <button
                    onClick={() => handleUpdate(request.id)}
                    className='  text-green-600 cursor-pointer'
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => handleRejected(request.id)}
                    className='  text-amber-600 cursor-pointer'
                  >
                    Reject
                  </button>
                </div>
                <button
                  onClick={() => handleDelete(request.id)}
                  className='  text-red-500 cursor-pointer '
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
