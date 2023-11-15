import minhaFoto from "../../Images/minhaFoto.png";
import IconContacts from "../Contact/IconContacts";
import "./aboutMe.css";

function AboutMe() {
  return (
    <section id="about">
      <div className="text-and-image">
        <div className="my-image">
          <img src={minhaFoto} alt="uma foto minha" style={{ width: "400px" }} />
        </div>
        <div className="container-text">
          <div className="title-paragraph">
            <h1 style={{ color: "#F15A59" }}>Sobre mim</h1>
          </div>
          <div className="paragraph">
            <p>
              Sou uma desenvolvedora
              <span style={{ color: "#F15A59" }}> Front-End </span>
              apaixonada por transformar ideias em realidade
              digital.
              <br />
              Tenho uma visão centrada no usuário, buscando constantemente aprimorar minhas
              habilidades e conhecimentos, assim como a usabilidade e a acessibilidade em cada
              projeto, com o objetivo de me tornar uma profissional melhor a cada dia.
            </p>
          </div>
          <div className="icon-to-contact">
            <IconContacts />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
