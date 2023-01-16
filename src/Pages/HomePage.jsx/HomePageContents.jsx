import React from 'react'
import Home from "../Home/Home";
import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";
import { motion } from "framer-motion";

const HomePageContents = () => {
  return (
    <>
    <Home />
    <motion.div
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      key={1}
    >
      {/* <WhatWeOffer/> */}
  
    </motion.div>
  </>
  )
}

export default HomePageContents