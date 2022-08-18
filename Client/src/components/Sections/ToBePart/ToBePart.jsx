import React from 'react'
import uno from '../../../assets/img/numero-uno.png'
import dos from '../../../assets/img/numero-dos.png'
import tres from '../../../assets/img/numero-tres.png'
import cuatro from '../../../assets/img/numero-cuatro.png'
import login from '../../../assets/img/log-in.png'
import mail from '../../../assets/img/mail.png'
import pay from '../../../assets/img/pay.png'
import wallet from '../../../assets/img/wallet.png'


function ToBePart() {
  return (
   <div className='container-fluid'>
    <h1 className="fw-bold text-center"> How to be part </h1>
    <p className="text-center">Step by step</p>
     <div className='container-fluid card-tobe d-flex'>
     <div className="col-12 col-md-3 d-flex justify-content-center ">
          <div class="card-contain w-75">
            <div class="card-image">
            <img src={uno} alt="uno" width="100"/>
            </div>
            <div class="card-info text-center">
              <p class="text-title">Crea tu usuario</p>
              <img src={login} alt="login" width="100"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <div class="card-contain w-75">
            <div class="card-image">
            <img src={dos} alt="dos" width="100"/>
            </div>
            <div class="card-info text-center">
              <p class="text-title">Confirma tu correo</p>
              <img src={mail} alt="mail" width="100"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <div class="card-contain w-75">
            <div class="card-image">
            <img src={tres} alt="tres" width="100"/>
            </div>
            <div class="card-info text-center">
              <p class="text-title">Añade métodos de pago</p>
              <img src={pay} alt="pay" width="100"/>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <div class="card-contain w-75">
            <div class="card-image">
            <img src={cuatro} alt="cuatro" width="100"/>
            </div>
            <div class="card-info text-center">
              <p class="text-title">Disfrute de los beneficios</p>
              <img src={wallet} alt="wallet" width="100"/>
            </div>
          </div>
        </div>
     </div>  
   </div>

  )
}

export default ToBePart