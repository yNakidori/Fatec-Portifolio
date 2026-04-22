function ProjectCard({ project }) {
  const hasLink = project.link && project.link !== "#";

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="semester-badge">{project.semester}</div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {hasLink ? (
          <a
            href={project.link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        ) : (
          <span className="project-link disabled">Link em atualização</span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
