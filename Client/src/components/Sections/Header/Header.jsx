import React from "react";
import HeaderImg from "../../../assets/svg/headerimg.svg";
import LoginButton from "../../BtnsLogin/LoginButton";
import MarketBtn from "../../BtnsLogin/MarketBtn";
import { useAuth0 } from "@auth0/auth0-react";
import "./header.css";
import { FormattedMessage } from "react-intl";

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <div
      id="Home"
      className="row aling-content-center justify-content-center d-flex flex-md-row flex-column min-vh-100"
    >
      <div
        className="col-12 col-md-6 aling-content-center mt-5 contenedor-header"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <h4 className="fs-4 mt-5">
          <FormattedMessage
            id="inicio_sub"
            defaultMessage="Your route to the future."
          />
        </h4>
        <h1 className="title__text fw-bold my-4">
          <FormattedMessage
            id="inicio_title"
            defaultMessage="Get closer to the crypto world."
          />
        </h1>
        <p className="fs-4">
          <FormattedMessage
            id="inicio_par"
            defaultMessage="The simplest and safest way to trade cryptocurrencies."
          />
        </p>
        {isAuthenticated ? <MarketBtn /> : <LoginButton />}
      </div>
      <div
        className="col-12 col-md-6 my-5 container__img_header"
        data-aos="fade-left"
        data-aos-delay="650"
      >
        <img src={HeaderImg} alt="header" />
      </div>
    </div>
  );
}

export default Header;
