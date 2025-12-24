'use client'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
// import { Menu, X, Home, FileText, CheckCircle , Plus  } from 'lucide-react'
import { GrMenu } from 'react-icons/gr'
import { RxCross1 } from 'react-icons/rx'
import { IoHomeOutline } from 'react-icons/io5'
import { MdNotificationsActive } from 'react-icons/md'
import { GrServices } from 'react-icons/gr'
import { GrBusinessService } from 'react-icons/gr'
import { MdPassword } from 'react-icons/md'
import { IoLogOutOutline } from 'react-icons/io5'
import { LuMessageSquareMore } from 'react-icons/lu'
import { BsClockHistory } from 'react-icons/bs'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { MdError } from 'react-icons/md'
import { FaUserPlus } from 'react-icons/fa6'
import { TbPasswordFingerprint } from 'react-icons/tb'
import { BiSolidOffer } from "react-icons/bi";


import { useState } from 'react'
import Image from 'next/image'
import logo from '@/app/dashboard/assets/ethicalden.png'
import { FaPlus } from 'react-icons/fa'
import Swal from 'sweetalert2'
const navLinks = [
  // {
  //   name: 'Dashboard',
  //   href: '/dashboard',
  //   icon: <IoHomeOutline size={18} />,
  //   user: 'SuperAdmin'
  // },
  // {
  //   name: 'Acc Approved Req',
  //   href: '/dashboard/admin/manage-requests',
  //   icon: <MdNotificationsActive size={18} />,
  //   user: 'SuperAdmin'
  // },
  // {
  //   name: 'Service Request',
  //   href: '/dashboard/admin/service-requests',
  //   icon: <GrServices size={18} />,
  //   user: 'SuperAdmin'
  // },
  {
    name: 'Create Service',
    href: '/dashboard/admin/create-user',
    icon: <BiSolidOffer size={18} />,
    user: 'SuperAdmin'
  },

  {
    name: 'All Services Offfer',
    href: '/dashboard/admin/service-offer-requests',
    icon: <GrServices size={18} />,
    user: 'SuperAdmin'
  },
  {
    name: 'Change Password',
    href: '/dashboard/admin/change-password',
    icon: <TbPasswordFingerprint size={18} />,
    user: 'SuperAdmin'
  },
  // {
  //   name: 'Accepted Services List',
  //   href: '/dashboard/admin/admin-accepted-list',
  //   icon: <IoCheckmarkDoneCircleSharp size={18} />,
  //   user: 'SuperAdmin'
  // },
  // {
  //   name: 'Rejected Services List',
  //   href: '/dashboard/admin/admin-rejected-list',
  //   icon: <MdError size={18} />,
  //   user: 'SuperAdmin'
  // },

  // {
  //   name: 'Message History',
  //   href: '/dashboard/admin/admin-message-history',
  //   icon: <BsClockHistory size={18} />,
  //   user: 'SuperAdmin'
  // },

  // {
  //   name: 'My Dashboard',
  //   href: '/dashboard/client/client-dashboard',
  //   icon: <IoHomeOutline size={18} />,
  //   user: 'Client'
  // },

  // {
  //   name: 'Manage Service Offer',
  //   href: '/dashboard/client/manage-service-offer',
  //   icon: <GrServices size={18} />,
  //   user: 'Client'
  // },

  // {
  //   name: 'Create Service Offer',
  //   href: '/dashboard/client/create-service-offer',
  //   icon: <FaPlus size={18} />,
  //   user: 'Client'
  // },
  {
    name: 'All Services',
    href: '/dashboard/client/all-services',
    icon: <GrBusinessService size={18} />,
    user: 'Client'
  },

  // {
  //   name: 'Send Message',
  //   href: '/dashboard/client/client-send-message',
  //   icon: <LuMessageSquareMore size={18} />,
  //   user: 'Client'
  // },
  {
    name: 'My Service List',
    href: '/dashboard/admin/service-offer-requests',
    icon: <BsClockHistory size={18} />,
    user: 'Client'
  },
  {
    name: 'Change Password',
    href: '/dashboard/client/client-change-password',
    icon: <MdPassword size={18} />,
    user: 'Client'
  }
]

export default function Sidebar ({ token, userType }) {
  console.log(token, userType)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const isActive = path => pathname === path

  const handleLogOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#111',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out'
    }).then(result => {
      if (result.isConfirmed) {
        localStorage.clear()

        Swal.fire({
          title: 'Success!',
          text: 'You have been logged out.',
          icon: 'success',
          confirmButtonText: 'Okay, got it!',
          confirmButtonColor: '#a8ff57',
          customClass: {
            confirmButton: 'swal-confirm-btn'
          }
        })
        router.push('/sign-in')
      }
    })
  }
  return (
    <>
      {/* Mobile toggle */}
      <div className='lg:hidden p-4 shadow-2xl xl:shadow flex justify-between items-center text-white bg-[#1a1a1a] '>
        <h2 className='text-lg font-semibold'>Dashboard</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? <RxCross1 size={22} /> : <GrMenu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          open ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static z-40 top-0 left-0 bg-[#222] w-[80vw] md:w-[50vw] lg:w-auto shadow-md p-5 transition-transform duration-300 ease-in-out h-screen`}
      >
        <div className='flex items-center mb-5 gap-x-2.5 border-b border-white/10 pb-5'>
          <Image
            src='https://ik.imagekit.io/ethicalden/logo/fav.png?updatedAt=1751979476770'
            height={500}
            width={500}
            alt=''
            className='size-10'
          />
          <h3 className='text-xl font-semibold text-white'>Ethical Den</h3>
        </div>

        <nav className='space-y-4'>
          {navLinks
            .filter(link => link.user === userType)
            .map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-black font-semibold bg-white'
                    : 'text-white/80 hover:bg-black/80'
                }`}
                onClick={() => setOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}

          <button
            className='bg-[#111] hover:bg-black hover:text-white transition text-white/80 font-medium py-3 pl-4 rounded-md mt-14 w-full text-left flex gap-x-1.5 items-center cursor-pointer'
            onClick={handleLogOut}
          >
            <span className='inline-block'>
              <IoLogOutOutline />
            </span>
            Log out
          </button>
        </nav>
      </div>
    </>
  )
}
