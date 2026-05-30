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
    company: "JLL Technologies",
    period: "Mar 2025 - Present",
    responsibilities: [
      "Architected the RELM real estate management platform from scratch using React.js and Redux Toolkit for Chick-fil-A's live enterprise workflow.",
      "Engineered AG Grid dashboards with virtualization, filtering, pagination, and search for large datasets, improving table responsiveness by 30%.",
      "Accelerated page performance by 35% through lazy loading, memoization, bundle optimization, and Core Web Vitals improvements.",
      "Connected 20+ REST API workflows with reusable service layers, loading states, error handling, and scalable async data contracts.",
      "Created 15+ reusable UI components for forms, tables, charts, and calendars, reducing duplicate UI work across feature modules.",
      "Launched charting and calendar workflows using React-Google-Charts and FullCalendar, improving task and event visibility by 20%.",
      "Reviewed pull requests, resolved production UI issues, and contributed to sprint planning across a 6+ member Agile team.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Qapita Fintech India Pvt. Ltd. (QapMap Project)",
    period: "Jan 2022 - Mar 2025",
    responsibilities: [
      "Delivered 10+ major frontend features for Qapita's Qapmap B2B SaaS platform, supporting ESOP and CapTable workflows for global enterprise customers.",
      "Engineered AG Grid dashboards with virtualization and rendering controls, increasing large-dataset performance by 40%.",
      "Spearheaded a Storybook component library with 40+ shared components, reducing repeated UI development effort by 40%.",
      "Strengthened frontend performance using React Profiler, memoization, Redux Toolkit improvements, and code splitting, improving page interactions by 10%.",
      "Introduced React Query for server-state caching and data synchronization, reducing unnecessary API calls by 5%.",
      "Validated critical flows with Vitest and React Testing Library, increasing test coverage and reducing regression defects by 30%.",
      "Modernized legacy modules into smaller reusable components, reducing frontend technical debt by 20% and improving maintainability.",
      "Partnered with product managers, designers, and backend engineers across 2-week sprints to deliver scalable SaaS features on time.",
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
  "Frontend Engineer with 4+ years of experience developing scalable SaaS web applications using React.js, TypeScript, JavaScript, Redux Toolkit, and Next.js. I specialize in frontend architecture, reusable component libraries, AG Grid dashboards, REST API integrations, responsive UI development, Core Web Vitals improvement, accessibility, cross-browser compatibility, performance, maintainability, and Agile collaboration.";

export const aboutMeta: string[] = [
  "Lucknow, India",
  "4+ Years in Frontend Engineering",
  "Open to Senior Frontend Opportunities",
];

export const aboutHighlights: string[] = [
  "Architected RELM from scratch for a live Chick-fil-A enterprise workflow",
  "Improved AG Grid table responsiveness by 30% with virtualization and optimized controls",
  "Improved page performance by 35% through lazy loading, memoization, and Core Web Vitals work",
  "Connected 20+ REST API workflows with reusable service layers and async data contracts",
  "Built 40+ shared Storybook components, reducing repeated UI effort by 40%",
  "Reduced regression defects by 30% with Vitest and React Testing Library coverage",
  "Modernized legacy modules, reducing frontend technical debt by 20%",
];

export const educationSummary =
  "B.Tech in Computer Science & Engineering — Dr. A.P.J. Abdul Kalam Technical University (2017-2021), CGPA 7.3/10";

export const heroImpactStats: { value: string; label: string }[] = [
  { value: "4+ Years", label: "Frontend Experience" },
  { value: "35%", label: "Page Performance Improvement" },
  { value: "40+", label: "Reusable Storybook Components" },
];

export const seniorSignals: string[] = [
  "React + TypeScript Architecture",
  "AG Grid + Data Dashboards",
  "Core Web Vitals Optimization",
  "Enterprise SaaS and Fintech Delivery",
];

export const socialMediaLinks: socialMediaLinksType[] = [
  {
    link: "https://www.linkedin.com/in/dhirendrakumar95/",
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
  "Vue.js",
  "React Hooks",
  "Custom Hooks",
  "Micro Frontend",
  "AG-Grid",
  "D3.js",
  "Chart.js",
  "FullCalendar",
  "React-Google-Charts",
  "React Query",
  "Context API",
  "Axios",
  "Fetch API",
  "Authentication",
  "Authorization",
  "Material UI",
  "Styled-Components",
  "REST APIs",
  "React Testing Library",
  "Jest",
  "Vitest",
  "Cypress",
  "Vite",
  "Webpack",
  "Babel",
  "ESLint",
  "Prettier",
  "Storybook",
  "CI/CD",
  "JIRA",
  "Figma",
  "AWS",
  "Azure",
  "Agile/Scrum",
  "SOLID Principles",
];
