'use client'

import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import useAuthInfo from '../../hooks/useAuthInfo'
import { useRouter, useSearchParams } from 'next/navigation'

const questions = [
  {
    label: 'Company Name',
    name: 'companyName',
    placeholder: 'Enter company name'
  },
  {
    label: 'Industry Type',
    name: 'industryType',
    placeholder: 'e.g., Healthcare, Finance'
  },
  {
    label: 'Company Size (Employees)',
    name: 'companySize',
    placeholder: 'e.g., 50-200'
  },
  {
    label: 'Contact Person Name & Title',
    name: 'contactPerson',
    placeholder: 'John Doe, CTO'
  },
  { label: 'Email Address', name: 'email', placeholder: 'example@domain.com' },
  { label: 'Phone Number', name: 'phone', placeholder: '+123456789' }
]

// Checkbox groups with optional "Other" field
const checkboxGroups = [
  {
    label: 'What operating systems are used within your organization?',
    name: 'operatingSystems',
    options: ['Windows', 'macOS', 'Linux', 'Other'],
    hasOther: true
  },
  {
    label: 'How many devices are connected to your network?',
    name: 'connectedDevices',
    options: ['<10', '10–50', '50–200', '200+']
  },
  {
    label:
      'Do you operate cloud-based systems (e.g., Google Workspace, Microsoft 365, AWS, Azure)?',
    name: 'cloudSystems',
    options: ['Yes', 'No'],
    hasOther: true, // for "If yes, please specify"
    otherLabel: 'If yes, please specify'
  },
  {
    label: 'Do you have an in-house IT department or team?',
    name: 'hasITDept',
    options: ['Yes', 'No']
  },
  {
    label: 'Do you currently have any cybersecurity policies in place?',
    name: 'cyberPolicies',
    options: ['Yes', 'No', 'In development']
  },
  {
    label: 'What security tools do you currently use?',
    name: 'securityTools',
    options: [
      'Firewall',
      'Antivirus/Antimalware',
      'VPN',
      'Endpoint Detection & Response (EDR)',
      'SIEM/SOC',
      'Other'
    ],
    hasOther: true
  },
  {
    label: 'Are all systems regularly updated and patched?',
    name: 'systemsUpdated',
    options: ['Yes', 'No', 'Not Sure']
  },
  {
    label:
      'Do you conduct regular security audits or vulnerability assessments?',
    name: 'securityAudits',
    options: ['Yes', 'No']
  },
  {
    label: 'Do you back up your data regularly?',
    name: 'dataBackup',
    options: ['Yes', 'No', 'Not Sure']
  },
  {
    label:
      'Are your employees trained in cybersecurity awareness (e.g., phishing)?',
    name: 'employeeTraining',
    options: ['Yes', 'No', 'Some departments only']
  },
  {
    label:
      'Are you subject to any regulatory requirements (e.g., GDPR, HIPAA, ISO 27001)?',
    name: 'regulatoryRequirements',
    options: ['Yes', 'No'],
    hasOther: true,
    otherLabel: 'If yes, which ones'
  },
  {
    label:
      'Have you experienced any data breaches or security incidents in the past 12 months?',
    name: 'dataBreaches',
    options: ['Yes', 'No'],
    hasOther: true,
    otherLabel: 'If yes, please describe briefly',
    isTextareaForOther: true
  },
  {
    label: 'What are your primary concerns regarding cybersecurity right now?',
    name: 'primaryConcerns',
    options: [
      'Data breaches',
      'Insider threats',
      'Ransomware',
      'Compliance',
      'Customer data protection',
      'Other'
    ],
    hasOther: true
  },
  {
    label: 'What services are you interested in? (Check all that apply)',
    name: 'servicesInterested',
    options: [
      'Network Security Assessment',
      'Penetration Testing',
      'Security Awareness Training',
      'Managed Security Services (MSSP)',
      'Incident Response Planning',
      'Data Loss Prevention (DLP)',
      'Compliance Auditing',
      'Cybersecurity Policy Development',
      'Cloud Security',
      'Other'
    ],
    hasOther: true
  },
  {
    label: 'Preferred start date for services',
    name: 'preferredStartDate',
    placeholder: 'YYYY-MM-DD',
    type: 'date'
  },
  {
    label: 'Estimated budget range for cybersecurity services',
    name: 'budgetRange',
    options: ['<$1,000', '$1,000–$5,000', '$5,000–$20,000', '$20,000+']
  }
]

