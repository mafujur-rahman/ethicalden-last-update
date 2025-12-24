'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuthInfo from '../../hooks/useAuthInfo'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SEOOptimization () {
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
    // formData.append('service', 'SEO Optimization')
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
          confirmButtonColor: '#ff4d4f',
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='text-white border border-black/10'
    >
      <label className='service-form-label'>
        Business Name:
        <input {...register('businessName')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        Website URL:
        <input {...register('websiteUrl')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        Contact Person:
        <input {...register('contactPerson')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        Email Address:
        <input
          type='email'
          {...register('email')}
          className='inputForm mt-1.5'
        />
      </label>

      <label className='service-form-label'>
        Phone Number:
        <input {...register('phone')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        Business Location(s):
        <input {...register('locations')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        Briefly describe your business:
        <textarea
          {...register('businessDescription')}
          className='inputForm mt-1.5'
          rows={3}
        />
      </label>

      <label className='service-form-label'>
        What products or services do you offer?
        <textarea
          {...register('productsServices')}
          className='inputForm mt-1.5'
        />
      </label>

      <label className='service-form-label'>
        What makes your business unique from competitors?
        <textarea
          {...register('uniqueSellingPoints')}
          className='inputForm mt-1.5'
        />
      </label>

      <label className='service-form-label'>
        What are your main objectives with SEO? (Check all that apply)
      </label>
      <div className='space-y-1 ml-2'>
        <label>
          <input
            type='checkbox'
            {...register('seoGoals')}
            value='Increase website traffic'
          />{' '}
          Increase website traffic
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            {...register('seoGoals')}
            value='Generate leads or sales'
          />{' '}
          Generate leads or sales
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            {...register('seoGoals')}
            value='Improve local visibility'
          />{' '}
          Improve local visibility
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            {...register('seoGoals')}
            value='Boost brand awareness'
          />{' '}
          Boost brand awareness
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            {...register('seoGoals')}
            value='Rank higher for specific keywords'
          />{' '}
          Rank higher for specific keywords
        </label>
        <br />
        <label>
          <input type='checkbox' {...register('seoGoals')} value='Other' />{' '}
          Other (please specify)
        </label>
      </div>

      <label className='service-form-label'>
        What are the top 3–5 keywords or phrases you want to rank for?
        <textarea {...register('topKeywords')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        Who is your ideal customer?
        <textarea {...register('idealCustomer')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        What geographic areas do you want to target?
        <textarea
          {...register('targetGeography')}
          className='inputForm mt-1.5'
        />
      </label>

      <label className='service-form-label'>
        Any specific demographics or industries?
        <textarea
          {...register('demographicsIndustries')}
          className='inputForm mt-1.5'
        />
      </label>

      <label className='service-form-label'>
        Is your website currently live and functional?
        <input {...register('siteLive')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        What CMS or platform is your website built on?
        <input {...register('cmsPlatform')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>Do you have a blog?</label>
      <div className='ml-2'>
        <label>
          <input type='radio' {...register('hasBlog')} value='Yes' /> Yes
        </label>
        <br />
        <label>
          <input type='radio' {...register('hasBlog')} value='No' /> No
        </label>
      </div>

      <label className='service-form-label'>
        Do you regularly publish content?
      </label>
      <div className='ml-2'>
        <label>
          <input type='radio' {...register('regularContent')} value='Yes' /> Yes
        </label>
        <br />
        <label>
          <input type='radio' {...register('regularContent')} value='No' /> No
        </label>
      </div>

      <label className='service-form-label'>
        Do you have internal content writers or need support?
        <input {...register('contentWriters')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>Google Tools & SEO History</label>
      <div className='space-y-1 ml-2'>
        <label>
          <input
            type='checkbox'
            {...register('googleSearchConsole')}
            value='Yes'
          />{' '}
          Google Search Console is set up
        </label>
        <br />
        <label>
          <input type='checkbox' {...register('googleAnalytics')} value='Yes' />{' '}
          Google Analytics is set up
        </label>
        <br />
        <label>
          <input type='checkbox' {...register('seoDoneBefore')} value='Yes' />{' '}
          SEO work done before
        </label>
      </div>

      <label className='service-form-label'>
        Any known technical issues (e.g., slow speed, broken links)?
        <textarea
          {...register('technicalIssues')}
          className='inputForm mt-1.5'
        />
      </label>

      <label className='service-form-label'>
        Do you currently rank for any keywords?
        <textarea
          {...register('currentRankings')}
          className='inputForm mt-1.5'
        />
      </label>

      <label className='service-form-label'>
        Estimated monthly traffic:
        <input {...register('monthlyTraffic')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        Are you satisfied with current traffic & rankings?
        <input
          {...register('trafficSatisfaction')}
          className='inputForm mt-1.5'
        />
      </label>

      <label className='service-form-label'>
        Who are your main competitors?
        <textarea {...register('competitors')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        Any websites you admire (SEO/content)?
        <textarea {...register('admiredSites')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        Estimated monthly SEO budget:
        <input {...register('seoBudget')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        Are you looking for ongoing SEO or one-time?
        <input {...register('seoType')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        When would you like to start?
        <input {...register('startDate')} className='inputForm mt-1.5' />
      </label>

      <label className='service-form-label'>
        Anything else we should know?
        <textarea
          {...register('additionalNotes')}
          className='inputForm mt-1.5'
        />
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
