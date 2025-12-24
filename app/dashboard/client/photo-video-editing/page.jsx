'use client'
import React, { Suspense } from 'react'
import Topbar from '../../dashboardComponent/topbar'
import PhotoAndVideoEditng from '../../dashboardComponent/clientCmp/PhotoAndVideoEditng/PhotoAndVideoEditng'

export default function page () {
  return (
    <div className='section_space '>
      <Topbar
        title='Photo and Video Editing'
        des='Manage editing requests with precision and creativity. Review client submissions, apply visual enhancements, and deliver polished photo and video content on time.'
      />

      {/* photo and video editing format */}
      <Suspense fallback={<div>Loading...</div>}>
        <PhotoAndVideoEditng />
      </Suspense>
    </div>
  )
}
