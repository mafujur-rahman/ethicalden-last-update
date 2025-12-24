import React from 'react'
import Topbar from '../../dashboardComponent/topbar'

export default function page () {
  return (
    <section className='section_space'>
      <Topbar
        title='Client Dashboard Overview'
        des='Get a comprehensive snapshot of your client activities. Monitor requests, track progress, and stay organized to deliver exceptional service.'
      />

      <h2 className='d_heading mb-10 text-[#a8ff57]'>
        Manage Service Requests
      </h2>
    </section>
  )
}
