'use client'

import React, { useState } from 'react'
import useAuthInfo from '../../hooks/useAuthInfo'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'

const questions = [
  {
    label: 'Business Name',
    name: 'businessName',
    placeholder: 'Enter business name'
  },
  {
    label: 'Website URL (if any)',
    name: 'websiteUrl',
    placeholder: 'https://yourwebsite.com'
  },
  {
    label: 'Industry/Niche',
    name: 'industry',
    placeholder: 'e.g., Retail, Tech'
  },
  {
    label: 'Location(s) Served',
    name: 'locationsServed',
    placeholder: 'e.g., USA, Europe'
  },
  {
    label: 'Briefly describe your business',
    name: 'businessDescription',
    type: 'textarea'
  },
  {
    label: 'What are your main products/services?',
    name: 'mainProductsServices',
    type: 'textarea'
  }
]

const multiSelectGroups = [
  {
    label:
      'What are your primary digital marketing goals? (Select all that apply)',
    name: 'marketingGoals',
    options: [
      'Increase website traffic',
      'Generate more leads',
      'Improve social media presence',
      'Increase sales/conversions',
      'Improve SEO rankings',
      'Build brand awareness',
      'Other'
    ],
    hasOther: true
  },
  {
    label: 'Are you currently running any paid ads?',
    name: 'paidAds',
    options: [
      'Google Ads',
      'Facebook/Instagram Ads',
      'LinkedIn Ads',
      'Other',
      'No'
    ],
    hasOther: true
  },
  {
    label: 'Are you currently using any analytics tools?',
    name: 'analyticsTools',
    options: ['Google Analytics', 'Facebook Insights', 'Other', 'No'],
    hasOther: true
  },
  {
    label: 'What is your monthly budget for digital marketing?',
    name: 'monthlyBudget',
    options: [
      'Under $500',
      '$500–$1,000',
      '$1,000–$3,000',
      '$3,000–$5,000',
      '$5,000+'
    ],
    singleSelect: true // Only one can be selected here
  },
  {
    label: 'Which services are you interested in? (Select all that apply)',
    name: 'servicesInterested',
    options: [
      'Social Media Marketing',
      'SEO (Search Engine Optimization)',
      'Google Ads / PPC',
      'Email Marketing',
      'Website Development',
      'Content Creation (Blogs, Graphics, Videos)',
      'Branding & Design',
      'Marketing Automation',
      'Other'
    ],
    hasOther: true
  }
]

const otherTextInputs = [
  {
    label: 'Do you have a specific timeframe for achieving these goals?',
    name: 'timeframe'
  },
  {
    label:
      'What does success look like for your business through digital marketing?',
    name: 'successDefinition',
    type: 'textarea'
  },
  {
    label:
      'Do you currently have any of the following? (Include links if applicable)',
    name: 'existingProfiles',
    type: 'textarea'
  },
  {
    label: 'Do you already have a marketing strategy or plan in place?',
    name: 'marketingStrategy',
    type: 'textarea'
  },
  {
    label:
      'Who is your target audience? (Demographics, location, behavior, interests)',
    name: 'targetAudience',
    type: 'textarea'
  },
  {
    label: 'What are your main competitors?',
    name: 'competitors',
    type: 'textarea'
  },
  {
    label: 'What makes your business unique?',
    name: 'uniqueSellingPoints',
    type: 'textarea'
  },
  {
    label:
      'Do you have internal staff to support content creation, or would you need full support?',
    name: 'contentSupport',
    type: 'textarea'
  },
  {
    label: 'When would you like to start the project?',
    name: 'projectStartDate',
    placeholder: 'e.g., July 2025'
  },
  {
    label:
      'Who is the main point of contact for this project? (Name, email, phone)',
    name: 'mainContact',
    type: 'textarea'
  },
  {
    label: "Is there anything else you'd like to share or ask?",
    name: 'additionalNotes',
    type: 'textarea'
  }
]

