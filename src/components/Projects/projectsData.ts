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
      "https://github.com/user-attachments/assets/ccf12d84-6c1b-44b9-a610-f5a06fec8316",
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
      "https://github.com/user-attachments/assets/daab0db3-58e1-4d91-962e-b18620499267",
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
      "https://github.com/user-attachments/assets/c003cb80-02e1-4550-80ab-449281d57a09",
      "https://github.com/user-attachments/assets/62140916-52e9-4687-ba5b-78cc0ca423cd",
    ],
    liveDemoUrl:'https://job-application-mail-generator.vercel.app/',
    githubUrl: "https://github.com/dhirendrakumar9032/job_application_mail_generator",
  },

  {
    title: "Admin UI GeekTrust Challenge",
    description:
      "A data-heavy admin management interface with advanced table interactions including search, inline edits, deletion, pagination, and clean state updates across large datasets.",
    technology: [
      "React",
      "TypeScript",
      "SCSS",
      "Zustand",
      "React Query",
    ],
    id: 1,
    projectImgLinks: [
      "https://i.imgur.com/dbv6Ifw.png",
      "https://imgur.com/dbv6Ifw.png",
    ],
    liveDemoUrl: "https://admin-ui-geektrust-project-june-2024.vercel.app/",
    githubUrl: "https://github.com/dhirendrakumar9032/admin-ui-geektrust-project-june-2024.git",
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
      "https://i.imgur.com/qMP0ckA.png",
      "https://i.imgur.com/FH62HtN.png",
    ],
    liveDemoUrl: "https://dhirendra-portfolio.vercel.app/",
    githubUrl: "https://github.com/dhirendrakumar9032/dhirendra_portfolio",
  },
];
