import React from "react";
import "./promo.css";
import coinIcon from "../../../assets/img/coin+promo.png";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function Promo() {
  return (
    <div id="About">
      <h1 className="fw-bold text-center"><FormattedMessage
        id='Nosotros'
        defaultMessage='About'
      /></h1>

      <div
        className="row card-promo my-4 p-3"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="col-10 col-md-7 aling-content-center mt-5">
          <h4 className="fs-1 fw-bold mt-5"><FormattedMessage
            id='Quienes-Somos'
            defaultMessage='Who We Are'
          /></h4>
          <p className="fs-3">
            <FormattedMessage
              id='Quienes-par'
              defaultMessage='The simplest and safest way to trade cryptocurrencies.'
            />
          </p>
          <Link to="/equipo">
            <button type="button" className="btn btn-dark">
              <FormattedMessage
                id='btn-queienes'
                defaultMessage='Meet the team'
              />
            </button>
          </Link>
        </div>
        <div className="col-10 col-md-4 my-4 container__img_header">
          <img src={coinIcon} alt="coinIcon" />
        </div>
      </div>
    </div>
  );
}
