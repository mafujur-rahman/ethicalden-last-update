import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import ClientChangePassword from '../../dashboardComponent/clientCmp/clientChangePassword/ClientChangePassword'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Change Your Password'
        des='Secure your account by updating your password regularly. Follow simple steps to create a strong, new password and keep your information safe.'
      />

      <ClientChangePassword />
    </div>
  )
}
