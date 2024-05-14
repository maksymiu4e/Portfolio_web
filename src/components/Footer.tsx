import React from 'react'
//import { Contacts } from '.'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import Tech from './Tech'
import SectionWrapper from '../hoc/SectionWrapper'
import Contacts from './Contacts'

export function Footer() {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.5] rounded-2xl'
        >
            <Contacts/>
        </motion.div>
        <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] '
        //h-[350px]
        >
            <Tech />
        </motion.div>
    </div>
  )
}

//export default Footer;
export default SectionWrapper(<Footer/>, 'contact')