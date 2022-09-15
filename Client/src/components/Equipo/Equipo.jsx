import React from 'react'
import CardEquipo from './CardEquipo' 

import "./equipo.css"

import { FormattedMessage } from "react-intl";

import elara from "../../assets/img/equipoLara.jpg"
import etomy from "../../assets/img/equipoTomy.jpg"
import enahuel from "../../assets/img/equipoNahuel.jpg"
import epj from "../../assets/img/equipoPj.jpg"
import emati from "../../assets/img/equipoMati.jpg"
import etefi from "../../assets/img/equipoTefy.jpg"
import eAnthony from "../../assets/img/equipoAnthony.jpg"

const miembros = [
    {
        id: 1,
        nombre: "Nahuel Carrizo",
        imagen: enahuel,
        linkedin: "esteban-nahuel-carrizo",
        linkedinlink: "https://www.linkedin.com/in/esteban-nahuel-carrizo-69715422b/",
        github: "Nahuel61920",
        githublink: "https://github.com/Nahuel61920",
        email: "estebancarrizo619@gmail.com"
    },
    {
        id: 2,
        nombre: "Tomás Castillo",
        imagen: etomy,
        linkedin: "tomasscast99",
        linkedinlink: "https://www.linkedin.com/in/tomasscast99/",
        github: "TomassCast99",
        githublink: "https://github.com/TomassCast99",
        email: "tomasscastillo99@gmail.com"
    },
    {
        id: 3,
        nombre: "Pedro J. Endara",
        imagen: epj,
        linkedin: "pjendara",
        linkedinlink: "https://www.linkedin.com/in/pjendara/",
        github: "pjendara",
        githublink: "https://github.com/pjendara",
        email: "pjendara@gmail.com"
    },
    {
        id: 4,
        nombre: "Lara Lopez",
        imagen: elara,
        linkedin: "lara-lopez",
        linkedinlink: "https://www.linkedin.com/in/lara-lopez-5663571a2/",
        github: "laranlopez",
        githublink: "https://github.com/laranlopez",
        email: "laranahirlopez@gmail.com"
    },
    {
        id: 5,
        nombre: "Stefania Peralta",
        imagen: etefi,
        linkedin: "stefania-peralta",
        linkedinlink: "https://www.linkedin.com/in/stefania-peralta-353bba247/",
        github: "StefaniaLP",
        githublink: "https://github.com/StefaniaLP",
        email: "tefina2301@gmail.com"
    },
    {
        id: 6,
        nombre: "Anthony Perez",
        imagen: eAnthony,
        linkedin: "anthony-p",
        linkedinlink: "https://www.linkedin.com/in/anthony-p-53962163/",
        github: "Anthony29p",
        githublink: "https://github.com/Anthony29p",
        email: "anthony.perez@uni.pe"
    },
    {
        id: 7,
        nombre: "Matias Tellini",
        imagen: emati,
        linkedin: "matias-tellini",
        linkedinlink: "https://www.linkedin.com/in/matias-tellini-12a705232/",
        github: "teyuu",
        githublink: "https://github.com/teyuu",
        email: "tellini.matias@gmail.com"
    },
    
]

export default function Equipo() {
  return (
    <div className="general">
        <div className="contit">
        <div className="bortit">
        <h3 className="titulo text-center"><FormattedMessage
                id='equipo'
                defaultMessage='The Coin+ team'
              /></h3>
        </div>
        </div>
        <div className="container">
            <div className="row gridp">
                
            {
                miembros.map(m => (
                    <div className="col-md-4 col-lg-3 col-6 cardh" key={m.id}>
                        <CardEquipo nombre={m.nombre} 
                                    imagen={m.imagen}       
                                    linkedin={m.linkedin}
                                    linkedinlink={m.linkedinlink}
                                    github={m.github}
                                    githublink={m.githublink}
                                    email={m.email} />
                    </div>
                ))
            }
            </div>
            <div className="text-center">
                <p><FormattedMessage
                id='Un-gran'
                defaultMessage='A Great Team, for a great project'
              /></p>
            </div>
        </div>
    
    </div>
  )
}
