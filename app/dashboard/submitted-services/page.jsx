import React from 'react'
import Topbar from '../dashboardComponent/topbar'
import SubmittedServicesAllCmp from '../dashboardComponent/clientCmp/CompleteServices/SubmittedServicesAllCmp'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar></Topbar>
      <SubmittedServicesAllCmp />
    </div>
  )
}
