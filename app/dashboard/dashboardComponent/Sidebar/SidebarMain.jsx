
import Sidebar from './sidebar'
import useAuthInfo from '../hooks/useAuthInfo'

export default function SidebarMain () {

  const { token, userType, isLoggedIn, isSuperAdmin } = useAuthInfo()

  return (
    <section>
      <Sidebar  userType = {userType} token = {token} />
    </section>
  )
}
