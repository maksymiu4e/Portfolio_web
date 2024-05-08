import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper';
import { textVariant } from "../utils/motion";
import SocialCard from "./SocialCard";

export function Contacts() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <SocialCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(<Contacts/>, "about");
