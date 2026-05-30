import { motion } from "framer-motion";
import { Boxes, Gauge, Layers3, LineChart, ShieldCheck, Workflow } from "lucide-react";
import { skills, skillTags } from "../../utils/data";
import "./index.scss";

const focusAreas = [
  {
    icon: <Layers3 />,
    title: "Frontend Architecture",
    description: "Scalable React/TypeScript foundations, reusable patterns, and maintainable feature delivery.",
  },
  {
    icon: <LineChart />,
    title: "Data-Heavy Interfaces",
    description: "AG-Grid dashboards, charts, calendar workflows, and complex product screens.",
  },
  {
    icon: <Gauge />,
    title: "Performance Engineering",
    description: "Core Web Vitals, code splitting, lazy loading, memoization, virtual scrolling, and bundle hygiene.",
  },
  {
    icon: <Workflow />,
    title: "Product Ownership",
    description: "Cross-functional execution, API contracts, code reviews, mentoring, and quality standards.",
  },
];

const skillLevels: Record<string, number> = {
  "React.js": 96,
  "TypeScript": 92,
  "JavaScript (ES6+)": 94,
  "Redux Toolkit": 88,
  "Next.js": 82,
  "Ant Design": 88,
  "Sass": 86,
  "Tailwind CSS": 84,
  "Git & GitHub": 90,
  "HTML5": 94,
  "CSS3": 92,
  "Postman": 80,
};

const capabilityStats = [
  { value: "35%", label: "page performance improvement" },
  { value: "40+", label: "shared Storybook components" },
  { value: "20+", label: "REST API workflows connected" },
];

const priorityTags = new Set([
  "AG-Grid",
  "D3.js",
  "React Query",
  "React Testing Library",
  "Jest",
  "Vitest",
  "Cypress",
  "Storybook",
  "FullCalendar",
  "CI/CD",
  "SOLID Principles",
]);

const Skills = () => {
  const gridVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.06,
      },
    }),
    hidden: { y: 18, opacity: 0 },
  };

  return (
    <div className="skills" id="skills">
      <div className="heading-container">
        <h2 className="heading">Technical Skills</h2>
        <span className="underline"></span>
        <p className="section-intro">
          A practical frontend toolkit shaped by enterprise SaaS, fintech
          products, performance constraints, and reusable design systems.
        </p>
      </div>

      <div className="skills-showcase">
        <div className="capability-panel">
          <div className="panel-label">
            <ShieldCheck />
            Core strengths
          </div>
          <h3>Where I create the most impact</h3>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <motion.div
                className="focus-card"
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35 }}
              >
                <span className="focus-icon">{area.icon}</span>
                <div>
                  <h4>{area.title}</h4>
                  <p>{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="capability-stats">
            {capabilityStats.map((item) => (
              <div className="capability-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="icon-container"
              key={skill.name}
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={index}
            >
              <div className="skill-card-top">
                <span className="icon-frame">
                  <img className="icon" src={skill.icon} alt={skill.name} />
                </span>
                <span className="skill-level">{skillLevels[skill.name]}%</span>
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-progress" aria-hidden="true">
                <span style={{ width: `${skillLevels[skill.name]}%` }}></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="toolkit-panel">
        <div className="toolkit-heading">
          <Boxes />
          <h3>Extended Toolkit</h3>
        </div>
        <div className="skill-tags">
          {skillTags.map((tag) => (
            <span
              className={`skill-tag ${priorityTags.has(tag) ? "priority" : ""}`}
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
