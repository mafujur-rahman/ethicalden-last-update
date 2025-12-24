import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import CreateUserCmp from '../../dashboardComponent/adminCmp/CreateUserCmp/CreateUserCmp'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Create User'
        des='Create a new user account with specific roles and permissions. Ensure secure access and management of user accounts for efficient operations.'
      />

      {/* user create component */}
      <CreateUserCmp />
    </div>
  )
}
