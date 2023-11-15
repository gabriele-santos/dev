import "./mySkills.css";
import skills from "./skills.gif";

function MySkills() {
  return (
    <section className="container-skills">
      <div className="centered-title-container">
        <h1 className="centered-title" style={{ color: "#F15A59" }}>Minhas Habilidades</h1>
      </div>
      <div className="container-no-title">
        <div className="flex-container">
          <div className="div-image-skills">
            <img id="image-skills" src={skills} alt="my skills" />
          </div>
          <div className="container-text-skills">
            <div id="skills">
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>React</p>
              <p>TypeScript</p>
              <p>Git</p>
              <p>GitHub</p>
              <p>Jest</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default MySkills;
