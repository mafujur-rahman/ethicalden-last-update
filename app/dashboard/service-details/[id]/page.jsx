import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import ServiceDetailsCmp from '../../dashboardComponent/adminCmp/serviceDetails/ServiceDetailsCmp'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar />
      <ServiceDetailsCmp/>
    </div>
  )
}
