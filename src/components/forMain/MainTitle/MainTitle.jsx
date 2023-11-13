import coding from "./coding.gif";
import "./mainTitle.css";

function MainTitle() {
  return (
    <div className="div-title-main">
      <div className="title-image">
        <div className="title">
          <h2>
            Olá
            <span className="hand" role="img" aria-labelledby="hand">
              👋🏻
            </span>
            , sou
          </h2>
          <br />
          <h1 style={{ color: "#F15A59" }}>Gabriele Santos</h1>
          <br />
          <h2>
            Uma desenvolvedora Front-End
          </h2>
          <div className="subtitle">
            <p>Meu foco é criar sites intuitivos, responsivos e esteticamente atraentes!</p>
          </div>
        </div>
        <div>
          <img id="image-programmer" src={coding} alt="drawing of a programmer" />
        </div>
      </div>
    </div>
  );
}

export default MainTitle;
