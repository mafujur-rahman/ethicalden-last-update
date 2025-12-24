import React from 'react'
import ClientMessageHistory from '../../dashboardComponent/clientCmp/ClientMessageHistory/ClientMessageHistory'
import Topbar from '../../dashboardComponent/topbar'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Message History'
        des='Access and review your past conversations to keep track of communications. Stay organized and respond promptly to maintain strong client relationships.'
      />

      {/* client message history */}
      <ClientMessageHistory />
    </div>
  )
}
