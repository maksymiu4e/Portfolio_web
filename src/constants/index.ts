import {
  css, git, html,
  miratech, reactjs,
  typescript, SoftServe,
  BIIR, Konotop, csharp, dotNet,
  efcore, linq, mssql, mysql,
  postgre, postman, asp, github, linkedin, telegram, download, figma
} from "../assets";

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
    title: "LinkedIn",
    icon: linkedin,
    url: 'https://www.linkedin.com/in/volodymyr-maksymiuk/'
  },
  {
    title: "Telegram",
    icon: telegram,
    url: 'https://t.me/maksymiu4e'
  },
  {
    title: "Git",
    icon: github,
    url: 'https://github.com/maksymiu4e'
  },
  {
    title: "CV",
    icon: download,
    url: 'https://cvm'
  },
];

export interface ITechnologies {
  name: string;
  icon: string;
}

export const backtechnologies: ITechnologies[] = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotNet,
  },
  {
    name: "Entity Framework",
    icon: efcore,
  },
  {
    name: "LINQ",
    icon: linq,
  },
  {
    name: "ASP .NET",
    icon: asp,
  },
  /* {
    name: "docker",
    icon: docker,
  }, */
];

export const dbtechnologies: ITechnologies[] = [
  {
    name: "MS SQL",
    icon: mssql,
  },
  {
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "Postgre SQL",
    icon: postgre,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  }
  /* {
    name: "figma",
    icon: figma,
  } */
];

export const fronttechnologies: ITechnologies[] = [
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  }
];

export const alltechnologies: ITechnologies[] = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotNet,
  },
  {
    name: "Entity Framework",
    icon: efcore,
  },
  {
    name: "LINQ",
    icon: linq,
  },
  {
    name: "ASP .NET",
    icon: asp,
  },
  {
    name: "MS SQL",
    icon: mssql,
  },
  {
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "Postgre SQL",
    icon: postgre,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "figma",
    icon: figma,
  },
  /* {
    name: "docker",
    icon: docker,
  }, */
];

export interface Experience {
   title: string,
   company_name: string,
   tech_stack?: string,
   prj_dsc?: string,
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
    tech_stack: "C#/.NET 6, Entity Framework Core, MS SQL Server, React, Redux, Bitbucket, Scrum",
    prj_dsc: "HORECA industry related startup",
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
    tech_stack: "C#/.NET Core, ASP.NET, Entity Framework, LINQ, Swagger, GitHub, Scrum",
    prj_dsc: "SoftServe's internal project \"WHAT\". Intendet to manage educational process." +
    " Service allows to track progress, attendency, view list of students and operate with other useful educational info.",
    icon: SoftServe,
    iconBg: "#fff",
    //iconBg: "#383E56",
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
    icon: BIIR,
    iconBg: "#fff",
    //iconBg: "#383E56",
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
    icon: Konotop,
    //iconBg: "#E6DEDD",
    iconBg: "#fff",
    date: "Aug 2014 - Nov 2015",
    points: [
      "Create product design using 3D CAD tools",
      "Investigate and resolve problems",
      "Provide technical assistance",
    ],
  }
];
