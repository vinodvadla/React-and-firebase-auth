import React from 'react'
import './App.css'
import RightCard from './RightCard'

function Profiles() {
  return (
    <div className='w-[20%] h-[98%] bg-white rounded flex flex-col gap-2 p-5 mr-4'>
      <div className='flex justify-start items-center gap-2 py-2'>
        <h1 className='text-xs font-bold Active'>Artists</h1>
        <h1 className='text-xs font-bold text-gray-400'>Photographers</h1>
      </div>
      <div className='w-full h-[90%]'>
          <RightCard/>
      </div>
    </div>
  )
}

export default Profiles
