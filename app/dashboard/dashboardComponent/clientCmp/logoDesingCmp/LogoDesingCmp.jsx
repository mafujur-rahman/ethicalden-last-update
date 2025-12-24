'use client'
import React, { useState } from 'react'
import Topbar from '../../topbar'
import axios from 'axios'
import Swal from 'sweetalert2'
import useAuthInfo from '../../hooks/useAuthInfo'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LogoDesingCmp () {
  const [files, setFiles] = useState([])
  const { token } = useAuthInfo()
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = +searchParams.get('id')
  const [formData, setFormData] = useState({
    businessName: '',
    tagline: '',
    industry: '',
    services: '',
    targetAudience: '',
    brandWords: '',
    brandValues: '',
    logoMessage: '',
    style: [],
    logoUsage: [],
    logoUsageFeild: '',
    logoVersions: [],
    brandColors: '',
    avoidColors: '',
    typography: '',
    budget: '',
    deadline: '',
    fileTypes: [],
    fileTypesData: '',
    needGuideline: '',
    otherNotes: ''
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : prev[name].filter(v => v !== value)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleImageChange = async e => {
    const files = Array.from(e.target.files)
    setFiles(files)
    console.log('Uploaded files:', files)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const submitData = new FormData()
    // submitData.append('service', 'Logo Design')
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
    <div className='section_space'>
      <div>
        <Topbar
          title='Logo Design'
          des='Manage and deliver custom logo design requests with precision. Ensure each design aligns with brand identity and meets client expectations.'
        />
      </div>
      <form onSubmit={handleSubmit} className='space-y-5 text-white'>
        <div className=' gap-x-5'>
          <div>
            <label htmlFor='businessName' className='block  service-form-label'>
              Business or Brand Name
            </label>
            <input
              id='businessName'
              name='businessName'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label htmlFor='tagline' className='block  service-form-label'>
              Tagline or Slogan
            </label>
            <input
              id='tagline'
              name='tagline'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
        </div>

        <div className=' gap-x-5'>
          <div>
            <label htmlFor='industry' className='block  service-form-label'>
              Industry
            </label>
            <input
              id='industry'
              name='industry'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
          <div>
            <label
              htmlFor='targetAudience'
              className='block  service-form-label'
            >
              Target Audience
            </label>

            <input
              id='targetAudience'
              name='targetAudience'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
        </div>

        <div>
          <label htmlFor='services' className='block  service-form-label'>
            What products or services do you offer?
          </label>
          <textarea
            id='services'
            name='services'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>

        <div>
          <label htmlFor='brandValues' className='block  service-form-label'>
            Brand Values or Mission
          </label>
          <textarea
            id='brandValues'
            name='brandValues'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>

        <div>
          <label htmlFor='brandWords' className='block  service-form-label'>
            Describe your brand in 3–5 words
          </label>
          <input
            id='brandWords'
            name='brandWords'
            onChange={handleChange}
            className='inputForm'
          />
        </div>

        <div>
          <label htmlFor='logoMessage' className='block  service-form-label'>
            What feeling or message should your logo convey?
          </label>
          <textarea
            id='logoMessage'
            name='logoMessage'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>

        <div className='grid  '>
          <div>
            <label className='block  service-form-label'>
              What style fits your brand?
            </label>
            {[
              'Minimal',
              'Vintage',
              'Modern',
              'Bold',
              'Elegant',
              'Playful',
              'Geometric',
              'Hand-drawn'
            ].map(style => (
              <label key={style} className='block'>
                <input
                  type='checkbox'
                  name='style'
                  value={style}
                  onChange={handleChange}
                />{' '}
                {style}
              </label>
            ))}
            <input
              name='style'
              placeholder='Other style'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label className='block  service-form-label'>
              Where will the logo be used?
            </label>
            {[
              'Website',
              'Social Media',
              'Print Materials',
              'Packaging',
              'Merchandise',
              'Signage'
            ].map(item => (
              <label key={item} className='block'>
                <input
                  type='checkbox'
                  name='logoUsage'
                  value={item}
                  onChange={handleChange}
                />{' '}
                {item}
              </label>
            ))}
            <input
              name='logoUsageFeild'
              placeholder='Other usage'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label className='block  service-form-label'>
              Do you need different versions?
            </label>
            {[
              'Icon-only',
              'Horizontal layout',
              'Vertical layout',
              'Black & white version'
            ].map(version => (
              <label key={version} className='block'>
                <input
                  type='checkbox'
                  name='logoVersions'
                  value={version}
                  onChange={handleChange}
                />{' '}
                {version}
              </label>
            ))}
            <input
              name='logoVersions'
              placeholder='Other version'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label className='block  service-form-label'>
              Logo file types needed:
            </label>
            {['PNG', 'JPEG', 'SVG', 'AI', 'PDF', 'EPS'].map(type => (
              <label key={type} className='block'>
                <input
                  type='checkbox'
                  name='fileTypes'
                  value={type}
                  onChange={handleChange}
                />{' '}
                {type}
              </label>
            ))}
            <input
              name='fileTypesData'
              placeholder='Other file types'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
        </div>

        <div className=' gap-x-5 '>
          <div>
            <label htmlFor='brandColors' className='block  service-form-label'>
              Preferred Brand Colors
            </label>
            <input
              id='brandColors'
              name='brandColors'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label htmlFor='avoidColors' className='block  service-form-label'>
              Colors to Avoid
            </label>
            <input
              id='avoidColors'
              name='avoidColors'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
        </div>

        <div className=''>
          <div>
            <label htmlFor='typography' className='block  service-form-label'>
              Preferred fonts or typography styles
            </label>

            <input
              id='typography'
              name='typography'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          {/* <div>
          <label htmlFor='existingLogo' className='block  service-form-label'>
            Do you already have a logo?
          </label>
          <select
            id='existingLogo'
            name='existingLogo'
            onChange={handleChange}
            className='inputForm'
          >
            <option className='bg-black' value=''>
              Select
            </option>
            <option className='bg-black' value='update'>
              Yes, I want to update it
            </option>
            <option className='bg-black' value='new'>
              No, I need a new design
            </option>
          </select>
        </div> */}

          <div>
            <label htmlFor='budget' className='block  service-form-label'>
              What is your budget?
            </label>
            <input
              id='budget'
              name='budget'
              onChange={handleChange}
              className='inputForm'
            />
          </div>

          <div>
            <label htmlFor='deadline' className='block  service-form-label'>
              What is your desired timeline or deadline?
            </label>
            <input
              id='deadline'
              type='date'
              name='deadline'
              onChange={handleChange}
              className='inputForm text-white'
            />
          </div>

          <div>
            <label
              htmlFor='needGuideline'
              className='block  service-form-label'
            >
              Do you need a brand guideline or usage manual?
            </label>
            <select
              id='needGuideline'
              name='needGuideline'
              onChange={handleChange}
              className='inputForm'
            >
              <option className='bg-[#111]' value=''>
                Select
              </option>
              <option className='bg-[#111]' value='Yes'>
                Yes
              </option>
              <option className='bg-[#111]' value='No'>
                No
              </option>
              <option className='bg-[#111]' value='Not sure yet'>
                Not sure yet
              </option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor='otherNotes' className='block  service-form-label'>
            Anything else you'd like us to know?
          </label>
          <textarea
            id='otherNotes'
            name='otherNotes'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>

        <div>
          <label htmlFor='referanceFile' className='block  service-form-label'>
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

        <button
          type='submit'
          className='mt-4 px-6 py-2 bg-[#a8ff57] text-black rounded-md'
        >
          Submit
        </button>
      </form>
    </div>
  )
}
