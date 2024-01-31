import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Sidebar />
      <main className="main">
        <div className='events'>
          イベント
        </div>
      </main>
    </div>
  )
}

export default page
