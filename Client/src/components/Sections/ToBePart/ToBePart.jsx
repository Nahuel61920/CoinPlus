import React from "react";
import uno from "../../../assets/img/numero-uno.png";
import dos from "../../../assets/img/numero-dos.png";
import tres from "../../../assets/img/numero-tres.png";
import cuatro from "../../../assets/img/numero-cuatro.png";
import login from "../../../assets/img/log-in.png";
import mail from "../../../assets/img/mail.png";
import pay from "../../../assets/img/pay.png";
import wallet from "../../../assets/img/wallet.png";
import "./toBePart.css";

function ToBePart() {
  return (
    <div className="container-fluid">
      <h1 className="fw-bold text-center"> Cómo ser parte </h1>
      <p className="text-center">Paso a paso</p>

      <div className="container-fluid card-tobe d-flex flex-wrap">
        <div className="step">
          <div data-aos="zoom-in" data-aos-delay="1500"></div>
        </div>
        <div
          className="col-6 col-md-3 d-flex justify-content-center step-linear"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="card-step w-75">
            <div className="card-image">
              <img src={uno} alt="uno" width="100" />
            </div>
            <div className="card-info text-center">
              <p className="text-title">Crea tu usuario</p>
              <img src={login} alt="login" width="100" />
            </div>
          </div>
        </div>
        <div
          className="col-6 col-md-3 d-flex justify-content-center step-linear"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="card-step w-75">
            <div className="card-image">
              <img src={dos} alt="dos" width="100" />
            </div>
            <div className="card-info text-center">
              <p className="text-title">Confirma tu correo</p>
              <img src={mail} alt="mail" width="100" />
            </div>
          </div>
        </div>
        <div
          className="col-6 col-md-3 d-flex justify-content-center step-linear"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className="card-step w-75">
            <div className="card-image">
              <img src={tres} alt="tres" width="100" />
            </div>
            <div className="card-info text-center">
              <p className="text-title">Conéctate con Paypal y Metamask</p>
              <img src={pay} alt="pay" width="100" />
            </div>
          </div>
        </div>
        <div
          className="col-6 col-md-3 d-flex justify-content-center step-linear"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div className="card-step w-75">
            <div className="card-image">
              <img src={cuatro} alt="cuatro" width="100" />
            </div>
            <div className="card-info text-center">
              <p className="text-title">Disfrute de los beneficios</p>
              <img src={wallet} alt="wallet" width="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToBePart;
