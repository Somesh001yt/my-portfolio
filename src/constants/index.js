import {
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
  tripguide,
  threejs,
} from "../assets";
import stackoverflow from '../assets/stackoverflow.png'
import mapty from '../assets/mapty.png'
import download from '../assets/company/download.png'


export const navLinks = [
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

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Web Developer Internship",
    icon: web,
  },
];

const technologies = [
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
    name: "git",
    icon: git,
  },

];

const experiences = [
 
  {
    title: "Front-End Developer",
    company_name: "Max-Vision",
    icon: download,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining Applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer Internship",
    company_name: "Null Class",
    icon: download,
    iconBg: "#383E56",
    date: "August 2022 - November 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
   
];


const projects = [
  {
    name: "Stack Overflow Clone",
    description:
      "Stack-Overflow Clone that allows users to search, ask, and add there queries or questions, with react and nodejs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: stackoverflow,
    source_code_link: "https://github.com/Somesh001yt/StackOverflow",
  },
  {
    name: "Mapty",
    description:
      "Mapty  is a fitness app that allows users to save and track their running and cycling routines on an interactive map.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: mapty,
    source_code_link: "https://github.com/Somesh001yt/Mapty",
  },
  {
    name: "Linkedin",
    description:
      "It is a replica of the well-known online job board from LinkedIn, where users must first log in before posting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Somesh001yt/linkedin-clone"
  },
];

export { services, technologies, experiences, projects };
