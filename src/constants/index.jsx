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
import apexlearning from "../assets/apexlearning.png"
import chatbot from "../assets/chatbot.png"
import CodeHorses from "../assets/codehorses.png"
import CPT from "../assets/cp.png"
import portfolio from "../assets/portfolio.png"
import voluntree from "../assets/volunteer.png"


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
  // { label: "Work Experience", href: "#work" },
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
    name: "Voluntree: Make A Difference",
    description:
      "Voluntree is a comprehensive volunteer management platform that connects passionate volunteers with meaningful causes to create positive change in communities. It is our HackByte 3.0 hackathon project built within strict deadline of 36 hours.",
    image: voluntree,
    githubLink: "https://github.com/govinddwivedi-git/apex-learning",
    liveLink: "#",
    isLive: true,
    comingSoon : true,
    techStack : ["React", "Tailwind", "TypeScript", "MongoDB", "ExpressJS"]
  },
  {
    id: 2,
    name: "Apex Learning: AI-Powered Learning Platform",
    description:
      "Apex Learning is an innovative AI-powered learning platform that helps students and professionals create personalized study materials, practice tests, and educational content.",
    image: apexlearning,
    githubLink: "https://github.com/govinddwivedi-git/apex-learning",
    liveLink: "https://apex-learning-two.vercel.app/",
    isLive: true,
    techStack: ["NextJS", "Gemini API", "Inngest", "Drizzle ORM", "PostgreSQL"]
  },
  {
    id: 4,
    name: "Personal Portfolio Website",
    description:
    "A modern, responsive portfolio website built with React, Framer Motion, and Tailwind CSS to showcase my skills, projects, education, and work experience.",
    image: portfolio,
    githubLink: "https://github.com/govinddwivedi-git/govind-dwivedi",
    liveLink: "https://govind-dwivedi.vercel.app/",
    isLive : true,
    techStack: ["React", "Tailwind", "Framer Motion", "Vercel"]
  },
  {
    id: 3,
    name: "CP Community Tracker",
    description:
      "A comprehensive platform for tracking and analyzing competitive programming performance across multiple coding platforms. This system helps students monitor their progress and rankings across different competitive programming websites while providing detailed analysis of their coding journey.",
    image: CPT,
    githubLink: "https://github.com/govinddwivedi-git/competitive-programming-tracker",
    liveLink: "#",
    isLive : false,
    techStack: ["React", "Node.js", "MySQL"]
  },
  {
    id: 5,
    name: "Student Query Resolution Chatbot",
    description:
      "An interactive chatbot system designed to help resolve student queries efficiently. The system features both user and admin interfaces, allowing for dynamic query handling and response management.",
    image: chatbot,
    githubLink: "https://github.com/govinddwivedi-git/chatbot-for-students-queries",
    liveLink: "#",
    isLive : false,
    techStack: ["Python", "Gemini API", "RAG", "Flask"]
  },
  {
    id: 6,
    name: "Web-Based Code Editor and Compiler",
    description:
      "This project is a web-based code editor and compiler, built using CodeMirror for code editing and CompileX for code compilation.",
    image: CodeHorses,
    githubLink: "https://github.com/govinddwivedi-git/CodeHorses",
    liveLink: "#",
    isLive : false,
    techStack: ["JavaScript", "CodeMirror", "Node.js", "CompileX"]
  },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/user/chat-application",
  //   liveLink: "#",
  //   isLive : false,
  // },
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
// Dummy Data
// export const EXPERIENCES = [
//   {
//     title: "Lead Frontend Developer",
//     company: "Innovative Tech Solutions",
//     duration: "July 2020 - Present",
//     description:
//       "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
//   },
//   {
//     title: "Frontend Engineer",
//     company: "Digital Creations",
//     duration: "February 2016 - June 2020",
//     description:
//       "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
//   },
//   {
//     title: "Junior Web Developer",
//     company: "Bright Future Technologies",
//     duration: "August 2014 - January 2016",
//     description:
//       "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
//   },
// ];

export const EDUCATION = [
  {
    degree: "Schooling",
    institution: "D.A.V. Public School, Dudhichua, Singrauli, Madhya Pradesh",
    duration: "2010 - 2023",
    description:
      "Completed my schooling with 94.6%, consistently excelling academically as the class topper from UKG to 12th grade. Actively participated in various extracurricular activities, fostering a well-rounded skill set.",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology, Jabalpur, Madhya Pradesh",
    duration: "2023 - 2027",
    description:
      "Pursuing a B.Tech in Computer Science at IIIT Jabalpur, with a strong foundation in problem-solving and web development. Currently maintaining a 9.7 CPI while actively exploring new technologies and contributing to impactful projects. Eager to collaborate, learn, and take on new challenges.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/govinddwivedi",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/users/govinddwivedi",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/govinddwivedi09",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/govinddwivedi-git",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
];


