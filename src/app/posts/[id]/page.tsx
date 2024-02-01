import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <Sidebar />
      <main className="main">
        <div className='postDetail'>
          <div className='flex'>
            <Image src="/assets/next.png" width={25} height={25} alt="" className='rounded-full mr-2'
             />
            <h3>@okuyama0121 (奥山)</h3>
          </div>
          <div className='my-2'>
            <h2 className='text-3xl font-bold'>REST APIについて</h2>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
