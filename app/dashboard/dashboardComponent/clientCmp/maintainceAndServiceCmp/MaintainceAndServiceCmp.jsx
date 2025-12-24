'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import useAuthInfo from '../../hooks/useAuthInfo'
import { useRouter, useSearchParams } from 'next/navigation'

export default function MaintainceAndServiceCmp () {
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
    // formData.append('service', 'Maintenance & Support')
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
        
        console.log(id, typeof id)
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
      className='text-white border-black/10 space-y-6'
    >
      <label className='service-form-label'>
        Company Name
        <input {...register('companyName')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Contact Person Name
        <input {...register('contactPerson')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Email Address
        <input type='email' {...register('email')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Phone Number
        <input {...register('phone')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Preferred Contact Method
        <select {...register('contactMethod')} className='inputForm'>
          <option value='Email'>Email</option>
          <option value='Phone'>Phone</option>
        </select>
      </label>

      <label className='service-form-label'>
        What type of system or equipment requires maintenance?
        <textarea {...register('systemType')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Number of units/components needing support
        <input {...register('unitCount')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Is this a new or existing system?
        <select {...register('systemAge')} className='inputForm'>
          <option value='New'>New</option>
          <option value='Existing'>Existing</option>
        </select>
      </label>

      <label className='service-form-label'>
        Do you currently have a maintenance contract? (Yes/No)
        <input {...register('hasContract')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        If yes, contract provider and terms
        <textarea {...register('contractDetails')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Common issues or problems
        <textarea {...register('commonIssues')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Current maintenance frequency
        <select {...register('maintenanceFrequency')} className='inputForm'>
          <option className='bg-black' value='Daily'>
            Daily
          </option>
          <option className='bg-black' value='Weekly'>
            Weekly
          </option>
          <option className='bg-black' value='Monthly'>
            Monthly
          </option>
          <option className='bg-black' value='Quarterly'>
            Quarterly
          </option>
          <option className='bg-black' value='Annually'>
            Annually
          </option>
        </select>
      </label>

      <label className='service-form-label'>
        What type of maintenance service do you require?
      </label>
      <div className='ml-2 space-y-1'>
        <label>
          <input
            type='checkbox'
            {...register('maintenanceTypes')}
            value='Preventive Maintenance'
          />{' '}
          Preventive Maintenance
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            {...register('maintenanceTypes')}
            value='Corrective Maintenance'
          />{' '}
          Corrective Maintenance (repairs)
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            {...register('maintenanceTypes')}
            value='Predictive Maintenance'
          />{' '}
          Predictive Maintenance
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            {...register('maintenanceTypes')}
            value='Emergency Support'
          />{' '}
          Emergency Support
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            {...register('maintenanceTypes')}
            value='Software Updates & Patches'
          />{' '}
          Software Updates & Patches
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            {...register('maintenanceTypes')}
            value='Other'
          />{' '}
          Other (please specify)
        </label>
      </div>

      <label className='service-form-label'>
        Preferred maintenance schedule
        <select {...register('maintenanceSchedule')} className='inputForm'>
          <option className='bg-black' value='Fixed Intervals'>
            Fixed Intervals
          </option>
          <option className='bg-black' value='On-Demand'>
            On-demand / As-needed
          </option>
          <option className='bg-black' value='Other'>
            Other
          </option>
        </select>
      </label>

      <label className='service-form-label'>
        What level of support do you need?
        <select {...register('supportLevel')} className='inputForm'>
          <option className='bg-black' value='Basic Support'>
            Basic Support
          </option>
          <option className='bg-black' value='Extended Support'>
            Extended Support
          </option>
          <option className='bg-black' value='24/7 Support'>
            24/7 Support
          </option>
        </select>
      </label>

      <label className='service-form-label'>
        Preferred response time for support
        <select {...register('responseTime')} className='inputForm'>
          <option className='bg-black' value='1 Hour'>
            Within 1 hour
          </option>
          <option className='bg-black' value='4 Hours'>
            Within 4 hours
          </option>
          <option className='bg-black' value='24 Hours'>
            Within 24 hours
          </option>
          <option className='bg-black' value='Other'>
            Other
          </option>
        </select>
      </label>

      <label className='service-form-label'>
        Preferred issue reporting method
      </label>
      <div className='ml-2 space-y-1'>
        <label>
          <input type='checkbox' {...register('reportMethod')} value='Phone' />{' '}
          Phone
        </label>
        <br />
        <label>
          <input type='checkbox' {...register('reportMethod')} value='Email' />{' '}
          Email
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            {...register('reportMethod')}
            value='Ticket System'
          />{' '}
          Online Ticket System
        </label>
      </div>

      <label className='service-form-label'>
        Hardware or software platforms involved
        <textarea {...register('platforms')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Do you use any remote monitoring tools? (Yes/No)
        <input {...register('monitoringTools')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Any compliance or security requirements?
        <textarea {...register('securityRequirements')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Do you have a budget allocated?
        <input {...register('budget')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Preferred contract duration
        <select {...register('contractDuration')} className='inputForm '>
          <option className='bg-black' value='Monthly'>
            Monthly
          </option>
          <option className='bg-black' value='Quarterly'>
            Quarterly
          </option>
          <option className='bg-black' value='Annual'>
            Annual
          </option>
        </select>
      </label>

      <label className='service-form-label'>
        Specific challenges or concerns
        <textarea {...register('challenges')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Preferred vendors, brands, or standards
        <textarea {...register('preferredVendors')} className='inputForm' />
      </label>

      <label className='service-form-label'>
        Any other comments or requirements?
        <textarea {...register('otherComments')} className='inputForm' />
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
          className='mt-4 px-6 py-2 bg-[#a8ff57] text-black rounded-md inline-block cursor-pointer '
        >
          Submit
        </button>
      </div>
    </form>
  )
}
