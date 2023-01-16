import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import image1 from "../../Components/Assets/image 9.png";
// import image2 from "../../Components/Assets/image 5.svg";
// import image4 from "../../Components/Assets/app-logo 1.svg";

// import image3 from "../../Components/Assets/image 7.svg";
// import homeImg from "../../Components/Assets/Component 8.png";
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
        <div className="flex flex-col  items-between  md:flex-row md:mt-20 md:gap-24 lg:mt-12">
          <section className="pt-10  w-[60%]">
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
          <section className="relative  w-[40%] flex  ">
            <div className="flex mt-[-45px]">
              <img src={personimage} alt="home img" className=" w-[100%] mt-[-105px]" />
            </div>
            <div className="absolute top-11 left-[-85px] ">
              <img src={dialogImg} alt="home img" className="h-full w-full   " />
            </div>  
            <div className="absolute bottom-[105px] right-[18px] ">
              <img src={transactImg} alt="home img" className="h-full w-full   " />
            </div>  
            <div className="absolute bottom-[-8px]">
              <img src={actionImg} alt="home img" className="h-full w-full   " />
            </div>  
          </section>
          <button className=" block w-[200px] mt-24 border-2 border-[#F2921D] py-2 px-2 rounded-lg cursor-pointer bg-[#F2921D]  hover:bg-[transparent] hover:text-[#F2921D]  text-white duration-300 md:hidden md:mt-4 md:px-8">
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
