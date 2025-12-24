
import React, { Suspense } from 'react'
import Topbar from '../../dashboardComponent/topbar'
import MaintainceAndServiceCmp from '../../dashboardComponent/clientCmp/maintainceAndServiceCmp/MaintainceAndServiceCmp'

export default function page () {
  return (
    <div className='section_space '>
      <Topbar
        title='Maintenance Support'
        des='Track and manage maintenance support requests to ensure systems run smoothly. Respond promptly, schedule updates, and maintain operational efficiency.'
      />
      <Suspense fallback={<div>Loading...</div>}>
        <MaintainceAndServiceCmp />
      </Suspense>
    </div>
  )
}
