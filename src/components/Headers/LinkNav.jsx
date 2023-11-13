import { Link } from "react-scroll";
import cloud from "./cloud.svg";
import "./linkNav.css";

function LinkNav() {
  return (
    <header>
      <div className="icon-cloud">
        <img src={cloud} alt="computer in icon format" style={{ width: "50px" }} />
      </div>
      <div className="links">
        <Link activeClass="active" to="sobre" spy smooth offset={-200} className="link-header">
          Sobre
        </Link>
        <Link activeClass="active" to="contato" spy smooth offset={-200} className="link-header">
          Contato
        </Link>
        <Link activeClass="active" to="habilidades" spy smooth offset={-200} className="link-header">
          Habilidades
        </Link>
        <Link activeClass="active" to="projetos" spy smooth offset={-200} className="link-header">
          Projetos
        </Link>
      </div>
    </header>
  );
}

export default LinkNav;
