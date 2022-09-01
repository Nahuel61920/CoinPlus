import React from "react";
import './services.css'
import compraCryp from '../../../assets/img/compra.png'
import criptomonedas from '../../../assets/img/cryptocurrency.png'
import retiro from '../../../assets/img/retiro.png'

function Services() {
  return (
    <div id="Services">
      <h1 className="fw-bold text-center">Servicios</h1>
      <p className="text-center">Qué puedes hacer en Coin+?</p>
      <div className="row justify-content-center">
        <div className="col-6 col-md-4 d-flex justify-content-center"  data-aos="fade-up" data-aos-delay="200">
          <div class="card-contain">
            <div class="card-image">
              <img src={criptomonedas} alt="criptomonedas" width="70"/>
            </div>
            <div class="card-info">
              <p class="text-title">Analiza el mercado</p>
              <p class="text-bodys">
              Conoce las principales criptos, cómo funcionan y qué mueve el mercado.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 d-flex justify-content-center"  data-aos="fade-up" data-aos-delay="400">
          <div class="card-contain">
            <div class="card-image">
            <img src={compraCryp} alt="compraCryp" width="70"/>
            </div>
            <div class="card-info">
              <p class="text-title">Comprar</p>
              <p class="text-bodys">
              Accede a toda la red de Etherum y otros activos digitales en pocos pasos.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 d-flex justify-content-center"  data-aos="fade-up" data-aos-delay="600">
          <div class="card-contain">
          <div class="card-image">
              <img src={retiro} alt="bitcoin" className="figure-img" width="65"/>
            </div>
            <div class="card-info">
              <p class="text-title">Vender</p>
              <p class="text-bodys">
                Transforma tus criptos en otras divisas y/o dólares de manera rápida y segura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
