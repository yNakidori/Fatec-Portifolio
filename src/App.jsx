import { useState } from "react";
import "./App.css";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import profilepicture from "./images/pfp.png";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const totalTechnologies = new Set(
    projects.flatMap((project) => project.technologies),
  ).size;
  const currentYear = new Date().getFullYear();

  const semesters = [
    "1º Semestre",
    "2º Semestre",
    "3º Semestre",
    "4º Semestre",
    "5º Semestre",
    "6º Semestre",
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.semester === activeFilter);

  return (
    <>
      <header className="header">
        <div className="header-glow" aria-hidden="true" />
        <div className="header-content">
          <div className="profile-section">
            <img
              src={profilepicture}
              alt="Foto de perfil"
              className="profile-photo"
            />
            <div className="profile-info">
              <span className="availability">Disponível para contrato</span>
              <h1 className="name">Leandro Reis Santana</h1>
              <p className="title">
                Estudante de Desenvolvimento de Software Multiplataforma | FATEC
              </p>
              <p className="bio">
                Portfólio acadêmico com projetos desenvolvidos ao longo da
                graduação, com foco em engenharia de software, desenvolvimento
                web e soluções orientadas a dados.
              </p>
              <div className="contact-info">
                <a
                  href="mailto:leandro.santana10@fatec.sp.gov.br"
                  className="contact-link"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/leandro-santana-bb7073273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yNakidori"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  GitHub
                </a>
              </div>
              <div className="stats-grid">
                <article className="stat-card">
                  <span className="stat-number">{projects.length}</span>
                  <span className="stat-label">Projetos registrados</span>
                </article>
                <article className="stat-card">
                  <span className="stat-number">{semesters.length}</span>
                  <span className="stat-label">Semestres mapeados</span>
                </article>
                <article className="stat-card">
                  <span className="stat-number">{totalTechnologies}</span>
                  <span className="stat-label">Tecnologias aplicadas</span>
                </article>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="projects-section">
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle">
            Filtre por semestre para visualizar a evolução técnica durante a
            formação.
          </p>

          <div className="filters">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              Todos
            </button>
            {semesters.map((sem) => (
              <button
                key={sem}
                className={`filter-btn ${activeFilter === sem ? "active" : ""}`}
                onClick={() => setActiveFilter(sem)}
              >
                {sem}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <p>Nenhum projeto encontrado para este semestre.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {currentYear} Leandro Reis Santana | Portfólio acadêmico de
          Desenvolvimento de Software Multiplataforma - FATEC. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}

export default App;
