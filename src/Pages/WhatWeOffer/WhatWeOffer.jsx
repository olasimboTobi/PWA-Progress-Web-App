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
    <div className="w-full bg-[#F5F5F5]  h-[465px] relative">
       <div  className="flex justify-between items-center w-[85%] mx-auto h-full ">
          {elementOffer}
          <div className='absolute left-[40px] bottom-3 w-[56.7px] h-[42.5px]'>
          <img src={star} className="w-full h-full"/>
          </div>
          <div className='absolute right-2 bottom-[-65px] w-[77.05px] h-[94.74px]'>
            <img src={star1} alt="star1"/>
        </div> 
       </div>
    </div>
  )
}

export default WhatWeOffer