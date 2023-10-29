import { NavLink } from 'react-router-dom'
import { BiHomeAlt, BiWallet, BiUser, BiLogOutCircle } from 'react-icons/bi'
import { MdOutlineNotificationsNone, MdOutlineLocalPostOffice } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { CiStar } from 'react-icons/ci'
import NavItem from './NavItem'
function Nav() {
  return (
    <div className="w-[20%] h-[98%] bg-white rounded flex flex-col items-center justify-between pt-3 ml-4">
      <div className='flex flex-col w-full h-[80%] gap-2'>
        <NavItem text='Home' icon={<BiHomeAlt size={18} className=' text-gray-400 font-semibold text-xs' />} />
        <NavItem text='Notifications' icon={<MdOutlineNotificationsNone size={18} className=' text-gray-400 font-semibold text-xs' />} />
        <NavItem text='Shop' icon={<AiOutlineHeart size={18} className=' text-gray-400 font-semibold text-xs' />} />
        <NavItem text='Message' icon={<MdOutlineLocalPostOffice size={18} className=' text-gray-400 font-semibold text-xs' />} />
        <NavItem text='Wallet' icon={<BiWallet size={18} className=' text-gray-400 font-semibold text-xs' />} />
        <NavItem text='My Profile' icon={<BiUser size={18} className=' text-gray-400 font-semibold text-xs' />} />
        <NavItem text='Subscription' icon={<CiStar size={18} className=' text-gray-400 font-semibold text-xs' />} />
        <NavItem text='Subscription' icon={<CiStar size={18} className=' text-gray-400 font-semibold text-xs' />} />
      </div>
      <div className="w-full h-8 mb-4 px-5 py-2 flex items-center justify-start gap-4 hover:bl-2 bl cursor-pointer">
        <BiLogOutCircle size={18} className=' font-semibold text-xs text-blue-500' />
        <h1 className='font-semibold text-blue-400 text-xs'>Logout</h1>
      </div>
    </div>
  )
}

export default Nav
