import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import ClientSendMessageCmp from '../../dashboardComponent/clientCmp/ClientSendMessageCmp/ClientSendMessageCmp'

export default function page () {
  return (
    <section className='section_space'>
      <Topbar
        title='Change Your Password'
        des='Update your account password to enhance security. Choose a strong, unique password to keep your information safe and protected.'
      />

      <ClientSendMessageCmp />
    </section>
  )
}
