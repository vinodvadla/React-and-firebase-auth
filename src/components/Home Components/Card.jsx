import React from 'react'
import './App.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import {BiMessageRounded} from 'react-icons/bi'
import {TiArrowForwardOutline} from 'react-icons/ti'

function Card(props) {
    return (
        <div className=' h-[400px] overflow-hidden bg-white flex flex-col rounded items-center p-2'>
            <div className='w-full h-[18%] flex justify-between items-center card-head px-7 py-4'>
                <div className='w-[40%] h-[100%] flex items-center justify-start gap-2'>
                    <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" className='w-[30%] h-full rounded' />
                    <div>
                        <h2 className='text-xs font-bold'>{props.userName}</h2>
                        <p className='text-gray-500 text-xs'>{props.smallName}</p>
                    </div>
                </div>
                <BsThreeDotsVertical size={20} />
            </div>
            <div className='px-7 py-2'>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, amet? <span className='text-pink-500'>Read More.</span></p>
            </div>
            <div className='h-[50%] w-[90%] rounded relative pb-5'>
                <img src={props.imgUrl} alt="main image" className=' rounded w-[100%] h-full' />
                <FiHeart size={20} className='text-white font-bold absolute top-4 right-4' />
            </div>
            <div className='w-full h-[20%] card-bottom '>
                <div className='w-[50%] h-full flex items-center justify-start px-7 gap-4'>
                    <div className='flex gap-2'>
                        <FiHeart size={20} />
                        <p className='text-sm font-semibold'>
                            9.5k
                        </p>
                    </div>
                    <div className='flex gap-2'>
                        <BiMessageRounded size={20} />
                        <p className='text-sm font-semibold'>
                            2.5k
                        </p>
                    </div>
                    <div className='flex gap-2'>
                        <TiArrowForwardOutline size={20} />
                        <p className='text-sm font-semibold'>
                            2.3k
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
