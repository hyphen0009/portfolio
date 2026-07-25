import { FaEnvelope, FaBookOpen } from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

type Skill = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

export const SKILL_DATA: Skill[] = [
  // {
  //   skill_name: "HTML",
  //   image: "html.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "CSS",
  //   image: "css.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "JavaScript",
  //   image: "js.png",
  //   width: 65,
  //   height: 65,
  // },
  // {
  //   skill_name: "Tailwind CSS",
  //   image: "tailwind.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "React",
  //   image: "react.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "TypeScript",
  //   image: "ts.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Next.js 14",
  //   image: "next.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Node.js",
  //   image: "node.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "MongoDB",
  //   image: "mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
] as const satisfies Skill[];

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/md-zaid-5655b4271",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/hyphen0009",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "https://static.cdnlogo.com/logos/h/84/html.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "https://static.cdnlogo.com/logos/c/18/css.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Angular",
    image: "https://static.cdnlogo.com/logos/a/24/angular-icon.svg",
    width: 80,
    height: 80,
  },
] as const satisfies Skill[];

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Laravel",
    image: "https://static.cdnlogo.com/logos/l/38/laravel_800.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AWS",
    image: "https://static.cdnlogo.com/logos/a/19/aws.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
] as const satisfies Skill[];

export const FULLSTACK_SKILL = [
  {
    skill_name: "Vite",
    image: "https://static.cdnlogo.com/logos/v/23/vitejs.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "https://static.cdnlogo.com/logos/g/15/git-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitHub",
    image: "https://static.cdnlogo.com/logos/g/69/github-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const satisfies Skill[];

export const OTHER_SKILL = [
  {
    skill_name: "C",
    image: "https://static.cdnlogo.com/logos/c/76/c.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "C++",
    image: "https://static.cdnlogo.com/logos/c/36/c.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Java",
    image: "https://static.cdnlogo.com/logos/j/2/java.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Python",
    image: "https://static.cdnlogo.com/logos/p/3/python.svg",
    width: 70,
    height: 70,
  },
] as const satisfies Skill[];

export const DATA_SCIENCE_SKILL = [
  {
    skill_name: "NumPy",
    image: "https://static.cdnlogo.com/logos/n/81/numpy.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TensorFlow",
    image: "https://static.cdnlogo.com/logos/t/82/tensorflow.svg",
    width: 80,
    height: 80,
  },
] as const satisfies Skill[];

export const PROJECTS = [
  {
    title: "Lost & found",
    description:
      "A community-driven web application that helps people report, search, and recover misplaced belongings through a centralized digital hub. Built with React, Node.js, and MongoDB.",
    image: "/projects/project-1.png",
    link: "https://pu-lost-found.vercel.app/",
  },
  {
    title: "Movie Browser",
    description:
      "An AngularJS movie browser for finding movies and checking ratings using the TMDB API.",
    image: "/projects/project-2.png",
    link: "https://movie-browser-gray.vercel.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/hyphen0009",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/md-zaid-5655b4271",
      },
    ],
  },
  {
    title: "Practice Profiles",
    data: [
      {
        name: "Kaggle",
        icon: FaBookOpen,
        link: "https://www.kaggle.com/hyphen0009",
      },
      {
        name: "LeetCode",
        icon: FaBookOpen,
        link: "https://leetcode.com/u/hyphen0009/",
      },
      {
        name: "Codeforces",
        icon: FaBookOpen,
        link: "https://codeforces.com/profile/hyphen0009",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email Me",
        icon: FaEnvelope,
        link: "mailto:hyphen0009@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/hyphen0009/lost-found",
};
