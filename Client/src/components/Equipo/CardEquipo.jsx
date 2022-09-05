import React from 'react'
import "./card.css"
import ilinkedin from "../../assets/img/linkedin.png"
import igithub from "../../assets/img/github.png"
import iemail from "../../assets/img/email.png"

export default function CardEquipo({nombre,imagen,linkedin,github,email,linkedinlink,githublink}) {
  return (
    <div>
    
        <div className="card text-center bg-dark animate__animated animate__fadeInUp" >
            <div className="imagen">
            <img className="card-img-top" src={imagen}/>
            </div>
            <div className="card-body" >
            <h5 className="text-warning">{nombre}</h5>
            <a href={linkedinlink} target="_blank" className="a" >
              <img className="icon" src={ilinkedin}/>{linkedin}</a><br/>
            <a href={githublink} target="_blank" className="a" >
              <img className="icon" src={igithub}/>{github}</a>
            <p className="card-text" >
              <img className="icon" src={iemail}/>{email}</p>
            </div>
        </div>
        </div>


   
  )
}
