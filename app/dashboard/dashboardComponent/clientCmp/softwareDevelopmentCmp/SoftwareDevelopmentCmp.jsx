'use client'

import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import useAuthInfo from '../../hooks/useAuthInfo'
import { useRouter, useSearchParams } from 'next/navigation'

const questions = [
  {
    label: 'Company/Client Name',
    name: 'companyName',
    placeholder: 'Enter your company name'
  },
  {
    label: 'Contact Person',
    name: 'contactPerson',
    placeholder: 'Full name of contact person'
  },
  { label: 'Email', name: 'email', placeholder: 'example@domain.com' },
  { label: 'Phone Number', name: 'phone', placeholder: '+123456789' },
  {
    label: 'Project Title',
    name: 'projectTitle',
    placeholder: 'Name of the project'
  },

  {
    label: 'What is the purpose of the software?',
    name: 'softwarePurpose',
    type: 'textarea'
  },
  {
    label: 'What problems are you trying to solve?',
    name: 'problemStatement',
    type: 'textarea'
  },
  {
    label: 'What are the main goals of the project?',
    name: 'projectGoals',
    type: 'textarea'
  },

  {
    label: 'Who are the primary users?',
    name: 'primaryUsers',
    placeholder: ''
  },
  {
    label: 'What devices will users use? (Desktop, Mobile, Tablet)',
    name: 'devices',
    placeholder: ''
  },
  {
    label:
      'Are there different types of users (admin, user, guest)? If yes, please describe.',
    name: 'userTypes',
    type: 'textarea'
  },

  {
    label:
      'List the key features you want (e.g., login, dashboard, payment, etc.)',
    name: 'keyFeatures',
    type: 'textarea'
  },
  {
    label:
      'Any special integrations required? (e.g., payment gateways, APIs, etc.)',
    name: 'integrations',
    type: 'textarea'
  },
  {
    label: 'Will the software need multi-language support?',
    name: 'multiLanguage',
    placeholder: ''
  },

  {
    label: 'Preferred technology or framework (e.g., React, Flutter, Laravel)',
    name: 'techStack',
    placeholder: ''
  },
  {
    label: 'Will it be a web-based, mobile, or desktop application?',
    name: 'appType',
    placeholder: ''
  },
  {
    label: 'Do you have an existing database or infrastructure?',
    name: 'infrastructure',
    type: 'textarea'
  },

  {
    label: 'Do you have a design (UI/UX) ready?',
    name: 'hasDesign',
    placeholder: ''
  },
  {
    label: 'Preferred design style or theme (minimal, modern, corporate)',
    name: 'designStyle',
    placeholder: ''
  },
  {
    label: 'Any reference websites or apps you like?',
    name: 'referenceLinks',
    type: 'textarea'
  },

  {
    label: 'Any data security requirements?',
    name: 'dataSecurity',
    placeholder: ''
  },
  {
    label: 'Do you need user roles and access control?',
    name: 'userRoles',
    placeholder: ''
  },
  {
    label: 'Any compliance standards (e.g., GDPR, HIPAA)?',
    name: 'compliance',
    placeholder: ''
  },

  {
    label: 'What is your ideal project timeline?',
    name: 'timeline',
    placeholder: ''
  },
  {
    label: 'Do you have a fixed budget or a budget range?',
    name: 'budget',
    placeholder: ''
  },

  {
    label: 'Will you require ongoing support after development?',
    name: 'support',
    placeholder: ''
  },
  {
    label: 'Should we include documentation and training?',
    name: 'documentation',
    placeholder: ''
  },

  {
    label: 'Any other requirements or notes?',
    name: 'otherNotes',
    type: 'textarea'
  },
  {
    label: 'Who will be the point of contact during development?',
    name: 'contactPersonDev',
    placeholder: ''
  }
]

// Manually define initial form state object:
const initialState = {
  companyName: '',
  contactPerson: '',
  email: '',
  phone: '',
  projectTitle: '',
  softwarePurpose: '',
  problemStatement: '',
  projectGoals: '',
  primaryUsers: '',
  devices: '',
  userTypes: '',
  keyFeatures: '',
  integrations: '',
  multiLanguage: '',
  techStack: '',
  appType: '',
  infrastructure: '',
  hasDesign: '',
  designStyle: '',
  referenceLinks: '',
  dataSecurity: '',
  userRoles: '',
  compliance: '',
  timeline: '',
  budget: '',
  support: '',
  documentation: '',
  otherNotes: '',
  contactPersonDev: ''
}

export default function SoftwareDevelopmentCmp () {
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
  const handleImageChange = e => {
    const files = Array.from(e.target.files)
    setFiles(files)
    console.log('Uploaded files:', files)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const submitData = new FormData()
    // submitData.append('service', 'Software Development')
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
        confirmButtonColor: '#ff4d4f', // red background
        customClass: {
          confirmButton: 'swal-confirm-btn'
        }
      })
    }
  }

  return (
    <div className=''>
      <form onSubmit={handleSubmit} className=' gap-6'>
        {questions.map((q, i) => (
          <div key={i} className='flex flex-col'>
            <label className='service-form-label'>{q.label}</label>
            {q.type === 'textarea' ? (
              <textarea
                rows={3}
                name={q.name}
                value={formData[q.name]}
                onChange={handleChange}
                placeholder={q.placeholder || 'Type your answer...'}
                className='textareaForm'
              />
            ) : (
              <input
                type='text'
                name={q.name}
                value={formData[q.name]}
                onChange={handleChange}
                placeholder={q.placeholder || ''}
                className='inputForm'
              />
            )}
          </div>
        ))}

        <div>
          <label className='service-form-label'>Upload reference files</label>
          <input
            type='file'
            multiple
            name='referanceFile'
            onChange={handleImageChange}
            className='inputForm'
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
