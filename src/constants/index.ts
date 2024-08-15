import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
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

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer Intern",
    companyName: "Xebia",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Spearheaded a team of 4 to develop Mortis a hospital management system, completing the project within the internship timeline.",
      "Designed an online booking system for appointment scheduling in under 7 seconds with optimized loading times of 5-10 seconds.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Secretary",
    companyName: "Full Stack Club BU",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2022 - August 2023",
    points: [
      "Led workshops on Figma and Wix, training over 100 participants.",
      "Doubled event participation in iCosmic, enhancing club engagement and visibility by 100%.",
      "Mentored more than 100 students in learning fullstack development.",
    ],
  },
  {
    title: "Social Media Head",
    companyName: "GeeksForGeeks BU",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2022 - August 2023",
    points: [
      "Spearheaded and executed technical events like CodeDate and Spin the Code, engaging over 500 participants.",
      "Partnered with cross-functional teams to design event agendas, select coding challenges, and develop interactive sessions.",
      "Mentored and nurtured newcomers, facilitating their integration into the community of more than 500 students.",
    ],
  },
  {
    title: "Outreach Assistant",
    companyName: "Mortystellar",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2022 - February 2023",
    points: [
      "Helped the firm to reach more artists in making of NFTs",
      "Assisted in the development of a web application for artists to create and sell NFTs",
    ],
  },
];

const testimonials: TTestimonial[] = [
  
  
];

const projects: TProject[] = [
  {
    name: "Mortis",
    description:
      "Web application that enables patients to book their appointments online and keep a track of their medical history with the hospital.",
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
    image: carrent,
    sourceCodeLink: "https://github.com/sudhanshusr007/Mortis",
  },
  {
    name: "Scribble",
    description:
      "Web application that allows users to keep their notes handy and safe.",
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
    image: jobit,
    sourceCodeLink: "https://github.com/sudhanshusr007/Scribble",
  },
  {
    name: "Lost Spot",
    description:
      "An online lost and found portal to reduce the time taken in traditional ways.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/sudhanshusr007/E-lost-and-found",
  },
];

export { services, technologies, experiences, testimonials, projects };
