import React from 'react'
import footer from "../../Components/Assets/Footer/footer.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      key={1}
    >
        <div className='w-full mt-28'>
            <div className=''>
                <img src={footer} alt="footer"/>
            </div>
        </div>
    </motion.div>
  )
}

export default Footer