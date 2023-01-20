import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import { Link,animateScroll as scroll,} from 'react-scroll'
import logo from "../Assets/Nav/logo.svg"


const Navbar = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/");
  };
  const pathChange = () => {
    navigate("/products");
  };
  const resourcesRoute = () => {
    navigate("/resources");
  };
  const ContactRoute = () => {
    navigate("/contact");
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <section className="w-[85%] mx-auto relative sm:w-[85%] md:w-[85%]  flex flex-wrap items-center  justify-between  py-3 bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start xl:w-auto  xl:flex xl:items-center xl:justify-start">
            <div className=" ">
              <img
                src={logo}
                alt="logo"
                className="w-24 h-16 cursor-pointer"
                onClick={routeChange}
              ></img>
            </div>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={
              "md:w-[100%] lg:w-[85%] lg:flex xl:w-[80%]  flex-grow items-center" +
              (navbarOpen ? " flex pl-4" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:w-[100%] gap-4 md:items-center md:justify-center whitespace-nowrap md:text-[1.5rem] lg:text-[1rem]  lg:w-[85%] lg:flex-row lg:justify-end  lg:items-center list-none  lg:ml-auto lg:gap-8 xl:gap-20 xl:w-[80%] xl:text-[1rem]">
              <li className="pt-4 cursor-pointer" onClick={routeChange}>
                About Us
              </li>

              <li className="pt-4 cursor-pointer" onClick={pathChange}>
                Product
              </li>
              <li className="pt-4 cursor-pointer" onClick={resourcesRoute}>
                Resources
              </li>
              <li className="pt-4 cursor-pointer" onClick={ContactRoute}>
                Contact
              </li>
             
              <li className="border-[1px] text-[0.9em] px-[1em] py-[0.5em] sm:py-[0.3em]  md:mt-4 md:mb-4 md:px-[2em] md:py-[0.5em] lg:text-[0.9em] lg:mb-0 lg:mt-0 lg:px-[1.5em] lg:py-[0.5em] xl:px-[1em] xl:py-[0.5em] border-[#8D8EC9] hover:bg-[#F4A03F]  rounded-md bg-white text-[#4747A7]">
              <Link
              to="contact"
              smooth={true}
              duration={700}
              className="cursor-pointer"
              >
              Sign In
            </Link>
              </li>
              <li className="border-[1px] px-[1em] py-[0.5em] sm:py-[0.3em] md:px-[1.7em] md:py-[0.5em] lg:px-[1.5em] lg:py-[0.5em] xl:px-[1em] xl:py-[0.5em]  border-[#8D8EC9]  rounded-md bg-white text-[0.9em] text-[#4747A7] hover:bg-[#F4A03F]">
              <Link
              to="contact"
              smooth={true}
              duration={700}
              className="cursor-pointer"
              >
              Register
            </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;













































// import React, {useState} from 'react'
// import {MenuIcon, XIcon} from '@heroicons/react/outline'
// import { Link,animateScroll as scroll,} from 'react-scroll'
// import logo from "../Assets/Nav/logo.svg"



// function Navbar() {
//   const [nav, setNav] = useState(false)
//   const handleClick = () => {setNav(!nav)}

//   const handleClose = () => setNav(!nav)
//   return (
//     <div className="w-[85%] mx-auto mt-[2em]">
//         <div className="sm:px-0  md:px-[0.5em] flex justify-between items-center w-full h-full">
//             <div className="flex justify-between sm:gap-0 md:gap-[1.5em] items-center md:w-[75%]">
//                 <div className="text-2xl font-bold sm-w-[30%]  md:text-4xl md:w-[20%]">
//                     <img className="" src={logo} alt="logo"/>
//                 </div>
//                 <ul className="hidden md:flex justify-between  w-[65%] mx-auto items-center text-[1rem] font-normal">
//                     <li><Link  to="about" smooth={true} duration={500} className="cursor-pointer">About Us</Link></li>
//                     <li><Link  to="product" smooth={true} offset={-200} duration={500} className="cursor-pointer">Product</Link></li>
//                     <li><Link  to="resources" smooth={true} offset={-50} duration={500} className="cursor-pointer">Resources</Link></li>
//                     <li><Link  to="contact" smooth={true} offset={-100} duration={500} className="cursor-pointer">Contact</Link></li>
//                 </ul>
//             </div>
//             <div className="hidden md:flex justify-between items-center  w-[15%] md:w-[25%] xl:w-[15%]">
//                 <button className="border-[1px] px-[1em] py-[0.5em] md:px-[0.5em] md:py-[0.5em] lg:px-[1.5em] lg:py-[0.5em] xl:px-[1em] xl:py-[0.5em] border-[#8D8EC9]  rounded-md bg-white text-[#4747A7] text-[0.9em] ">Sign In</button>
//                 <button className="border-[1px] px-[1em] py-[0.5em] md:px-[0.5em] md:py-[0.5em] lg:px-[1.5em] lg:py-[0.5em] xl:px-[1em] xl:py-[0.5em]  border-[#8D8EC9]  rounded-md bg-white text-[0.9em] text-[#4747A7] bg-[#F4A03F]">Register</button>
//             </div>
//             <div className="md:hidden sm-[65%]" onClick={handleClick}>
//                 {!nav ? <MenuIcon className="w-8"/> : < XIcon className="w-8"/>}
                
//             </div>
//         </div>
//         <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-[84%] px-8 mt-4 "}>
//             <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="about" smooth={true} duration={500} className="cursor-pointer">About Us</Link></li>
//             <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="product" smooth={true} offset={-200} duration={500} className="cursor-pointer">Product</Link></li>
//             <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="resources" smooth={true} offset={-50} duration={500} className="cursor-pointer">Resources</Link></li>
//             <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="contact" smooth={true} offset={-100} duration={500} className="cursor-pointer">Contact</Link></li>
//             <div className="flex flex-col my-4">
//                 <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
//                 <button className="px-8 py-3 ">Register</button>
//             </div>
//         </ul>    
//     </div>
//   )
// }

// export default Navbar