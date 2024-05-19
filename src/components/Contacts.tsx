import React from "react";
import { styles } from "../styles";
import { SocialCard } from ".";
import { services } from "../constants";

export function Contacts() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className={styles.sectionHeadText}>Contact me</h2>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
      </div>
      <div className='mt-16 flex flex-wrap justify-center gap-14'>
        {services.map((service, index) => (
          <SocialCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default Contacts;