'use client'
import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import ClientManageServiceOffer from '../../dashboardComponent/clientCmp/clientManageServiceOffer/ClientManageServiceOffer'

export default function page () {
  return (
    <section className='section_space'>
      <Topbar
        title='Client Manage Service Offer'
        des='Oversee and manage the services you offer to clients. Review requests, make updates, and ensure clear communication to maintain strong client relationships.'
      />

      <div>
        <ClientManageServiceOffer />
      </div>
    </section>
  )
}
