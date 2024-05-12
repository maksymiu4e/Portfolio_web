import React from 'react'
import { Contacts } from '.'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import Tech from './Tech'

export default function Footer() {
  return (
    <section className={`relative w-full h-[50vh] mx-auto`}>
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
            /* variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] p-8 rounded-2xl' */
        >
           {/*  <Contacts/> */}
           <h1>some text</h1>
        </motion.div>
        <motion.div
            /* variants={slideIn("right", "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]' */
        >
            <h1>some text</h1>
            {/* <Tech /> */}
        </motion.div>
    </div>
    </section>
  )
}
