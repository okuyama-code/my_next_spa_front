import React from 'react'
import { FaLocationDot } from "react-icons/fa6";


const page = () => {
  return (
    <div className='text-gray-100 pt-[100px] pl-[10px] '>
      <div className='border border-gray-400 rounded-md p-3 pl-[30px]'>
        <h2 className='text-2xl font-bold '>Ruby on Rails開発したい人募集</h2>
        <p className='mt-3'>株式会社 okuyamaaaa</p>
        <div className='flex items-center'>
          <FaLocationDot className='mr-2' />
          <p>東京都 港区</p>
        </div>

        <div className='flex flex-wrap items-center mt-2'>
          <p className='border p-1 rounded-md bg-gray-500 mr-2 mb-3'>
            土日祝休み
          </p>
          <p className='border p-1 rounded-md bg-gray-500 mr-2 mb-3'>
            週2・3からOK
          </p>
          <p className='border p-1 rounded-md bg-gray-500 mr-2 mb-3'>
            週2・3からOK
          </p>
          <p className='border p-1 rounded-md bg-gray-500 mr-2 mb-3'>
            週2・3からOK
          </p>
          <p className='border p-1 rounded-md bg-gray-500 mr-2 mb-3'>
            週2・3からOK
          </p>
          <p className='border p-1 rounded-md bg-gray-500 mr-2 mb-3'>
            週2・3からOK
          </p>
          <p className='border p-1 rounded-md bg-gray-500 mr-2 mb-3'>
            週2・3からOK
          </p>
          <p className='border p-1 rounded-md bg-gray-500 mr-2 mb-3'>
            週2・3からOK
          </p>
        </div>
      </div>
    </div>
  )
}

export default page