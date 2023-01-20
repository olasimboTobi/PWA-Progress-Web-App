import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import personimage from "../../Components/Assets/Home/person.svg";
import dialogImg from "../../Components/Assets/Home/dialogBox.svg";
import transactImg from "../../Components/Assets/Home/transact.svg";
import actionImg from "../../Components/Assets/Home/action.svg";

import { Link } from "react-scroll";


const data = [
  {
    Title: "Make easy digital assets",
    break1: "transactions anywhere,",
    break2: "anytime with Jupit.",
    Description: "A place for everyone who wants to simply buy and ",
    DescriptionBreak: "sell digital assets,it just takes 120 seconds!.",
  },
  {
    Title: "Fast easy digital assets",
    break1: "transactions anywhere,",
    break2: "anytime with Jupit.",
    Description: "A place for everyone who wants to simply buy and ",
    DescriptionBreak: "sell digital assets,it just takes 120 seconds!.",
  },
];

const Home = () => {
  const [currentInfo, setCurrentInfo] = useState(data[0]);

  useEffect(() => {
    const interval = setTimeout(() => {
      const dataLength = data.length;
      const currentInfoIndex = data.indexOf(currentInfo);
      let tempInfo =
        currentInfoIndex + 1 >= dataLength
          ? data[0]
          : data[currentInfoIndex + 1];

      setCurrentInfo(tempInfo);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentInfo]);
  return (
    <>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        key={1}
        className="pt-4 w-full px-8 grid place-items-center   "
      >
        <div className="flex flex-col w-[85%] items-between  md:flex-row  md:mt-20 md:gap-24 md:w-[88%] xl:flex-row xl:mt-20  lg:mt-12">
          <section className="pt-10 sm:w-[100%]  md:w-[60%]">
            <div>
              <div>
                <h1 className="font-bold tracking-wide leading-relaxed  text-3xl md:text-5xl  md:leading-relaxed md:tracking-wide ">
                  {currentInfo.Title}
                  <br /> {currentInfo.break1}
                  <br /> {currentInfo.break2}
                </h1>
                <p className="absolute text-xs text-gray-600 pt-4 font-light md:text-base md:relative">
                  {currentInfo.Description}
                  <br /> {currentInfo.DescriptionBreak}
                </p>
              </div>

              <button className="hidden border-2 border-[#F2921D] mt-4 py-3 px-8  rounded-lg cursor-pointer bg-[#F2921D] hover:bg-[transparent] hover:text-[#F2921D]  text-white duration-300 md:block md:mt-8">
              <Link
              to="contact"
              smooth={true}
              duration={700}
            >
              Get Started
              </Link>
              </button>
            </div>
          </section>
          <section className="relative  w-[100%]  flex lg:w-[45%] xl:[40%]">
            <div className="flex mt-[-48px] md:mt-[-180px] lg:mt-[-45px]">
              <img src={personimage} alt="home img" className=" mt-20 w-[100%] md:w-[100%]  md:mt-[-105px]" />
            </div>
            <div className="absolute top-28  left-[-12px] md:top-36 md:left-[-48px] md:w-[62%] lg:w-[58%]  lg:top-28 lg:left-[-58px] xl:top-14 xl:left-[-85px] ">
              <img src={dialogImg} alt="home img" className="w-[40%] md:h-full md:w-full   " />
            </div>  
            <div className="absolute bottom-[70px] right-[-58px] md:bottom-[435px] md:right-[-1px] md:w-[60%] lg:bottom-[250px] lg:right-[-5px] xl:bottom-[105px] xl:right-[18px]">
              <img src={transactImg} alt="home img" className="w-[40%] md:h-full md:w-full   " />
            </div>   
            <div className="absolute bottom-[-2px] md:bottom-[378px] md:w-[60%] lg:bottom-[160px] xl:bottom-[-8px]">
              <img src={actionImg} alt="home img" className="w-[40%] md:h-full md:w-full  " />
            </div>  
          </section>
          <button className=" block w-[200px] whitespape-nowrap mt-24 border-2 border-[#F2921D] mb-12 py-2 px-2 rounded-lg cursor-pointer bg-[#F2921D]  hover:bg-[transparent] hover:text-[#F2921D]  text-white duration-300 md:hidden md:mt-4 md:px-8">
          <Link
              to="contact"
              smooth={true}
              duration={700}
              className="cursor-pointer"
            >
              Get Started
              </Link>
              </button>
        </div>
      </motion.div>
      {/* </div> */}
    </>
  );
};

export default Home;
