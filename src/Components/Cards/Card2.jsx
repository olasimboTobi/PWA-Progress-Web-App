import React from 'react'
import offerLogo from "../../Components/Assets/Offer/offerLogo.svg";
import offerLogoColor from "../../Components/Assets/Offer/offerLogoColor.svg";
import arrows from "../../Components/Assets/Offer/arrows.svg";
import arrowsColor from "../../Components/Assets/Offer/arrowsColor.svg";
import circle from "../../Components/Assets/Services/circle.svg";
import fast from "../../Components/Assets/Services/fast.svg";
import secure1 from "../../Components/Assets/Services/secure1.svg";
import secure2 from "../../Components/Assets/Services/secure2.svg";
import buildImg1 from "../../Components/Assets/Services/buildCir1.svg";
import buildImg2 from "../../Components/Assets/Services/buildCir2.svg";
import star from "../../Components/Assets/Services/star.svg";
import line1 from "../../Components/Assets/Services/lineImg.svg";
import line3 from "../../Components/Assets/Services/line3.svg";
import {CgLoadbar} from "react-icons/cg";
import {BsArrowRightShort} from "react-icons/bs"

const Card1 = ({id, title, description }) =>{

   return (
    <div className="w-[42%]  mt-4 py-4  border-none rounded-lg">
        <div className="flex flex-col  items-center justify-start  w-[98%] mx-auto ">
            
            {title === "Fast Transaction" &&
            <div className=''>
                <div className='relative '>
                    <div className='w-[131px] h-[131px]'>
                        <img src={circle} className='w-full ' alt="offer"/>
                    </div>
                    <div className='absolute w-[37.59px] h-[51.67px] top-[35px] left-12'>
                        <img src={fast} className='w-full' alt="offer"/>
                    </div> 
                </div>
            </div>} 
            {title === "Secure Wallet" && 
            <div className=''>
                <div className='relative '>
                    <div className='w-[131px] h-[131px]'>
                        <img src={circle} className='w-full ' alt="offer"/>
                    </div>
                    <div className='absolute w-[37.59px] h-[51.67px] top-[49px] left-12'>
                        <img src={secure1} className='w-full' alt="offer"/>
                    </div> 
                    <div className='absolute w-[31.9px] h-[24.44px] top-[35px] left-12'>
                        <img src={secure2} className='w-full' alt="offer"/>
                    </div> 
                    <div className='absolute  top-[48px] right-[46px]'>
                        <CgLoadbar className='w-[5.9px] h-[30.44px] text-[15px] text-[#F2921D]'/>
                    </div> 
                </div>
            </div>}
            {title === "Built for you" && 
            <div className=''>
                <div className='relative '>
                    <div className='w-[131px] h-[131px]'>
                        <img src={circle} className='w-full ' alt="offer"/>
                    </div>
                    <div className='absolute w-[33.38px] h-[33.38px] top-[45px] left-12'>
                        <img src={buildImg1} className='w-full' alt="offer"/>
                    </div> 
                    <div className='absolute w-[33.38px] h-[33.38px] top-[28px] right-8'>
                        <img src={buildImg2} className='w-full' alt="offer"/>
                    </div> 
                </div>
            </div>}
            {title === "Customer First" && 
            <div className=''>
                <div className='relative '>
                    <div className='w-[131px] h-[131px]'>
                        <img src={circle} className='w-full ' alt="offer"/>
                    </div>
                    <div className='absolute w-[38.74px] h-[38.47px] top-[39px] left-12'>
                        <img src={star} className='w-full' alt="offer"/>
                    </div> 
                    <div className='absolute w-[3.88px]  top-[26px] left-12'>
                        <img src={line1} className='w-full' alt="offer"/>
                    </div> 
                    <div className='absolute w-[3.88px]  top-[26px] right-12'>
                        <img src={line1} className='w-full' alt="offer"/>
                    </div> 
                    <div className='absolute w-[3.74px] top-[30px] left-16'>
                        <img src={line3} className='w-full' alt="offer"/>
                    </div> 
                </div>
            </div>}
            
            <p className="justify-self-start w-full text-[32px] text-center text-[#090931] font-bold mt-8">{title}</p>
            <p className='justify-self-start w-full text-[24px] text-center font-medium text-[#777777] mt-8'>{description}</p>
        </div>
        
    </div>
   )
}

export default Card1;

