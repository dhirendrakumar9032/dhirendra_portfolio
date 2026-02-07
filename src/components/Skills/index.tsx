import { motion } from "framer-motion";
import { skills, skillTags } from "../../utils/data";
import "./index.scss";


const Skills = () => {


  const gridVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2, 
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div className="skills" id="skills">
      <div className="heading-container">
        <h2 className="heading">Technical Skills</h2>
        <span className="underline"></span>
      </div>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index}>
            <motion.div
              className="icon-container"
              key={skill.name}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <img className="icon" src={skill.icon} alt={skill.name} />
              <div className="skill-name">{skill.name}</div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="skill-tags">
        {skillTags.map((tag) => (
          <span className="skill-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
