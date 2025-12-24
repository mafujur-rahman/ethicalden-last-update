import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import AdminMessageHistoryCmp from '../../dashboardComponent/adminCmp/AdminMessageHistory/AdminMessageHistoryCmp'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Message History'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />

      {/* admin message history */}
      <AdminMessageHistoryCmp />
    </div>
  )
}
