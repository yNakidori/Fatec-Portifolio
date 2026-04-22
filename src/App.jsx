import { useState } from "react";
import "./App.css";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

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
      {/* Header / Sobre */}
      <header className="header">
        <div className="header-content">
          <div className="profile-section">
            <img
              src="https://via.placeholder.com/150?text=Sua+Foto"
              alt="Foto de perfil"
              className="profile-photo"
            />
            <div className="profile-info">
              <h1 className="name">Seu Nome Aqui</h1>
              <p className="title">
                Estudante de Análise e Desenvolvimento de Sistemas - FATEC
              </p>
              <p className="bio">
                Apaixonado por tecnologia e desenvolvimento web. Sempre buscando
                aprender novas ferramentas e criar soluções inovadoras.
              </p>
              <div className="contact-info">
                <a href="mailto:seu.email@example.com" className="contact-link">
                  📧 seu.email@example.com
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  🐙 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Seção de Projetos */}
      <main className="main-content">
        <section className="projects-section">
          <h2 className="section-title">Meus Projetos</h2>

          {/* Filtros por Semestre */}
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

          {/* Grid de Projetos */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Mensagem quando não há projetos */}
          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <p>Nenhum projeto encontrado para este semestre.</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
