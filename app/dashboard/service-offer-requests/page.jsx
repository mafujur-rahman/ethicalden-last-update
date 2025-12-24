import React from 'react'
import ServiceOfferRequestsCmp from '../dashboardComponent/adminCmp/ServiceOfferRequestsCmp/ServiceOfferRequestsCmp'
import Topbar from '../dashboardComponent/topbar'




export default function page () {
  return (
    <div className='section_space overflow-hidden'>
      <Topbar
        title='Service Offer Requests'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <ServiceOfferRequestsCmp />
    </div>
  )
}
