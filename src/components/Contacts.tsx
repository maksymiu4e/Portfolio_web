import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper';
import { textVariant } from "../utils/motion";
import { SocialCard } from ".";
import { services } from "../constants";

export function Contacts() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">

        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>


      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <SocialCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

/* export default SectionWrapper(<Contacts/>, "about"); */
export default Contacts;