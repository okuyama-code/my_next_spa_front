import Sidebar from '@/components/Sidebar'
import React from 'react'
import '@/app/App.scss'
import EventsTimeLine from '@/components/EventsTimeLine'

const page = () => {
  return (
    <div>
      <Sidebar />
      <main className="main">
        <EventsTimeLine />
      </main>
    </div>
  )
}

export default page
