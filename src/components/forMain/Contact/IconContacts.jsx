import { Link } from "react-scroll";
import "./iconContacts.css";
import gitHub from "./svg/github.svg";
import linkedin from "./svg/linkedin.svg";

function IconContacts() {
  return (
    <div id="contact">
      <a href="https://github.com/gabriele-santos" target="_blank" className="link">
        <img style={{ width: "30px" }} src={gitHub} alt="github" />
        <span className="link-contact link-github">
          GitHub
        </span>
      </a>
      <a href="https://www.linkedin.com/in/gabriele-santos-nc/" target="_blank" className="link">
        <img style={{ width: "29px" }} src={linkedin} alt="linkedin" />
        <span className="link-contact">
          LinkedIn
        </span>
      </a>
    </div>
  );
}

export default IconContacts;
