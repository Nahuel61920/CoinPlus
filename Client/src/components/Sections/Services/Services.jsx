import React from "react";
import './services.css'
import compraCryp from '../../../assets/img/compra.png'
import criptomonedas from '../../../assets/img/cryptocurrency.png'
import retiro from '../../../assets/img/retiro.png'

function Services() {
  return (
    <div id="Services">
      <h1 className="fw-bold text-center">Services</h1>
      <p className="text-center">What can you do in Coin+?</p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div class="card-contain">
            <div class="card-image">
              <img src={criptomonedas} alt="criptomonedas" width="70"/>
            </div>
            <div class="card-info">
              <p class="text-title">Analiza el mercado</p>
              <p class="text-body">
              Conoce las principales criptos, como funcionan y que mueve el mercado.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div class="card-contain">
            <div class="card-image">
            <img src={compraCryp} alt="compraCryp" width="70"/>
            </div>
            <div class="card-info">
              <p class="text-title">Comprar</p>
              <p class="text-body">
                Acceder a Bitcoin, Etherum, Litecion y otros activos digitales en pocos pasos.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div class="card-contain">
          <div class="card-image">
              <img src={retiro} alt="bitcoin" className="figure-img" width="65"/>
            </div>
            <div class="card-info">
              <p class="text-title">Vender</p>
              <p class="text-body">
                Transforma tus criptos en otras divisas y/o dolares de manera rapida y segura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
