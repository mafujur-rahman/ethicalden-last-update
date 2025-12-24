'use client'
import React, { Suspense } from 'react'
import Topbar from '../../dashboardComponent/topbar'
import SoftwareDevelopmentCmp from '../../dashboardComponent/clientCmp/softwareDevelopmentCmp/SoftwareDevelopmentCmp'

export default function page () {
  return (
    <div className='section_space '>
      <Topbar
        title='Software Development'
        des='Manage software development tasks and client requests efficiently. Track progress, implement updates, and ensure high-quality, timely delivery of solutions.'
      />

      <Suspense fallback={<div>Loading...</div>}>
        <SoftwareDevelopmentCmp />
      </Suspense>
    </div>
  )
}