const initialState = {
  // Text fields
  companyName: '',
  industryType: '',
  companySize: '',
  contactPerson: '',
  email: '',
  phone: '',
  preferredStartDate: '',

  // Checkbox groups (store selected options arrays)
  operatingSystems: [],
  operatingSystemsOther: '',
  connectedDevices: [],
  cloudSystems: [],
  cloudSystemsOther: '',
  hasITDept: [],
  cyberPolicies: [],
  securityTools: [],
  securityToolsOther: '',
  systemsUpdated: [],
  securityAudits: [],
  dataBackup: [],
  employeeTraining: [],
  regulatoryRequirements: [],
  regulatoryRequirementsOther: '',
  dataBreaches: [],
  dataBreachesOther: '',
  primaryConcerns: [],
  primaryConcernsOther: '',
  servicesInterested: [],
  servicesInterestedOther: '',

  // Budget range (single selection)
  budgetRange: ''
}

export default function CyberSecuirityCmp () {
  const [formData, setFormData] = useState(initialState)
  const [files, setFiles] = useState([])
  const { token } = useAuthInfo()
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = +searchParams.get('id')

  // Handle text and date inputs
  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = async e => {
    const files = Array.from(e.target.files)
    setFiles(files)
  }

  // Handle checkbox groups (multiple select)
  const handleCheckboxChange = (name, option) => {
    setFormData(prev => {
      const current = prev[name] || []
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
    // submitData.append('service', 'Cyber Security')
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
    <div className='text-white'>
      {/* Render text inputs */}
      <form onSubmit={handleSubmit} className=''>
        {questions.slice(0, 6).map(({ label, name, placeholder }) => (
          <div key={name} className='flex flex-col'>
            <label className='service-form-label'>{label}</label>
            <input
              type='text'
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              placeholder={placeholder || ''}
              className='inputForm'
              required
            />
          </div>
        ))}

        {/* Checkbox groups and special inputs */}
        {checkboxGroups.map(
          ({
            label,
            name,
            options,
            hasOther,
            otherLabel,
            isTextareaForOther,
            placeholder,
            type
          }) => (
            <div key={name} className='flex flex-col mb-6'>
              <label className='service-form-label'>{label}</label>

              {options && (
                <div className=' gap-4 mb-2'>
                  {options.map(option => (
                    <label
                      key={option}
                      className='service-form-label inline-flex items-center space-x-2'
                    >
                      <input
                        type='checkbox'
                        name={name}
                        value={option}
                        checked={formData[name]?.includes(option) || false}
                        onChange={() => handleCheckboxChange(name, option)}
                        className=' h-5 w-5 text-green-500'
                      />
                      <span className='text-sm'>{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {/* "Other" text or textarea input if applicable and "Other" is checked */}
              {hasOther &&
                formData[name]?.includes('Other') &&
                !isTextareaForOther && (
                  <input
                    type='text'
                    name={`${name}Other`}
                    placeholder={otherLabel || 'Please specify'}
                    value={formData[`${name}Other`] || ''}
                    onChange={handleInputChange}
                    className='inputForm'
                  />
                )}

              {/* "Other" textarea if specified */}
              {hasOther &&
                formData[name]?.includes('Other') &&
                isTextareaForOther && (
                  <textarea
                    name={`${name}Other`}
                    placeholder={otherLabel || 'Please specify'}
                    value={formData[`${name}Other`] || ''}
                    onChange={handleInputChange}
                    className='inputForm'
                  />
                )}

              {/* If this group has no options but is just input, e.g. preferred start date */}
              {!options && type === 'date' && (
                <input
                  type='date'
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  className='inputForm'
                />
              )}
            </div>
          )
        )}

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
