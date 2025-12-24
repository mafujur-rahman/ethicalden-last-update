'use client'

import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import useAuthInfo from '../hooks/useAuthInfo'
import { useRouter, useSearchParams } from 'next/navigation'

const questions = [
  {
    label: 'What is the name of your company or organization?',
    name: 'companyName',
    placeholder: 'Your company or organization'
  },
  {
    label: 'What does your business do?',
    name: 'businessDescription',
    type: 'textarea',
    placeholder: 'Brief description'
  },
  {
    label: 'What are your main goals for this app?',
    name: 'mainGoals',
    type: 'textarea',
    placeholder: 'e.g., Increase sales, improve engagement'
  },
  {
    label: 'What is the primary objective of the app?',
    name: 'primaryObjective',
    type: 'textarea'
  },
  {
    label: 'What specific problems is the app solving?',
    name: 'problemsSolving',
    type: 'textarea'
  },
  {
    label: 'Who is the intended audience or target user?',
    name: 'targetAudience',
    placeholder: 'e.g., Students, professionals'
  },
  {
    label: 'What are the core features you want in the app?',
    name: 'coreFeatures',
    type: 'textarea',
    placeholder: 'e.g., Login, chat, payments'
  },
  {
    label: 'Are there any unique or advanced features required?',
    name: 'advancedFeatures',
    type: 'textarea',
    placeholder: 'e.g., AI integration, real-time updates'
  },
  {
    label: 'Will the app need offline functionality?',
    name: 'offlineFunctionality',
    placeholder: 'Yes / No'
  },
  {
    label: 'Do you have any design references or competitor apps you like?',
    name: 'designReferences',
    type: 'textarea'
  },
  {
    label: 'Do you already have a logo, brand color, or design system?',
    name: 'brandAssets',
    placeholder: 'Yes / No'
  },
  {
    label: 'Should the design follow any specific style?',
    name: 'designStyle',
    placeholder: 'e.g., Minimalist, corporate'
  },
  {
    label: 'Which platforms should the app be available on?',
    name: 'platforms',
    placeholder: 'iOS, Android, Web, Both'
  },
  {
    label: 'Do you prefer native or cross-platform development?',
    name: 'devPreference',
    placeholder: 'e.g., Native (Swift/Kotlin), React Native'
  },
  {
    label: 'What types of users will the app have?',
    name: 'userTypes',
    placeholder: 'e.g., Admin, regular user'
  },
  {
    label: 'What actions or permissions will each user type have?',
    name: 'userPermissions',
    type: 'textarea'
  },
  {
    label: 'Will the app need to connect with any APIs or external services?',
    name: 'externalServices',
    type: 'textarea'
  },
  {
    label: 'Do you have credentials or API documentation ready?',
    name: 'apiDocs',
    placeholder: 'Yes / No'
  },
  {
    label: 'How do you plan to generate revenue from the app?',
    name: 'revenueModel',
    placeholder: 'In-app purchases, subscriptions...'
  },
  {
    label: 'Do you have a backend system or should it be built from scratch?',
    name: 'backendStatus',
    placeholder: 'Existing or new'
  },
  {
    label: 'What database or backend technologies do you prefer?',
    name: 'backendTech',
    placeholder: 'e.g., Node.js, Firebase'
  },
  {
    label: 'Do you need an admin panel or dashboard?',
    name: 'adminPanel',
    placeholder: 'Yes / No'
  },
  {
    label: 'What is your ideal timeline for the project?',
    name: 'timeline',
    placeholder: 'e.g., 3 months'
  },
  {
    label: 'Do you have a defined budget range for this app?',
    name: 'budget',
    placeholder: 'e.g., $10,000 - $20,000'
  },
  {
    label: 'Will you need ongoing maintenance and updates after launch?',
    name: 'maintenance',
    placeholder: 'Yes / No'
  },
  {
    label: 'Do you require support in submitting the app to app stores?',
    name: 'appStoreSupport',
    placeholder: 'Yes / No'
  },
  {
    label:
      "Are there any specific challenges, notes, or preferences you'd like to mention?",
    name: 'otherNotes',
    type: 'textarea'
  },
  {
    label: 'Do you have any documents or wireframes to share?',
    name: 'documents',
    placeholder: 'Links or attachments'
  }
]

const initialState = questions.reduce((acc, q) => {
  acc[q.name] = ''
  return acc
}, {})

export default function AppDevelopmentCmp () {
  const [formData, setFormData] = useState(initialState)
  const [files, setFiles] = useState([])
  const { token } = useAuthInfo()
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = +searchParams.get('id')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = async e => {
    const files = Array.from(e.target.files)
    setFiles(files)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const submitData = new FormData()
    // submitData.append('service', 'App Development')
    submitData.append('question_set', JSON.stringify(formData))

    files.forEach(file => {
      submitData.append('project_assets', file)
    })

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
          submitData,
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
          confirmButtonColor: '#ff4d4f', 
          customClass: {
            confirmButton: 'swal-confirm-btn'
          }
        })
        console.error(error?.response?.data || error.message)
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

  // changed added

  return (
    <div className='text-white'>
      <form onSubmit={handleSubmit} className=''>
        {questions.map(({ label, name, placeholder, type }) => (
          <div key={name} className='flex flex-col'>
            <label htmlFor={name} className='service-form-label'>
              {label}
            </label>
            {type === 'textarea' ? (
              <textarea
                rows={3}
                id={name}
                name={name}
                placeholder={placeholder || 'Type your answer...'}
                value={formData[name]}
                onChange={handleChange}
                className='textareaForm'
              />
            ) : (
              <input
                id={name}
                type='text'
                name={name}
                placeholder={placeholder || ''}
                value={formData[name]}
                onChange={handleChange}
                className='inputForm'
              />
            )}
          </div>
        ))}
        <div>
          <label
            htmlFor='referanceFile'
            className='block  mb-1 text-lg font-medium'
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
        <br />

        <div>
          <button
            type='submit'
            className=' px-6 py-2 bg-[#a8ff57] text-black rounded-md inline-block cursor-pointer '
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
