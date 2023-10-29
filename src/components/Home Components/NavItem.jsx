import React from 'react'

function NavItem({ text, icon }) {
    return (
        <div className="w-full h-7 px-5 py-2 flex items-center justify-start gap-4 hover:bl-2 bl cursor-pointer">
            {icon}
            <h1 className='font-semibold text-gray-400 text-xs'>{text}</h1>
        </div>
    )
}

export default NavItem
