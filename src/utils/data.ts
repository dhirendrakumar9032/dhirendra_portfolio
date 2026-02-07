import { ExperienceEntry, SkillsType, socialMediaLinksType } from "./types";
import { VscGithub } from "react-icons/vsc";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaMediumM,
} from "react-icons/fa";
import react from "../resources/skills-icons/react.svg";
import js from "../resources/skills-icons/jss.png";
import css from "../resources/skills-icons/css.png";
import html from "../resources/skills-icons/html.png";
import ts from "../resources/skills-icons/ts.png";
import redux from "../resources/skills-icons/redux.png";
import git from "../resources/skills-icons/git.png";
import tailwind from "../resources/skills-icons/tailwind.png";
import nextjs from "../resources/skills-icons/nextjs.png";
import antd from "../resources/skills-icons/antd.png";
import sass from "../resources/skills-icons/sass.png";
import postman from "../resources/skills-icons/postman.png";

export const professionalExperienceEntries: ExperienceEntry[] = [
  {
    role: "Frontend Developer II",
    company: "JLL Technologies (Chick-fil-A RELM Project)",
    period: "Mar 2025 - Present",
    responsibilities: [
      "Led the frontend architecture setup for an enterprise internal platform using React 19, TypeScript, Vite, MUI, and Redux Toolkit for scalability and faster development.",
      "Built and optimized data-intensive dashboards with AG-Grid, improving rendering performance, navigation flow, and usability by 80%.",
      "Integrated Doughnut and Bar charts with React-Google-Charts and implemented FullCalendar for task and event tracking, improving operational visibility by 20%.",
      "Applied performance optimizations like lazy loading, code splitting, and virtual scrolling, improving load times and bundle efficiency by 10%.",
      "Collaborated with product, design, and backend teams in Agile delivery to ship stable, production-ready features.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Qapita Fintech India Pvt. Ltd. (QapMap Project)",
    period: "Jan 2022 - Mar 2025",
    responsibilities: [
      "Designed and launched the Pool feature, enabling 80% client migration from a legacy platform and driving product adoption.",
      "Architected AG-Grid workflows for complex cap-table systems, improving scalability and cross-team UI reuse by 40%.",
      "Migrated legacy charts to a D3.js-based visualization framework, improving analytical clarity and interaction depth by 30%.",
      "Built a Storybook-driven reusable component library, reducing UI development time by 40% and improving design consistency.",
      "Improved application performance by 10% through profiling, optimization, and efficient state management.",
      "Applied SOLID principles and modular design, reducing long-term technical debt by 5%.",
    ],
  },
];

export const educationEntries: ExperienceEntry[] = [
  {
    role: "B.Tech in Computer Science",
    company: "Dr. APJ Abdul Kalam Technical University",
  },
];

export const blogData = [
  {
    title: "10 Things Software Engineers Can Learn from an Eagle.",
    description:
      "While sitting at my office desk, I glanced at my mobile wallpaper of an Eagle. It made me wonder what we can learn from eagles as software engineers. So, I decided to write a blog about it...",
    url: "https://medium.com/@dhirendra9032/10-things-software-engineers-can-learn-from-an-eagle-f4a42cebf115",
    readTime: "2 min read",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*qu6J100XELfSpm520uyjOw.jpeg",
  },
  {
    title: "JavaScript Interview Marathon: 100 Questions, One Ultimate Guide.",
    description:
      "In this series, we’ll explore the 100 most common interview questions that will supercharge your JavaScript skills and help you nail any interview.",
    readTime: "9 min read",
    url: "https://medium.com/@dhirendra9032/javascript-interview-marathon-100-questions-one-ultimate-guide-part-1-f1d74ddebf92",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*p9QxdmBWqhzr90Zo1ko20g.png",
  },
  {
    title:
      "Mastering JavaScript Functions: A Simplified Guide to Understanding and Using Different Types",
    description:
      "Functions are a core building block of JavaScript programming. They allow us to encapsulate reusable blocks of code and perform specific tasks. In this blog post",
    readTime: "3 min read",
    url: "https://medium.com/@dhirendra9032/mastering-javascript-functions-a-simplified-guide-to-understanding-and-using-different-types-8fd4af98ae77",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*wydvmEoGqNiPEC2bDvFtWw.png",
  },
];

export const selfDescription: string =
  "Frontend Software Engineer with 4+ years of experience building scalable, high-performance web applications using React, TypeScript, and modern frontend ecosystems. I specialize in enterprise product development, frontend performance optimization, and reusable UI architecture across fintech and enterprise platforms. I won 2nd place in an internal hackathon for building the Sharthi AI-powered chatbot using React and LLMs. Currently based in Lucknow, India.";

export const aboutMeta: string[] = [
  "Lucknow, Uttar Pradesh, India",
  "Hyderabad, Telangana",
  "Open to opportunities in Australia",
];

export const aboutHighlights: string[] = [
  "4+ years building enterprise and fintech platforms",
  "Performance optimization with measurable impact",
  "Reusable UI architecture with Storybook libraries",
  "Data visualization: AG-Grid, D3.js, React-Google-Charts",
  "2nd place in internal hackathon for the Sharthi AI chatbot",
];

export const educationSummary =
  "B.Tech in Computer Science — Dr. APJ Abdul Kalam Technical University";

export const socialMediaLinks: socialMediaLinksType[] = [
  {
    link: "https://www.linkedin.com/in/dhirendra-kumar-9032/",
    logo: FaLinkedin,
  },
  {
    link: "https://github.com/dhirendrakumar9032",
    logo: VscGithub,
  },
  {
    link: "https://www.instagram.com/dhirendra9032/",
    logo: FaInstagram,
  },
  {
    link: "https://www.youtube.com/@dhirendrakumar90322",
    logo: FaYoutube,
  },
  {
    link: "https://www.medium.com/@dhirendra9032",
    logo: FaMediumM,
  },
];

export const skills: SkillsType[] = [
  { icon: react, name: "React.js" },
  { icon: js, name: "JavaScript (ES6+)" },
  { icon: html, name: "HTML5" },
  { icon: css, name: "CSS3" },
  { icon: ts, name: "TypeScript" },
  { icon: redux, name: "Redux Toolkit" },
  { icon: nextjs, name: "Next.js" },
  { icon: git, name: "Git & GitHub" },
  { icon: tailwind, name: "Tailwind CSS" },
  { icon: sass, name: "Sass" },
  { icon: antd, name: "Ant Design" },
  { icon: postman, name: "Postman" },
];

export const skillTags: string[] = [
  "Zustand",
  "AG-Grid",
  "D3.js",
  "Chart.js",
  "React-Google-Charts",
  "Material UI",
  "REST APIs",
  "Node.js (basic)",
  "React Testing Library",
  "Jest",
  "Vite",
  "Webpack",
  "Parcel",
  "CI/CD",
  "AWS",
  "Azure",
  "Docker (basic)",
  "Agile/Scrum",
  "SOLID Principles",
];
