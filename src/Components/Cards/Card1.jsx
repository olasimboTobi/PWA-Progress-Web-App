import React from 'react'
import offerLogo from "../../Components/Assets/Offer/offerLogo.svg";
import arrows from "../../Components/Assets/Offer/arrows.svg";

const Card1 = (props) =>{
   return (
    <div className="w-[25%] h-[314px] py-6 bg-white border-none rounded-md">
        <div className="flex flex-col items-center  w-[90%] mx-auto bg-red-600 h-full">
            <div className='bg-[pink]'>
                <div className='w-[50.77px] h-[32.73px]'>
                    <img src={offerLogo} className='w-full ' alt="offer"/>
                </div>
                <div className='w-[24px] bg-[green]'>
                    <img src={arrows} className='w-full' alt="offer"/>
                </div> 
                
            </div>

        </div>
    </div>
   )
}

export default Card1;