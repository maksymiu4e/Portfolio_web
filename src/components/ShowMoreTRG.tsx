import { motion } from 'framer-motion'
import React from 'react'

interface IButton {
  onClick?: () => void;
  text?: string;
}

export function ShowMoreTRG({ onClick }: IButton) {
  return (
    <div className='absolute xxs:bottom-10 xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a onClick={onClick}>
        <div className='w-[356px] h-[35px] rounded-3xl border-4 border-secondary flex justify-start items-center p-2'>
          <motion.div
            animate={{
              x: [260, 320, 260],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
          <h3>load engineering experience ?</h3>
        </div>
      </a>
    </div>
  )
}

export default ShowMoreTRG;