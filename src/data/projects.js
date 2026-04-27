import semester1Image from "../images/1.png";
import semester2Image from "../images/2.png";
import semester3Image from "../images/3.png";
import semester4Image from "../images/4.png";
import semester5Image from "../images/5.png";
import semester6Image from "../images/6.png";

export const projects = [
  // 1º Semestre
  {
    id: 1,
    title: "Portal 360",
    semester: "1º Semestre",
    description:
      "Projeto web com HTML, CSS e JavaScript. Uma página responsiva com navegação com tema: sustentabilidade e causas sociais.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: semester1Image,
    deployLink: "portal-360.vercel.app",
    repoLink: "https://github.com/yNakidori/Portal-360",
  },

  // 2º Semestre
  {
    id: 2,
    title: "Landing Page - E-commerce",
    semester: "2º Semestre",
    description:
      "Página de vendas responsiva com carrousel de produtos e integração de formulários.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: semester2Image,
    deployLink: "bazar-deploy.vercel.app",
    repoLink: "https://github.com/yNakidori/Bazar-Deploy",
  },

  // 3º Semestre
  {
    id: 3,
    title: "Projeto para barbearias",
    semester: "3º Semestre",
    description:
      "Projeto backend para gerenciamento de agendamento de barbearias. API RESTful com autenticação JWT.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    image: semester3Image,
    deployLink: "barberfashion.vercel.app",
    repoLink: "https://github.com/GrupoZonaLeste/BarberFashion",
  },

  // 4º Semestre
  {
    id: 4,
    title: "AKSTur - Aplicação Full Stack",
    semester: "4º Semestre",
    description:
      "Aplicação completa com frontend React e backend Node.js. Agencia de viagens completamente funcional.",
    technologies: ["React", "Node.js", "Firebase", "Express"],
    image: semester4Image,
    deployLink: "https://www.akstur.com.br",
    repoLink: "https://github.com/yNakidori/aksTour",
  },

  // 5º Semestre
  {
    id: 5,
    title: "Aplicativo gestor de alimentação e rotina",
    semester: "5º Semestre",
    description:
      "Aplicativo para gerenciamento de alimentação e rotina. Permite cadastro de refeições, atividades físicas e monitoramento de hábitos saudáveis.",
    technologies: ["ReactNative", "Node.js", "Firebase", "Redux"],
    image: semester5Image,
    deployLink: "#",
    repoLink: "https://github.com/yNakidori/cozinha.IA",
  },

  // 6º Semestre
  {
    id: 6,
    title: "Projeto Final - HumidWatch",
    semester: "6º Semestre",
    description:
      "Aplicativo de monitoramento de umidade para ambientes internos. Utiliza sensores IoT para coletar dados e exibir em tempo real em um dashboard web.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    image: semester6Image,
    deployLink: "#",
    repoLink: "https://github.com/yNakidori/HumidWatch",
  },
];
