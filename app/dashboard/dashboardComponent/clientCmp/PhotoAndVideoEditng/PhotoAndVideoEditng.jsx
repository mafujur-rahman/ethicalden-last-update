'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import useAuthInfo from '../../hooks/useAuthInfo'
import { useRouter, useSearchParams } from 'next/navigation'

export default function PhotoAndVideoEditng () {
  const { register, handleSubmit, watch } = useForm()
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
    // formData.append('service', 'Photo and Video Editing')
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
        confirmButtonColor: '#ff4d4f', // red background
        customClass: {
          confirmButton: 'swal-confirm-btn'
        }
      })
    }
  }

  const photoEditing = watch('photoEditing')
  const videoEditing = watch('videoEditing')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' space-y-1  rounded-xl border border-black/10 text-white'
    >
      <h2 className='text-xl font-bold'>General Information</h2>

      <input
        {...register('fullName')}
        className='inputForm'
        placeholder='Full Name'
      />
      <input
        {...register('email')}
        className='inputForm'
        placeholder='Email Address'
      />
      <input
        {...register('phone')}
        className='inputForm'
        placeholder='Phone Number'
      />
      <input
        {...register('company')}
        className='inputForm'
        placeholder='Company/Organization'
      />

      <h2 className='text-xl font-bold pt-4'>
        What type of service are you looking for?
      </h2>
      <label>
        <input {...register('photoEditing')} type='checkbox' /> Photo Editing
      </label>
      <br />
      <label>
        <input {...register('videoEditing')} type='checkbox' /> Video Editing
      </label>
      <br />
      <label>
        <input {...register('bothEditing')} type='checkbox' /> Both
      </label>

      <textarea
        {...register('projectDescription')}
        className='inputForm mt-4'
        placeholder='Brief description of your project'
      />

      {photoEditing && (
        <>
          <h2 className='text-xl font-bold pt-4'>Photo Editing Details</h2>
          <input
            {...register('numPhotos')}
            className='inputForm'
            placeholder='Number of photos to be edited'
          />

          <h3 className='service-form-label mt-5'>Photo file format(s):</h3>
          <label>
            <input {...register('photoFormats')} type='checkbox' value='JPG' />{' '}
            JPG
          </label>
          <br />
          <label>
            <input {...register('photoFormats')} type='checkbox' value='PNG' />{' '}
            PNG
          </label>
          <br />
          <label>
            <input {...register('photoFormats')} type='checkbox' value='RAW' />{' '}
            RAW
          </label>
          <br />
          <label>
            <input
              {...register('photoFormats')}
              type='checkbox'
              value='Other'
            />{' '}
            Other
          </label>

          <h3 className='service-form-label mt-5'>Editing services needed:</h3>
          <label>
            <input
              {...register('photoServices')}
              type='checkbox'
              value='Color Correction'
            />{' '}
            Color Correction
          </label>
          <br />
          <label>
            <input
              {...register('photoServices')}
              type='checkbox'
              value='Background Removal'
            />{' '}
            Background Removal
          </label>
          <br />
          <label>
            <input
              {...register('photoServices')}
              type='checkbox'
              value='Retouching'
            />{' '}
            Retouching
          </label>
          <br />
          <label>
            <input
              {...register('photoServices')}
              type='checkbox'
              value='Object Removal'
            />{' '}
            Object Removal
          </label>
          <br />
          <label>
            <input
              {...register('photoServices')}
              type='checkbox'
              value='Photo Manipulation'
            />{' '}
            Photo Manipulation
          </label>
          <br />
          <label>
            <input
              {...register('photoServices')}
              type='checkbox'
              value='Cropping/Resizing'
            />{' '}
            Cropping/Resizing
          </label>
          <br />
          <label>
            <input
              {...register('photoServices')}
              type='checkbox'
              value='Filters/Effects'
            />{' '}
            Filters/Effects
          </label>
          <br />
          <label>
            <input
              {...register('photoServices')}
              type='checkbox'
              value='Other'
            />{' '}
            Other
          </label>

          <h3 className='service-form-label mt-5'>
            Do you have a specific editing style?
          </h3>
          <label>
            <input {...register('hasPhotoStyle')} type='radio' value='Yes' />{' '}
            Yes
          </label>
          <br />
          <label>
            <input {...register('hasPhotoStyle')} type='radio' value='No' /> No,{' '}
          </label>
          <br />
        </>
      )}

      {videoEditing && (
        <>
          <h2 className='text-xl font-bold pt-4'>Video Editing Details</h2>
          <input
            {...register('numVideos')}
            className='inputForm'
            placeholder='Number of videos/clips'
          />
          <input
            {...register('rawVideoLength')}
            className='inputForm'
            placeholder='Total raw video length (approx.)'
          />
          <input
            {...register('finalVideoLength')}
            className='inputForm'
            placeholder='Final video length desired'
          />

          <h3 className='service-form-label mt-5'>Video file format(s):</h3>
          <input
            {...register('videoFormats')}
            className='inputForm'
            placeholder='e.g., MP4, MOV'
          />

          <h3 className='service-form-label mt-5'>Editing services needed:</h3>
          <label>
            <input
              {...register('videoServices')}
              type='checkbox'
              value='Cutting/Trimming'
            />{' '}
            Cutting/Trimming
          </label>
          <br />
          <label>
            <input
              {...register('videoServices')}
              type='checkbox'
              value='Color Grading'
            />{' '}
            Color Grading
          </label>
          <br />
          <label>
            <input
              {...register('videoServices')}
              type='checkbox'
              value='Music/SFX'
            />{' '}
            Music/SFX
          </label>
          <br />
          <label>
            <input
              {...register('videoServices')}
              type='checkbox'
              value='Voiceover Syncing'
            />{' '}
            Voiceover Syncing
          </label>
          <br />
          <label>
            <input
              {...register('videoServices')}
              type='checkbox'
              value='Subtitles'
            />{' '}
            Subtitles
          </label>
          <br />
          <label>
            <input
              {...register('videoServices')}
              type='checkbox'
              value='Transitions/Effects'
            />{' '}
            Transitions/Effects
          </label>
          <br />
          <label>
            <input
              {...register('videoServices')}
              type='checkbox'
              value='Logo Overlay'
            />{' '}
            Logo/Branding Overlay
          </label>
          <br />
          <label>
            <input
              {...register('videoServices')}
              type='checkbox'
              value='Text Animation'
            />{' '}
            Text Animation
          </label>
          <br />
          <label>
            <input
              {...register('videoServices')}
              type='checkbox'
              value='Other'
            />{' '}
            Other
          </label>

          <h3 className='service-form-label mt-5'>
            Intended platform for final video:
          </h3>
          <label>
            <input
              {...register('videoPlatform')}
              type='checkbox'
              value='YouTube'
            />{' '}
            YouTube
          </label>
          <br />
          <label>
            <input
              {...register('videoPlatform')}
              type='checkbox'
              value='Instagram/Facebook'
            />{' '}
            Instagram/Facebook
          </label>
          <br />
          <label>
            <input
              {...register('videoPlatform')}
              type='checkbox'
              value='Website'
            />{' '}
            Website
          </label>
          <br />
          <label>
            <input
              {...register('videoPlatform')}
              type='checkbox'
              value='TV/Commercial'
            />{' '}
            TV/Commercial
          </label>
          <br />
          <label>
            <input
              {...register('videoPlatform')}
              type='checkbox'
              value='Other'
            />{' '}
            Other
          </label>

          <h3 className='service-form-label mt-5'>Preferred editing style?</h3>
          <label>
            <input {...register('hasVideoStyle')} type='radio' value='Yes' />{' '}
            Yes
          </label>
          <br />
          <label>
            <input {...register('hasVideoStyle')} type='radio' value='No' /> No,
            I’m open
          </label>
          <br />
          <input {...register('videoStyleUpload')} type='file' />
        </>
      )}

      <input
        {...register('deadline')}
        className='inputForm'
        placeholder='Deadline for completion'
      />
      <input
        {...register('deliveryFormat')}
        className='inputForm'
        placeholder='Preferred delivery format(s)'
      />

      <h3 className='service-form-label mt-5'>
        How to receive the final files:
      </h3>
      <label>
        <input
          {...register('deliveryMethod')}
          type='checkbox'
          value='Google Drive'
        />{' '}
        Google Drive
      </label>
      <br />
      <label>
        <input
          {...register('deliveryMethod')}
          type='checkbox'
          value='Dropbox'
        />{' '}
        Dropbox
      </label>
      <br />
      <label>
        <input
          {...register('deliveryMethod')}
          type='checkbox'
          value='WeTransfer'
        />{' '}
        WeTransfer
      </label>
      <br />
      <label>
        <input {...register('deliveryMethod')} type='checkbox' value='Email' />{' '}
        Email (if under size limit)
      </label>

      <div>
        <label
          htmlFor='referanceFile'
          className='block  mt-4 text-lg  font-medium text-white/80'
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
