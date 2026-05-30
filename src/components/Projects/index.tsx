import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProjectType, projects } from "../Projects/projectsData";
import "./index.scss";
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Github, Link, Sparkles } from "lucide-react";

const Projects = () => {
  const getGithubPreviewUrl = (githubUrl: string) => {
    const repoPath = githubUrl.replace(".git", "").split("github.com/")[1];

    return repoPath
      ? `https://opengraph.githubassets.com/portfolio/${repoPath}`
      : "";
  };

  const renderProjectCard = (project: ProjectType, index: number) => {
    const isFeatured = index === 0;
    const fallbackPreview = getGithubPreviewUrl(project.githubUrl);

    return (
      <article
        className={`project-card ${isFeatured ? "project-card-featured" : ""}`}
        key={project.id}
      >
        <div className="project-preview">
          <img
            src={project.projectImgLinks[0]}
            alt={`${project.title} preview`}
            onError={(event) => {
              if (!fallbackPreview || event.currentTarget.src === fallbackPreview) {
                return;
              }

              event.currentTarget.src = fallbackPreview;
            }}
          />
          <span className="project-index">0{index + 1}</span>
        </div>
        <div className="project-content">
          <div className="project-kicker">
            <Sparkles />
            Frontend case study
          </div>
          <div className="project-title-row">
            <h3>{project.title}</h3>
            {project.liveDemoUrl && (
              <a
                className="quick-open"
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} live demo`}
              >
                <ArrowUpRight />
              </a>
            )}
          </div>
          <p>{project.description}</p>
          <div className="technologySection">
            <div className="tech-heading">
              <Code2 />
              Tech stack
            </div>
            <div className="tech-stack">
              {project.technology.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="buttons">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="button liveDemoButton"
              >
                <Link />
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="button githubButton"
            >
              <Github />
              GitHub
            </a>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="projects" id="projects">
      <div className="heading-container">
        <h2 className="heading">Projects</h2>
        <span className="underline"></span>
        <p className="section-intro">
          Selected work that shows product thinking, scalable React patterns,
          performance awareness, and practical UI engineering.
        </p>
      </div>
      <div className="project-carousel-shell">
        <div className="project-carousel-controls" aria-hidden="true">
          <button className="project-nav-btn project-prev" type="button">
            <ArrowLeft />
          </button>
          <button className="project-nav-btn project-next" type="button">
            <ArrowRight />
          </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Keyboard, A11y]}
          navigation={{
            prevEl: ".project-prev",
            nextEl: ".project-next",
          }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          loop={true}
          spaceBetween={22}
          slidesPerView={1}
          className="project-showcase"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              {renderProjectCard(project, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
