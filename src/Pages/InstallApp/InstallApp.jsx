import React from 'react'
import phoneCir from "../../Components/Assets/InstallApp/phoneCir.svg";
import arrow from "../../Components/Assets/InstallApp/arrow.svg";
import join from "../../Components/Assets/InstallApp/join.svg";
import bitcoin from "../../Components/Assets/InstallApp/bitcoin.svg";
import naira from "../../Components/Assets/InstallApp/naira.svg";
import etherum from "../../Components/Assets/InstallApp/etherum.svg";
import topLeft from "../../Components/Assets/InstallApp/topL.svg";
import topRight from "../../Components/Assets/InstallApp/topR.svg";
import topBLeft from "../../Components/Assets/InstallApp/topB.svg";
import topBRight from "../../Components/Assets/InstallApp/topBr.svg";
import bottomLeft from "../../Components/Assets/InstallApp/bottomL.svg";
import bottomRight from "../../Components/Assets/InstallApp/bottomR.svg";
import { motion } from "framer-motion";

const installData = [ 
    {
      id : 1,
      description: "Launch www.jupitapp.com/signin from your mobile device or tablet",
    },
    {
      id : 2,
      description: "Select Add Page to Home Screen.",
    },
    {
      id : 3,
      description: "Navigate to the browser option on your android device or tap the share button on your IOS device.",
    },
    {
      id : 4,
      description: "Return to home menu to launch the application shortcut.",
    },

]

const InstallApp = () => {
  return (
    <motion.div
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      key={1}
    >
        <div className='flex flex-col  items-center justify-between'>
            <div>
                <img src={phoneCir}/>
            </div>
            <h1 className='text-[60px] md:text-[40px] xl:text-[60px]  font-bold text-[#090931]'>Install the App today</h1>
            <p className='text-center text-[#777777] w-[65%] mx-auto md:text-[17px] lg:text-[17px] xl:text-[24px] font-medium mt-8'>The Progressive Web App works just like your regular App, it's super easy and <br/> convenient. To instal, please follow the process below.</p>
            <div className='flex flex-row justify-between items-center flex-wrap mt-20 w-[75%]'>
            {installData.map(data => (
                <div className='flex justify-start items-center gap-4 mb-12 w-[47%]'>
                    <div className='flex'>
                        <div className=''>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                    <p className='w-[90%] text-[24px] md:text-[13px] lg:text-[18px]  xl:text-[24px] font-medium text-[#090931]'>{data.description}</p>
                </div>
                
            ))}
            </div>
            <div className='relative mt-12 w-[80%]'>
               <div className=''>
                  <img className='w-[100%]' src={join} alt="join"/>
               </div>
               <div className='absolute text-white text-center font-semibold top-16  text-[1.5em] left-72 md:top-6  md:text-[0.8em] md:left-40  lg:top-10  lg:text-[1em] lg:left-60 xl:top-16  xl:text-[1.5em] xl:left-72'>
                    Join our 3,620 and counting user today<br/>
                    and start transacting seamlessly
               </div>
               <button className='absolute ml-[60px] top-44 left-96 px-[24px] py-[12px] text-[1em] bg-[#F4A039] text-[#1C1F90] md:top-20 md:left-40 md:px-[20px] md:py-[10px] md:text-[1em] lg:top-24 lg:left-72 lg:px-[24px] lg:py-[12px] lg:text-[1em] xl:top-44 xl:left-96 xl:px-[24px] xl:py-[12px] xl:text-[1em]'>Get Started</button>
               <div className='absolute right-20 top-[-60px] md:right-[-8px] md:top-[-40px] lg:right-2 lg:top-[-50px] xl:right-12 xl:top-[-60px]'>
                  <img className='md:w-[55%] lg:w-[65%] xl:w-[80%]' src={bitcoin}/>
               </div>
               <div className='absolute right-[-65px] top-[80px] md:right-[-85px] md:top-[14px] lg:right-[-80px] lg:top-[14px] xl:right-[-65px] xl:top-[30px]'>
                  <img className='md:w-[55%] lg:w-[65%] xl:w-[95%]' src={naira}/>
               </div>
               <div className='absolute bottom-[-60px] left-6'>
                <div className='relative '>
                    <img className='md:w-[80%] lg:w-[85%] xl:w-[100%]'src={etherum}/>
                      <img className='absolute top-4 left-6 md:top-1 md:left-4  lg:top-2 lg:left-4  xl:top-4 xl:left-6' src={topLeft} alt=""/>
                      <img className='absolute top-4 left-14 md:top-1 md:left-12 lg:top-2 lg:left-12 xl:top-4 xl:left-14' src={topRight} alt=""/>
                      <img className='absolute top-[51px] left-6 md:top-[40px] md:left-4 lg:top-[40px] lg:left-4 xl:top-[51px] xl:left-6' src={topBLeft} alt=""/>
                      <img className='absolute top-[51px] left-14 md:top-[40px] md:left-12 lg:top-[40px] lg:left-12 xl:top-[51px] xl:left-14' src={topBRight} alt=""/>
                      <img className='absolute top-[68px] left-6 md:top-[53px] md:left-4 lg:top-[55px] lg:left-4 xl:top-[68px] xl:left-6' src={bottomLeft} alt=""/>
                      <img className='absolute top-[68px] left-14 md:top-[53px] md:left-12 lg:top-[55px] lg:left-12 xl:top-[68px] xl:left-14' src={bottomRight} alt=""/>
                </div>
               </div>
            </div>
        </div>
    </motion.div>
  )
}

export default InstallApp