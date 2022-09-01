import React from "react";
import Logo from "../../assets/img/coin+logo.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import DarkMode from '../DarkMode/DarkMode';
import "./nav.css";

import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../BtnsLogin/LoginButton";
import Profile from "../Profile/Profile";

function Nav() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-warning px-md-5 px-1 sticky-top">
      <div class="container-fluid w-100 ">
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <NavLink to="/">
          <div className="navbar-imge" width="150">
            
          </div>
        </NavLink>
        <div className="user-nav d-flex align-items-center gap-2"><DarkMode/>{isAuthenticated ? <Profile /> : <LoginButton />}</div>
        <div class="collapse navbar-collapse collapse-imge" id="navbarSupportedContent">
          <div class="nav navbar-nav ms-auto ">
            <Link to="Home" spy={true} offset={-150} href="#Home">
              Inicio
            </Link>
            <Link to="Services" spy={true} offset={-150} href="#Services">
              Servicios
            </Link>
            <Link to="About" spy={true} offset={-150} href="#About">
              Nosotros
            </Link>
            <Link
              to="Notifications"
              spy={true}
              offset={-150}
              href="#Notifications"
            >
              Notificaciones
            </Link>
          </div>
        </div>
        
        <div className="user-nav-2 align-items-center gap-2"><DarkMode/>{isAuthenticated ? <Profile /> : <LoginButton />}</div>
      </div>
    </nav>
  );
}

export default Nav;
