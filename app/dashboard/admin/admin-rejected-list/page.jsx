import AdminRejectedListCmp from '../../dashboardComponent/adminCmp/AdminRejectedListCmp/AdminRejectedListCmp'
import Topbar from '../../dashboardComponent/topbar'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Rejected list'
        des='View all service requests that have been declined. Keep track of rejected submissions and manage client communication with clarity and consistency.'
      />

      {/* admin accepted list */}
      <AdminRejectedListCmp />
    </div>
  )
}
