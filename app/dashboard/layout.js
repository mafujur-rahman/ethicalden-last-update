"use client"
import './dashboard.css'
import useAuthRedirect from './dashboardComponent/hooks/useAuthRedirect'




export default function DashboardLayout ({ children }) {
  useAuthRedirect()
  return (
    <html lang='en' data-arp=''>
      <body cz-shortcut-listen='true' className='bg-[#131313]'>
        {/* className='lg:grid lg:grid-cols-[20%_80%] 2xl:grid-cols-[15%_85%] justify-between  overflow-hidden' */}
        <div className='max-w-7xl mx-auto ' >
          {/* <SidebarMain /> */}
          <main >{children}</main>
        </div>
      </body>
    </html>
  )
}
