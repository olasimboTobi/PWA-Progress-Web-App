import React from 'react'
import offerLogo from "../../Components/Assets/Offer/offerLogo.svg";
import offerLogoColor from "../../Components/Assets/Offer/offerLogoColor.svg";
import arrows from "../../Components/Assets/Offer/arrows.svg";
import arrowsColor from "../../Components/Assets/Offer/arrowsColor.svg";
import {BsArrowRightShort} from "react-icons/bs"

const Card1 = ({id, title, description1, description2}) =>{

   return (
    <div className={title !== "Customer First" ? "w-[24%] h-[314px] py-6 bg-white border-none rounded-lg" : "w-[24%] h-[314px] py-6 bg-gradient-to-r from-[#1C1D93] to-[#3A3B8F] border-none rounded-lg" }>
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
            
            <p className={title !== "Customer First" ? "justify-self-start w-full text-[32px] text-center" : "justify-self-start w-full text-[32px] text-white text-center"}>{title}</p>

            <p className={title !== "Customer First" ? 'justify-self-start w-full text-[14.7px]' : 'justify-self-start w-full text-[14.7px] text-white'}>{description1}</p>
            <p className={title !== "Customer First" ? ' w-full text-[14.7px] text-center mt-[-18px]' : ' w-full text-[14.7px] text-white text-center mt-[-18px]'}>{description2}</p>
            <div className="flex justify-center items-center">
                <p className={title !== "Customer First" ? "text-[16px] text-[#1C1D93]" : "text-[16px] text-white"}>Get Started</p>
                <p><BsArrowRightShort className={title !== "Customer First" ? 'text-[#1C1D93] text-[30px]' : 'text-[#EFEFEF] text-[30px]'}/></p>
            </div>
        </div> 
    </div>
   )
}

export default Card1;

