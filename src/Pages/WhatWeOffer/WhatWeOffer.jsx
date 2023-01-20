import React from 'react'
import Card1 from '../../Components/Cards/Card1'
import star from '../../Components/Assets/Offer/star.svg'
import star1 from "../../Components/Assets/Services/star1.svg";


const offerData = [
  {
    id : 1,
    title: "Fast Transaction",
    description1: "Invest in crypto anytime, anywhere",
    description2: "with our safe, secure, and easy to use online platform",
  },
  {
    id : 2,
    title: "Secure Wallet",
    description1: "Invest in crypto anytime, anywhere",
    description2: "with our safe, secure, and easy to use online platform",
  },
  {
    id : 3,
    title: "Built for You",
    description1: "Invest in crypto anytime, anywhere",
    description2: "with our safe, secure, and easy to use online platform",
  },
  {
    id : 4,
    title: "Customer First",
    description1: "Invest in crypto anytime, anywhere",
    description2: "with our safe, secure, and easy to use online platform",
  },
  
];

const WhatWeOffer = () => {

  const elementOffer = offerData.map(data => (
    <Card1 
      key={data.id}
      id={data.id}
      title={data.title}
      description1={data.description1}
      description2={data.description2}
      />
  ))

  return (
    <div className="flex w-full bg-[#F5F5F5] items-center  min-h-[465px] relative">
       <div  className="flex flex-wrap justify-between items-center flex-wrap  md:w-[85%] lg:w-[85%]  mx-auto h-full ">
          {elementOffer}
          <div className='absolute left-[3.8%] bottom-2 w-[56.7px] h-[42.5px] lg:left-[1%] lg:bottom-3 lg:w-[56.7px] lg:h-[42.5px] xl:left-[3.8%] xl:bottom-3 xl:w-[56.7px] xl:h-[42.5px]'>
          <img src={star} className="w-full h-full"/>
          </div>
          <div className='absolute right-2 bottom-[-5%] w-[77.05px] h-[94.74px] lg:right-2 lg:bottom-[-7.9%] lg:w-[77.05px] lg:h-[94.74px] xl:right-2 xl:bottom-[-13.9%] xl:w-[77.05px] xl:h-[94.74px]'>
            <img src={star1} alt="star1"/>
        </div> 
       </div>
    </div>
  )
}

export default WhatWeOffer


// sm:flex sm:flex-col sm:justify-center sm:items-between sm:gap-8 sm:w-[85%] sm:auto  sm:mt-8 sm:mb-8 sm:flex-wrap