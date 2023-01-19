import React,{useState} from 'react'
import { motion } from "framer-motion";
import Card3 from '../../Components/Cards/Card3';
import photo from "../../Components/Assets/User/photo.jpg";
// import bitcoin from "../../Components/Assets/User/bitcoin.jpg";
import star4 from "../../Components/Assets/User/star4.svg";
import bgImg from "../../Components/Assets/Services/backG.svg";
import offerLogo from "../../Components/Assets/Offer/offerLogoColor.svg";

import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"


const UserData = [ 
    {
      id : 1,
      name: "Femi Jupit",
      title:"All your crypto in one place",
      photo:photo,
      description: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
      
    },
    {
      id : 2,
      name: "Eji Jupit",
      title:"All your crypto in one place",
      photo:photo,
      description: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
      
    },
    {
      id : 3,
      name: "Tobi Jupit",
      title:"All your crypto in one place",
      photo:photo,
      description: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
      
    },
    // {
    //   id : 4,
    //   name: "Sade Jupit",
    //   title:"All your crypto in one place",
    //   photo:photo,
    //   description: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
      
    // },
    // {
    //   id : 5,
    //   name: "Oke Jupit",
    //   title:"All your crypto in one place",
    //   photo:photo,
    //   description: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
      
    // },
    // {
    //   id : 6,
    //   name: "Ajayi Jupit",
    //   title:"All your crypto in one place",
    //   photo:photo,
    //   description: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
      
    // },
    // {
    //   id : 7,
    //   name: "Tayo Jupit",
    //   title:"All your crypto in one place",
    //   photo:photo,
    //   description: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
      
    // },
    
  ];

const WhatUsersSay = () => {

  const[currentIndex, setCurrentIndex] = useState(0)

  const info = UserData.slice(currentIndex,currentIndex + 2)
  console.log(info)

  const prevSlide = () => {
    if(UserData.length){
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? UserData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }else if(UserData.length <= 0){
        setCurrentIndex(0) 
    }
    
  }
  const nextSlide = (e) => {
    if(UserData.length){
        const isLastSlide = currentIndex === UserData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }else if(UserData.length <= 0){
        setCurrentIndex(0) 
    }
  }

  const goToSlide =(slideIndex)=>{
    setCurrentIndex(slideIndex)
  }


//   const elementUser = UserData.map(data => (
//     <Card3
//        key={data.id}
//        id={data.id}
//        title={data.title}
//        name={data.name}
//        photo={data.photo}
//        description={data.description}
//     />
//   ))
  return (
    <motion.div
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      key={1}
    >
        <div className='w-full h-[743px] pt-16 text-center bg-[#1C1D93] relative group'>
            <div className="w-full h-[743px] absolute">
                <img className="w-full h-full object-cover " src={bgImg} alt="/" />
            </div>
            {/* <h2 className='text-white text-[32px] mb-8'>See what our users'<br/>say about us</h2>
            <p className='text-[14px] text-white opacity-30 mb-24'>These testimonies and much more; join us so we can hear <br/>your testimonies too</p> */}
            {/* <div className='flex w-[65%] mx-auto justify-between items-center'> */}
                {/* {elementUser} */}
                {/* {info.map(data => (
                    <div className='flex flex-col items-center bg-white px-8 justify-between py-4 w-[48%] border-[1px]  rounded-md'>
                      <div className='w-[50px] h-[50px] rounded-full'>
                      <img src={data.photo} className="w-[100%] h-[100%] rounded-full" alt=""/>
                      </div>
                      <p className='text-[#1C1D93] text-[16px] font-normal'>{data.name}</p>
                      <h2 className='text-[#FFA000] text-[24px] font-black'>{data.title}</h2>
                      <p className='text-[#3D3D3D] text-[16px] font-normal'>{data.description}</p>
                    </div>
                ))} */}
            {/* </div> */}
            {/* <div className="hidden group-hover:block absolute top-[60%] translate-x-0 translate-y-[-50%] left-16 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
               <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            <div className="hidden group-hover:block absolute top-[60%] translate-x-0 translate-y-[-50%] right-16 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
               <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div> */}
            {/* <div className="flex top-8 justify-center py-12">
                 {UserData.map((slide,slideIndex)=>(
                    <div 
                        key={slideIndex}
                        onClick={()=> goToSlide(slideIndex)}
                        className="text-2xl cursor-pointer text-[#FFA000]">
                        <RxDotFilled/>
                    </div>
                 ))}
            </div>
            <div className='absolute right-48 top-44'>
                <img src={star4} alt="star"/>
            </div>
            <div className='absolute w-[50px] h-[50px]  right-28 top-96'>
                <img src={offerLogo} className="bg-[#1C1D93]" alt="star"/>
            </div> */}
        </div>
    </motion.div>
  )
}

export default WhatUsersSay