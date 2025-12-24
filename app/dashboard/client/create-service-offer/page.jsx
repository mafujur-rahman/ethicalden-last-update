import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import ClientCreateServiceOffer from '../../dashboardComponent/clientCmp/clientCreateServiceOffer/ClientCreateServiceOffer'

export default function page () {
  return (
    <section className='section_space'>
      <Topbar
        title='Client Service Overview'
        des='View and manage all client service activities in one place. Monitor requests, track responses, and ensure consistent, high-quality support.'
      />

      {/* Client Create Service Offer */}
      <div>
        <ClientCreateServiceOffer />
      </div>
    </section>
  )
}
