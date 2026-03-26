import ExperienceSection from "./experience";
import {
  aboutHighlights,
  aboutMeta,
  educationSummary,
  professionalExperienceEntries,
  selfDescription,
} from "../../utils/data";
import "./index.scss";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="heading-container">
        <h2 className="heading">About Me</h2>
        <span className="underline"></span>
      </div>
      <div className="about-main">
        <div className="about-card">
          <div className="about-hero">
            <div className="about-avatar"></div>
            <div className="about-heading">
              <h3>Dhirendra Kumar</h3>
              <p className="about-role">Senior Frontend Developer</p>
              <div className="about-meta">
                {aboutMeta.map((item) => (
                  <span className="about-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="about-description">{selfDescription}</p>
          <div className="about-education">
            <span className="label">Education</span>
            <span className="value">{educationSummary}</span>
          </div>
        </div>
        <div className="about-details">
          <ExperienceSection
            title="Professional Experience"
            entries={professionalExperienceEntries}
          />
          <div className="about-highlights-panel">
            <h3 className="about-subtitle">Highlights</h3>
            <div className="about-highlights">
              {aboutHighlights.map((item) => (
                <div className="about-highlight" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export { About };
