import React from 'react'
import Topbar from '../dashboardComponent/topbar'
import ClientAssignedServicesAll from '../dashboardComponent/clientCmp/ClientAssignedServices/ClientAssignedServicesAll'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar></Topbar>
      <ClientAssignedServicesAll />
    </div>
  )
}
