import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";

interface ISocialCard {
    index: number;
    title: string;
    icon: string;
    url: string;
}

export function SocialCard({index, title, icon, url}: ISocialCard) {
  return (
    <Tilt className='xs:w-[150px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <a href={url}
        /* options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} 
        #0b071e*/
        className='bg-bglike rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </a>
    </motion.div>
  </Tilt>
  )
}

export default SocialCard;
