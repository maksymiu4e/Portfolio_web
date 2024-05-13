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
  url: string;
}

export const services: IServices[] = [
  {
    title: "View git",
    icon: web,
    url: 'https://github.com'
  },
  {
    title: "View LinkedIn",
    icon: mobile,
    url: 'https://linkedin.com'
  },
  {
    title: "Telegram bot",
    icon: backend,
    url: 'https://telegram.com'
  },
  {
    title: "Download CV",
    icon: creator,
    url: 'https://cvmaksymiuk.s3.eu-central-1.amazonaws.com/CV_Maksymiuk%20.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aDGV1LWNlbnRyYWwtMSJIMEYCIQCPovPGzdYd7iKePuyhCl09WomchJ48aDPjd2y8msdt6wIhAN3W2ghLuhWixj53HPTuTs3nXjsRr6ivFO5sWdx3AouDKuQCCHYQABoMNjg1MjUzNzgzMTA5IgxaQq54rrrD29FMENcqwQJ%2Ftsmp%2FlnsZEHDIdp9K1iJJA9Pqv30yrKhkc5sohgUHXvWmFswwQoQQVhWsde7SUrRcj2KxlsS0X%2BSpvzk2%2B%2By8S14er7AEQzbZzy2pOrJ5X9apx%2FQ8BgTnX9vHMJD7E0W4kc5PItsE4%2F3k1LzZTfjj1PAkC5TWcjOTnSfpiES64PAoNZA7dkr256nzbiyeEwPmQXpeX9Q7JGyLD6qg5X1Rp%2FBA1MFWOr62CxYa4L%2BcNBSJK4x3CB7tPcK2Sxxg8qskn2zlPNJcaMD1fedES%2FVJiOMsqK1sqWhrAXvUjr1%2F8%2B4fWWlItSJkabrOkxctqvrBzjk7QhgVckunbSKEHDedh%2FyTjHTjrj34EriqeTpvRt3DKbfVtQOmksILEzK6Y%2Fe1CnXr3FKHsSf%2FzgsqSUdFVXayqKoLBIdgllH2917akww3JSIsgY6sgJh0ANuQzH2vk8vq8nm5xnVGwsvJefVkzFZB5iF2hrhkF1RonbRjz8%2BPcK2OSKBev1wROs96ome51e2otAhk81BHoEZnBdJxOw5V5JXiojfTDfgd6GMfsWXSFBsTWUDemkTEmghYl%2BafnXmB4uPFgftIZJYLdUF1kzf4ADrCi4mPt1ixgatYm%2FM9UH86tuKpKYVhwdjY1%2FOAC%2B5Bla%2Ffb%2FCrnPpYICB9U3OE7Ag218RfPwQdXwK3F3KxS5F7xcIEpPrKYumF%2FiRgc4QesAe7Z%2FP4A9K9SA%2BOTfVc2FEX2%2FeSksHV1nULnbDdhcBl6x8nyNBj4pSoTGa1y6p47ZXAKeZebtx8s9%2BeFDtzqEeZ5Z6SOtI1ubpvUi6YxMZu200lFY2Ik5mChw3jaTJNv0DOdazSOE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240513T124448Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZ7DCO5ZCW3YWAYUD%2F20240513%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=d5526a2623d06eea54d0e5b645688af6abb182e5345f4accb7049c09c3cd592d'
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
