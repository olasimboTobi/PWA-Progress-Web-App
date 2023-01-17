import React from 'react'
import Home from "../Home/Home";
import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";
import { motion } from "framer-motion";
import Services from '../Services/Services';
import WhatUsersSay from '../WhatUsersSay/WhatUsersSay';

const HomePageContents = () => {
  return (
    <>
    <Home />
    <motion.div
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      key={1}
    >
      <WhatWeOffer/>
      <Services/>
      <WhatUsersSay/>
    </motion.div>
  </>
  )
}

export default HomePageContents