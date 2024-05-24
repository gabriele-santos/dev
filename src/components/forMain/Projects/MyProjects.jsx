import { useState } from "react";
import "./myProjects.css";
import imageProjects from "./projects.gif";

function MyProjects() {

  const [showListProjects, setShowListProjects] = useState(false);

  return (
    <section className="projects">
      <div className="centered-title-projects">
        <h1>Meus Projetos</h1>
      </div>
      <div className="container-projects-image">
        <div className="paragraph-project">
          <h3 className="text-projects" href="link">Portfólio Web</h3>
          <p className="text-projects">Esta página em que você está navegando é resultado de um dos projetos que desenvolvi.</p>
          <a id="link-portfolio" className="text-projects" href="https://github.com/gabriele-santos/dev" target="_blank">Link para o repositório
          </a>
          <hr />
          {showListProjects === false && (<h4 className="all-projects" onClick={() => setShowListProjects(true)}>Ver todos os projetos...</h4>)}
        {showListProjects && (
          <div className="list-projects">
            <div>
              <h3 className="text-projects" href="link">Formulário React</h3>
              <p className="text-projects">Esse projeto consiste em um formulário de cadastro de currículo com informações pessoais e profisisonais.</p>
              <a id="link-portfolio" className="text-projects" href="https://github.com/gabriele-santos/Formulario-React" target="_blank">Link para o repositório
              </a>
              <hr />
            </div>
            <div className="list-projects">
              <h3 className="text-projects" href="link">Form Travel</h3>
              <p className="text-projects">Esse projeto consiste em um formulário de viagens.</p>
              <a id="link-portfolio" className="text-projects" href="https://github.com/gabriele-santos/Form_Travel" target="_blank">Link para o repositório
              </a>
              <hr />
            </div>
          </div>
        )}
        </div>
        <div className="flex-text-image image-projects">
          <img src={imageProjects} alt="developing my projects" />
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
