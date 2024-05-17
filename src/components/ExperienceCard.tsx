import React from 'react'
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Experience } from '../constants';
import "react-vertical-timeline-component/style.min.css";

interface ExperienceCard {
    experience: Experience;
}

export function ExperienceCard({experience}: ExperienceCard) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#3a37494a",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            loading='lazy'
            className='w-[100%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        {experience.tech_stack &&
          <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          <b className='text-text3rd'>Tech. stack:</b> {experience.tech_stack}
          </p>
        }
        {experience.prj_dsc &&
          <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          <b className='text-text3rd'>Project description:</b> {experience.prj_dsc}
          </p>
        }
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-text3rd text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard;