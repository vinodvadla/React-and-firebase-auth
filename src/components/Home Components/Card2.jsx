import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

function Card2(props) {
  return (
    <div className='h-full roundded w-[200px] rounded p-2'>
      <img className="w-full h-[65%] rounded" src={props.image}/>
      <p className="text-xs mt-3 font-semibold">
        Lorem ipsum dolor sit amet.
    </p>
    <div className="flex justify-between">
    <h1 className="font-bold text-sm">$199.9</h1>
    <div  className="flex w-[40%] justify-center items-center">
       <AiOutlineStar size={25} className="text-yellow-600"/>
       <AiOutlineStar size={25} className="text-yellow-600"/>
       <AiOutlineStar size={25} className="text-yellow-600"/>
       <AiOutlineStar size={25} className="text-yellow-600"/>
       <AiOutlineStar size={25} className="text-yellow-600"/>
    </div>
    </div>
    </div>
    
  )
}

export default Card2

