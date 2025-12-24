'use client'
import { FaPlus } from 'react-icons/fa'
import Topbar from './dashboardComponent/topbar'
import ServiceOfferRequestsCmp from './dashboardComponent/adminCmp/ServiceOfferRequestsCmp/ServiceOfferRequestsCmp'
import CreateUserCmp from './dashboardComponent/adminCmp/CreateUserCmp/CreateUserCmp'
import { useState } from 'react'
// import ServiceOfferRequestAllCmp from './dashboardComponent/adminCmp/ServiceOfferRequestsCmp/ServiceOfferRequestAllCmp'
import Link from 'next/link'
import useAuthInfo from './dashboardComponent/hooks/useAuthInfo'
import ClientAssignedServices from './dashboardComponent/clientCmp/ClientAssignedServices/ClientAssignedServices'
import SubmittedServicesCmp from './dashboardComponent/clientCmp/CompleteServices/SubmittedServicesCmp'

export default function DashboardHome () {
  const [createService, setCreateService] = useState(false)
  const { userType } = useAuthInfo()
  const isSuperAdmin = userType === 'SuperAdmin'
  const isClient = userType === 'Client'

  const handleCreateService = () => {
    setCreateService(true)
  }

  return (
    <div className='section_space'>
      <Topbar
        title='Dashboard Overview'
        des='Easily create, edit, and manage your market card offers in real-time.'
      />

      {isSuperAdmin && (
        <>
          {/* 🛡️ Super Admin Dashboard */}
          <section className='pb-10 md:pb-10 md:pt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[30%_68%] justify-between h-full gap-6'>
              <div
                onClick={handleCreateService}
                className='min-h-[20vh] rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-white/5 transition text-white/80'
              >
                <FaPlus className='text-[#a8ff57] text-2xl mb-4' />
                <p>Create Service</p>
              </div>

              <div className='bg-white/5 rounded-xl p-5'>
                <div className='flex justify-between items-center mb-4 text-white/80 border-b border-white/10 pb-4'>
                  <h2 className='font-medium'>Recent Services</h2>
                  <Link href='/dashboard/all-recent-services'>
                    <button className='border border-white/10 rounded-full py-1 px-4 text-sm hover:bg-[#a8ff57] hover:text-black transition-all cursor-pointer'>
                      Show All
                    </button>
                  </Link>
                </div>
                <ServiceOfferRequestsCmp />
              </div>
            </div>

            {/* All Services Table */}
            <div className='mt-10 md:mt-16'>
              {/* <ServiceOfferRequestAllCmp /> */}
              <SubmittedServicesCmp />
            </div>
          </section>

          {/* Create Service Modal */}
          {createService && (
            <section className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
              <CreateUserCmp closeModal={() => setCreateService(false)} />
            </section>
          )}
        </>
      )}

      {isClient && (
        <>
          <section>
            <div>
              <ClientAssignedServices />
            </div>

            <div className='py-20'>
              <SubmittedServicesCmp />
            </div>
          </section>
        </>
      )}
    </div>
  )
}
