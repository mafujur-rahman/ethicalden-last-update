import React from 'react'
import Topbar from '../dashboardComponent/topbar'
import ServiceOfferRequestAllCmp from '../dashboardComponent/adminCmp/ServiceOfferRequestsCmp/ServiceOfferRequestAllCmp'
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar></Topbar>

     

      <ServiceOfferRequestAllCmp></ServiceOfferRequestAllCmp>
    </div>
  )
}
