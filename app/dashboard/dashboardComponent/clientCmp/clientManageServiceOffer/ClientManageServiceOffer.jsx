'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import {
  FiFileText,
  FiCode,
  FiClock,
  FiImage,
  FiDownload
} from 'react-icons/fi'
import useAuthInfo from '../../hooks/useAuthInfo'
import Swal from 'sweetalert2'

const ClientManageServiceOffer = () => {
  const [projects, setProjects] = useState([])
  const { token } = useAuthInfo()

  useEffect(() => {
    const fetchProjects = async () => {
      if (!token) return // Wait until token is set
      try {
        console.log(token, 'check token')
        const res = await axios.get(
          'https://api.clientservice.mrshakil.com/api/client_service_details/',
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )
        setProjects(res.data)
      } catch (error) {
        console.error('Failed to fetch project details:', error)
      }
    }

    fetchProjects()
  }, [token, projects])

  const handleDelete = async id => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#ff4d4f',
      confirmButtonText: 'Yes, delete it!'
    })

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `https://api.clientservice.mrshakil.com/api/client_service_details/${id}/`,
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )

        console.log('Delete response:', response) // ✅ Console log the API response

        // Update UI
        setProjects(prev => prev.filter(project => project.id !== id))

        Swal.fire(
          'Deleted!',
          'The service request has been deleted.',
          'success'
        )
      } catch (error) {
        console.error('Failed to delete project:', error)
        Swal.fire('Failed!', 'Something went wrong while deleting.', 'error')
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='  text-gray-100'
    >
      <div className=' max-w-full lg:max-w-[90vw] xl:max-w-[70vw] space-y-36 p-10'>
        {projects.map(project => (
          <div
            key={project.id}
            className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-5 lg:p-10  h-full  border border-[#a8ff57]/20 rounded-lg sm:rounded-xl  shadow-lg shadow-[#09e5e5]/5'
          >
            <div className='lg:col-span-2 space-y-4 sm:space-y-6'>
              <div className='border border-[#a8ff57]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg shadow-[#09e5e5]/5'>
                <div className='mb-3 sm:mb-4 flex justify-between items-center'>
                  <h2 className='text-xl sm:text-2xl font-semibold text-[#09e5e5] '>
                    {project.service}
                  </h2>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className='bg-red-500 text-white font-medium cursor-pointer py-1 px-6 rounded hover:bg-red-600 transition-colors'
                  >
                    Delete
                  </button>
                </div>
                <p className='text-sm sm:text-base text-gray-400 mb-4'>
                  Submitted by {project.full_name}
                </p>

                <div className='mb-4 sm:mb-6'>
                  <h3 className='text-base sm:text-lg font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2'>
                    <FiFileText className='text-[#a8ff57] text-sm sm:text-base' />
                    <span>Description</span>
                  </h3>
                  <div className='bg-[#2a2a2a]/70 p-3 sm:p-4 rounded-lg border border-gray-800'>
                    <p className='text-gray-300 whitespace-pre-line text-sm sm:text-base'>
                      {project.project_description}
                    </p>
                  </div>
                </div>

                <div className='grid grid-cols-1  gap-3 sm:gap-4'>
                  <div>
                    <h3 className='text-base sm:text-lg font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2'>
                      <FiCode className='text-[#a8ff57] text-sm sm:text-base' />
                      <span>Technical Requirements</span>
                    </h3>
                    <div className='bg-[#2a2a2a]/70 p-3 sm:p-4 rounded-lg border border-gray-800 h-auto'>
                      <p className='text-gray-300 whitespace-pre-line text-sm sm:text-base'>
                        {project.technical_requirements}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-base sm:text-lg font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2'>
                      <FiClock className='text-[#a8ff57] text-sm sm:text-base' />
                      <span>Timeline</span>
                    </h3>
                    <div className='bg-[#2a2a2a]/70 p-3 sm:p-4 rounded-lg border border-gray-800 h-auto'>
                      <p className='text-gray-300 whitespace-pre-line text-sm sm:text-base'>
                        {project.timeline_expectations}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='space-y-4 sm:space-y-6'>
                <div className='bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#09e5e5]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg shadow-[#09e5e5]/5'>
                  <h2 className='text-xl sm:text-2xl font-semibold text-[#09e5e5] mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2'>
                    <FiImage className='text-sm sm:text-base' />
                    <span>Project Assets</span>
                  </h2>

                  <div className='space-y-2 sm:space-y-3'>
                    {project.project_assets.map(file => (
                      <div
                        key={file.id}
                        className='flex items-center justify-between bg-[#2a2a2a]/70 p-2 sm:p-3 rounded-lg border border-gray-800 hover:border-[#a8ff57]/30 transition-colors'
                      >
                        <div className='flex items-center gap-2 sm:gap-3 min-w-0'>
                          <div className='bg-[#09e5e5]/10 p-1.5 sm:p-2 rounded text-[#09e5e5]'>
                            <FiFileText className='text-sm sm:text-base' />
                          </div>
                          <div className='truncate'>
                            <p className='font-medium truncate text-sm sm:text-base'>
                              {file.filename}.{file.file_type}
                            </p>
                            <a
                              href={file.project_assets}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-xs text-[#a8ff57] hover:underline'
                            >
                              View / Download
                            </a>
                          </div>
                        </div>
                        {/* <button className='text-[#a8ff57] hover:text-[#09e5e5] transition-colors p-1 sm:p-2'>
                          <FiDownload className='text-sm sm:text-base' />
                        </button> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                {project.sketch_image && (
                  <div className=' border border-[#a8ff57]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg shadow-[#09e5e5]/5'>
                    <h2 className='text-xl sm:text-2xl font-semibold text-[#a8ff57] mb-3 sm:mb-4'>
                      Your Whiteboard Sketch
                    </h2>
                    <div className='bg-[#2a2a2a] rounded-lg p-3 sm:p-4 border border-gray-800'>
                      <img
                        src={project.sketch_image}
                        alt='Sketch'
                        className='w-full h-auto   border-gray-700 rounded'
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ClientManageServiceOffer
