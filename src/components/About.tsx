import React from 'react'
import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper';

export function About() {
  return (
    <section className={`relative w-full h-[50vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[60px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#b5b0bdc9]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}> Hello and welcome, {/* I'm <span className='text-[#915EFF]'>VM</span> */} </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Here is something that you probably want to know about me before scrolling down
            Please, take a look at my professional experience  <br className='sm:block hidden' />
            while I'm floating here in the sky
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(<About/>, 'about')