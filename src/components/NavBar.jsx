import React, { useState, useEffect } from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants'


function NavBar() {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        console.log(navLinks.length);
    })
    return (
        <div>
            <nav className='w-full flex py-6 justify-between items-center navbar'>
                <img src={`${logo}`} alt="hoobank" className='w-[124px] h-[32px]' />
                {/* navlink become hidden when screensize become small */}
                <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                    {navLinks.map((data, index) => (
                        <li key={data.id} className={`font-normal font-poppins text-white
                 cursor-pointer mr-10 text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                            <a href={`#${data.id}`}>{data.title}</a></li>
                    ))}
                </ul>
                {/* responsive section*/}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={!toggle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain'
                        onClick={() => { setToggle(prev => !prev) }} />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-10 min-w-[140px] rounded-xl sidebar`}>
                        <ul className='list-none flex flex-col justify-end items-center flex-1'>
                            {navLinks.map((data, index) => (
                                <li key={data.id} className={`font-normal font-poppins text-white
                 cursor-pointer mr-10 text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4  '}`}>
                                    <a href={`#${data.id}`}>{data.title}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
