function ProjectCard({ project }) {
  const normalizeUrl = (value) => {
    const raw = typeof value === "string" ? value.trim() : "";

    if (!raw || raw === "#") {
      return "";
    }

    return /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  };

  const isRepositoryUrl = (url) =>
    /github\.com|gitlab\.com|bitbucket\.org/i.test(url);

  const legacyLink = normalizeUrl(project.link);
  const deployUrl = normalizeUrl(project.deployLink);
  const repoUrl = normalizeUrl(project.repoLink);

  const finalDeployUrl =
    deployUrl || (legacyLink && !isRepositoryUrl(legacyLink) ? legacyLink : "");
  const finalRepoUrl =
    repoUrl || (legacyLink && isRepositoryUrl(legacyLink) ? legacyLink : "");

  const hasAnyLink = Boolean(finalDeployUrl || finalRepoUrl);

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

        {hasAnyLink ? (
          <div className="project-links">
            {finalDeployUrl && (
              <a
                href={finalDeployUrl}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver deploy
              </a>
            )}
            {finalRepoUrl && (
              <a
                href={finalRepoUrl}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver repositorio
              </a>
            )}
          </div>
        ) : (
          <span className="project-link disabled">Link em atualização</span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
