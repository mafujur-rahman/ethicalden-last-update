'use client'
import React, { Suspense } from 'react'
import BrandingCmp from '../../dashboardComponent/clientCmp/brandingCmp/BrandingCmp'
import Topbar from '../../dashboardComponent/topbar'

export default function page () {
  return (
    <div className='section_space '>
      <Topbar
        title='Branding Service'
        des='Manage and refine your branding service requests. Provide timely feedback, ensure consistent brand communication, and maintain a strong visual identity for your clients.'
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BrandingCmp />
      </Suspense>
    </div>
  )
}
