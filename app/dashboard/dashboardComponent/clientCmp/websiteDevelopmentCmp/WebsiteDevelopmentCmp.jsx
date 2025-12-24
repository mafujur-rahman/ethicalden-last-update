'use client'
import React, { useState } from 'react'
import useAuthInfo from '../../hooks/useAuthInfo'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'

export default function WebsiteDevelopmentCmp () {
  const [files, setFiles] = useState([])
  const { token } = useAuthInfo()
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = +searchParams.get('id')
  const [form, setForm] = useState({
    organizationName: '',
    contactPerson: '',
    phoneNumber: '',
    email: '',
    location: '',
    businessType: '',
    language: '',
    description: '',
    products: '',
    uniqueness: '',
    goal: '',
    objectives: '',
    idealCustomer: '',
    demographics: '',
    hasContent: '',
    needsHelp: '',
    siteLanguages: '',
    hasBrandAssets: '',
    inspirationLinks: '',
    designStyle: '',
    features: [],
    otherFeature: '',
    domainName: '',
    hostingDetails: '',
    needSEO: '',
    needMaintenance: '',
    budget: '',
    deadline: '',
    otherNotes: '',
    referanceFile: []
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setForm(prev => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter(item => item !== value)
      }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleImageChange = e => {
    const files = Array.from(e.target.files)
    setFiles(files)
    console.log('Uploaded files:', files)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const submitData = new FormData()
    // submitData.append('service', 'Web Development')
    submitData.append('question_set', JSON.stringify(form))

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
        console.log('FormData what is send ')
                for (let pair of submitData.entries()) {
                  console.log(`${pair[0]}:`, pair[1])
                }
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

  return (
    <div>
      <form onSubmit={handleSubmit} className='text-white   gap-x-10 '>
        {/* Text Inputs heres*/}
        <div>
          <label className='block mb-1'>Your Name/Organization Name</label>
          <input
            name='organizationName'
            onChange={handleChange}
            className='inputForm'
          />
        </div>
        <div>
          <label className='block mb-1'>Contact Person & Role</label>
          <input
            name='contactPerson'
            onChange={handleChange}
            className='inputForm'
          />
        </div>
        <div>
          <label className='block mb-1'>Phone Number</label>
          <input
            name='phoneNumber'
            onChange={handleChange}
            className='inputForm'
          />
        </div>
        <div>
          <label className='block mb-1'>Email Address</label>
          <input name='email' onChange={handleChange} className='inputForm' />
        </div>
        <div>
          <label className='block mb-1'>Company Location</label>
          <input
            name='location'
            onChange={handleChange}
            className='inputForm'
          />
        </div>
        <div>
          <label className='block mb-1'>
            Business Type (e.g., e-commerce, service)
          </label>
          <input
            name='businessType'
            onChange={handleChange}
            className='inputForm'
          />
        </div>
        <div>
          <label className='block mb-1'>
            Preferred Language for the Website
          </label>
          <input
            name='language'
            onChange={handleChange}
            className='inputForm'
          />
        </div>

        {/* Textareas */}
        <div>
          <label className='block mb-1'>
            Please describe your business/organization
          </label>
          <textarea
            rows={3}
            name='description'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>
            What are your main products/services?
          </label>
          <input
            name='products'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>What makes your business unique?</label>
          <textarea
            rows={3}
            name='uniqueness'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>Primary goal of the website?</label>
          <textarea
            rows={3}
            name='goal'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>
            Short/long-term goals for this website?
          </label>
          <textarea
            rows={3}
            name='objectives'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>
            Who is your ideal customer or visitor?
          </label>
          <input
            name='idealCustomer'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>
            Specific demographics (e.g., age, gender, location)
          </label>
          <input
            name='demographics'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>Do you already have content?</label>
          <input
            name='hasContent'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>
            Do you need help writing or designing content?
          </label>
          <input
            name='needsHelp'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>
            Will the site be in one language or multiple?
          </label>
          <input
            name='siteLanguages'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>
            Do you have a logo, brand colors, and fonts?
          </label>
          <input
            name='hasBrandAssets'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>
            Any websites you like in terms of design?
          </label>
          <input
            name='inspirationLinks'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>
        <div>
          <label className='block mb-1'>
            Do you want a modern, classic, minimal, or vibrant style?
          </label>
          <input
            name='designStyle'
            onChange={handleChange}
            className='textareaForm'
          />
        </div>

        {/* Feature Checkboxes */}
        <div>
          <label className='block mb-1'>Features Needed:</label>
          {[
            'Blog',
            'Contact Form',
            'E-commerce/Shop',
            'Booking/Appointment System',
            'Image Gallery',
            'Video integration',
            'Newsletter Signup',
            'Multi-language Support',
            'Chat Support',
            'Login/Signup'
          ].map(feature => (
            <label key={feature} className='block'>
              <input
                type='checkbox'
                name='features'
                value={feature}
                onChange={handleChange}
              />{' '}
              {feature}
            </label>
          ))}
          <input
            name='otherFeature'
            placeholder='Other (please specify)'
            onChange={handleChange}
            className='inputForm mt-2'
          />
        </div>

        <div>
          {/* More Text Inputs */}
          <div>
            <label className='block mb-1'>Do you have a domain name?</label>
            <input
              name='domainName'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
          <div>
            <label className='block mb-1'>Do you have hosting?</label>
            <input
              name='hostingDetails'
              onChange={handleChange}
              className='inputForm'
            />
          </div>
        </div>
        <div>
          <label className='block mb-1'>Do you need SEO optimization?</label>
          <input name='needSEO' onChange={handleChange} className='inputForm' />
        </div>
        <div>
          <label className='block mb-1'>Do you need website maintenance?</label>
          <input
            name='needMaintenance'
            onChange={handleChange}
            className='inputForm'
          />
        </div>
        <div>
          <label className='block mb-1'>Estimated budget range</label>
          <input name='budget' onChange={handleChange} className='inputForm' />
        </div>
        <div>
          <label className='block mb-1'>
            When do you want the website completed?
          </label>
          <input
            name='deadline'
            type='date'
            onChange={handleChange}
            className='inputForm'
          />
        </div>

        {/* Notes and File Upload */}
        <div>
          <label className='block mb-1'>Other notes or requests</label>

          <textarea
            rows={3}
            name='otherNotes'
            type='text'
            onChange={handleChange}
            className='inputForm'
          />
        </div>
        <div>
          <label className='block mb-1'>Upload reference files</label>
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
