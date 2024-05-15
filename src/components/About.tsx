import React from 'react'
import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper';

export function About() {
  return (
    <section className={`relative w-full h-[50vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hello and welcome, {/* I'm <span className='text-[#915EFF]'>VM</span> */} </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Here is something that you probably want to know about me before scrolling down
            Please, take a look at my professional experience  <br className='sm:block hidden' />
            while I'm floating here in the sky
          </p>
        </div>
      </div>

      {/* <InSpaceCanvas/> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

//export default About;
export default SectionWrapper(<About/>, 'about')