'use client'

import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import useAuthInfo from '../../hooks/useAuthInfo'
import { useRouter, useSearchParams } from 'next/navigation'

const fields = [
  {
    label: 'Company/Project Name',
    name: 'companyName',
    placeholder: 'Your company name'
  },
  {
    label: 'Contact Person Name and Role',
    name: 'contactPerson',
    placeholder: 'John Doe, PM'
  },
  {
    label: 'Brief description of your business or project',
    name: 'projectDescription',
    placeholder: 'Short summary',
    type: 'textarea'
  },
  {
    label: 'What product or service do you offer?',
    name: 'productService',
    placeholder: 'Describe briefly',
    type: 'textarea'
  },
  {
    label: 'What is the primary goal of this UI/UX design project?',
    name: 'primaryGoal',
    placeholder: 'Redesign dashboard',
    type: 'textarea'
  },
  {
    label: 'What problem are you trying to solve with this design?',
    name: 'problemToSolve',
    placeholder: 'Improve usability',
    type: 'textarea'
  },
  {
    label: 'Who are your primary target users?',
    name: 'targetUsers',
    placeholder: 'e.g., Small businesses'
  },
  {
    label: 'What actions should users be able to take on the product?',
    name: 'userActions',
    placeholder: 'Sign up, search'
  },
  {
    label:
      'Are there any specific business goals this design should help achieve?',
    name: 'businessGoals',
    placeholder: 'Increase conversions',
    type: 'textarea'
  },
  {
    label: 'Do you currently have a product/interface or is this from scratch?',
    name: 'existingProduct',
    placeholder: 'Redesign / New'
  },
  {
    label:
      'If redesigning, what issues are you facing with the current design?',
    name: 'currentIssues',
    placeholder: 'Outdated UI',
    type: 'textarea'
  },
  {
    label: 'Do you have existing brand guidelines (colors, fonts, logo)?',
    name: 'brandGuidelines',
    placeholder: 'Yes / No'
  },
  {
    label: 'What platform(s) will the design be for?',
    name: 'platforms',
    placeholder: 'e.g., Web, iOS'
  },
  {
    label: 'How many pages/screens do you anticipate?',
    name: 'pageCount',
    placeholder: 'e.g., 8–10 screens'
  },
  {
    label: 'Do you need responsive design?',
    name: 'responsiveDesign',
    placeholder: 'Yes / No'
  },
  {
    label: 'Are there any design styles you like?',
    name: 'designStyle',
    placeholder: 'Modern, Minimal',
    type: 'textarea'
  },
  {
    label: 'Apps/websites you like and why?',
    name: 'designExamples',
    placeholder: 'List links or names',
    type: 'textarea'
  },
  {
    label: 'Are there any styles or colors you want to avoid?',
    name: 'avoidStyles',
    placeholder: 'Optional'
  },
  {
    label: 'Do you have a preferred color scheme?',
    name: 'colorScheme',
    placeholder: 'Optional'
  },
  {
    label: 'Will you provide the content for the design?',
    name: 'hasContent',
    placeholder: 'Yes / No'
  },
  {
    label: 'Need help with copywriting or content?',
    name: 'needCopyHelp',
    placeholder: 'Yes / No'
  },
  {
    label: 'Do you have a logo and other branding assets?',
    name: 'hasLogo',
    placeholder: 'Yes / No'
  },
  {
    label: 'Must-have features?',
    name: 'mustHaveFeatures',
    placeholder: 'Search, Login, Contact',
    type: 'textarea'
  },
  {
    label: 'Any third-party integrations?',
    name: 'thirdParty',
    placeholder: 'Stripe, Google Maps'
  },
  {
    label: 'Special accessibility features?',
    name: 'accessibility',
    placeholder: 'Screen reader, etc.'
  },
  {
    label: 'Desired project completion date?',
    name: 'completionDate',
    placeholder: 'e.g., July 30, 2025'
  },
  {
    label: 'Specific budget or range?',
    name: 'budget',
    placeholder: 'e.g., $1,500–$3,000'
  }
]

export default function UiuxCmp () {
  const [files, setFiles] = useState([])
  const { token } = useAuthInfo()
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = +searchParams.get('id')
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    projectDescription: '',
    productService: '',
    primaryGoal: '',
    problemToSolve: '',
    targetUsers: '',
    userActions: '',
    businessGoals: '',
    existingProduct: '',
    currentIssues: '',
    brandGuidelines: '',
    platforms: '',
    pageCount: '',
    responsiveDesign: '',
    designStyle: '',
    designExamples: '',
    avoidStyles: '',
    colorScheme: '',
    hasContent: '',
    needCopyHelp: '',
    hasLogo: '',
    mustHaveFeatures: '',
    thirdParty: '',
    accessibility: '',
    completionDate: '',
    budget: ''
  })

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
    // submitData.append('service', 'UI/UX Design')
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
          confirmButtonColor: '#ff4d4f', // red background
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
        confirmButtonColor: '#ff4d4f', // red background
        customClass: {
          confirmButton: 'swal-confirm-btn'
        }
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='space-y-5 text-white'>
        {fields.map((field, index) => (
          <div key={index} className='flex flex-col'>
            <label className='service-form-label'>{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                rows={3}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className='p-2 border border-white/10 rounded text-sm bg-white/10 text-white placeholder:text-white/40 outline-none '
              />
            ) : (
              <input
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className='p-2 border border-white/10 rounded text-sm bg-white/10 text-white placeholder:text-white/40 outline-none'
              />
            )}
          </div>
        ))}

        <div>
          <label
            htmlFor='referanceFile'
            className='block mb-1 text-base font-medium'
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
    </div>
  )
}
