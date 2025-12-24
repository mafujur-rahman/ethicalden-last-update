'use client'
import React, { Suspense } from 'react'
import Topbar from '../../dashboardComponent/topbar'
import AppDevelopmentCmp from '../../dashboardComponent/appDevelopment/AppDevelopmentCmp'

export default function page () {
  return (
    <div className='section_space '>
      <Topbar
        title='App Development'
        des='Manage app development projects from start to finish. Coordinate updates, address client feedback, and ensure timely delivery of high-quality applications.'
      />

      <Suspense fallback={<div>Loading...</div>}>
        <AppDevelopmentCmp />
      </Suspense>
    </div>
  )
}
