import React from "react";
import "./cardequipo.css";
import ilinkedin from "../../assets/img/linkedin.png";
import igithub from "../../assets/img/github.png";
import iemail from "../../assets/img/email.png";

export default function CardEquipo({
  nombre,
  imagen,
  linkedin,
  github,
  email,
  linkedinlink,
  githublink,
}) {
  return (
    <div>
      <div className="cardequipo text-center bg-dark animate__animated animate__fadeInUp">
        <div className="imagen">
          <img className="cardequipo-img-top" src={imagen} />
        </div>
        <div className="cardequipo-body">
          <h5 className="text-warning">{nombre}</h5>
          <a href={linkedinlink} target="_blank" className="aequipo">
            <img className="equipoicon" src={ilinkedin} />
            {linkedin}
          </a>
          <br />
          <a href={githublink} target="_blank" className="aequipo">
            <img className="equipoicon" src={igithub} />
            {github}
          </a>
          <p className="cardequipo-text">
            <img className="equipoicon" src={iemail} />
            {email}
          </p>
        </div>
      </div>
    </div>
  );
}
