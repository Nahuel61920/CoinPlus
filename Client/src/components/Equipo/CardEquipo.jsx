import React from 'react'


export default function CardEquipo({nombre,imagen,linkedin,github,email}) {
  return (
    <div>
    
        <div className="card text-center bg-dark animate__animated animate__fadeInUp" >
            <div className="overflow" >
            <img className="card-img-top" src={imagen}/>
            </div>
            <div className="card-body text-light" >
            <h5 >{nombre}</h5>
            <p className="card-text" >{linkedin}</p>
            <p className="card-text" >{github}</p>
            <p className="card-text" >{email}</p>
            </div>
        </div>
        </div>


   
  )
}
