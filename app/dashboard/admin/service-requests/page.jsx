import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import AdminServiceRequest from '../../dashboardComponent/adminCmp/adminServiceRequest/AdminServiceRequest'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Service Request'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <h2 className='d_heading mb-10 text-[#a8ff57]'>
         Service Requests
      </h2>
      <div>
        <AdminServiceRequest />
      </div>
    </div>
  )
}
