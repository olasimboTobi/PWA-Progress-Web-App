import React from 'react'
import Card2 from '../../Components/Cards/Card2'
import mob from "../../Components/Assets/Services/mob.svg";
import phone from "../../Components/Assets/Services/phone.svg";
import { motion } from "framer-motion";



const offerData = [
    {
      id : 1,
      title: "Fast Transaction",
      description: "Fast and easy-to-use trading services in one integrated platform.",
      
    },
    {
      id : 2,
      title: "Secure Wallet",
      description: "You can rest easy knowing that your asset is safe with us anytime.",
      
    },
    {
      id : 3,
      title: "Built for you",
      description: "We want anyone & everyone in need for cryptocurrency gets prompt and clear access to their transactions.",
     
    },
    {
      id : 4,
      title: "Customer First",
      description: "We pride ourselves on providing excellent customer service.",
      
    },
    
  ];

const Services = () => {

    const elementOffer = offerData.map(data => (
        <Card2  
          key={data.id}
          id={data.id}
          title={data.title}
          description={data.description}
          
          />
      ))
  return (
    <motion.div
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      key={1}
    >
        <div className="w-[85%] mx-auto text-center ">
            <h1 className="text-[30px]  md:text[40px] xl:text-[60px] mt-8 text-[#090931] font-bold">Best services that works <br/> for you</h1>
            <p className="w-[75%] mx-auto text-[12px]  md:text-[14px] lg:text-[16px] xl:text-[24px] font-medium text-[#777777] mt-6">We provide a wide range of services to our users. Take a look at few of the<br/> solutions to expect from us.</p>
            <div className="flex items-center justify-between w-[80%] flex-wrap  mx-auto mb-12">
                {elementOffer}
            </div>
            <div className="w-[100%] md:w-[90%] mx-auto bg-[#EDEDF6] h-[660px] md:h-[380px] lg:h-[390px] xl:h-[463px] px-8 py-12 text-start border-none rounded-lg">
                <div className='font-semibold'>We make crypto easy</div>
                <p className='w-[47%] text-[14px] mt-4'>
                    We make sure that every cryptocurrency payment and transaction
                    are processed seamlessly and quickly so that you can enjoy the
                    result without stress
                </p>
                <div className='flex flex-col mt-8 relative'>
                    <div className='flex justify-start gap-4 items-center text-[#040415] font-semibold mb-4'>
                        <div>
                            <img src={mob} alt="mob"/>
                        </div>
                        <p className="text-[16px]">Instant Transaction</p>
                    </div>
                    <div className='flex justify- gap-4  items-center text-[#040415] font-semibold mb-4'>
                        <div>
                            <img src={mob} alt="mob"/>
                        </div>
                        <p className="text-[16px]">Low Fee</p>
                    </div>
                    <div className='flex justify-start gap-4  items-center text-[#040415] font-semibold mb-4'>
                        <div>
                            <img src={mob} alt="mob"/>
                        </div>
                        <p className="text-[16px]">Seamless Experience</p>
                    </div>
                    <div className='flex justify-start gap-4  items-center text-[#040415] font-semibold mb-4'>
                        <div>
                            <img src={mob} alt="mob"/>
                        </div>
                        <p className="text-[16px]">Real Time Value</p>
                    </div>
                    <div className='absolute top-[170px] right-0 md:w-[60%] md:right-0 md:top-[-24px] md:w-[60%] md:right-0 md:top-[-24px] lg:w-[70%] lg:right-0 lg:top-[-100px]  xl:w-[80%] xl:right-0 xl:top-[-180px]'>
                        <img src={phone} alt="phone"/>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Services