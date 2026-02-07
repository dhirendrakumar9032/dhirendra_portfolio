import React from "react";
import "./index.scss";
import { ExperienceEntry } from "../../utils/types";

const ExperienceEntryComponent: React.FC<ExperienceEntry> = ({
  role,
  company,
  period,
  responsibilities,
}) => (
  <div className="experience-entry">
    <div className="timeline">
      <div className="timeline-dot" />
      <div className="timeline-line" />
    </div>
    <div className="content">
      <div className="role">{role}</div>
      {period ? <div className="period">{period}</div> : null}
      <div className="company">{company}</div>
      {responsibilities && responsibilities.length > 0 ? (
        <ul className="responsibility">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  </div>
);

interface ExperienceSectionProps {
  entries: ExperienceEntry[];
  title?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  entries,
  title = "Professional Experience",
}) => (
  <div className="experience-section">
    <h2 className="section-title">{title}</h2>
    {entries.map((entry, index) => (
      <ExperienceEntryComponent key={index} {...entry} />
    ))}
  </div>
);

export default ExperienceSection;
