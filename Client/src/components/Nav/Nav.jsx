import React, { useContext } from "react";
import Logo from "../../assets/img/coin+logo.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import DarkMode from '../DarkMode/DarkMode';
import "./nav.css";

import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../BtnsLogin/LoginButton";
import Profile from "../Profile/Profile";

import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Language';

function Nav() {
  const { isAuthenticated } = useAuth0();
  const idioma = useContext(langContext);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-warning px-md-5 px-1 sticky-top">
      <div className="container-fluid w-100 ">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink to="/">
          <div className="navbar-imge" width="150">

          </div>
        </NavLink>
        <div className="user-nav d-flex align-items-center gap-2"><DarkMode />{isAuthenticated ? <Profile /> : <LoginButton />}</div>
        <div className="collapse navbar-collapse collapse-imge" id="navbarSupportedContent">
          <div className="nav navbar-nav ms-auto ">
            <Link to="Home" spy={true} offset={-150} href="#Home">
              <FormattedMessage
                id='Inicio'
                defaultMessage='Home'
              />
            </Link>
            <Link to="Services" spy={true} offset={-150} href="#Services">

              <FormattedMessage
                id='Servicios'
                defaultMessage='Services'
              />
            </Link>
            <Link to="About" spy={true} offset={-150} href="#About">

              <FormattedMessage
                id='Nosotros'
                defaultMessage='About'
              />
            </Link>
            <Link
              to="Notifications"
              spy={true}
              offset={-150}
              href="#Notifications"
            >

              <FormattedMessage
                id='Notificaciones'
                defaultMessage='Notifications'
              />
            </Link>
            <Link
              to="Reviews"
              spy={true}
              offset={-150}
              href="#Reviews"
            >

              <FormattedMessage
                id='Comentarios'
                defaultMessage='Comments'
              />
            </Link>
            <div id="buttons">
              <img onClick={() => idioma.selectLanguage('en-US')} src="https://nahuel61920.github.io/Portafoliovirtual/img/en.png" alt="EEUU" />
              <img onClick={() => idioma.selectLanguage('es-ES')} src="https://nahuel61920.github.io/Portafoliovirtual/img/es.png" alt="España" />
            </div>
          </div>
        </div>

        <div className="user-nav-2 align-items-center gap-2"><DarkMode />{isAuthenticated ? <Profile /> : <LoginButton />}</div>
      </div>
    </nav>
  );
}

export default Nav;
