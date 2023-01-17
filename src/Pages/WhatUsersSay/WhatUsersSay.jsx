import React from 'react'
import { motion } from "framer-motion";
import Card3 from '../../Components/Cards/Card3';
import photo from "../../Components/Assets/User/photo.jpg";


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
    // {
    //   id : 3,
    //   name: "Tobi Jupit",
    //   title:"All your crypto in one place",
    //   photo:photo,
    //   description: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
      
    // },
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
    
  ];

const WhatUsersSay = () => {

  const elementUser = UserData.map(data => (
    <Card3
       key={data.id}
       id={data.id}
       title={data.title}
       name={data.name}
       photo={data.photo}
       description={data.description}
    />
  ))
  return (
    <motion.div
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      key={1}
    >
        <div className='w-full h-[743px] pt-16 text-center bg-[#1C1D93]'>
            <h2 className='text-white text-[32px] mb-8'>See what our users'<br/>say about us</h2>
            <p className='text-[14px] text-white opacity-30 mb-8'>This testimoniesand much more; join us so we can hear <br/>your testimonies too</p>
            <div className='flex w-[65%] mx-auto justify-between items-center  h-[40vh]'>
                {elementUser}
            </div>
        </div>
    </motion.div>
  )
}

export default WhatUsersSay