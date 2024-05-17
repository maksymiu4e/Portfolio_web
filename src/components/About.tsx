import React from 'react'
import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper';

export function About() {
  return (
    <section className={`relative w-full mx-auto h-[60vh] xl:h-[60vh] sm:h-[100vh] xs:h-[80vh] xxs:h-[120vh] `} // xl:h-[60vh] sm:h-[100vh] xs:h-[80vh] xxs:h-[120vh]
    >
      <div
        className={`absolute inset-0 top-[60px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#b5b0bdc9]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}> Hello and welcome! {/* I'm <span className='text-[#915EFF]'>VM</span> */} </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Here are a few things you should know about me before scrolling down:
          </p>
            <br className='sm:block hidden' />
          <ul className={`list-disc ml-5 ${styles.aboutPointText}`}>
          {/* <ul className={`list-disc ml-5 text-text3rd text-[20px] xxs:text-[16px]`}> */}
              <li >
                My name is <span className='text-text2nd'>Volodymyr</span>, and I'm a software developer.
              </li>
              <li>
                With almost <span className='text-text2nd'>3 years</span> of commercial experience in the IT industry, I have a passion for developing and learning new things.
              </li>
              <li>
                During this time, I've had the opportunity to work on several projects with varying levels of complexity, both as a dedicated <span className='text-text2nd'>backend</span> developer within a cross-functional team and as a <span className='text-text2nd'>full-stack</span> developer.
              </li>
              <li>
                I've guided features from initial discussions with customers to delivery for end-users.
              </li>
              <li>
                Last but not least, I have more than 5 years of expertise as a mechanical design engineer, with various tasks and projects completed.
              </li>
            </ul>
          
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(<About/>, 'about')