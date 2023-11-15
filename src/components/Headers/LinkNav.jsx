import { Link } from "react-scroll";
import cloud from "./svg/cloud.svg";
import person from "./svg/person.svg";
import contact from "./svg/website.svg";
import ability from "./svg/ability.svg";
import project from "./svg/project.svg";
import "./linkNav.css";

function LinkNav() {
  return (
    <header>
      <div className="icon-cloud">
        <img src={cloud} alt="computer in icon format" style={{ width: "50px" }} />
      </div>
      <div className="links">
        <Link activeClass="active" to="about" spy smooth offset={-200} className="link-header">
          <img className="svg-nav" src={person} style={{ width: "20px" }} alt="icon person" />
          <span>Sobre</span>
        </Link>
        <Link activeClass="active" to="contact" spy smooth offset={-200} className="link-header">
          <img className="svg-nav" src={contact} style={{ width: "20px" }} alt="icon contact" />
          <span> Contato</span>
        </Link>
        <Link activeClass="active" to="skills" spy smooth offset={-200} className="link-header">
          <img className="svg-nav" src={ability} style={{ width: "20px" }} alt="icon ability" />
          <span>Habilidades</span>
        </Link>
        <Link activeClass="active" to="projects" spy smooth offset={-200} className="link-header">
          <img className="svg-nav" src={project} style={{ width: "20px" }} alt="icon project" />
          <span>Projetos</span>
        </Link>
      </div>
    </header>
  );
}

export default LinkNav;
