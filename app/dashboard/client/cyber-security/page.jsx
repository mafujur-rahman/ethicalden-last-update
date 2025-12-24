'use client'
import React, { Suspense } from 'react'
import Topbar from '../../dashboardComponent/topbar'
import CyberSecurityCmp from '../../dashboardComponent/clientCmp/cyberSecuirityCmp/CyberSecuirityCmp'

export default function page () {
  return (
    <div className='section_space '>
      <Topbar
        title='Cyber Security'
        des='Monitor and manage cybersecurity services to protect client data and digital assets. Respond to threats, update protocols, and ensure system integrity.'
      />
      <Suspense fallback={<div>Loading...</div>}>
        <CyberSecurityCmp />
      </Suspense>
    </div>
  )
}
