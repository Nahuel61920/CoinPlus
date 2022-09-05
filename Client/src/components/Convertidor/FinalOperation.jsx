import React from 'react'

function FinalOperation() {
  return (
    <div style={{height:'500px'}} className='container d-flex justify-content-center'>
        <div className="card">
            <div className="card-body d-flex flex-column justify-content-evenly">
                <h4 className="card-title text-center">Transfiere ahora $38.35</h4>
                <div className='d-flex justify-content-center p-5'>
                  <button style={{width:'12rem'}} type='button' className='btn-primary'>Completar transaccion</button>
                </div>
                  <div className="container d-flex flex-column text-center">
                    <h6>Tiempo de espera : 15m</h6>
                    <p>Este es un mensaje para la comunidad de twich</p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default FinalOperation