const initialState = {
  businessName: '',
  websiteUrl: '',
  industry: '',
  locationsServed: '',
  businessDescription: '',
  mainProductsServices: '',

  marketingGoals: [],
  marketingGoalsOther: '',
  paidAds: [],
  paidAdsOther: '',
  analyticsTools: [],
  analyticsToolsOther: '',
  monthlyBudget: '',
  servicesInterested: [],
  servicesInterestedOther: '',

  timeframe: '',
  successDefinition: '',
  existingProfiles: '',
  marketingStrategy: '',
  targetAudience: '',
  competitors: '',
  uniqueSellingPoints: '',
  contentSupport: '',
  projectStartDate: '',
  mainContact: '',
  additionalNotes: ''
}

export default function DigitalMarketingCmp () {
  const [formData, setFormData] = useState(initialState)
  const [files, setFiles] = useState([])
  const { token } = useAuthInfo()
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = +searchParams.get('id')

  // Handle text and textarea input changes
  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleImageChange = async e => {
    const files = Array.from(e.target.files)
    setFiles(files)
  }
  // Handle checkbox groups with multiple selection
  const handleCheckboxChange = (name, option, singleSelect = false) => {
    setFormData(prev => {
      const current = prev[name] || []

      if (singleSelect) {
        // Only allow one option for single select groups like budget
        if (current.includes(option)) {
          return { ...prev, [name]: [] } // unselect if clicked again
        }
        return { ...prev, [name]: [option] }
      }

      // For multi-select groups
      if (current.includes(option)) {
        return { ...prev, [name]: current.filter(o => o !== option) }
      } else {
        return { ...prev, [name]: [...current, option] }
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const submitData = new FormData()
    // submitData.append('service', 'Digital Marketing')
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
              // DO NOT manually set Content-Type; Axios will handle it
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

  return (
    <div className=' text-white '>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Basic info inputs */}
        {questions.map(({ label, name, placeholder, type }) => (
          <div key={name} className='flex flex-col'>
            <label className='service-form-label'>{label}</label>
            {type === 'textarea' ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                placeholder={placeholder || 'Type here...'}
                className='inputForm'
              />
            ) : (
              <input
                type='text'
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                placeholder={placeholder || ''}
                className='inputForm'
              />
            )}
          </div>
        ))}

        {/* Checkbox groups */}
        {multiSelectGroups.map(
          ({ label, name, options, hasOther, singleSelect }) => (
            <div key={name} className='flex flex-col'>
              <label className='mb-2 font-semibold'>{label}</label>
              <div className='flex flex-col flex-wrap gap-4'>
                {options.map(option => (
                  <label
                    key={option}
                    className='inline-flex items-center space-x-2'
                  >
                    <input
                      type='checkbox'
                      checked={formData[name]?.includes(option) || false}
                      onChange={() =>
                        handleCheckboxChange(name, option, singleSelect)
                      }
                      className='form-checkbox h-5 w-5 text-green-500'
                    />
                    <span className='text-sm'>{option}</span>
                  </label>
                ))}
              </div>
              {/* If "Other" checked show input */}
              {hasOther && formData[name]?.includes('Other') && (
                <input
                  type='text'
                  name={`${name}Other`}
                  value={formData[`${name}Other`] || ''}
                  onChange={handleInputChange}
                  placeholder='Please specify'
                  className='mt-2 inputForm'
                />
              )}
            </div>
          )
        )}

        {/* Other long text inputs */}
        {otherTextInputs.map(({ label, name, placeholder, type }) => (
          <div key={name} className='flex flex-col'>
            <label className='mb-1 font-semibold'>{label}</label>
            {type === 'textarea' ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                placeholder={placeholder || 'Type here...'}
                className='inputForm'
              />
            ) : (
              <input
                type='text'
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                placeholder={placeholder || ''}
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
