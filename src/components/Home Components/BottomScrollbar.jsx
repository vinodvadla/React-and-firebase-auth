import React from 'react'
import Card2 from './Card2.jsx'

function BottomScrollbar() {
    return (
        <div className='w-[93%] h-[200px] mb-10 overflow-x-scroll flex scrollbar-none'>
            <Card2 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1axKwFl6pP_vd34qSmFmasqGzZfsHFjO9kgTo4rnU4eA6IB0" />
            <Card2 image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGhes0EpK7IjcuaTErWjPHV2xo5t4Mb2D68lyv_2L57Q_n1z6M" />
            <Card2 image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFP5LDR8JBo_gxEXNPT-bIO7aCDZaK2pWx0AgjkBEYkCXGlnBS" />
            <Card2 image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8108a4jtEEwiVvjLmxQWhIu5uo1-AiIUMkSlqXJlOzo7Kl2F9" />
        </div>
    )
}

export default BottomScrollbar
