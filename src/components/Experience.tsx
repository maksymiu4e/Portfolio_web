import React, { useState } from 'react'
import { VerticalTimeline } from "react-vertical-timeline-component";
import SectionWrapper from '../hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { engineeringExperiences, experiences } from '../constants';
import { styles } from '../styles';
import { ExperienceCard, ShowMoreTRG } from '.';
import "react-vertical-timeline-component/style.min.css";

export function Experience() {
    const [showExtraInfo, setShowExtraInfo] = useState(false);
    const handleLoadMore = () => {setShowExtraInfo(true);
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mt-4`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-12 flex flex-col items-center'>
        <VerticalTimeline lineColor='#535C91'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        {showExtraInfo && (
          <>
            {engineeringExperiences.map((experience, index) => (
              <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              />
              ))}
          </>
        )}

        </VerticalTimeline>
        <div className='mt-12 flex flex-col items-center '>
            {!showExtraInfo && (<ShowMoreTRG onClick={handleLoadMore}/>)}
        </div>
      </div>
    </>
  )
}
export default SectionWrapper(<Experience/>, "work");