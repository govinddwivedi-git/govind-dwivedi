import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa6";
import { FaCode, FaJava } from 'react-icons/fa';

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandPython, TbBrandPhp, TbBrandVue } from "react-icons/tb";
import { SiMongodb, SiJavascript, SiDjango, SiDocker, SiGit, SiC, SiCplusplus, SiTailwindcss } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";


import { VscVscode } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  // { label: "Bio", href: "#bio" },
  { label: "CP / DSA", href: "#cp-dsa" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "GOVIND DWIVEDI",
  greet: "Hello there!",
  description:
    "I'm a second-year student at the Indian Institute of Information Technology, Jabalpur, Madhya Pradesh. I have a keen interest in problem-solving, web development, and contributing to open-source projects. I love exploring and learning new technologies, applying them to solve real-world problems, and collaborating with others. I also enjoy spending time on competitive programming, sharpening my coding skills.",
};

export const USER = "govinddwivedi";

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
    liveLink: "#",
    isLive : false,
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
    liveLink: "#",
    isLive : true,
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
    liveLink: "#",
    isLive : true,
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
    liveLink: "#",
    isLive : true,
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
    liveLink: "#",
    isLive : true,
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
    liveLink: "#",
    isLive : false,
  },
];

export const BIO = [
  "...",
];

export const SKILLS = {
  programmingLanguages: [
    {
      icon: <SiC className="text-4xl text-blue-400 lg:text-5xl" />,
      name: "C",
    },
    {
      icon: <SiCplusplus className="text-4xl text-blue-600 lg:text-5xl" />,
      name: "C++",
    },
    {
      icon: <FaJava className="text-4xl text-red-500 lg:text-5xl" />,
      name: "Java",
    },
    {
      icon: <TbBrandPython className="text-4xl text-yellow-500 lg:text-5xl" />,
      name: "Python",
    },
    {
      icon: <SiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
      name: "JavaScript",
    },
    {
      icon: <TbBrandPhp className="text-4xl text-purple-600 lg:text-5xl" />,
      name: "PHP",
    },
  ],
  frontendDevelopment: [
    {
      icon: <FaHtml5 className="text-4xl text-red-400 lg:text-5xl" />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "CSS",
    },
    {
      icon: <SiTailwindcss className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "Tailwind CSS",
    },
    {
      icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React",
    },
    {
      icon: <TbBrandVue className="text-4xl text-green-500 lg:text-5xl" />,
      name: "Vue.js",
    },
  ],
  backendDevelopment: [
    {
      icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Node.js",
    },
    {
      icon: <SiDjango className="text-4xl text-green-800 lg:text-5xl" />,
      name: "Django",
    },
  ],
  database: [
    {
      icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
      name: "SQL",
    },
    {
      icon: <BiLogoMongodb className="text-4xl text-green-700 lg:text-5xl" />,
      name: "MongoDB",
    },
  ],
  devTools: [
    {
      icon: <VscVscode className="text-4xl text-blue-500 lg:text-5xl" />, // Changed from SiVisualstudio
      name: "VS Code",
    },
    {
      icon: <SiDocker className="text-4xl text-blue-600 lg:text-5xl" />,
      name: "Docker",
    },
    {
      icon: <SiGit className="text-4xl text-orange-600 lg:text-5xl" />,
      name: "Git",
    },
    {
      icon: <VscGithub className="text-4xl lg:text-5xl" />,
      name: "Github",
    },
  ],
};

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "September 2012 - June 2014",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of California, Berkeley",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
];
