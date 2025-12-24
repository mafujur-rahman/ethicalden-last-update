'use client'
import React, { Suspense } from 'react'
import LogoDesingCmp from '../../dashboardComponent/clientCmp/logoDesingCmp/LogoDesingCmp'

export default function page () {
  return (
    <div className=''>
      <Suspense fallback={<div>Loading...</div>}>
        <LogoDesingCmp />
      </Suspense>
    </div>
  )
}
