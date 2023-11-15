import "./iconContacts.css";
import gitHub from "./svg/github.svg";
import linkedin from "./svg/linkedin.svg";

function IconContacts() {
  return (
    <div id="contact">
      <div>
        <img style={{ width: "30px" }} src={gitHub} alt="" />
        <span className="link-contact link-github">
          GitHub
        </span>
      </div>
      <div>
        <img style={{ width: "29px" }} src={linkedin} alt="" />
        <span className="link-contact">
          LinkedIn
        </span>
      </div>
    </div>
  );
}

export default IconContacts;
