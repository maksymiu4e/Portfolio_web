import React from 'react'
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { motion } from 'framer-motion';

type SectionWrapperProps = {
  Component: JSX.Element; // Type for the wrapped component
  idName: string; // Type for the ID name
};

const SectionWrapper = (Component: JSX.Element, idName: string) => {
  return (
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {Component}
      </motion.section>
  )
}

export default SectionWrapper;