import React from 'react'
import CardEquipo from './CardEquipo' 

import fotoprueba from "../../assets/img/progdem.jpg"
import fotoprueba2 from "../../assets/img/backdev.jpg"
import { CardSubtitle } from 'reactstrap'

const miembros = [
    {
        id: 1,
        nombre: "ejemplo",
        imagen: fotoprueba,
        linkedin: "linkedin.com/ejemplo",
        github: "@ejemplo",
        email: "ejemplo@ejem.com"
    },
    {
        id: 2,
        nombre: "ejemplo2",
        imagen: fotoprueba2,
        linkedin: "linkedin.com/plo",
        github: "@plo",
        email: "plo@ejem.com"
    }
]

export default function Equipo() {
  return (
    <div>
        Equipo amo a mi equipo
        
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                
            {
                miembros.map(m => (
                    <div className="col-md-6" key={miembros.id}>
                        <CardEquipo nombre={m.nombre} imagen={m.imagen} linkedin={m.linkedin} github={m.github} email={m.email} />
                    </div>
                ))
            }
            </div>
        </div>
    
    </div>
  )
}
