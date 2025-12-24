'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Swal from 'sweetalert2'
import axios from 'axios'
import useAuthInfo from '../../hooks/useAuthInfo'
import { useRouter } from 'next/navigation'

const ClientCreateServiceOffer = () => {
  const [step, setStep] = useState('initial')
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)
  const { token, userType, isLoggedIn, isSuperAdmin } = useAuthInfo()
  const rouder = useRouter()

  const [detailsForm, setDetailsForm] = useState({
    description: '',
    technicalRequirements: '',
    timeline: '',
    assets: null,
    drawing: null,
    service: ''
  })

  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null)
  const [color, setColor] = useState('#ffffff')
  const [brushSize, setBrushSize] = useState(5)

  useEffect(() => {
    if (step === 'details' && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      ctx.fillStyle = '#2a2a2a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  }, [step])

  const startDrawing = e => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = color
    ctx.lineWidth = brushSize
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(
      e.nativeEvent.offsetX || e.touches[0].pageX - canvas.offsetLeft,
      e.nativeEvent.offsetY || e.touches[0].pageY - canvas.offsetTop
    )
  }

  const draw = e => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.lineTo(
      e.nativeEvent.offsetX || e.touches[0].pageX - canvas.offsetLeft,
      e.nativeEvent.offsetY || e.touches[0].pageY - canvas.offsetTop
    )
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.closePath()
    setDetailsForm(prev => ({
      ...prev,
      drawing: canvas.toDataURL()
    }))
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#2a2a2a'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    setDetailsForm(prev => ({ ...prev, drawing: null }))
  }

  const dataURLtoFile = (dataUrl, filename) => {
    const arr = dataUrl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
  }

  const handleDetailsSubmit = async e => {
    e.preventDefault()

    const confirm = await Swal.fire({
      title: 'Submit your request?',
      text: 'Please confirm your service offer submission.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#09e5e5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!'
    })

    if (!confirm.isConfirmed) return

    try {
      const formData = new FormData()
      formData.append('service', detailsForm.service || '')
      formData.append('project_description', detailsForm.description || '')
      formData.append(
        'technical_requirements',
        detailsForm.technicalRequirements || ''
      )
      formData.append('timeline_expectations', detailsForm.timeline || '')

      if (detailsForm.drawing) {
        const sketchFile = dataURLtoFile(detailsForm.drawing, 'sketch.png')
        formData.append('sketch_image', sketchFile)
      }

      if (detailsForm.assets) {
        Array.from(detailsForm.assets).forEach(file => {
          formData.append('project_assets', file)
        })
      }

      const response = await axios.post(
        'https://api.clientservice.mrshakil.com/api/client_service_details/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Token ${token}`
          }
        }
      )

      console.log(' Server Response:', response.data)

      Swal.fire(
        'Success!',
        'Your service request has been submitted.',
        'success'
      )

      rouder.push('/dashboard/client/manage-service-offer')

      setDetailsForm({
        description: '',
        technicalRequirements: '',
        timeline: '',
        assets: null,
        drawing: null,
        service: ''
      })
    } catch (error) {
      console.error('❌ Submission failed:', error)
      Swal.fire('Error', 'Something went wrong. Please try again.', 'error')
    }
  }

  return (
    <div className='min-h-screen text-white px-4 py-8'>
      <AnimatePresence>
        <motion.form
          key='details'
          onSubmit={handleDetailsSubmit}
          className='form-section bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#a8ff57]/90 p-8 rounded-2xl shadow-2xl shadow-[#a8ff57]/70 w-full max-w-5xl space-y-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className='mb-6'>
            <h2 className='text-3xl font-semibold mb-1 text-[#a8ff57]'>
              Create service offer
            </h2>
            <p className='text-gray-400 mt-2'>
              Add more information to help us understand your project
            </p>
          </div>

          <div className='space-y-10 grid grid-cols-2 gap-x-10'>
            <div className='space-y-5'>
              <div className='relative'>
                <h3 className='text-lg font-medium text-gray-300 mb-2'>
                  Select your Service
                </h3>
                <select
                  onChange={e =>
                    setDetailsForm({
                      ...detailsForm,
                      service: e.target.value
                    })
                  }
                  className='p-2.5 mb-3 w-full border border-gray-700 focus:border-[#09e5e5] focus:ring-1 focus:ring-[#09e5e5]/30 text-white transition-all outline-none rounded-md'
                >
                  <option value=''>Select a service</option>
                  <option className='text-black' value='Branding'>
                    Branding
                  </option>
                  <option className='text-black' value='Web Development'>
                    Web Development
                  </option>
                  <option className='text-black' value='UIUX Design'>
                    UI/UX Design
                  </option>
                  <option className='text-black' value='Software Development'>
                    Software Development
                  </option>
                  <option className='text-black' value='App Development'>
                    App Development
                  </option>
                  <option className='text-black' value='Cyber Security'>
                    Cyber Security
                  </option>
                  <option className='text-black' value='Digital Marketing'>
                    Digital Marketing
                  </option>
                  <option className='text-black' value='Photo And Video Editing'>
                    Photo and Video Editing
                  </option>
                  <option className='text-black' value='SEO Optimization'>
                    SEO Optimization
                  </option>
                  <option className='text-black' value='Maintenance And Support'>
                    Maintenance & Support
                  </option>
                  <option className='text-black' value='Others'>
                    Others
                  </option>
                </select>
              </div>

              <div className='relative'>
                <h3 className='text-lg font-medium text-gray-300 mb-2'>
                  Project Brief Description
                </h3>
                <textarea
                  rows='5'
                  placeholder='Project Description'
                  className='peer w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#09e5e5] focus:ring-1 focus:ring-[#09e5e5]/30 text-white transition-all outline-none'
                  value={detailsForm.description}
                  onChange={e =>
                    setDetailsForm({
                      ...detailsForm,
                      description: e.target.value
                    })
                  }
                  required
                />
              </div>

              <button
                type='button'
                onClick={() => setShowAdditionalFields(!showAdditionalFields)}
                className='flex items-center gap-2 text-[#a8ff57] hover:text-[#09e5e5] transition-colors text-sm font-medium cursor-pointer mt-1.5 mb-3'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
                {showAdditionalFields
                  ? 'Hide additional details'
                  : 'Add more details'}
              </button>

              {showAdditionalFields && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='space-y-4 overflow-hidden'
                >
                  <textarea
                    rows='3'
                    placeholder='Technical Requirements'
                    className='peer  w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#09e5e5] focus:ring-1 focus:ring-[#09e5e5]/30 text-white transition-all outline-none'
                    value={detailsForm.technicalRequirements || ''}
                    onChange={e =>
                      setDetailsForm({
                        ...detailsForm,
                        technicalRequirements: e.target.value
                      })
                    }
                  />
                  <textarea
                    rows='3'
                    placeholder='Timeline Expectations'
                    className='peer w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 focus:border-[#09e5e5] focus:ring-1 focus:ring-[#09e5e5]/30 text-white transition-all outline-none'
                    value={detailsForm.timeline || ''}
                    onChange={e =>
                      setDetailsForm({
                        ...detailsForm,
                        timeline: e.target.value
                      })
                    }
                  />
                </motion.div>
              )}
            </div>

            <div>
              <div className='space-y-2'>
                <h3 className='text-lg font-medium text-gray-300'>
                  Whiteboard Sketch
                </h3>
                <div className='bg-[#2a2a2a] rounded-xl p-4'>
                  <div className='flex gap-3 mb-3'>
                    <div className='flex gap-1'>
                      {[
                        '#ffffff',
                        '#ff0000',
                        '#00ff00',
                        '#0000ff',
                        '#ffff00'
                      ].map(c => (
                        <button
                          type='button'
                          key={c}
                          className={`w-6 h-6 rounded-full ${
                            color === c
                              ? 'ring-2 ring-offset-2 ring-offset-[#2a2a2a] ring-white'
                              : ''
                          }`}
                          style={{ backgroundColor: c }}
                          onClick={() => setColor(c)}
                        />
                      ))}
                    </div>
                    <select
                      className='bg-[#1a1a1a] text-white rounded px-2 py-1 text-sm'
                      value={brushSize}
                      onChange={e => setBrushSize(parseInt(e.target.value))}
                    >
                      {[1, 3, 5, 8, 12].map(size => (
                        <option key={size} value={size}>
                          {size}px
                        </option>
                      ))}
                    </select>
                    <button
                      type='button'
                      className='ml-auto text-sm bg-red-500/20 text-red-400 px-3 py-1 rounded'
                      onClick={clearCanvas}
                    >
                      Clear
                    </button>
                  </div>
                  <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className='w-full h-64 rounded-lg border border-gray-700 touch-none cursor-crosshair'
                  />
                </div>
              </div>
              <div className='relative mt-5'>
                <input
                  type='file'
                  multiple
                  onChange={e =>
                    setDetailsForm({ ...detailsForm, assets: e.target.files })
                  }
                  className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                  id='file-upload'
                />
                <label
                  htmlFor='file-upload'
                  className='block w-full p-4 rounded-lg bg-[#2a2a2a]/70 border border-gray-700 hover:border-[#09e5e5] text-white cursor-pointer'
                >
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-400'>
                      {detailsForm.assets
                        ? `${detailsForm.assets.length} file(s) selected`
                        : 'Upload project assets (images, documents)'}
                    </span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 text-[#09e5e5]'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                      />
                    </svg>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='w-full py-4 rounded-xl bg-gradient-to-r from-[#09e5e5] to-[#a8ff57] hover:from-[#a8ff57]/90 hover:to-[#09e5e5]/90 transition-all font-bold text-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 cursor-pointer'
          >
            Submit Final Details
          </button>
        </motion.form>
      </AnimatePresence>
    </div>
  )
}

export default ClientCreateServiceOffer
