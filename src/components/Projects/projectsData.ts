export interface ProjectType {
  title: string;
  description: string;
  technology: string[];
  id: number;
  projectImgLinks: string[];
  liveDemoUrl?: string;
  githubUrl: string;
}

export const projects: ProjectType[] = [
  {
    title: "StackLivo",
    description:
      "A browser-based React and JavaScript playground for building, practicing, and previewing frontend code directly in the browser. It combines a Monaco-powered editor, Sandpack React preview, JavaScript terminal output, practice questions, local project management, package search, and responsive editor panels in one focused workspace.",
    technology: [
      "React 18",
      "TypeScript",
      "Vite",
      "Monaco Editor",
      "Sandpack",
      "xterm.js",
      "Sass",
      "Vercel Functions",
    ],
    id: 7,
    projectImgLinks: [
      "https://github.com/user-attachments/assets/9908c417-1421-47d2-b873-4df5acb64937",
    ],
    liveDemoUrl: "https://stack-livo.vercel.app/",
    githubUrl: "https://github.com/dhirendrakumar9032/StackLivo",
  },
  {
    title: "Movie Verse",
    description:
      "A production-style movie discovery platform built with a scalable frontend architecture. Includes reusable hooks, typed API workflows, and responsive UI patterns focused on performance and maintainability.",
    technology: [
      "React",
      "TypeScript",
      "React Query",
      "Custom Hook Pattern",
      "SCSS",
      "Vite",
    ],
    id: 6,
    projectImgLinks: [
      "https://github.com/user-attachments/assets/a4e5a114-be7f-49a2-bae1-b91d4f04faf0",
    ],
    liveDemoUrl:'https://movie-verse-tan.vercel.app/',
    githubUrl: "https://github.com/dhirendrakumar9032/MovieVerse",
  },
  {
    title: "Zomato Clone",
    description:
      "Built a high-fidelity food discovery interface with scalable component composition, responsive layouts, and efficient state-driven filtering/search experiences.",
    technology: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    id: 4,
    projectImgLinks: [
      "https://github.com/user-attachments/assets/864b0064-83ed-46c7-9170-02142e8b68d5",
    ],
    githubUrl: "https://github.com/dhirendrakumar9032/Zomato_Clone",
  },
  {
    title: "Job Application Email Generator",
    description:
      "A productivity-focused tool that converts role context into structured outreach emails. Built with reusable form logic, clean state flow, and responsive UX for faster draft generation.",
    technology: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
    id: 5,
    projectImgLinks: [
      "https://github.com/user-attachments/assets/bbd679ef-b07a-405c-a0f4-49a3054c3ddb",
    ],
    liveDemoUrl:'https://job-application-mail-generator.vercel.app/',
    githubUrl: "https://github.com/dhirendrakumar9032/job_application_mail_generator",
  },

  {
    title: "Portfolio",
    description:
      "An advanced portfolio engineered as a frontend product: animated hero, modular section architecture, typed data models, and responsive visual design aligned to a senior engineer brand.",
    technology: [
      "React",
      "TypeScript",
      "Framer Motion",
      "Swiper",
      "SCSS",
      "Ant Design",
    ],
    id: 2,
    projectImgLinks: [
      "https://opengraph.githubassets.com/portfolio/dhirendrakumar9032/dhirendra_portfolio",
    ],
    liveDemoUrl: "https://dhirendra-portfolio.vercel.app/",
    githubUrl: "https://github.com/dhirendrakumar9032/dhirendra_portfolio",
  },
];
