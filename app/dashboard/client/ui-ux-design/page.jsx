'use client'
import React, { Suspense } from 'react'
import Topbar from '../../dashboardComponent/topbar'
import UiuxCmp from '../../dashboardComponent/clientCmp/uiUxCmp/UiuxCmp'

export default function page () {
  return (
    <div className='section_space '>
      {' '}
      <Topbar
        title='UI/UX Design'
        des='Manage design requests and iterations to create intuitive and engaging user experiences. Collaborate closely, update designs, and ensure seamless communication throughout the process.'
      />
      <Suspense fallback={<div>Loading...</div>}>
        <UiuxCmp />
      </Suspense>
    </div>
  )
}
