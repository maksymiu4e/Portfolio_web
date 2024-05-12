/* import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets"; */

import { backend, creator, css, docker, figma, git, html, javascript, miratech, mobile, mongodb, nodejs, reactjs, redux, shopify, starbucks, tailwind, tesla, threejs, typescript, web } from "../assets";

interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export interface IServices {
  title: string;
  icon: string;
}

export const services: IServices[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export interface ITechnologies {
  name: string;
  icon: string;
}

export const technologies: ITechnologies[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const backtechnologies: ITechnologies[] = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const dbtechnologies: ITechnologies[] = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const gittechnologies: ITechnologies[] = [
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const fronttechnologies: ITechnologies[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
];

export const metodologictechnologies: ITechnologies[] = [
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const othertechnologies: ITechnologies[] = [
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];


export interface Experience {
   title: string,
   company_name: string,
   icon: string,
   iconBg: string,
   date: string,
   points: string[]
 }

export const experiences: Experience[] = [
  {
    title: "Junior .NET developer",
    company_name: "Miratech",
    icon: miratech,
    iconBg: "#fff",
    date: "Sep 2023 - till now",
    points: [
      "Analyze Rich client code and functionality to ensure correct and smooth transition.",
      "Collaborate with other teams to implement maintainable and testable backend, ensuring optimal performance.",
      "Team up with frontend developers to ensure seamless integration between frontend and backend systems.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Trainee – Junior .NET/React developer",
    company_name: "Miratech",
    icon: miratech,
    iconBg: "#fff",
    date: "Dec 2021 - Sep 2023",
    points: [
      "Implement new features according to business requirements (backend, front-end)",
      "Interact with DB using Entity Framework",
      "Implementing responsive interface, landing pages according to Figma design and client requirements ",
    ],
  },
  {
    title: ".NET Intern",
    company_name: "SoftServe IT Academy",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2021 - Dec 2021",
    points: [
      "Design and develop new features on back-end side",
      "Interact with DB using Entity Framework",
      "Write unit tests, fix bugs",
      "Write and update technical documentation",
    ],
  },
];

export const engineeringExperiences: Experience[] = [
  {
    title: "Mechanical design engineer",
    company_name: "LLC BIIR Ukraine (Vestas Denmark)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2015 - Jan 2021",
    points: [
      "Develop product design using 3D CAD tools",
      "Resolve technical problems throughout the design and development processes",
      "Create technical documentation",
      "Interact with customers",
    ],
  },
  {
    title: "Mechanical design engineer",
    company_name: "Konotop valve plant",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Create product design using 3D CAD tools",
      "Investigate and resolve problems",
      "Provide technical assistance",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

/*



export { services, technologies, experiences, testimonials, projects }; */
