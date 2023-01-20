import React from 'react'
import offerLogo from "../../Components/Assets/Offer/offerLogo.svg";
import offerLogoColor from "../../Components/Assets/Offer/offerLogoColor.svg";
import arrows from "../../Components/Assets/Offer/arrows.svg";
import arrowsColor from "../../Components/Assets/Offer/arrowsColor.svg";
import {BsArrowRightShort} from "react-icons/bs"



const Card1 = ({id, title, description1, description2}) =>{

   return (
    <div className={title !== "Customer First" ? "w-[200px] mx-auto h-[320px] mt-8 mb-8 sm:w-[200px] sm:mt-8 sm:mb-8 sm:h-[320px]  md:w-[300px] md:mt-4 md:mb-4 md:h-[280px]  lg:w-[370px] lg:mt-8 lg:mb-8 lg:h-[320px] xl:w-[300px] xl:h-[314px] py-6 bg-white border-none rounded-lg" : "w-[200px] mx-auto h-[320px] mt-8 mb-8  sm:w-[200px] sm:mt-8 sm:mb-8 sm:h-[320px]  md:w-[300px] md:mt-4 md:mb-4 md:h-[280px] lg:w-[370px] lg:mt-8 lg:mb-8 lg:h-[320px] xl:w-[300px] xl:h-[314px] py-6 bg-gradient-to-r from-[#1C1D93] to-[#3A3B8F] border-none rounded-lg" }>
        <div className="flex flex-col items-center justify-between  w-[90%] mx-auto h-full">
            
            {title !== "Customer First" ?
            <div className=''>
                <div className='relative '>
                    <div className='w-[50.77px] h-[32.73px]'>
                        <img src={offerLogo} className='w-full ' alt="offer"/>
                    </div>
                    <div className='absolute w-[20px] top-[11px] left-4'>
                        <img src={arrows} className='w-full' alt="offer"/>
                    </div> 
                </div>
            </div> : 
            <div className=''>
                <div className='relative '>
                    <div className='w-[50.77px] h-[32.73px]'>
                        <img src={offerLogoColor} className='w-full ' alt="offer"/>
                    </div>
                    <div className='absolute w-[20px] top-[11px] left-4'>
                        <img src={arrowsColor} className='w-full' alt="offer"/>
                    </div> 
                </div>
            </div> 
            }
            
            <p className={title !== "Customer First" ? "justify-self-start w-full mt-3  text-[32px] text-center md:text-[20px] md:mt-[0.5em]  lg:text-[25px] xl:mt-[0.2em] xl:text-[32px]" : "justify-self-start w-full text-[32px] text-white mt-3 text-center md:text-[20px] md:mt-[0.5em] lg:text-[25px] xl:text-[32px] xl:mt-[0.2em]"}>{title}</p>

            <p className={title !== "Customer First" ? 'justify-self-start w-full text-center text-[14.7px] md:text-center md:text-[0.68rem] lg:text-center lg:text-[0.7rem] xl:text-start xl:text-[14.7px]' : 'justify-self-start w-full text-[14.7px] text-center text-white md:text-center md:text-[0.68rem] lg:text-center lg:text-[0.7rem] xl:text-start xl:text-[14.7px]'}>{description1}</p>
            <p className={title !== "Customer First" ? ' w-full text-[14.7px] mt-[9px] text-center  md:mt-[-18px] md:text-center md:text-[0.68rem] lg:text-center lg:text-[0.7rem] xl:xl:text-center xl:text-[14.7px]' : ' w-full text-[14.7px] text-white text-center mt-[9px] md:mt-[-18px] md:text-center md:text-[0.68rem]  lg:text-center lg:text-[0.7rem] xl:text-center xl:text-[14.7px]'}>{description2}</p>
            <div className="flex justify-center items-center">
                <p className={title !== "Customer First" ? "text-[16px] text-[#1C1D93] md:text-[14px] xl:text-[16px]" : "text-[16px] md:text-[14px] xl:text-[16px] text-white"}>Get Started</p>
                <p><BsArrowRightShort className={title !== "Customer First" ? 'text-[#1C1D93] text-[30px] md:[26px] xl:text-[30px]' : 'text-[#EFEFEF] text-[30px] md:[26px] xl:text-[30px]'}/></p>
            </div>
        </div> 
    </div>
   )
}

export default Card1;
