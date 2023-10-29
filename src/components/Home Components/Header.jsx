import { BiSearch } from 'react-icons/bi'
import {TbAdjustmentsHorizontal} from 'react-icons/tb'

function Header() {
    return (
        <div className='w-[100%] h-[80px] bg-gray-200 px-10'>
            <header className='w-[100%] h-[100%] flex items-center justify-evenly'>
                <div className='w-[20%] h-[70%] bg-white rounded hover:cursor-pointer flex items-center justify-center'>
                    <h1 className='text-2xl font-bold'>LOGO</h1>
                </div>
                <div className='w-[46%] h-[70%] bg-white rounded flex'>
                    <div className='h-full w-[10%] flex items-center justify center'>
                        <BiSearch size={15} className='ml-5 cursor-pointer' />
                    </div>
                    <div className='h-full w-[70%] flex items-center justify center'>
                        <input type="text" placeholder='Search here....' className='w-full h-full outline-none border-none' />
                    </div>
                    <div className='h-full w-[20%] flex items-center justify center gap-3 cursor-pointer'>
                        <TbAdjustmentsHorizontal size={20}/>
                        <span className='text-sm font-semibold'>Filters</span>
                    </div>
                </div>
                <div className='w-[20%] h-[70%] bg-[#0EC297] rounded flex items-center justify-center hover:cursor-pointer'>
                    <h1 className='font-bold text-white'>Become a Seller</h1>
                </div>
            </header>
        </div>
    )
}

export default Header
