import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import '../App.css'
export default function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }


    return (
        <div className=' w-[100%] bg-[#232325] fixed z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto text-l px-4 h-24'>
            <h1 className='text-3xl font-bold primary-color ml-4'>KULER</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><a href="#Home">Home</a></li>
                <li className='p-5'><a href="#About">About</a></li>
                <li className='p-5'><a href="#Work">Work</a></li>
                <li className='p-5'><a href="#Experience">Experience</a></li>
                <li className='p-5'><a href="#Contact">Contact</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>


            <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500'
                                             : "fixed left-[-100%]"}>
                <h1 className='text-3xl primary-color m-4'>KULER</h1>
                <ul className='text-2xl p-8'>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Work">Work</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
