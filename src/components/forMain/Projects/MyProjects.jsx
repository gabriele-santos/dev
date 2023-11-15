import "./myProjects.css";
import imageProjects from "./projects.gif";

function MyProjects() {
  return (
    <section className="projects">
      <div className="centered-title-projects">
        <h1>Meus Projetos</h1>
      </div>
      <div className="container-projects-image">
        <div className="paragraph-project">
          <h3 className="text-projects" href="link">Portfólio Web</h3>
          <p className="text-projects">Esta página em que você está navegando é resultado de um dos projetos que desenvolvi.</p>
          <a id="link-portfolio" className="text-projects" href="link">Link para o repositório</a>
          <hr />
          <h4 className="all-projects">Ver todos os projetos...</h4>
        </div>
        <div className="flex-text-image image-projects">
          <img src={imageProjects} alt="developing my projects" />
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
