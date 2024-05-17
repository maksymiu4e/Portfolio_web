import React from 'react'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { Contacts, Tech } from '.'

export function Footer() {
  return (
    <div className={`xl:mt-8 mb-16 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.5] rounded-2xl'
      >
        <Contacts />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px]'
      >
        <Tech />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(<Footer />, 'contact')