import React from "react";
import Logo from "../../assets/img/coin+Blan.png";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white altura row">
      <div className="col-3">
        <img src={Logo} width="220" alt="" />
      </div>

      <div className="nav-footer col-3">
        <NavLink to="/">
          <p className="text-white"><FormattedMessage
            id='Inicio'
            defaultMessage='Home'
          /></p>
        </NavLink>
        <Link to="Services" spy={true} offset={-150} href="#Services">
          <p className="text-white"><FormattedMessage
            id='Servicios'
            defaultMessage='Services'
          /></p>
        </Link>
        <Link to="About" spy={true} offset={-150} href="#About">
          <p className="text-white"><FormattedMessage
            id='Nosotros'
            defaultMessage='About'
          /></p>
        </Link>
        <Link to="Notifications" spy={true} offset={-150} href="#Notifications">
          <p className="text-white"><FormattedMessage
            id='Notificaciones'
            defaultMessage='Notifications'
          /></p>
        </Link>
      </div>
      <div className="nav-footer col-3">
        <NavLink to="/equipo">
          <p className="text-white"><FormattedMessage
            id='btn-queienes'
            defaultMessage='Meet the team'
          /></p>
        </NavLink>
        <NavLink to="/market">
          <p className="text-white"><FormattedMessage
            id='Mercado'
            defaultMessage='Market'
          /></p>
        </NavLink>
      </div>
      <div className="nav-footer col-3">
        <NavLink to="/user">
          <p className="text-white"> <FormattedMessage
            id='Usuario'
            defaultMessage='User'
          /> </p>
        </NavLink>
        <NavLink to="/wallet">
          <p className="text-white"><FormattedMessage
            id='Billetera'
            defaultMessage='Wallet'
          /></p>
        </NavLink>
        <NavLink to="/movements">
          <p className="text-white"> <FormattedMessage
            id='Movimiento'
            defaultMessage='Moves'
          /> </p>
        </NavLink>
        <NavLink to="/operation">
          <p className="text-white"><FormattedMessage
            id='Comprar'
            defaultMessage='Buy Sell'
          /></p>
        </NavLink>
      </div>
      <div className="row text-center bg-dark text-white copy">
        <p className="color-copy">
          Copyright © 2022. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

export default Footer;
