import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import AdminAcceptedListCmp from '../../dashboardComponent/adminCmp/AdminAcceptedListCmp/AdminAcceptedListCmp'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Accepted list'
        des='Browse all accepted service requests in one place. Stay updated and follow up with clients efficiently to ensure smooth project execution.'
      />
      {/* admin accepted list */}
      <AdminAcceptedListCmp/>
    </div>
  )
}
