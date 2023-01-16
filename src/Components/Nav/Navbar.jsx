import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { Link,animateScroll as scroll,} from 'react-scroll'
import logo from "../Assets/Nav/logo.svg"



function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => {setNav(!nav)}

  const handleClose = () => setNav(!nav)
  return (
    <div className="w-[85%] mx-auto mt-4 ">
        <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex justify-between gap-6 items-center">
                <div className="text-3xl font-bold  sm:text-4xl w-[20%]">
                    <img src={logo} alt="logo"/>
                </div>
                <ul className="hidden md:flex justify-between  ml-32 w-[65%] text-[16px] font-normal">
                    <li><Link  to="about" smooth={true} duration={500} className="cursor-pointer">About Us</Link></li>
                    <li><Link  to="product" smooth={true} offset={-200} duration={500} className="cursor-pointer">Product</Link></li>
                    <li><Link  to="resources" smooth={true} offset={-50} duration={500} className="cursor-pointer">Resources</Link></li>
                    <li><Link  to="contact" smooth={true} offset={-100} duration={500} className="cursor-pointer">Contact</Link></li>
                </ul>
            </div>
            <div className="hidden md:flex justify-between  w-[15%]">
                <button className="border-[1px] px-4 py-2 border-[#8D8EC9]  rounded-md bg-white text-[#4747A7] text-[0.9em]">Sign In</button>
                <button className="border-[1px] px-4 py-2 border-[#8D8EC9]  rounded-md bg-white text-[0.9em] text-[#4747A7] bg-[#F4A03F]">Register</button>
            </div>
            <div className="md:hidden mr-4" onClick={handleClick}>
                {!nav ? <MenuIcon className="w-5"/> : < XIcon className="w-5"/>}
                
            </div>
        </div>
        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
            <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="about" smooth={true} duration={500} className="cursor-pointer">About Us</Link></li>
            <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="product" smooth={true} offset={-200} duration={500} className="cursor-pointer">Product</Link></li>
            <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="resources" smooth={true} offset={-50} duration={500} className="cursor-pointer">Resources</Link></li>
            <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="contact" smooth={true} offset={-100} duration={500} className="cursor-pointer">Contact</Link></li>
            <div className="flex flex-col my-4">
                <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
                <button className="px-8 py-3 ">Register</button>
            </div>
        </ul>    
    </div>
  )
}

export default Navbar