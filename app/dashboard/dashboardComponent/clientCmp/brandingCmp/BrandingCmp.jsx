'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuthInfo from '../../hooks/useAuthInfo'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter, useSearchParams } from 'next/navigation'

export default function BrandingCmp () {
  const { register, handleSubmit } = useForm()
  const [files, setFiles] = useState([])
  const { token } = useAuthInfo()
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = +searchParams.get('id')

  const handleImageChange = async e => {
    const files = Array.from(e.target.files)
    setFiles(files)
  }

  const onSubmit = async data => {
    // Construct FormData
    const formData = new FormData()
    // formData.append('service', 'Website Design')
    formData.append('question_set', JSON.stringify(data))

    files.forEach(file => {
      formData.append('project_assets', file)
    })

    // Show SweetAlert confirmation
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
        const response = await axios.patch(
          `https://api.clientservice.mrshakil.com/api/client_serivce_queries/${id}/`,
          formData,
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
        router.push('/dashboard')
        console.log(response.data)
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong during submission.',
          icon: 'error',
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#ff4d4f', // red background
          customClass: {
            confirmButton: 'swal-confirm-btn'
          }
        })
        console.error(error)
      }
    } else {
      Swal.fire({
        title: 'Cancelled!',
        text: 'Form submission was cancelled.',
        icon: 'info',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#ff4d4f',
        customClass: {
          confirmButton: 'swal-confirm-btn'
        }
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='text-white '>
      <label className='service-form-label'>
        What is your company name?
        <input {...register('companyName')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        What is your tagline or slogan (if any)?
        <input {...register('tagline')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Briefly describe your business:
        <textarea
          rows={3}
          {...register('businessDescription')}
          className='inputForm'
        />
      </label>

      <label className='service-form-label'>
        What are your primary products or services?
        <input {...register('productsServices')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Who is your target audience?
        <input {...register('targetAudience')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        What are your core brand values?
        <input {...register('brandValues')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        What makes your business unique?
        <input {...register('uniqueSellingPoint')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        What tone or personality should your brand convey?
        <input {...register('brandPersonality')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Are there any colors you want included or avoided in your branding?
        <input {...register('colorPreferences')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Are there any fonts you like or dislike?
        <input {...register('fontPreferences')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Do you have an existing logo or brand material?
        <input {...register('existingAssets')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Who are your competitors?
        <input {...register('competitors')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Are there brands you admire or want to emulate?
        <input {...register('inspirationBrands')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        What branding materials do you need?
        <input {...register('brandingNeeds')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Any additional notes or requests for your branding?
        <input {...register('additionalNotes')} className='inputForm' />
      </label>

      <div>
        <label
          htmlFor='referanceFile'
          className='block   text-lg  font-medium text-white/80'
        >
          Upload your Files here ?
        </label>
        <input
          id='referanceFile'
          type='file'
          multiple
          name='referanceFile'
          onChange={handleImageChange}
          className='inputForm text-white'
        />
      </div>

      <div>
        <button
          type='submit'
          className='mt-4 px-6 py-2 bg-[#a8ff57] text-black rounded-md inline-block cursor-pointer'
        >
          Submit
        </button>
      </div>
    </form>
  )
}
