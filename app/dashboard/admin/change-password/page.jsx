import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import PasswordChange from '../../dashboardComponent/adminCmp/PasswordChange/PasswordChange'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Change Password'
        des='Change your password to ensure the security of your account. Follow the instructions to update your password safely.'
      />
      {/* change password */}
      <PasswordChange />
    </div>
  )
}
