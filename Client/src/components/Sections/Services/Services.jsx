import React from "react";
import "./services.css";
import compraCryp from "../../../assets/img/compra.png";
import criptomonedas from "../../../assets/img/cryptocurrency.png";
import retiro from "../../../assets/img/retiro.png";
import { FormattedMessage } from "react-intl";

function Services() {
  return (
    <div id="Services">
      <h1 className="fw-bold text-center"><FormattedMessage
        id='Servicios'
        defaultMessage='Services'
      /></h1>
      <p className="text-center"><FormattedMessage
        id='Servicios-sub'
        defaultMessage='What can you do on Coin+?'
      /></p>
      <div className="row justify-content-center">
        <div
          className="col-6 col-md-4 d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="card-contain">
            <div className="card-image">
              <img src={criptomonedas} alt="criptomonedas" width="70" />
            </div>
            <div className="card-info">
              <p className="text-title"><FormattedMessage
                id='Servicios-card-1-tit'
                defaultMessage='Analyze the market'
              /></p>
              <p className="text-bodys">
                <FormattedMessage
                  id='Servicios-card-1-par'
                  defaultMessage='Learn about the main cryptos, how they work and what moves the market.'
                />
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-6 col-md-4 d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="card-contain">
            <div className="card-image">
              <img src={compraCryp} alt="compraCryp" width="70" />
            </div>
            <div className="card-info">
              <p className="text-title"><FormattedMessage
                id='Servicios-card-2-tit'
                defaultMessage='Buy'
              /></p>
              <p className="text-bodys">
                <FormattedMessage
                  id='Servicios-card-2-par'
                  defaultMessage='Access the entire Etherum network and other digital assets in a few steps.'
                />
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-6 col-md-4 d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="card-contain">
            <div className="card-image">
              <img
                src={retiro}
                alt="bitcoin"
                className="figure-img"
                width="65"
              />
            </div>
            <div className="card-info">
              <p className="text-title"><FormattedMessage
                id='Servicios-card-3-tit'
                defaultMessage='Sell'
              /></p>
              <p className="text-bodys">
                <FormattedMessage
                  id='Servicios-card-3-par'
                  defaultMessage='Transform your cryptos into other currencies and/or dollars quickly and safely.'
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
