import React from 'react'
import Card from './Card'
import BottomScrollbar from './BottomScrollbar'

function Stories() {
  return (
    <div className='w-[50%] h-[95%] overflow-hidden rounded flex  overflow-y-scroll justify-evenly items-center flex-wrap gap-6 scrollbar-none'>
      <Card imgUrl="https://images.pexels.com/photos/2045248/pexels-photo-2045248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" userName="Lara Leones" smallName="@laraleones"/>
      <Card imgUrl="https://www.mujeresaseguir.com/siteresources/files/1177/29.webp" userName="Thomas J." smallName="@thecustomcreator"/>
      <BottomScrollbar/>
    </div>
  )
}

export default Stories
